import { getPhotos } from 'apiService/photos';
import { Text, Form, PhotosGallery } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      const { photos } = await getPhotos(query, page);
      setPhotos(prevState => [...prevState, ...photos]);
    };
    getData();
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <PhotosGallery photos={photos} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
