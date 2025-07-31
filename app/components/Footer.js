export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">NeuroView</h3>
            <p className="text-gray-600 text-sm">
              Advanced brain tumor detection using AI-powered MRI analysis for medical professionals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/development" className="text-gray-600 hover:text-gray-900">Development</a></li>
              <li><a href="/input" className="text-gray-600 hover:text-gray-900">Upload Images</a></li>
              <li><a href="/collection" className="text-gray-600 hover:text-gray-900">View Collection</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <p className="text-gray-600 text-sm">
              For support and inquiries:<br />
              Email: support@neuroview.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 NeuroView. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 