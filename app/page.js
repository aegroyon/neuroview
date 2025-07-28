import UploadForm from './views/UploadForm';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Brain Tumor Detection</h1>
      <div className="mb-4">
        <Link href="/gallery" className="text-blue-600 underline">Go to Gallery</Link>
      </div>
      <UploadForm />
    </main>
  );
}
