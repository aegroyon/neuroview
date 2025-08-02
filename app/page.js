export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-start overflow-hidden relative"
        style={{
          backgroundImage: "url('../71.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Background overlay */}
        <div className="bg-black/40 w-full h-full flex items-center">
          <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-bold text-white mb-6">
                <img
                  src="/NeuroView-big.png"
                  alt="NeuroView Logo"
                  className="w-auto mx-auto"
                />
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
              <p className="text-gray-400 text-sm mb-2 tracking-wider">
                FEATURES
              </p>
              <h2 className="text-4xl font-bold">At the core</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-0">
            {/* Feature 1 */}
            <div className="px-8 border-r border-gray-700">
              <div className="mb-6">
                {/* Icon placeholder */}
                <img
                  src="/td.png"
                  alt="Tumor Detection"
                  className="w-auto mb-4"
                />
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
                <img
                  src="/fui.png"
                  alt="Fast & Intuitive Interface"
                  className="w-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Fast & Intuitive Interface
                </h3>
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
                <img
                  src="/dvi.png"
                  alt="Detailed Visual Insights"
                  className="w-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  Detailed Visual Insights
                </h3>
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
      <section className="min-h-screen bg-black text-white py-16 overflow-hidden">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-right">
            <p className="text-gray-400 text-sm mb-4 tracking-wider">
              HOW IT WORKS
            </p>
            <h2 className="text-4xl font-bold">
              From Scans to Insights in Three Steps
            </h2>
          </div>

          {/* Demo GIF */}
          <div className="flex items-center justify-center">
            <img
              src="/demo neuroview.gif"
              alt="NeuroView Demo"
              className="max-w-full h-auto rounded-lg border border-gray-700"
            />
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="h-screen bg-black text-white flex items-center overflow-hidden">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-16 items-center">
            {/* Mobile devices */}
            <div className="flex justify-center">
              <img
                src="/demo-phone.png"
                alt="Mobile Preview"
                className="w-128 h-auto object-contain"
              />
            </div>

            {/* Text content */}
            <div>
              <h2 className="text-4xl font-bold mb-4">
                <img
                  src="/NeuroView-small.png"
                  alt="NeuroView Logo"
                  className="w-auto"
                />
              </h2>
              <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                Also Available on Android
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Access AI-powered brain scan analysis
                <br />
                anytime, anywhere. Upload MRI images
                <br />
                and view results directly from your
                <br />
                Android device.
              </p>

              {/* Download Button */}
              <a
                href="https://drive.google.com/file/d/16TX8yjrVMSKREfLqu6894fVfgWV34iRx/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960"
                  fill="currentColor"
                >
                  <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
                Download for Android
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
