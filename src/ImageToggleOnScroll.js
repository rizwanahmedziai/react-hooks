import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImage, secondaryImage }) => {
	const imageRef = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		setInView(isInView());
		setIsLoading(false);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, [isLoading]);

	const [inView, setInView] = useState(false);

	const isInView = () => {
		if (imageRef.current) {
			const rect = imageRef.current.getBoundingClientRect();
			return rect.top >= 0 && rect.bottom <= window.innerHeight;
		}
		return false;
	};

	const scrollHandler = () => {
		setInView(() => {
			return isInView();
		});
	};

	return isLoading ? null : (
		<img
			src={inView ? secondaryImage : primaryImage}
			alt=''
			ref={imageRef}
			width='300'
			height='300'
		/>
	);
};

export default ImageToggleOnScroll;
