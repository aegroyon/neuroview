import { fetchImageById } from '@/models/imageModel';
import Header from '@/app/components/Header';
import Link from 'next/link';

export default async function ImageDetailPage({ params }) {
  const resolvedParams = await params;
  
  try {
    const image = await fetchImageById(resolvedParams.id);
    
    if (!image) {
      return (
        <div className="bg-black min-h-screen text-white">
          <Header />
          <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4">
            <p className="text-gray-400">Image not found</p>
            <Link 
              href="/collection"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
            >
              Return to Collection
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-black min-h-screen text-white">
        <Header />
        <main className="pt-24 pb-12">
          <div className="max-w-6xl mx-auto px-6 sm:px-8">
            {/* Title with Back Button */}
            <div className="text-center mb-10 relative">
              {/* Back Button - positioned to the left */}
              <div className="absolute left-0 top-0">
                <Link 
                  href="/collection"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  ←
                </Link>
              </div>
              
              <p className="text-gray-500 text-xs uppercase tracking-wide mb-2">Prediction</p>
              <h1 className="text-4xl font-extralight text-white mb-3 tracking-wide">
                {image.information?.tumor_type ? 
                  (image.information.tumor_type === 'notumor' ? 'No Tumor' : 
                   image.information.tumor_type.charAt(0).toUpperCase() + image.information.tumor_type.slice(1)) : 
                  'Analysis Result'
                }
              </h1>
              <div className="w-16 h-0.5 bg-white mx-auto mb-4"></div>
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">ANALYSIS DETAILS</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left Column - Image and Info */}
              <div className="space-y-6">
                {/* Image */}
                <div className="flex justify-center">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden border-2 border-gray-600 shadow-2xl">
                    <img 
                      src={image.url} 
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Subtle File Information */}
                <div className="text-center space-y-1">
                  <p className="text-gray-500 text-sm font-light truncate">{image.name}</p>
                  <p className="text-gray-600 text-xs">
                    {new Date(image.uploaded_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              {/* Right Column - Analysis Results */}
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-light text-gray-200 mb-6 uppercase tracking-[0.15em]">
                    Confidence Scores
                  </h3>
                </div>

                <div className="space-y-6">
                  {Object.entries(image.information.class_probabilities).map(([className, probability]) => (
                    <div key={className} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white text-lg font-light capitalize tracking-wide">
                          {className === 'notumor' ? 'No Tumor' : className}
                        </span>
                        <span className="text-white text-lg font-medium tabular-nums">
                          {(probability * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm">
                        <div
                          className="h-full bg-gradient-to-r from-white to-gray-200 transition-all duration-700 ease-out rounded-full"
                          style={{ width: `${probability * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Analysis Results */}
            {!image.information && (
              <div className="text-center mt-8">
                <p className="text-gray-400">No analysis data available</p>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error loading image:', error);
    return (
      <div className="bg-black min-h-screen text-white">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] flex-col gap-4">
          <p className="text-red-400">Error loading image details</p>
          <Link 
            href="/collection"
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
          >
            Return to Collection
          </Link>
        </div>
      </div>
    );
  }
}