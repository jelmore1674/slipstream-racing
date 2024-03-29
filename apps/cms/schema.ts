/*
Welcome to the schema! The schema is the heart of Keystone.

Here we define our 'lists', which will then be used both for the GraphQL
API definition, our database tables, and our Admin UI layout.

Some quick definitions to help out:
A list: A definition of a collection of fields with a name. For the starter
  we have `User`, `Post`, and `Tag` lists.
A field: The individual bits of data on your list, each with its own type.
  you can see some of the lists in what we use below.

*/

// Like the `config` function we use in keystone.ts, we use functions
// for putting in our config so we get useful errors. With typescript,
// we get these even before code runs.
import { list } from '@keystone-6/core';

// We're using some common fields in the starter. Check out https://keystonejs.com/docs/apis/fields#fields-api
// for the full list of fields.
import {
	checkbox,
	text,
	relationship,
	password,
	timestamp,
	select,
} from '@keystone-6/core/fields';
// The document field is a more complicated field, so it's in its own package
// Keystone aims to have all the base field types, but you can make your own
// custom ones.
import { document } from '@keystone-6/fields-document';

// We are using Typescript, and we want our types experience to be as strict as it can be.
// By providing the Keystone generated `Lists` type to our lists object, we refine
// our types to a stricter subset that is type-aware of other lists in our schema
// that Typescript cannot easily infer.
import { Lists } from '.keystone/types';
import { S3Config, s3Image } from '@k6-contrib/fields-s3';
import dotenv from 'dotenv';
import { validateUrl } from './utils';
import {
	ListAccessControl,
	ListOperationAccessControl,
	SessionContext,
} from '@keystone-6/core/types';

dotenv.config();

const s3Config: S3Config = {
	transformFilename(str) {
		return str;
	},
	bucket: process.env.S3_BUCKET as string, // name of bucket
	folder: process.env.S3_PATH,
	baseUrl: process.env.S3_BASE_URL, // if provided the url is not compouted from endpoint and folder, rather use this as `${baseUrl}/${filename}`
	s3Options: {
		accessKeyId: process.env.S3_ACCESS_KEY_ID,
		secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
		endpoint: process.env.S3_ENDPOINT, // use region for aws, endpoint for s3 compatible storage
	},
	uploadParams() {
		return {
			ACL: 'public-read', // needed to make it public
		};
	},
};

type Session = {
	itemId: string;
	data: {
		isAdmin: boolean;
	};
};

type PersonData = {
	id: string;
	name: string;
	email: string;
	isAdmin: boolean;
};

// If admin, gains all privileges
const isAdmin = ({ session }: { session: Session }) => session?.data.isAdmin;
// If person, gets privileges to edit self.
const isPersonOrAdmin = ({
	session,
	item,
}: {
	session: Session;
	item: PersonData;
}) => {
	if (session?.data.isAdmin) {
		return true;
	}
	return session?.itemId == item.id;
};

// filters the user based on their id. So you should not be able to see the other others if not an admin
const filterUsers = ({ session }: { session: Session }) => {
	if (session?.data.isAdmin) {
		return true;
	}
	return { id: { equals: session?.itemId } };
};
// We have a users list, a blogs list, and tags for blog posts, so they can be filtered.
// Each property on the exported object will become the name of a list (a.k.a. the `listKey`),
// with the value being the definition of the list, including the fields.
export const lists: Lists = {
	// Here we define the user list.
	User: list({
		access: {
			operation: {
				create: isAdmin,
				delete: isAdmin,
			},
			item: {
				update: isPersonOrAdmin,
			},
			filter: {
				query: filterUsers,
			},
		},
		// Here are the fields that `User` will have. We want an email and password so they can log in
		// a name so we can refer to them, and a way to connect users to posts.
		fields: {
			name: text({ validation: { isRequired: true } }),
			avatar: s3Image({ s3Config }),
			email: text({
				validation: { isRequired: true },
				isIndexed: 'unique',
				isFilterable: true,
			}),
			// The password field takes care of hiding details and hashing values
			password: password({ validation: { isRequired: true } }),
			// Make administrator
			isAdmin: checkbox({
				access: {
					update: isAdmin,
				},
			}),
			// Relationships allow us to reference other lists. In this case,
			// we want a user to have many posts, and we are saying that the user
			// should be referencable by the 'author' field of posts.
			// Make sure you read the docs to understand how they work: https://keystonejs.com/docs/guides/relationships#understanding-relationships
			posts: relationship({ ref: 'Post.author', many: true }),
		},
		// Here we can configure the Admin UI. We want to show a user's name and posts in the Admin UI
		ui: {
			listView: {
				initialColumns: ['name', 'posts'],
			},
		},
	}),
	// Our second list is the Posts list. We've got a few more fields here
	// so we have all the info we need for displaying posts.
	Post: list({
		ui: {
			isHidden: true,
		},
		fields: {
			title: text(),
			// Having the status here will make it easy for us to choose whether to display
			// posts on a live site.
			status: select({
				options: [
					{ label: 'Published', value: 'published' },
					{ label: 'Draft', value: 'draft' },
				],
				// We want to make sure new posts start off as a draft when they are created
				defaultValue: 'draft',
				// fields also have the ability to configure their appearance in the Admin UI
				ui: {
					displayMode: 'segmented-control',
				},
			}),
			// The document field can be used for making highly editable content. Check out our
			// guide on the document field https://keystonejs.com/docs/guides/document-fields#how-to-use-document-fields
			// for more information
			content: document({
				formatting: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
					[2, 1],
					[1, 2],
					[1, 2, 1],
				],
				links: true,
				dividers: true,
			}),
			publishDate: timestamp(),
			// Here is the link from post => author.
			// We've configured its UI display quite a lot to make the experience of editing posts better.
			author: relationship({
				ref: 'User.posts',
				ui: {
					displayMode: 'cards',
					cardFields: ['name', 'email'],
					inlineEdit: { fields: ['name', 'email'] },
					linkToItem: true,
					inlineConnect: true,
				},
			}),
			// We also link posts to tags. This is a many <=> many linking.
			tags: relationship({
				ref: 'Tag.posts',
				ui: {
					displayMode: 'cards',
					cardFields: ['name'],
					inlineEdit: { fields: ['name'] },
					linkToItem: true,
					inlineConnect: true,
					inlineCreate: { fields: ['name'] },
				},
				many: true,
			}),
		},
	}),
	// Our final list is the tag list. This field is just a name and a relationship to posts
	Tag: list({
		ui: {
			isHidden: true,
		},
		fields: {
			name: text(),
			posts: relationship({ ref: 'Post.tags', many: true }),
		},
	}),
	// This is the start of my custom type for the home page
	HomePage: {
		fields: {
			copy: document({
				formatting: true,
				layouts: [
					[1, 1],
					[1, 1, 1],
					[2, 1],
					[1, 2],
					[1, 2, 1],
				],
				links: true,
				dividers: true,
			}),
			heroImage: s3Image({ s3Config }),
			youtubeUrl: text({
				hooks: {
					validateInput: ({
						resolvedData,
						addValidationError,
						item,
					}) => {
						const { youtubeUrl } = resolvedData;
						if (!validateUrl(item?.youtubeUrl || youtubeUrl)) {
							addValidationError('Not a valid url');
						}
					},
				},
			}),
		},
	},
};
