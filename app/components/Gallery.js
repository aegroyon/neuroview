"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchAllImages } from "../../services/apiService";

export default function Gallery({ filter = "All" }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchAllImages();
        // Backend returns {count: number, data: [...]} format
        setImages(response.data || []);
      } catch (err) {
        console.error("Failed to fetch images:", err);
        setError(err.message);
        setImages([]);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Filter images based on the selected filter
  const filteredImages =
    filter === "All"
      ? images
      : images.filter(
          (img) =>
            img.information &&
            img.information.tumor_type &&
            img.information.tumor_type.toLowerCase() === filter.toLowerCase()
        );

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error)
    return <div className="text-red-400 text-center">Error: {error}</div>;

  return (
    <div className="max-h-[70vh] overflow-y-auto pr-4 px-8 pt-3">
      {/* Filter information header */}
      <div className="mb-6 text-center">
        <div className="text-gray-400 text-sm mb-2">
          {filter === "All"
            ? `Showing all images (${images.length} total)`
            : `Showing ${filter} images (${filteredImages.length} found)`}
        </div>
        {filter !== "All" && filteredImages.length === 0 && (
          <div className="text-gray-500 text-sm">
            No images found with tumor type: "{filter}"
          </div>
        )}
      </div>

      {!filteredImages.length ? (
        <div className="text-white text-center py-8">
          {filter === "All"
            ? "No images uploaded yet."
            : `No ${filter} images found. Try selecting a different filter.`}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <Link key={img.id} href={`/collection/${img.id}`}>
              <div className="bg-transparent border border-gray-600 rounded-lg p-3 hover:border-gray-400 hover:bg-gray-800/20 cursor-pointer transition-all duration-300 transform hover:scale-105">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="text-white font-light text-base truncate">
                    {img.name}
                  </h3>
                  <p className="text-gray-400 text-sm font-light">
                    {img.information
                      ? `${img.information.tumor_type} (${(
                          img.information.confidence * 100
                        ).toFixed(1)}%)`
                      : "Pending Analysis"}
                  </p>
                  <p className="text-gray-400 text-xs font-light">
                    {new Date(img.uploaded_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <div className="mt-3 text-right">
                  <span className="text-gray-400 text-xs hover:text-white transition-colors underline">
                    View Details &gt;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .max-h-\[70vh\]::-webkit-scrollbar {
          width: 6px;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-track {
          background: transparent;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .max-h-\[70vh\]::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
}
