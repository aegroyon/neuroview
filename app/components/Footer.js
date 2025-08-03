export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="border-t border-gray-800 pt-8">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-12">
            {/* Logo and NeuroView */}
            <div>
              <div className="flex flex-col items-start">
                <div
                  className="w-8 h-8 border-white/30 mr-3"
                  style={{
                    backgroundImage: "url('/Vector.png')",
                    backgroundSize: "cover",
                  }}
                ></div>
                <span className="text-xl font-bold">NeuroView</span>
              </div>
            </div>

            {/* Developers */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 tracking-wider">
                DEVELOPERS
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Georgette Cadiz</li>
                <li>Joshua Dampil</li>
                <li>Adriel Groyon</li>
                <li>Wince Rivano</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-400 tracking-wider">
                RESOURCES
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a
                    href="https://colab.research.google.com/drive/11D2YskCN6pI6SYNq6V6bwGF14eIybfzR?usp=sharing"
                    className="hover:text-white transition-colors"
                  >
                    Google Colab
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kaggle.com/datasets/masoudnickparvar/brain-tumor-mri-dataset"
                    className="hover:text-white transition-colors"
                  >
                    Dataset
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            COPYRIGHT © 2024 NEUROVIEW. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}
