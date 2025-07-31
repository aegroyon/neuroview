export default function DevelopmentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Development Objectives</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Project Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            NeuroView is an advanced brain tumor detection system that leverages artificial intelligence 
            to analyze MRI scans and provide accurate tumor detection results. Our goal is to assist 
            medical professionals in early detection and diagnosis of brain tumors.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-700">
                Implement machine learning algorithms to detect and classify brain tumors 
                from MRI scan images with high accuracy.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">User-Friendly Interface</h3>
              <p className="text-gray-700">
                Create an intuitive web interface for medical professionals to upload 
                and analyze brain scan images easily.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Data Management</h3>
              <p className="text-gray-700">
                Develop a secure system for storing and managing patient scan data 
                with proper privacy controls.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Real-time Processing</h3>
              <p className="text-gray-700">
                Enable fast and efficient processing of brain scan images 
                to provide quick diagnostic results.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Technology Stack</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express (planned)</li>
              <li><strong>Database:</strong> Supabase (PostgreSQL)</li>
              <li><strong>AI/ML:</strong> Python, TensorFlow/PyTorch (planned)</li>
              <li><strong>Image Processing:</strong> OpenCV, NumPy (planned)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Development Phases</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Phase 1: Foundation</h3>
              <p className="text-gray-700">Set up the basic web application with user interface and data storage.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Phase 2: AI Integration</h3>
              <p className="text-gray-700">Integrate machine learning models for brain tumor detection.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">Phase 3: Optimization</h3>
              <p className="text-gray-700">Improve accuracy, performance, and user experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 