export const validateUrl = (url: string): boolean => {
	const regex =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*)/gi;
	if (url.match(regex)) {
		return true;
	} else {
		return false;
	}
};
