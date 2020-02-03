import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
	return (
		<div>
			{[187, 823, 1124, 1269, 5996, 6548, 8590].map(speakerId => (
				<div key={speakerId}>
					<ImageToggleOnScroll
						primaryImage={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
						secondaryImage={`/static/speakers/Speaker-${speakerId}.jpg`}
						alt=''
					/>
				</div>
			))}
		</div>
	);
};

export default ImageChangeOnScroll;
