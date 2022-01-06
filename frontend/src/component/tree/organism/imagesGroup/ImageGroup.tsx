import React from 'react';
import { ImageAsComponent } from '../../atom';
import './style.css';
import TImageGroup from './type';

type Props = {
	data: TImageGroup;
};

const ImageGroup: React.FC<Props> = ({ data: { list } }) => {
	return (
		<div className="image_group flex_row_wrap_center">
			{list.map((item, index) => (
				<div key={item.alt + index} className="sub_image_group">
					<ImageAsComponent
						data={{
							src: item.src,
							alt: item.alt,
						}}
					/>
				</div>
			))}
		</div>
	);
};
export default ImageGroup;
