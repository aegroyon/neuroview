import ImageDetail from '../../views/ImageDetail';

export default async function ImageDetailPage({ params }) {
  // Await params if needed (for Next.js 14+)
  const resolvedParams = await params;
  return (
    <main className="flex flex-col items-center min-h-screen p-8">
      <ImageDetail id={resolvedParams.id} />
    </main>
  );
} 