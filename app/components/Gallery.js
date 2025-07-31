'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAllImages } from '../../models/imageModel';

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
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map(img => (
          <Link key={img.id} href={`/collection/${img.id}`}>
            <div className="border rounded-lg p-3 hover:shadow-lg cursor-pointer transition-shadow">
              <img src={img.url} alt={img.name} className="w-full h-32 object-cover mb-2 rounded" />
              <div className="text-xs truncate font-medium">{img.name}</div>
              <div className="text-[10px] text-gray-500">{new Date(img.uploaded_at).toLocaleString()}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 