// View: Upload form for brain scan images
'use client';
import { useState } from 'react';
import { handleImageUpload } from '../../controllers/imageController';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const onFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await handleImageUpload(file);
      setResult(res);
    } catch (err) {
      setError(err.message || JSON.stringify(err));
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <form onSubmit={onSubmit} className="space-y-8">
        {/* Upload Section */}
        <div className="text-center">
          <h2 className="text-lg font-light text-gray-400 mb-8 tracking-wider">UPLOAD</h2>
          
          {/* Drag and Drop Area */}
          <div
            className={`relative border-2 border-dashed border-gray-600 rounded-lg p-16 transition-colors ${
              dragActive ? 'border-blue-400 bg-blue-50/5' : 'border-gray-600'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/jpeg,image/png"
              onChange={onFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              id="file-upload"
            />
            
            <div className="text-center">
              <img src="/upload.png" alt="Upload" className="w-12 h-12 mx-auto mb-6" />
              <p className="text-xl text-white font-light mb-2">
                Drag & Drop Files or{' '}
                <label htmlFor="file-upload" className="underline cursor-pointer hover:text-gray-300">
                  Browse
                </label>
              </p>
              <p className="text-gray-400 text-sm mb-2">Supported Formats: JPEG, PNG</p>
              <p className="text-gray-500 text-sm">Upload Limit: 1 image file only.</p>
            </div>
          </div>
        </div>

        {/* Uploaded File Section */}
        {file && (
          <div>
            <h3 className="text-lg font-light text-white mb-4">Uploaded File</h3>
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center justify-between">
              <span className="text-white font-light">{file.name}</span>
              <button
                type="button"
                onClick={removeFile}
                className="p-2 hover:bg-gray-700 rounded transition-colors"
              >
                <img src="/delete.png" alt="Delete" className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        {file && (
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Start Analysis'}
            </button>
          </div>
        )}
      </form>

      {/* Error Display */}
      {error && (
        <div className="mt-8 p-4 bg-red-900/20 border border-red-500 rounded-lg">
          <p className="text-red-400">Error: {error}</p>
        </div>
      )}

      {/* Result Display */}
      {result && (
        <div className="mt-8 p-6 bg-gray-800/50 border border-gray-700 rounded-lg">
          <h3 className="text-lg font-light text-white mb-4">Analysis Result</h3>
          <p className="text-gray-300 mb-2">Detection Result: {result.detection}</p>
          <p className="text-gray-300 mb-4">Confidence: {(result.confidence * 100).toFixed(2)}%</p>
          <img src={result.imageUrl} alt="Analyzed brain scan" className="max-w-md mx-auto rounded-lg" />
        </div>
      )}
    </div>
  );
}