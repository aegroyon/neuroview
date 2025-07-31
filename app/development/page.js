export default function DevelopmentPage() {
  return (
    <div
      className="relative bg-black min-h-screen text-white overflow-hidden"
      style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
    >
      {/* Full-page Background Gradient with Overlay */}
      
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-orange-800" />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('../16.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-full w-full mx-auto">
            <h1 className="text-6xl font-bold text-white mb-4">Development Overview</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              A deeper look into how NeuroView was built
            </p>

            <div className="mt-16 max-w-4xl mx-auto">
              <p className="text-white/90 leading-relaxed mb-8">
                The development of NeuroView was grounded in a practical research objective: to build a deep
                learning system capable of analyzing brain MRI scans for tumor detection. This system was
                designed with clinical use in mind, focusing on accuracy, interpretability, and speed.
              </p>

              <p className="text-white/90 leading-relaxed">
                Unlike many implementations that rely on pre-trained architectures,{' '}
                <span className="font-semibold">NeuroView's neural network was built entirely from scratch.</span>{' '}
                Each layer and parameter was designed, tuned, and tested to suit the specific characteristics
                of brain imaging data.
              </p>
            </div>
          </div>
        </section>

        {/* Development Steps Section */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="max-w-2xl mx-auto space-y-16">
              {/* Dataset & Preprocessing */}
              <div>
                <div className="w-12 h-12 bg-white/10 rounded border border-white/20 mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold mb-4">Dataset & Preprocessing</h3>
              </div>

              {/* Model Architecture */}
              <div>
                <div className="w-12 h-12 bg-white/10 rounded border border-white/20 mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold mb-4">Model Architecture</h3>
              </div>

              {/* Training & Optimization */}
              <div>
                <div className="w-12 h-12 bg-white/10 rounded border border-white/20 mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold mb-4">Training & Optimization</h3>
              </div>

              {/* Evaluation Metrics */}
              <div>
                <div className="w-12 h-12 bg-white/10 rounded border border-white/20 mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold mb-4">Evaluation Metrics</h3>
              </div>

              {/* Future Improvements */}
              <div>
                <div className="w-12 h-12 bg-white/10 rounded border border-white/20 mx-auto mb-4"></div>
                <h3 className="text-2xl font-semibold mb-4">Future Improvements</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
