import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Welcome to NeuroView</h1>
        <p className="text-xl mb-8 text-gray-600">
          Advanced brain tumor detection using AI-powered MRI analysis
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Upload & Analyze</h3>
            <p className="text-gray-600 mb-4">
              Upload your brain scan images and get instant AI-powered analysis
            </p>
            <Link href="/input" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Upload Images
            </Link>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">View Collection</h3>
            <p className="text-gray-600 mb-4">
              Browse and analyze your uploaded brain scan collection
            </p>
            <Link href="/collection" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              View Collection
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link href="/development" className="text-blue-600 underline">
            Learn more about our development objectives
          </Link>
        </div>
      </div>
    </main>
  );
}
