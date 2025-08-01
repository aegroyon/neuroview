// API Service Layer - Handles all backend communication
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:5001';

class ApiService {
  
  // Generic request handler with error handling
  static async makeRequest(url, options = {}) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
        }
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `HTTP error! status: ${response.status}`);
      }
      
      return data;
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }

  // Health Check
  static async checkHealth() {
    return this.makeRequest(`${API_BASE_URL}/api/auto?action=health`, {
      method: 'GET'
    });
  }

  // Get all images
  static async getAllImages() {
    return this.makeRequest(`${API_BASE_URL}/api/auto`, {
      method: 'GET'
    });
  }

  // Get specific image by ID
  static async getImageById(imageId) {
    return this.makeRequest(`${API_BASE_URL}/api/auto?id=${imageId}`, {
      method: 'GET'
    });
  }

  // Create image record (JSON)
  static async createImage(imageData) {
    return this.makeRequest(`${API_BASE_URL}/api/auto`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(imageData)
    });
  }

  // Upload image with automatic prediction and save to database
  static async uploadImageWithPrediction(file, name = null) {
    const formData = new FormData();
    formData.append('file', file);  // Backend expects 'file' field name
    if (name) formData.append('name', name);

    return this.makeRequest(`${API_BASE_URL}/api/auto`, {
      method: 'POST',
      body: formData
      // Don't set Content-Type for FormData - browser handles it
    });
  }

  // Direct prediction without saving to database
  static async predictBrainTumor(file) {
    const formData = new FormData();
    formData.append('file', file);  // Backend expects 'file' field name

    return this.makeRequest(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      body: formData
    });
  }

  // Get ML model information
  static async getModelInfo() {
    return this.makeRequest(`${API_BASE_URL}/api/model-info`, {
      method: 'GET'
    });
  }

  // Prediction with optional save to database
  static async predictWithOptionalSave(file, imageId = null) {
    const formData = new FormData();
    formData.append('file', file);  // Backend expects 'file' field name
    if (imageId) formData.append('image_id', imageId);

    return this.makeRequest(`${API_BASE_URL}/api/auto?action=predict`, {
      method: 'POST',
      body: formData
    });
  }
}

export default ApiService;

// Export individual functions for backward compatibility
export const fetchAllImages = () => ApiService.getAllImages();
export const fetchImageById = (id) => ApiService.getImageById(id);
export const uploadImageToBackend = (file, name = null) => ApiService.uploadImageWithPrediction(file, name);
export const createImage = (imageData) => ApiService.createImage(imageData);
export const healthCheck = () => ApiService.checkHealth();
