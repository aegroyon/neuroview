import ImageDetail from '../../components/ImageDetail';

export default async function ImageDetailPage({ params }) {
  // Await params if needed (for Next.js 14+)
  const resolvedParams = await params;
  return (
    <div className="bg-black min-h-screen text-white pt-20">
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ImageDetail id={resolvedParams.id} />
      </div>
    </div>
  );
}