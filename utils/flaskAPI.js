const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:5001";

// Generic request handler
async function makeRequest(url, options = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `HTTP error! status: ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("Flask API Request failed:", error);
    throw error;
  }
}

// Get all images
export async function getAllImages() {
  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "GET",
  });
}

// Get specific image by ID
export async function getImageById(imageId) {
  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: imageId }),
  });
}

// Create image record (JSON)
export async function createImage(imageData) {
  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(imageData),
  });
}

// Upload image with automatic prediction and save to database
export async function uploadImageWithPrediction(file, name = null) {
  const formData = new FormData();
  formData.append("file", file);
  if (name) formData.append("name", name);

  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "POST",
    body: formData,
  });
}

// Direct prediction without saving to database
export async function predictBrainTumor(file) {
  const formData = new FormData();
  formData.append("file", file);

  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "POST",
    body: formData,
  });
}

// Prediction with optional save to database
export async function predictWithOptionalSave(file, imageId = null) {
  const formData = new FormData();
  formData.append("file", file);
  if (imageId) formData.append("image_id", imageId);

  return makeRequest(`${API_BASE_URL}/api/auto`, {
    method: "POST",
    body: formData,
  });
}
