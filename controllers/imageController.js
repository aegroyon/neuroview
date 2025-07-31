// Controller: Handles user actions and coordinates between Model and View
import { uploadImageToSupabase } from '../models/imageModel';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function handleImageUpload(file) {
  try {
    console.log('Preparing to upload file:', file.name);
    
    const formData = new FormData();
    formData.append('file', file);

    // Get prediction from ML backend
    const predictionResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/predict`, {
      method: 'POST',
      body: formData,
    });

    if (!predictionResponse.ok) {
      throw new Error(`Prediction failed: ${predictionResponse.status}`);
    }

    const predictionData = await predictionResponse.json();
    
    // Upload to Supabase with prediction information
    const result = await uploadImageToSupabase(file, {
      ...predictionData.data,
      success: true,
      message: `Brain scan classified as: ${predictionData.data.tumor_type} (confidence: ${(predictionData.data.confidence * 100).toFixed(2)}%)`
    });

    return {
      ...result,
      data: predictionData.data,
      url: result.url, // Ensure URL is included
      imageUrl: result.url // Add imageUrl for consistency
    };
  } catch (error) {
    console.error('Error in handleImageUpload:', error);
    throw error;
  }
}