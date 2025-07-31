export default function AnalysisDisplay({ data, variant = "default" }) {
  if (!data) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Image Column */}
      <div className="space-y-4">
        <div className={`relative overflow-hidden rounded-xl border border-gray-700 ${
          variant === "detailed" ? "max-w-md mx-auto" : ""
        }`}>
          <img
            src={data.url}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-400 text-center">{data.name}</p>
        <p className="text-xs text-gray-500 text-center">
          {new Date(data.uploaded_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      {/* Analysis Column */}
      <div className="space-y-8">
        {/* Main Prediction */}
        <div>
          <h3 className="text-xl text-gray-300 mb-3">Prediction Result:</h3>
          <p className="text-3xl font-light text-white mb-4 capitalize">
            {data.information?.tumor_type || 'Pending Analysis'}
          </p>
          
          {data.information?.confidence && (
            <div className="relative pt-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-300">
                  Confidence Score
                </span>
                <span className="text-sm font-medium text-gray-300">
                  {(data.information.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <div className="overflow-hidden h-3 text-xs flex rounded-full bg-gray-700/50">
                <div
                  style={{ width: `${data.information.confidence * 100}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full bg-emerald-500 transition-all duration-500"
                />
              </div>
            </div>
          )}
        </div>

        {/* Class Probabilities */}
        {data.information?.class_probabilities && (
          <div>
            <h3 className="text-xl text-gray-300 mb-4">Class Probabilities:</h3>
            <div className="space-y-4">
              {Object.entries(data.information.class_probabilities).map(([className, probability]) => (
                <div key={className}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300 capitalize">
                      {className}
                    </span>
                    <span className="text-sm font-medium text-gray-300">
                      {(probability * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="overflow-hidden h-2 text-xs flex rounded-full bg-gray-700/50">
                    <div
                      style={{ width: `${probability * 100}%` }}
                      className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center rounded-full transition-all duration-500 ${
                        probability === data.information.confidence 
                          ? 'bg-emerald-500' 
                          : 'bg-gray-600'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}