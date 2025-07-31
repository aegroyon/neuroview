'use client';
import { Dialog } from '@headlessui/react';
import AnalysisDisplay from './AnalysisDisplay';

export default function ResultModal({ isOpen, onClose, result, onGoToCollection }) {
  if (!result) return null;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl rounded-2xl bg-gray-900 p-8">
            <div className="flex justify-between items-center mb-8">
              <Dialog.Title className="text-2xl font-light text-white">
                Analysis Result
              </Dialog.Title>
              <div className="flex gap-4">
                <button
                  onClick={onGoToCollection}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                >
                  Go to Collection
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Image */}
              <div className="space-y-4">
                <div className="aspect-square relative overflow-hidden rounded-xl border border-gray-700">
                  <img 
                    src={result.url || result.imageUrl} 
                    alt="Analyzed brain scan" 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-gray-400 text-center">{result.name || 'Analyzed scan'}</p>
              </div>

              {/* Right Column - Analysis Results */}
              <div className="space-y-8">
                {/* Prediction Summary */}
                <div>
                  <h4 className="text-lg text-gray-300 mb-6">Predicted Diagnosis:</h4>
                  <p className="text-3xl font-light text-white mb-8 capitalize">
                    {result.data.tumor_type}
                  </p>
                </div>

                {/* Class Probabilities */}
                <div>
                  <h4 className="text-lg text-gray-300 mb-4">Class Probabilities:</h4>
                  <div className="space-y-4">
                    {Object.entries(result.data.class_probabilities).map(([className, probability]) => (
                      <div key={className}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300 capitalize">
                            {className}
                          </span>
                          <span className="text-sm font-medium text-gray-300">
                            {(probability * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-700/50">
                          <div
                            style={{ width: `${probability * 100}%` }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full bg-white transition-all duration-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}