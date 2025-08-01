// useNeuroViewAPI - Legacy hook for backward compatibility and comprehensive API state management
import { useState, useEffect, useCallback } from 'react';
import ImageController from '../controllers/imageController';

// Main hook that combines all functionality for components that need everything
export const useNeuroViewAPI = () => {
  // Combined state from all specialized hooks
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [health, setHealth] = useState(null);
  const [modelInfo, setModelInfo] = useState(null);

  // Fetch all images
  const fetchImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const result = await ImageController.fetchAllImages();
    
    if (result.success) {
      setImages(result.images);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  // Upload and analyze image
  const uploadImage = useCallback(async (file, name = null) => {
    setUploading(true);
    setError(null);

    try {
      const result = await ImageController.uploadAndAnalyzeImage(file, name);
      
      if (result.success) {
        // Refresh images list after successful upload
        await fetchImages();
      } else {
        setError(result.error);
      }
      
      return result;
    } catch (error) {
      setError(error.message);
      return {
        success: false,
        error: error.message
      };
    } finally {
      setUploading(false);
    }
  }, [fetchImages]);

  // Get image by ID
  const getImageById = useCallback(async (imageId) => {
    setLoading(true);
    setError(null);

    const result = await ImageController.fetchImageById(imageId);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  // Quick prediction without storing
  const quickPredict = useCallback(async (file) => {
    setLoading(true);
    setError(null);

    const result = await ImageController.quickPredict(file);
    
    if (!result.success) {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, []);

  // Delete image
  const deleteImage = useCallback(async (imageId) => {
    setLoading(true);
    setError(null);

    const result = await ImageController.deleteImage(imageId);
    
    if (result.success) {
      // Refresh images list after successful deletion
      await fetchImages();
    } else {
      setError(result.error);
    }
    
    setLoading(false);
    return result;
  }, [fetchImages]);

  // Check application health
  const checkHealth = useCallback(async () => {
    const result = await ImageController.checkApplicationHealth();
    
    if (result.success) {
      setHealth(result);
    } else {
      setError(result.error);
    }
    
    return result;
  }, []);

  // Get model information
  const getModelInfo = useCallback(async () => {
    const result = await ImageController.getModelInformation();
    
    if (result.success) {
      setModelInfo(result.modelInfo);
    } else {
      setError(result.error);
    }
    
    return result;
  }, []);

  // Clear errors
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Initialize data on mount
  useEffect(() => {
    fetchImages();
    checkHealth();
    getModelInfo();
  }, [fetchImages, checkHealth, getModelInfo]);

  return {
    // Data
    images,
    health,
    modelInfo,
    
    // Loading states
    loading,
    uploading,
    
    // Error state
    error,
    clearError,
    
    // Actions
    fetchImages,
    uploadImage,
    getImageById,
    quickPredict,
    deleteImage,
    checkHealth,
    getModelInfo,
    
    // Computed values
    isHealthy: health?.isHealthy || false,
    imageCount: images.length,
    hasImages: images.length > 0
  };
};

// Legacy exports for backward compatibility
export default useNeuroViewAPI;
