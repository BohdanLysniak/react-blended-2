import {Grid, PhotosGalleryItem} from 'components'
export const PhotosGallery = ({photos}) => {
  return (
    <Grid>
      {photos.map(photo => (
        <PhotosGalleryItem
          key={photo.id}
          avg_color={photo.avg_color}
          src={photo.src}
          alt={photo.alt}
        />
      ))}
    </Grid>
  );
};
