export default function DevelopmentPage() {
  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* Full-page Background Gradient with Overlay */}

      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/16.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-full w-full mx-auto">
            <h1 className="text-6xl font-light text-white mb-4">
              Development Overview
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
              A deeper look into how NeuroView was built
            </p>

            <div className="mt-16 max-w-4xl mx-auto">
              <p className="text-white/90 leading-relaxed mb-8 font-light">
                The development of NeuroView was grounded in a practical
                research objective: to build a deep learning system capable of
                analyzing brain MRI scans for tumor detection. This system was
                designed with clinical use in mind, focusing on accuracy,
                interpretability, and speed.
              </p>

              <p className="text-white/90 leading-relaxed font-light">
                Unlike many implementations that rely on pre-trained
                architectures,{" "}
                <span className="font-medium">
                  NeuroView's neural network was built entirely from scratch.
                </span>{" "}
                Each layer and parameter was designed, tuned, and tested to suit
                the specific characteristics of brain imaging data.
              </p>
            </div>
          </div>
        </section>

        {/* Development Steps Section */}
        <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="max-w-2xl mx-auto space-y-16">
              {/* Dataset & Preprocessing */}
              <div>
                <img
                  src="/dp.png"
                  alt="Dataset & Preprocessing"
                  className="w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-light mb-4">
                  Dataset & Preprocessing
                </h3>

                <div className="mt-16 max-w-4xl mx-auto">
                  <p className="text-white/90 leading-relaxed mb-8 font-light">
                    The Brain Tumor MRI Dataset, curated by Masoud Nickparvar,
                    is a large and diverse collection of 7,023 human brain MRI
                    images designed to support the classification and detection
                    of brain tumors using machine learning and deep learning
                    techniques. The dataset is organized into four classes:
                    glioma, meningioma, pituitary, and no tumor, providing a
                    comprehensive foundation for multi-class tumor diagnosis and
                    differentiation.
                    <br />
                    <br />
                    Compiled from Figshare, SARTAJ, and Br35H, this dataset
                    addresses limitations of earlier collections by providing a
                    more reliable resource for model training and testing. Its
                    main goal is to improve medical imaging through early tumor
                    detection, accurate classification, and precise localization
                    to support clinical decision-making.
                    <br />
                    <br />
                    The dataset includes both training and testing subsets, with
                    the training folder containing 5,712 MRI images used to
                    train the model, and the testing folder containing 1,311
                    images used to evaluate its performance.
                    <br />
                    <br />
                    As part of the preprocessing step, all the grayscale images
                    were tranformed into pixel values and stored them in a CSV
                    file to facilitate easier handling and integration with
                    neural networks.
                  </p>

                  {/* Dataset Analytics */}
                  <div className="mt-16 space-y-12">
                    {/* Class Distribution Chart */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                      <h4 className="text-xl font-medium text-white mb-6 text-center">
                        Dataset Class Distribution
                      </h4>
                      <div className="space-y-4">
                        {/* Glioma */}
                        <div className="flex items-center space-x-4">
                          <div className="w-24 text-sm text-white/80 font-medium">
                            Glioma
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full flex items-center justify-end pr-3"
                              style={{ width: "23.1%" }}
                            >
                              <span className="text-xs font-medium text-white">
                                1,321 (23.1%)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Meningioma */}
                        <div className="flex items-center space-x-4">
                          <div className="w-24 text-sm text-white/80 font-medium">
                            Meningioma
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full flex items-center justify-end pr-3"
                              style={{ width: "23.4%" }}
                            >
                              <span className="text-xs font-medium text-white">
                                1,339 (23.4%)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* No Tumor */}
                        <div className="flex items-center space-x-4">
                          <div className="w-24 text-sm text-white/80 font-medium">
                            No Tumor
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-red-500 to-red-400 h-full rounded-full flex items-center justify-end pr-3"
                              style={{ width: "27.9%" }}
                            >
                              <span className="text-xs font-medium text-white">
                                1,595 (27.9%)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Pituitary */}
                        <div className="flex items-center space-x-4">
                          <div className="w-24 text-sm text-white/80 font-medium">
                            Pituitary
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-8 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-purple-400 h-full rounded-full flex items-center justify-end pr-3"
                              style={{ width: "25.5%" }}
                            >
                              <span className="text-xs font-medium text-white">
                                1,457 (25.5%)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-white/60 text-sm mt-4">
                        Total: 5,712 training images
                      </div>
                    </div>

                    {/* Training vs Testing Split Chart */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                      <h4 className="text-xl font-medium text-white mb-6 text-center">
                        Training vs Testing Split
                      </h4>
                      <div className="space-y-6">
                        {/* Training Set */}
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-white/80 font-medium">
                            Training
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-10 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-cyan-500 to-cyan-400 h-full rounded-full flex items-center justify-center"
                              style={{ width: "81.3%" }}
                            >
                              <span className="text-sm font-medium text-white">
                                5,712 images (81.3%)
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Testing Set */}
                        <div className="flex items-center space-x-4">
                          <div className="w-20 text-sm text-white/80 font-medium">
                            Testing
                          </div>
                          <div className="flex-1 bg-white/10 rounded-full h-10 relative overflow-hidden">
                            <div
                              className="bg-gradient-to-r from-orange-500 to-orange-400 h-full rounded-full flex items-center justify-center"
                              style={{ width: "18.7%" }}
                            >
                              <span className="text-xs font-medium text-white">
                                1,311 images (18.7%)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-white/60 text-sm mt-4">
                        Total Dataset: 7,023 MRI images
                      </div>
                    </div>

                    {/* Dataset Balance Analysis */}
                    <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                      <h4 className="text-xl font-medium text-white mb-4 text-center">
                        Dataset Balance Analysis
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-6 text-center">
                        <div className="flex-1 space-y-2">
                          <div className="text-lg font-medium text-cyan-400">
                            Imbalance Ratio: 1.21
                          </div>
                          <div className="text-sm text-white/60">
                            (Max/Min class sizes)
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="text-lg font-medium text-green-400">
                            Relatively Balanced
                          </div>
                          <div className="text-sm text-white/60">
                            Dataset assessment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed font-light"></p>
                </div>
              </div>

              {/* Model Architecture */}
              <div>
                <img
                  src="/ma.png"
                  alt="Model Architecture"
                  className="w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Model Architecture</h3>

                <div className="mt-16 max-w-4xl mx-auto">
                  <p className="text-white/90 leading-relaxed mb-8 font-light">
                    The model is a deep neural network designed for multi-class
                    classification of brain tumor MRI images. The input layer
                    receives 4,096 features, representing the flattened
                    grayscale pixel values from preprocessed MRI scans. It
                    consists of two hidden layers:
                    <br />
                    <br />
                    Hidden Layer 1: 128 neurons with Leaky ReLU activation and a
                    dropout rate of 0.4
                    <br />
                    <br />
                    Hidden Layer 2: 64 neurons with Leaky ReLU activation and
                    dropout at 0.4
                    <br />
                    <br />
                    To prevent overfitting and promote generalization, L2
                    regularization (λ = 0.01) is applied to all weight matrices.
                    The output layer has 4 neurons corresponding to the four
                    tumor classes, using Softmax activation to output class
                    probabilities.
                  </p>
                </div>
              </div>

              {/* Training & Optimization */}
              <div>
                <img
                  src="/to.png"
                  alt="Training & Optimization"
                  className="w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-light mb-4">
                  Training & Optimization
                </h3>

                <div className="mt-16 max-w-4xl mx-auto">
                  <p className="text-white/90 leading-relaxed mb-8 font-light">
                    Several strategies were used to improve learning stability
                    and model generalization.
                    <br />
                    <br />
                    <span className="font-bold">Dropout</span> was applied to
                    both hidden layers to randomly deactivate neurons during
                    training.
                    <br />
                    <br />
                    <span className="font-bold">L2 regularization</span>{" "}
                    penalized large weight values to encourage simpler models.
                    <br />
                    <br />A{" "}
                    <span className="font-bold">
                      class-weighted cross-entropy loss
                    </span>{" "}
                    was used to address class imbalance, with weights computed
                    based on class frequencies.
                    <br />
                    <br />
                    <span className="font-bold">Stratified splitting</span>{" "}
                    ensured that both training and validation sets maintained
                    the original class distribution.
                    <br />
                    <br />
                    The model was trained using the{" "}
                    <span className="font-bold">Adam optimizer</span> with
                    hyperparameters β₁ = 0.9, β₂ = 0.999, and ε = 1e-8. The
                    learning rate decayed exponentially every 5 epochs, starting
                    from 0.0005.
                    <br />
                    <br />
                    <span className="font-bold">
                      Manual forward and backward propagation
                    </span>{" "}
                    was implemented.
                    <br />
                    <br />
                    <span className="font-bold">Dropout masks</span> were used
                    during the backward pass.
                    <br />
                    <br />
                    <span className="font-bold">Gradients</span> were adjusted
                    with both L2 penalties and class/sample weights.
                    <br />
                    <br />
                    The training loop ran for up to 200 epochs, with{" "}
                    <span className="font-bold">early stopping</span> triggered
                    after 15 epochs without improvement in validation loss.
                    <br />
                    <br />
                    The best model weights were restored after training.
                  </p>
                </div>
              </div>

              {/* Evaluation Metrics */}
              <div>
                <img
                  src="/em.png"
                  alt="Evaluation Metrics"
                  className="w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-light mb-4">Evaluation Metrics</h3>
                <div className="mt-16 max-w-4xl mx-auto">
                  <p className="text-white/90 leading-relaxed mb-6 font-light">
                    The model demonstrated{" "}
                    <span className="font-semibold">
                      high classification performance
                    </span>{" "}
                    on unseen data. It achieved a{" "}
                    <span className="font-semibold">
                      test accuracy of 93.52%
                    </span>
                    , closely matching the{" "}
                    <span className="font-semibold">
                      validation accuracy of 93.61%
                    </span>
                    , resulting in a{" "}
                    <span className="font-semibold">
                      generalization gap of just 0.1%
                    </span>
                    . This small gap indicates that the model{" "}
                    <span className="font-semibold">generalizes well</span> and
                    is <span className="font-semibold">not overfitting</span> to
                    the training data.
                  </p>

                  <p className="text-white/90 leading-relaxed mb-6 font-light">
                    For the{" "}
                    <span className="font-semibold">classification report</span>
                    , the model consistently performed well across all{" "}
                    <span className="font-semibold">four tumor classes</span>.
                    The{" "}
                    <span className="font-semibold">
                      pituitary tumor class (Class 2)
                    </span>{" "}
                    stood out with the{" "}
                    <span className="font-semibold">
                      highest F1-score of 0.97
                    </span>
                    , reflecting both strong{" "}
                    <span className="font-semibold">precision and recall</span>.
                    On the other hand,{" "}
                    <span className="font-semibold">meningioma (Class 1)</span>{" "}
                    showed slightly lower
                    <span className="font-semibold">recall at 0.86</span>,
                    suggesting the model was less confident or occasionally
                    misclassified these samples.
                  </p>

                  <p className="text-white/90 leading-relaxed mb-6 font-light">
                    The <span className="font-semibold">confusion matrix</span>{" "}
                    confirmed this trend, showing{" "}
                    <span className="font-semibold">
                      very few misclassifications
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold">
                      well-separated class predictions
                    </span>
                    . Additionally, the{" "}
                    <span className="font-semibold">
                      prediction distribution
                    </span>{" "}
                    remained proportionally aligned with the{" "}
                    <span className="font-semibold">
                      true class distribution
                    </span>
                    , suggesting <span className="font-semibold">no bias</span>{" "}
                    toward over- or under-represented classes.
                  </p>

                  {/* Confusion Matrix Visualization */}
                  <div className="mt-16 bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                    <h4 className="text-xl font-medium text-white mb-8 text-center">
                      Confusion Matrix
                    </h4>

                    <div className="overflow-x-auto">
                      <div className="min-w-full">
                        {/* Matrix Headers */}
                        <div className="flex items-center mb-4">
                          <div className="w-32"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white/80 mb-2 text-center">
                              Predicted Label
                            </div>
                            <div className="flex items-center">
                              <div className="w-20 pr-3"></div>
                              <div className="flex flex-1">
                                <div className="flex-1 text-xs text-white/60 text-center py-2 mx-0.5">
                                  Class 0<br />
                                  Glioma
                                </div>
                                <div className="flex-1 text-xs text-white/60 text-center py-2 mx-0.5">
                                  Class 1<br />
                                  Meningioma
                                </div>
                                <div className="flex-1 text-xs text-white/60 text-center py-2 mx-0.5">
                                  Class 2<br />
                                  Pituitary
                                </div>
                                <div className="flex-1 text-xs text-white/60 text-center py-2 mx-0.5">
                                  Class 3<br />
                                  No Tumor
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Matrix Rows */}
                        <div className="flex items-center">
                          {/* Y-axis label */}
                          <div className="w-32 flex items-center justify-center">
                            <div className="transform -rotate-90 text-sm font-medium text-white/80 whitespace-nowrap">
                              True Label
                            </div>
                          </div>

                          {/* Matrix Grid */}
                          <div className="flex-1">
                            {/* Class 0 - Glioma */}
                            <div className="flex items-center mb-1">
                              <div className="w-20 text-xs text-white/60 text-right pr-3">
                                Class 0<br />
                                Glioma
                              </div>
                              <div className="flex flex-1">
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.8)",
                                  }}
                                >
                                  268
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.3)",
                                  }}
                                >
                                  30
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                                  }}
                                >
                                  1
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                                  }}
                                >
                                  1
                                </div>
                              </div>
                            </div>

                            {/* Class 1 - Meningioma */}
                            <div className="flex items-center mb-1">
                              <div className="w-20 text-xs text-white/60 text-right pr-3">
                                Class 1<br />
                                Meningioma
                              </div>
                              <div className="flex flex-1">
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                  }}
                                >
                                  19
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.75)",
                                  }}
                                >
                                  263
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                  }}
                                >
                                  19
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                                  }}
                                >
                                  5
                                </div>
                              </div>
                            </div>

                            {/* Class 2 - Pituitary */}
                            <div className="flex items-center mb-1">
                              <div className="w-20 text-xs text-white/60 text-right pr-3">
                                Class 2<br />
                                Pituitary
                              </div>
                              <div className="flex flex-1">
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                                  }}
                                >
                                  0
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.15)",
                                  }}
                                >
                                  6
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(30, 64, 175, 0.9)",
                                  }}
                                >
                                  399
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                                  }}
                                >
                                  0
                                </div>
                              </div>
                            </div>

                            {/* Class 3 - No Tumor */}
                            <div className="flex items-center">
                              <div className="w-20 text-xs text-white/60 text-right pr-3">
                                Class 3<br />
                                No Tumor
                              </div>
                              <div className="flex flex-1">
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                                  }}
                                >
                                  1
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.12)",
                                  }}
                                >
                                  3
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                                  }}
                                >
                                  0
                                </div>
                                <div
                                  className="flex-1 h-16 mx-0.5 rounded flex items-center justify-center text-white font-medium text-sm"
                                  style={{
                                    backgroundColor: "rgba(59, 130, 246, 0.85)",
                                  }}
                                >
                                  296
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Color Scale Legend */}
                        <div className="mt-8 flex items-center justify-center space-x-4">
                          <span className="text-xs text-white/60">Low</span>
                          <div className="flex space-x-1">
                            <div
                              className="w-6 h-4 rounded"
                              style={{
                                backgroundColor: "rgba(59, 130, 246, 0.1)",
                              }}
                            ></div>
                            <div
                              className="w-6 h-4 rounded"
                              style={{
                                backgroundColor: "rgba(59, 130, 246, 0.3)",
                              }}
                            ></div>
                            <div
                              className="w-6 h-4 rounded"
                              style={{
                                backgroundColor: "rgba(59, 130, 246, 0.5)",
                              }}
                            ></div>
                            <div
                              className="w-6 h-4 rounded"
                              style={{
                                backgroundColor: "rgba(59, 130, 246, 0.7)",
                              }}
                            ></div>
                            <div
                              className="w-6 h-4 rounded"
                              style={{
                                backgroundColor: "rgba(30, 64, 175, 0.9)",
                              }}
                            ></div>
                          </div>
                          <span className="text-xs text-white/60">High</span>
                        </div>

                        {/* Matrix Statistics */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-cyan-400">
                              93.52%
                            </div>
                            <div className="text-xs text-white/60">
                              Overall Accuracy
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-green-400">
                              1226
                            </div>
                            <div className="text-xs text-white/60">
                              Correct Predictions
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-orange-400">
                              85
                            </div>
                            <div className="text-xs text-white/60">
                              Misclassifications
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-lg font-medium text-purple-400">
                              1311
                            </div>
                            <div className="text-xs text-white/60">
                              Total Samples
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Classification Report */}
                  <div className="mt-16 bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                    <h4 className="text-xl font-medium text-white mb-8 text-center">
                      Classification Report
                    </h4>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        {/* Header */}
                        <thead>
                          <tr className="border-b border-white/20">
                            <th className="text-left py-3 px-4 text-white/80 font-medium">
                              Class
                            </th>
                            <th className="text-center py-3 px-4 text-white/80 font-medium">
                              Precision
                            </th>
                            <th className="text-center py-3 px-4 text-white/80 font-medium">
                              Recall
                            </th>
                            <th className="text-center py-3 px-4 text-white/80 font-medium">
                              F1-Score
                            </th>
                            <th className="text-center py-3 px-4 text-white/80 font-medium">
                              Support
                            </th>
                          </tr>
                        </thead>

                        {/* Class Rows */}
                        <tbody>
                          {/* Class 0 - Glioma */}
                          <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded bg-blue-500"></div>
                                <span className="text-white/90 font-medium">
                                  0 - Glioma
                                </span>
                              </div>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.89
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.91
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              300
                            </td>
                          </tr>

                          {/* Class 1 - Meningioma */}
                          <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded bg-green-500"></div>
                                <span className="text-white/90 font-medium">
                                  1 - Meningioma
                                </span>
                              </div>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.87
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.86
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.87
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              306
                            </td>
                          </tr>

                          {/* Class 2 - Pituitary */}
                          <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded bg-purple-500"></div>
                                <span className="text-white/90 font-medium">
                                  2 - Pituitary
                                </span>
                              </div>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.95
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.99
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded font-semibold">
                                0.97
                              </span>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              405
                            </td>
                          </tr>

                          {/* Class 3 - No Tumor */}
                          <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-4 h-4 rounded bg-red-500"></div>
                                <span className="text-white/90 font-medium">
                                  3 - No Tumor
                                </span>
                              </div>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.98
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.99
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded font-semibold">
                                0.98
                              </span>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              300
                            </td>
                          </tr>
                        </tbody>

                        {/* Summary Section */}
                        <tbody className="border-t-2 border-white/30">
                          {/* Overall Accuracy */}
                          <tr className="border-b border-white/10">
                            <td className="py-3 px-4 text-cyan-400 font-semibold">
                              Accuracy
                            </td>
                            <td className="text-center py-3 px-4 text-white/60">
                              -
                            </td>
                            <td className="text-center py-3 px-4 text-white/60">
                              -
                            </td>
                            <td className="text-center py-3 px-4">
                              <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded font-mono font-semibold">
                                0.94
                              </span>
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              1311
                            </td>
                          </tr>

                          {/* Macro Average */}
                          <tr className="border-b border-white/10">
                            <td className="py-3 px-4 text-orange-400 font-semibold">
                              Macro Avg
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              1311
                            </td>
                          </tr>

                          {/* Weighted Average */}
                          <tr>
                            <td className="py-3 px-4 text-purple-400 font-semibold">
                              Weighted Avg
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.94
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              0.93
                            </td>
                            <td className="text-center py-3 px-4 text-white/90 font-mono">
                              1311
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <p className="text-white/90 leading-relaxed mb-10 mt-10 font-light">
                    Overall, the metrics indicate a{" "}
                    <span className="font-semibold">
                      well-regularized, accurate, and robust model
                    </span>{" "}
                    suitable for{" "}
                    <span className="font-semibold">
                      real-world tumor classification tasks
                    </span>
                    .
                  </p>
                </div>
              </div>

              {/* Future Improvements */}
              <div>
                <img
                  src="/fi.png"
                  alt="Future Improvements"
                  className="w-auto mx-auto mb-4"
                />
                <h3 className="text-2xl font-light mb-4">
                  Future Improvements
                </h3>

                <div className="mt-16 max-w-4xl mx-auto">
                  <p className="text-white/90 leading-relaxed mb-8 font-light">
                    While NeuroView has shown excellent performance in
                    classifying brain tumors from MRI scans, several
                    opportunities remain to enhance the neural network
                    architecture and its real-world applicability.
                    <br />
                    <br />
                    One key area for enhancing the neural network is{" "}
                    <span className="font-bold">data augmentation</span>. By
                    applying techniques such as image rotation, zooming,
                    flipping, and noise injection during training, the model can
                    be exposed to a wider range of input variations. This helps
                    improve generalization, allowing the network to better
                    handle real-world clinical conditions where MRI images may
                    differ in orientation, contrast, or clarity.
                    <br />
                    <br />
                    Another promising direction lies in enhancing the use of
                    convolutional neural networks (CNNs) to process entire MRI
                    volumes rather than isolated slices. While the current model
                    works on individual 2D images, this limits its ability to
                    capture spatial relationships across multiple slices. By
                    extending the CNN to analyze volumetric data as a whole, the
                    network can learn deeper and more contextualized features
                    that reflect the full structure of the brain. This would
                    lead to more precise tumor detection and localization,
                    aligning more closely with clinical diagnostic practices.
                    <br />
                    <br />
                    Although NeuroView was intentionally built from scratch for
                    interpretability and full control over architecture,
                    transfer learning presents an opportunity for future
                    enhancement. By incorporating select pre-trained components
                    such as feature extractors from medical imaging models into
                    the custom network, future versions of NeuroView could
                    potentially benefit from both improved accuracy and faster
                    convergence, especially when training on larger or more
                    diverse datasets.
                    <br />
                    <br />
                    By pursuing these improvements, NeuroView can evolve into a
                    more robust and clinically valuable system for brain tumor
                    detection and analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
