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

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-gray-400">Loading...</div>
    </div>
  );
  
  if (error) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-red-400">Error loading image.</div>
    </div>
  );
  
  if (!image) return (
    <div className="flex justify-center items-center h-64">
      <div className="text-gray-400">Image not found.</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-lg border border-gray-700 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">{image.name || 'Brain Scan Analysis'}</h2>
            <p className="text-gray-400">Detailed analysis results and scan information</p>
          </div>
          <Link href="/collection" className="border border-white/30 text-white px-4 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
            ← Back to Collection
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Original Scan</h3>
              {/* Brain scan placeholder */}
              <div className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-64 h-64 bg-gray-600 rounded-full border border-gray-500 flex items-center justify-center">
                  <span className="text-gray-400">Brain Scan Image</span>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                Uploaded: {image.uploaded_at ? new Date(image.uploaded_at).toLocaleString() : 'January 1, 2025'}
              </div>
            </div>
          </div>
          
          {/* Analysis Results Section */}
          <div>
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Analysis Results</h3>
              
              {/* Detection Results */}
              <div className="bg-blue-900/30 border border-blue-700/50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-blue-300 mb-2">Detection Status</h4>
                <p className="text-blue-200 text-lg font-medium">{image.detection}</p>
                <p className="text-blue-300 text-sm mt-1">Confidence: {image.accuracy}</p>
              </div>

              {/* Additional Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-700 p-3 rounded">
                  <div className="text-gray-400 text-xs">Processing Time</div>
                  <div className="text-white font-semibold">2.34s</div>
                </div>
                <div className="bg-gray-700 p-3 rounded">
                  <div className="text-gray-400 text-xs">Model Version</div>
                  <div className="text-white font-semibold">v1.2.0</div>
                </div>
              </div>
              
              {/* Raw Data Section */}
              <div className="bg-gray-700 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-3">Image Data (Sample)</h4>
                <div className="bg-black rounded p-3 overflow-auto max-h-32">
                  <pre className="text-green-400 text-xs font-mono">
                    {JSON.stringify(dummyNumpyArray, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}