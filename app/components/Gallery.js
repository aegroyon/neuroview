'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { fetchAllImages } from '../../models/imageModel';
import { supabase } from '../../utils/supabaseClient';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllImages().then(setImages).finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (!images.length) return <div className="text-white text-center">No images uploaded yet.</div>;

  return (
    <div className="max-h-[70vh] overflow-y-auto pr-4 px-8 pt-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map(img => (
          <Link key={img.id} href={`/collection/${img.id}`}>
            <div className="bg-transparent border border-gray-600 rounded-lg p-3 hover:border-gray-400 hover:bg-gray-800/20 cursor-pointer transition-all duration-300 transform hover:scale-105">
              <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                <img 
                  src={img.url} 
                  alt={img.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-1">
                <h3 className="text-white font-light text-base truncate">{img.name}</h3>
                <p className="text-gray-400 text-sm font-light">
                  {img.information ? 
                    `${img.information.tumor_type} (${(img.information.confidence * 100).toFixed(1)}%)` :
                    'Pending Analysis'
                  }
                </p>
                <p className="text-gray-400 text-xs font-light">
                  {new Date(img.uploaded_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="mt-3 text-right">
                <span className="text-gray-400 text-xs hover:text-white transition-colors underline">
                  View Details &gt;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Custom scrollbar styles */}
      <style jsx>{`
        .max-h-\[70vh\]::-webkit-scrollbar {
          width: 6px;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-track {
          background: transparent;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}