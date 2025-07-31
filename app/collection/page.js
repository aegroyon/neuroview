import Gallery from '../components/Gallery';

export default function CollectionPage() {
  return (
    <div className="bg-black min-h-screen text-white pt-20" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
      <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <p className="text-gray-400 text-sm mb-2 tracking-wider">COLLECTION</p>
          <h1 className="text-4xl font-bold mb-6">Repository of NeuroView</h1>
          
          {/* Filter buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button className="border border-white/30 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              Glioma
            </button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              No Tumor
            </button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              Pituitary
            </button>
            <button className="border border-white/30 text-white px-6 py-2 rounded-full text-sm hover:bg-white/10 transition-colors">
              Meningioma
            </button>
          </div>
        </div>
        
        <Gallery />
      </div>
    </div>
  );
}