export default function DevelopmentPage() {
  return (
    <div className="relative bg-black min-h-screen text-white overflow-hidden">
      {/* Full-page Background Gradient with Overlay */}

      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-orange-800" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('../16.png')",
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
                  <p className="text-white/90 leading-relaxed mb-8 font-light">
                    The model demonstrated high classification performance on
                    unseen data. It achieved a test accuracy of 93.52%, closely
                    matching the validation accuracy of 93.61%, resulting in a
                    generalization gap of just 0.1%. This small gap indicates
                    that the model generalizes well and is not overfitting to
                    the training data. For the classification report, the model
                    consistently performed well across all four tumor classes.
                    The pituitary tumor class (Class 2) stood out with the
                    highest F1-score of 0.97, reflecting both strong precision
                    and recall. On the other hand, meningioma (Class 1) showed
                    slightly lower recall at 0.86, suggesting the model was less
                    confident or occasionally misclassified these samples. The
                    confusion matrix confirmed this trend, showing very few
                    misclassifications and well-separated class predictions.
                    Additionally, the prediction distribution remained
                    proportionally aligned with the true class distribution,
                    suggesting no bias toward over- or under-represented
                    classes. Overall, the metrics indicate a well-regularized,
                    accurate, and robust model suitable for real-world tumor
                    classification tasks.
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
