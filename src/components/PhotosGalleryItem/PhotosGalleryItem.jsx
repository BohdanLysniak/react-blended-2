import { GridItem } from 'components';
import style from './PhotosGalleryItem.module.css'
export const PhotosGalleryItem = ({ avg_color, alt, src }) => {
  return (
    <GridItem>
      <div
        className={style.thumb}
        style={{ backgroundColor: avg_color, borderColor: avg_color }}
      >
        <img src={src.large} alt={alt} />
      </div>
    </GridItem>
  );
};
