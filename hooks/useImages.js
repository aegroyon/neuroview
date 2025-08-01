// Custom hooks for state management using controllers
import { useState, useEffect, useCallback } from 'react';
import ImageController from '../controllers/imageController';

export const useImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const fetchImages = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const result = await ImageController.fetchAllImages();
    
    if (result.success) {
      setImages(result.images);
      setCount(result.count);
    } else {
      setError(result.error);
      setImages([]);
      setCount(0);
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return {
    images,
    loading,
    error,
    count,
    refetch: fetchImages
  };
};

export const useImage = (imageId) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchImage = useCallback(async () => {
    if (!imageId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    const result = await ImageController.fetchImageById(imageId);
    
    if (result.success) {
      setImage(result.image);
    } else {
      setError(result.error);
      setImage(null);
    }
    
    setLoading(false);
  }, [imageId]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return {
    image,
    loading,
    error,
    refetch: fetchImage
  };
};

export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [progress, setProgress] = useState(0);

  const uploadImage = useCallback(async (file, name = null) => {
    setUploading(true);
    setError(null);
    setProgress(0);

    // Simulate progress for better UX
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 90));
    }, 200);

    try {
      const result = await ImageController.uploadAndAnalyzeImage(file, name);
      
      if (!result.success) {
        setError(result.error);
      }
      
      setProgress(100);
      clearInterval(progressInterval);
      
      return result;
    } catch (error) {
      clearInterval(progressInterval);
      setError(error.message);
      return {
        success: false,
        error: error.message
      };
    } finally {
      setUploading(false);
      // Reset progress after a short delay
      setTimeout(() => setProgress(0), 1000);
    }
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    uploadImage,
    uploading,
    error,
    progress,
    resetError
  };
};

export const useQuickPredict = () => {
  const [predicting, setPredicting] = useState(false);
  const [error, setError] = useState(null);

  const predict = useCallback(async (file) => {
    setPredicting(true);
    setError(null);

    try {
      const result = await ImageController.quickPredict(file);
      
      if (!result.success) {
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
      setPredicting(false);
    }
  }, []);

  const resetError = useCallback(() => {
    setError(null);
  }, []);

  return {
    predict,
    predicting,
    error,
    resetError
  };
};

export const useHealthCheck = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkHealth = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    const result = await ImageController.checkApplicationHealth();
    
    if (result.success) {
      setHealth(result);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  }, []);

  useEffect(() => {
    checkHealth();
    
    // Optional: Set up periodic health checks
    const interval = setInterval(checkHealth, 30000); // Check every 30 seconds
    
    return () => clearInterval(interval);
  }, [checkHealth]);

  return { 
    health, 
    loading, 
    error,
    isHealthy: health?.isHealthy || false,
    refetch: checkHealth 
  };
};

export const useModelInfo = () => {
  const [modelInfo, setModelInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModelInfo = async () => {
      setLoading(true);
      setError(null);
      
      const result = await ImageController.getModelInformation();
      
      if (result.success) {
        setModelInfo(result.modelInfo);
      } else {
        setError(result.error);
      }
      
      setLoading(false);
    };

    fetchModelInfo();
  }, []);

  return { modelInfo, loading, error };
};
