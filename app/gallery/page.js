import Gallery from '../views/Gallery';
import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <div className="mb-4">
        <Link href="/" className="text-blue-600 underline">Back to Home</Link>
      </div>
      <Gallery />
    </main>
  );
} 