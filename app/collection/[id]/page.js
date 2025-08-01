import ImageDetail from '../../components/ImageDetail';
import Header from '../../components/Header';

export default async function ImageDetailPage({ params }) {
  const resolvedParams = await params;
  
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <div className="pt-20">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ImageDetail id={resolvedParams.id} />
        </div>
      </div>
    </div>
  );
}