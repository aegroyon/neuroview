// Controller: Handles user actions and coordinates between Model and View
import { uploadImageToSupabase } from '../models/imageModel';

export async function handleImageUpload(file) {
  // Call the model to upload image
  const result = await uploadImageToSupabase(file);
  // Here you would call the backend for detection
  // Dummy response for now
  return { detection: 'No tumor detected', imageUrl: result.url };
} 