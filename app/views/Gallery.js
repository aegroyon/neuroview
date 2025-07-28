'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAllImages } from '../models/imageModel';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllImages().then(setImages).finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!images.length) return <div>No images uploaded yet.</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Uploaded Images</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map(img => (
          <Link key={img.id} href={`/gallery/${img.id}`}>
            <div className="border rounded p-2 hover:shadow cursor-pointer">
              <img src={img.url} alt={img.name} className="w-full h-32 object-cover mb-2" />
              <div className="text-xs truncate">{img.name}</div>
              <div className="text-[10px] text-gray-500">{new Date(img.uploaded_at).toLocaleString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 