'use client';
import { useEffect, useState } from 'react';
import { fetchImageById } from '../../models/imageModel';
import Link from 'next/link';

export default function ImageDetail({ id }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImageById(id)
      .then(setImage)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="text-center">
        <p className="text-gray-400">Image not found</p>
        <Link href="/collection" className="text-emerald-500 hover:text-emerald-400 mt-4 inline-block">
          Return to Collection
        </Link>
      </div>
    );
  }

  const confidence = image.information?.confidence || 0;
  const probabilities = image.information?.class_probabilities || {};
  const tumorType = image.information?.tumor_type || 'Unknown';
  const uploadDate = new Date(image.uploaded_at).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-light mb-2">Scan Analysis Details</h1>
          <p className="text-gray-400">Uploaded on {uploadDate}</p>
        </div>
        <Link 
          href="/collection"
          className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
        >
          Back to Collection
        </Link>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
        {/* Left Column - Image */}
        <div className="space-y-6">
          <div className="aspect-square relative overflow-hidden rounded-xl border border-gray-700">
            <img 
              src={image.url} 
              alt={image.name}
              className="object-cover w-full h-full hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg text-gray-300">File Information</h3>
            <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
              <p className="text-sm">
                <span className="text-gray-400">File name: </span>
                <span className="text-white">{image.name}</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">Upload date: </span>
                <span className="text-white">{uploadDate}</span>
              </p>
              <p className="text-sm">
                <span className="text-gray-400">File ID: </span>
                <span className="text-white">{id}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Analysis Results */}
        <div className="space-y-8">
          {/* Prediction Summary */}
          <div>
            <h3 className="text-lg text-gray-300 mb-3">Predicted Diagnosis:</h3>
            <p className="text-4xl font-light text-white mb-6 capitalize">{tumorType}</p>
            <div className="relative">
              <div className="overflow-hidden h-4 text-xs flex rounded-full bg-gray-700/50">
                <div
                  style={{ width: `${confidence * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full bg-emerald-500 transition-all duration-500"
                ></div>
              </div>
            </div>
          </div>

          {/* Class Probabilities */}
          <div>
            <h3 className="text-lg text-gray-300 mb-4">Class Probabilities</h3>
            <div className="space-y-4">
              {Object.entries(probabilities).map(([className, probability]) => (
                <div key={className}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300 capitalize">
                      {className}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {(probability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-700/50">
                    <div
                      style={{ width: `${probability * 100}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full transition-all duration-500 ${
                        probability === confidence ? 'bg-emerald-500' : 'bg-gray-600'
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}