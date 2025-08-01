// Controller: Handles user actions and coordinates between API Service and Views
import ApiService from '../services/apiService';

class ImageController {
  
  // Health check with error handling
  static async checkApplicationHealth() {
    try {
      const result = await ApiService.checkHealth();
      return {
        success: true,
        data: result,
        isHealthy: result.success && result.status === 'healthy'
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        isHealthy: false
      };
    }
  }

  // Fetch all images with loading state management
  static async fetchAllImages() {
    try {
      const result = await ApiService.getAllImages();
      return {
        success: true,
        images: result.data || result || [],
        count: result.count || (result.data ? result.data.length : 0),
        message: result.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        images: [],
        count: 0
      };
    }
  }

  // Fetch specific image with validation
  static async fetchImageById(imageId) {
    if (!imageId) {
      return {
        success: false,
        error: 'Image ID is required'
      };
    }

    try {
      const result = await ApiService.getImageById(imageId);
      return {
        success: true,
        image: result.data || result,
        message: result.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        image: null
      };
    }
  }

  // Upload and analyze image
  static async uploadAndAnalyzeImage(file, imageName = null) {
    // Validate file
    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      };
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return {
        success: false,
        error: 'Please select a valid image file'
      };
    }

    // Validate file size (e.g., max 10MB)
    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return {
        success: false,
        error: 'File size must be less than 10MB'
      };
    }

    try {
      const result = await ApiService.uploadImageWithPrediction(file, imageName);
      
      // Extract the prediction information from the response
      const prediction = result.prediction || result.updated_image?.information || {};
      const imageData = result.updated_image || result.data || {};
      
      return {
        success: true,
        data: result.data || result,
        prediction: result.prediction,
        message: result.message,
        uploadedImage: result.updated_image || result.data || result,
        // Transform response to match expected format for existing components
        id: imageData.id || result.data?.id,
        name: imageData.name || result.data?.name,
        url: imageData.url || result.data?.url,
        imageUrl: imageData.url || result.data?.url,
        detection: prediction.tumor_type || 'Unknown',
        confidence: prediction.confidence || 0,
        uploaded_at: imageData.uploaded_at || result.data?.uploaded_at,
        // Additional prediction details
        class_probabilities: prediction.class_probabilities || {},
        predicted_class: prediction.predicted_class,
        analysis_message: prediction.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Quick prediction without saving
  static async quickPredict(file) {
    if (!file) {
      return {
        success: false,
        error: 'No file provided'
      };
    }

    try {
      const result = await ApiService.predictBrainTumor(file);
      return {
        success: true,
        prediction: result.data || result,
        message: result.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Create image record manually
  static async createImageRecord(name, url) {
    if (!name || !url) {
      return {
        success: false,
        error: 'Name and URL are required'
      };
    }

    try {
      const result = await ApiService.createImage({ name, url });
      return {
        success: true,
        data: result.data || result,
        message: result.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Get model information
  static async getModelInformation() {
    try {
      const result = await ApiService.getModelInfo();
      return {
        success: true,
        modelInfo: result.data || result,
        message: result.message
      };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        modelInfo: null
      };
    }
  }
}

export default ImageController;

// Legacy function for backward compatibility
export async function handleImageUpload(file) {
  const result = await ImageController.uploadAndAnalyzeImage(file);
  if (result.success) {
    return result;
  } else {
    throw new Error(result.error);
  }
}

// Additional controller functions for backward compatibility
export async function getAllImages() {
  const result = await ImageController.fetchAllImages();
  if (result.success) {
    return result.images;
  } else {
    throw new Error(result.error);
  }
}

export async function getImageById(id) {
  const result = await ImageController.fetchImageById(id);
  if (result.success) {
    return result.image;
  } else {
    throw new Error(result.error);
  }
}

export async function checkApiHealth() {
  const result = await ImageController.checkApplicationHealth();
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error);
  }
}