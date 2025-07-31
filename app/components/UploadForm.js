// View: Upload form for brain scan images
'use client';
import { useState } from 'react';
import { handleImageUpload } from '../../controllers/imageController';

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
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
    <div>
      <form onSubmit={onSubmit}>
        <input type="file" accept="image/*" onChange={onFileChange} />
        <button type="submit" disabled={loading}>{loading ? 'Uploading...' : 'Upload & Detect'}</button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 8 }}>Error: {error}</div>}
      {result && (
        <div>
          <p>Detection Result: {result.detection}</p>
          <img src={result.imageUrl} alt="Uploaded brain scan" style={{ maxWidth: 200 }} />
        </div>
      )}
    </div>
  );
} 