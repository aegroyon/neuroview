'use client';
import { useEffect, useState } from 'react';
import { fetchImageById } from '../../services/apiService';
import Link from 'next/link';

export default function ImageDetail({ id }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchImageById(id);
        // Backend returns {data: {...}, success: true} format
        setImage(response.data || response);
      } catch (err) {
        console.error('Failed to fetch image:', err);
        setError(err.message);
        setImage(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadImage();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-400 mb-4">Error: {error}</p>
        <Link href="/collection" className="text-blue-400 hover:text-blue-300 underline">
          Return to Collection
        </Link>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="text-center">
        <p className="text-gray-400 mb-4">Image not found</p>
        <Link href="/collection" className="text-blue-400 hover:text-blue-300 underline">
          Return to Collection
        </Link>
      </div>
    );
  }

  const confidence = image.information?.confidence || 0;
  const probabilities = image.information?.class_probabilities || {};
  const tumorType = image.information?.tumor_type || 'Unknown';
  const uploadDate = new Date(image.uploaded_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pr-5 pb-16">
        <div className="max-w-6xl w-full mx-auto space-y-16">
          {/* Prediction Header - Top Section */}
          <div className="text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">PREDICTION</p>
            <h1 className="text-5xl font-light mb-2 capitalize">{tumorType}</h1>
            <div className="w-16 h-0.5 bg-white mx-auto mb-8"></div>
            <p className="text-gray-400 text-sm uppercase tracking-wider">ANALYSIS DETAILS</p>
          </div>

          {/* Bottom Section - Image and Confidence Scores */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Image */}
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl border border-gray-700 overflow-hidden bg-gray-900">
                  <img 
                    src={image.url} 
                    alt={image.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              {/* File Info */}
              <div className="text-center space-y-1">
                <p className="text-gray-400 text-sm">{image.name}</p>
                <p className="text-gray-500 text-xs">{uploadDate}</p>
              </div>
            </div>

            {/* Right Column - Confidence Scores */}
            <div>
              <h2 className="text-lg uppercase tracking-wider mb-8">CONFIDENCE SCORES</h2>
              
              <div className="space-y-6">
                {Object.entries(probabilities).map(([className, probability]) => {
                  const displayName = className === 'notumor' ? 'No Tumor' : 
                                    className.charAt(0).toUpperCase() + className.slice(1);
                  const isHighest = probability === confidence;
                  
                  return (
                    <div key={className}>
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-white font-light text-lg">{displayName}</span>
                        <span className="text-white text-lg">{(probability * 100).toFixed(0)}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ease-out ${
                              isHighest ? 'bg-white' : 'bg-gray-600'
                            }`}
                            style={{ 
                              width: `${probability * 100}%`,
                              boxShadow: isHighest ? '0 0 10px rgba(255, 255, 255, 0.5)' : 'none'
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Insights Section */}
          <div className="text-center space-y-8">
            <h2 className="text-lg uppercase tracking-wider">INSIGHTS</h2>
            
            {/* Tumor Type Information */}
            {tumorType && tumorType !== 'Unknown' && (
              <div className="max-w-4xl mx-auto text-left bg-gray-900/50 rounded-2xl p-8 space-y-6">
                {/* Header */}
                <div className="text-center border-b border-gray-700 pb-6">
                  <h3 className="text-2xl font-light mb-2 capitalize">{tumorType}</h3>
                  <p className="text-gray-400">
                    {tumorType.toLowerCase() === 'glioma' && "Most common primary brain tumor"}
                    {tumorType.toLowerCase() === 'meningioma' && "Tumor arising from brain's protective layers"}
                    {tumorType.toLowerCase() === 'pituitary' && "Tumor in the pituitary gland"}
                  </p>
                </div>

                {/* Detailed Description */}
                <div>
                  <h4 className="text-lg text-white mb-3">Description</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {tumorType.toLowerCase() === 'glioma' && (
                      <>
                        Gliomas are tumors that arise from glial cells, which are the supportive cells in the brain. 
                        They are the most common type of primary brain tumor, accounting for about 80% of all 
                        malignant brain tumors. Gliomas can vary greatly in their aggressiveness and treatment approach.
                        <br /><br />
                        Gliomas are classified into different grades (I-IV) based on how abnormal the cells look 
                        under a microscope and how quickly they are likely to grow and spread.
                      </>
                    )}
                    {tumorType.toLowerCase() === 'meningioma' && (
                      <>
                        Meningiomas are tumors that develop from the meninges, the protective membranes that 
                        surround the brain and spinal cord. They are typically slow-growing and often benign, 
                        though some can be atypical or malignant.
                        <br /><br />
                        Meningiomas are more common in women than men and their incidence increases with age. 
                        They account for about 30% of all primary brain tumors.
                      </>
                    )}
                    {tumorType.toLowerCase() === 'pituitary' && (
                      <>
                        Pituitary tumors develop in the pituitary gland, a small pea-sized gland at the base 
                        of the brain that controls several other hormone-producing glands. Most pituitary tumors 
                        are benign (non-cancerous) adenomas.
                        <br /><br />
                        These tumors can be functional (producing excess hormones) or non-functional (not 
                        producing hormones). The symptoms depend on whether the tumor produces hormones and 
                        which hormones are affected.
                      </>
                    )}
                  </p>
                </div>

                {/* Symptoms */}
                <div>
                  <h4 className="text-lg text-white mb-4">Common Symptoms</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {tumorType.toLowerCase() === 'glioma' && [
                      "Persistent headaches", "Seizures", "Nausea and vomiting", "Vision problems",
                      "Speech difficulties", "Memory problems", "Personality changes", "Weakness or numbness in limbs"
                    ].map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300 text-sm">{symptom}</span>
                      </div>
                    ))}
                    {tumorType.toLowerCase() === 'meningioma' && [
                      "Gradual onset headaches", "Vision changes or loss", "Hearing loss or ringing in ears", "Memory loss",
                      "Seizures (less common)", "Weakness in arms or legs", "Difficulty with speech", "Changes in smell"
                    ].map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300 text-sm">{symptom}</span>
                      </div>
                    ))}
                    {tumorType.toLowerCase() === 'pituitary' && [
                      "Vision problems", "Headaches", "Unexplained weight gain or loss", "Fatigue and weakness",
                      "Changes in menstrual periods", "Sexual dysfunction", "Growth abnormalities", "Mood changes",
                      "Cold intolerance", "Excessive urination and thirst"
                    ].map((symptom, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300 text-sm">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Treatment */}
                <div>
                  <h4 className="text-lg text-white mb-3">Treatment Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {tumorType.toLowerCase() === 'glioma' && (
                      "Treatment typically involves a combination of surgery, radiation therapy, and chemotherapy. " +
                      "The specific treatment plan depends on the tumor's location, size, grade, and the patient's " +
                      "overall health. Complete surgical removal is often challenging due to the tumor's invasive nature."
                    )}
                    {tumorType.toLowerCase() === 'meningioma' && (
                      "Treatment depends on the tumor's size, location, and growth rate. Small, asymptomatic " +
                      "meningiomas may just be monitored. Larger or symptomatic tumors typically require " +
                      "surgical removal. Radiation therapy may be used for tumors that cannot be completely " +
                      "removed or for recurrent tumors."
                    )}
                    {tumorType.toLowerCase() === 'pituitary' && (
                      "Treatment options include medication to control hormone levels, surgery to remove the " +
                      "tumor, and radiation therapy. The choice of treatment depends on the type and size of " +
                      "the tumor, hormone levels, and the patient's symptoms. Many pituitary tumors can be " +
                      "successfully treated with medication alone."
                    )}
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-yellow-500">
                  <p className="text-yellow-200 text-sm">
                    <strong>Important:</strong> This information is for educational purposes only and should not replace 
                    professional medical advice. Always consult with qualified healthcare professionals for accurate 
                    diagnosis and treatment recommendations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}