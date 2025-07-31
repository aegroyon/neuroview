import UploadForm from '../components/UploadForm';

export default function InputPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Upload Brain Scan Images</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload your brain scan images for AI-powered tumor detection analysis. 
          Our system will analyze the images and provide detailed results.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Upload Instructions</h2>
          <ul className="text-gray-600 space-y-1">
            <li>• Supported formats: JPG, PNG, TIFF</li>
            <li>• Maximum file size: 10MB</li>
            <li>• Ensure images are clear and well-lit</li>
            <li>• Multiple images can be uploaded</li>
          </ul>
        </div>
        
        <UploadForm />
      </div>
    </div>
  );
} 