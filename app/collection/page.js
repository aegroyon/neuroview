import Gallery from '../components/Gallery';
import Link from 'next/link';

export default function CollectionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Image Collection</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Browse and analyze your uploaded brain scan images. Click on any image to view detailed analysis results.
        </p>
      </div>
      <Gallery />
    </div>
  );
} 