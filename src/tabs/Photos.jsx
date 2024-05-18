import { getPhotos } from 'apiService/photos';
import { Text, Form } from 'components';
import { useEffect, useState } from 'react';

export const Photos = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!query) return;
    getPhotos(query, page);
  }, [query, page]);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};
