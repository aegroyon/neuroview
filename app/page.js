export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-start overflow-hidden relative"
        style={{ backgroundImage: "url('../71.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Background overlay */}
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-bold text-white mb-6">
                <img src="/NeuroView-big.png" alt="NeuroView Logo" className="w-auto mx-auto" />
              </h1>
              <p className="text-lg text-white/90 leading-relaxed">
                Designed for accuracy, speed, and ease of use, NeuroView
                <br />
                analyzes brain scans to provide insights that support faster
                <br />
                diagnoses and better patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="h-screen bg-black text-white flex items-center overflow-hidden">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="text-left">
              <p className="text-gray-400 text-sm mb-2 tracking-wider">FEATURES</p>
              <h2 className="text-4xl font-bold">At the core</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-0">
            {/* Feature 1 */}
            <div className="px-8 border-r border-gray-700">
              <div className="mb-6">
                {/* Icon placeholder */}
                <img src="/td.png" alt="Tumor Detection" className="w-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tumor Detection</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Uses advanced machine learning
                  <br />
                  models to analyze MRI brain scans with
                  <br />
                  high accuracy, identifying potential
                  <br />
                  tumor regions in seconds.
                </p>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="px-8 border-r border-gray-700">
              <div className="mb-6">
                {/* Icon placeholder */}
                <img src="/fui.png" alt="Fast & Intuitive Interface" className="w-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast & Intuitive Interface</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Designed for medical environments and
                  <br />
                  professionals, the app offers a clean,
                  <br />
                  user-friendly interface that makes
                  <br />
                  uploading and analyzing scans fast and
                  <br />
                  efficient.
                </p>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="px-8">
              <div className="mb-6">
                {/* Icon placeholder */}
                <img src="/dvi.png" alt="Detailed Visual Insights" className="w-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Detailed Visual Insights</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generates annotated images with
                  <br />
                  highlighted tumor areas, giving you
                  <br />
                  clear visual feedback to support
                  <br />
                  diagnosis and clinical decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-right">
            <p className="text-gray-400 text-sm mb-4 tracking-wider">HOW IT WORKS</p>
            <h2 className="text-4xl font-bold">From Scans to Insights in Three Steps</h2>
          </div>
          
          {/* Video/Image placeholder */}
          <div className="w-full h-96 bg-gray-800 rounded-lg border border-gray-700 flex items-center justify-center">
            <p className="text-gray-400">Video/Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="h-screen bg-black text-white flex items-center overflow-hidden">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Mobile devices */}
            <div className="flex justify-center space-x-8">
              <div className="w-48 h-96 bg-gray-800 rounded-3xl border-4 border-gray-600 flex items-center justify-center relative">
                <div className="w-32 h-1 bg-gray-600 rounded-full" style={{position: 'absolute', top: '24px'}}></div>
                <p className="text-gray-400 text-sm">Mobile Preview</p>
              </div>
              <div className="w-48 h-96 bg-gray-800 rounded-3xl border-4 border-gray-600 flex items-center justify-center relative">
                <div className="w-32 h-1 bg-gray-600 rounded-full" style={{position: 'absolute', top: '24px'}}></div>
                <p className="text-gray-400 text-sm">Mobile Preview</p>
              </div>
            </div>
            
            {/* Text content */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                <img src="/NeuroView-small.png" alt="NeuroView Logo" className="w-auto" />
              </h2>
              <h3 className="text-2xl font-semibold mb-6 text-gray-300">Available on Android</h3>
              <p className="text-gray-400 leading-relaxed">
                Access AI-powered brain scan analysis
                <br />
                anytime, anywhere. Upload MRI images
                <br />
                and view results directly from your
                <br />
                Android device.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}