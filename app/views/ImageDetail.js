'use client';
import { useEffect, useState } from 'react';
import { fetchImageById } from '../models/imageModel';

// Dummy numpy array for now
const dummyNumpyArray = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
];

export default function ImageDetail({ id }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImageById(id)
      .then(setImage)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading image.</div>;
  if (!image) return <div>Image not found.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{image.name}</h2>
      <img src={image.url} alt={image.name} className="w-full max-w-md mb-4" />
      <div className="mb-2">Uploaded: {new Date(image.uploaded_at).toLocaleString()}</div>
      <h3 className="font-semibold mb-1">Numpy Array (dummy):</h3>
      <pre className="bg-gray-100 p-2 rounded text-xs">
        {JSON.stringify(dummyNumpyArray, null, 2)}
      </pre>
    </div>
  );
} 