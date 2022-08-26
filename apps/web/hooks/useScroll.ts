import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
	const [value, setValue] = useState(false);
	const [scrollRef, setScrollRef] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;
			setValue(scrollRef < currentScrollPos && currentScrollPos > 100);
			setScrollRef(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', () => {});
	}, [scrollRef]);
	return !value;
};
