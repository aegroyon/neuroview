import ImageDetail from '../../components/ImageDetail';

export default async function ImageDetailPage({ params }) {
  // Await params if needed (for Next.js 14+)
  const resolvedParams = await params;
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <ImageDetail id={resolvedParams.id} />
    </div>
  );
} 