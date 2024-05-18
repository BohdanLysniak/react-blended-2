import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery, Button } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [hasLoadMore, setHasLoadMore] = useState(false);
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const { photos, total_results } = await getPhotos(query, page);
      setPhotos(prevState => [...prevState, ...photos]);
      setHasLoadMore(page < Math.ceil(total_results / 15));
    };
    getData();
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setPhotos([]);
  };
  const handleClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      {!query && <Text textAlign="center">Let`s begin search 🔎</Text>}
      <PhotosGallery photos={photos} />
      {hasLoadMore && <Button onClick={handleClick}>Load more</Button>}
    </>
  );
};
