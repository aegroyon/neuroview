'use client';
import { useState } from 'react';
import { handleImageUpload } from '../../controllers/imageController';
import Header from '../components/Header';

export default function InputPage() {
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
    try {
      const res = await handleImageUpload(file);
      setResult(res);
    } catch (err) {
      setError(err.message || JSON.stringify(err));
    }
    setLoading(false);
  };

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto p-8 w-full">
          <form onSubmit={onSubmit} className="space-y-8">
            {/* Upload Section */}
            <div className="text-center">
              <div className="flex items-center justify-center mb-8">
                <h2 className="text-lg font-light text-gray-400 tracking-wider">UPLOAD</h2>
                <div className="ml-2 w-4 h-4 border border-gray-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">i</span>
                </div>
              </div>
              
              {/* Drag and Drop Area */}
              <div
                className={`relative border-2 border-dashed rounded-lg p-20 transition-colors ${
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
                  <img src="/upload.png" alt="Upload" className="w-16 h-16 mx-auto mb-8" />
                  <p className="text-2xl text-white font-light mb-4">
                    Drag & Drop Files or{' '}
                    <label htmlFor="file-upload" className="underline cursor-pointer hover:text-gray-300">
                      Browse
                    </label>
                  </p>
                  <p className="text-gray-400 text-base mb-2">Supported Formats: JPEG, PNG</p>
                  <p className="text-gray-500 text-sm">Upload Limit: 1 image file only.</p>
                </div>
              </div>
            </div>

            {/* Uploaded File Section */}
            {file && (
              <div>
                <h3 className="text-lg font-light text-white mb-6">Uploaded File</h3>
                <div className="bg-transparent border border-gray-600 rounded-lg p-6 flex items-center justify-between">
                  <span className="text-white font-light text-lg">{file.name}</span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="p-2 hover:bg-gray-700 rounded transition-colors"
                  >
                    <img src="/delete.png" alt="Delete" className="w-6 h-6" />
                  </button>
                </div>
              </div>
            )}

            {/* Submit Button */}
            {file && (
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black px-12 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
              <p className="text-gray-300 mb-4">Detection Result: {result.detection}</p>
              <img src={result.imageUrl} alt="Analyzed brain scan" className="max-w-md mx-auto rounded-lg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 