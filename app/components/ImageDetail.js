'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchImageById } from '../../models/imageModel';

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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">{image.name}</h2>
          <Link href="/collection" className="text-blue-600 hover:text-blue-800 underline">
            ← Back to Collection
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <img src={image.url} alt={image.name} className="w-full rounded-lg shadow-md" />
            <div className="mt-4 text-sm text-gray-600">
              Uploaded: {new Date(image.uploaded_at).toLocaleString()}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Analysis Results</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Detection Status</h4>
              <p className="text-blue-700">No tumor detected</p>
            </div>
            
            <h4 className="font-semibold mb-2">Image Data (Dummy)</h4>
            <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto max-h-40">
              {JSON.stringify(dummyNumpyArray, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 