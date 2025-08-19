# NeuroView 🧠

**Advanced Brain Tumor Detection using AI-powered MRI Analysis**

**🚀 [TRY LIVE DEMO](https://neuroview-brainscans.vercel.app) | 🧠 Upload & Analyze Brain Scans Instantly**

NeuroView is a comprehensive web application designed for medical professionals to analyze brain MRI scans using custom-built artificial intelligence. The platform provides accurate, fast, and user-friendly tumor detection with detailed visual insights to support clinical decision-making.

![NeuroView Demo](./public/demo%20neuroview.gif)

## 🎯 Overview

**🌐 [Try NeuroView Live](https://neuroview-brainscans.vercel.app) - No installation required!**

NeuroView combines cutting-edge machine learning with an intuitive interface to deliver:

- **High Accuracy**: 93.52% classification accuracy on test data
- **Multi-class Detection**: Identifies Glioma, Meningioma, Pituitary tumors, and No Tumor cases
- **Real-time Analysis**: Fast processing of MRI scans with immediate results
- **Visual Insights**: Annotated images with highlighted tumor regions and confidence scores
- **Clinical Focus**: Designed specifically for medical environments and workflows

## ✨ Features

### 🔬 **Tumor Detection**

- Advanced machine learning models analyze MRI brain scans with high precision
- Identifies potential tumor regions in seconds
- Multi-class classification for different tumor types

### ⚡ **Fast & Intuitive Interface**

- Clean, medical-environment-friendly design
- Drag-and-drop file upload
- Real-time progress indicators
- Mobile-responsive design

### 📊 **Detailed Visual Insights**

- Confidence scores and class probabilities
- Interactive result displays
- Historical scan collection and management
- Comprehensive analysis reports

### 📱 **Cross-Platform Access**

- Web application accessible from any browser
- Android mobile app available for on-the-go analysis
- Responsive design for tablets and mobile devices

## 🚀 Quick Start

### 🌐 **Try the Live Demo**

**NeuroView is live and ready to use!**

**🔗 [Visit NeuroView](https://neuroview-brainscans.vercel.app)**

Simply visit the website to:

- Upload brain MRI scans instantly
- Get AI-powered tumor analysis in seconds
- View detailed results with confidence scores
- Access your analysis history

_No installation required - start analyzing brain scans immediately!_

### 🛠️ **Local Development Setup**

Want to run NeuroView locally or contribute to development?

#### Prerequisites

- Node.js 18+
- npm or yarn
- Flask backend server (Python 3.8+)

#### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/neuroview.git
   cd neuroview
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   # Create .env.local file
   NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:5001
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.4.4
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Components**: Headless UI
- **Font**: Funnel Display (Google Fonts)

### Backend

- **API**: Flask (Python)
- **Database**: Supabase
- **ML Framework**: Custom Neural Network (built from scratch)
- **Image Processing**: PIL/OpenCV

### Deployment

- **Frontend**: Vercel/Netlify compatible
- **Backend**: Flask server deployment
- **Database**: Supabase cloud

## 📖 Usage

### Basic Workflow

**🌐 [Start at NeuroView Live](https://neuroview-brainscans.vercel.app)**

1. **Upload MRI Scan**

   - Visit [neuroview-brainscans.vercel.app](https://neuroview-brainscans.vercel.app)
   - Navigate to the Input page or click "Upload"
   - Drag and drop or browse for JPEG/PNG files
   - Supported formats: JPEG, PNG
   - File limit: 1 image per analysis

2. **Analysis Process**

   - Click "Start Analysis" to begin processing
   - AI model analyzes the uploaded scan in real-time
   - Results display automatically upon completion

3. **View Results**

   - Prediction result with tumor type classification
   - Confidence score with visual progress bar
   - Class probabilities for all tumor types
   - Annotated image with highlighted regions

4. **Manage Collection**
   - Access previous analyses in the Collection page
   - Filter results by tumor type (Glioma, Meningioma, Pituitary, No Tumor)
   - View detailed analysis for each scan

### Supported File Types

- **Image Formats**: JPEG, PNG
- **File Size**: Optimized for standard MRI scan resolutions
- **Color**: Grayscale MRI images (color images are automatically converted)

## 🧠 Technical Details

### Machine Learning Model

NeuroView uses a **custom-built neural network** designed specifically for brain tumor classification:

#### Architecture

- **Input Layer**: 4,096 features (64x64 pixel MRI scans)
- **Hidden Layer 1**: 128 neurons with Leaky ReLU activation
- **Hidden Layer 2**: 64 neurons with Leaky ReLU activation
- **Output Layer**: 4 neurons (softmax) for multi-class classification
- **Regularization**: L2 regularization (λ = 0.01) and Dropout (0.4)

#### Training Details

- **Dataset**: 7,023 brain MRI images
- **Classes**: Glioma, Meningioma, Pituitary, No Tumor
- **Training Split**: 5,712 images (81.3%)
- **Test Split**: 1,311 images (18.7%)
- **Optimization**: Adam optimizer with exponential learning rate decay
- **Performance**: 93.52% test accuracy, 93.61% validation accuracy

#### Key Features

- **Built from Scratch**: No pre-trained models used
- **Custom Architecture**: Designed specifically for brain imaging data
- **Robust Regularization**: Prevents overfitting with dropout and L2 penalties
- **Class Balancing**: Weighted loss function handles class imbalances

### API Endpoints

The Flask backend provides the following endpoints:

```javascript
// Get all analyzed images
GET / api / auto;

// Analyze new image
POST / api / auto;
// Form data: file (image file), name (optional)

// Get specific image by ID
POST / api / auto;
// JSON: { "id": "image_id" }
```

### Database Schema

Supabase tables store:

- **Images**: Metadata, upload timestamps, file URLs
- **Predictions**: AI analysis results, confidence scores, class probabilities
- **Users**: User management and authentication (if enabled)

## 🏗️ Project Structure

```
neuroview/
├── app/                    # Next.js App Router
│   ├── components/         # React components
│   │   ├── AnalysisDisplay.js   # Results visualization
│   │   ├── Gallery.js           # Image collection
│   │   ├── Header.js            # Navigation
│   │   ├── UploadForm.js        # File upload
│   │   └── ...
│   ├── collection/         # Collection page
│   ├── input/             # Upload & analysis page
│   ├── development/       # Technical overview
│   ├── layout.js          # Root layout
│   └── page.js           # Landing page
├── public/               # Static assets
│   ├── *.png            # UI icons and images
│   └── demo neuroview.gif
├── styles/              # Global styles
├── utils/               # API utilities
│   └── flaskAPI.js     # Backend integration
├── package.json         # Dependencies
└── README.md           # This file
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# API Configuration
NEXT_PUBLIC_API_BASE_URL=http://localhost:5001

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Enable authentication
NEXT_PUBLIC_ENABLE_AUTH=false
```

### Live Production vs Local Development

**🌐 Production (Live)**:

- **Live Website**: [neuroview-brainscans.vercel.app](https://neuroview-brainscans.vercel.app)
- **Hosting**: Vercel deployment
- **API**: Production Flask backend
- **Database**: Supabase cloud database
- **Ready to use**: No setup required!

**🛠️ Local Development**:

- API runs on `http://localhost:5001`
- Next.js dev server on `http://localhost:3000`
- Hot reloading enabled
- Requires local setup (see Local Development Setup above)

## 📱 Mobile App

NeuroView is also available as an Android application:

- **Download**: [Android APK](https://drive.google.com/file/d/16TX8yjrVMSKREfLqu6894fVfgWV34iRx/view?usp=sharing)
- **Features**: Full upload and analysis capabilities
- **Compatibility**: Android 6.0+
- **Offline**: Results are cached locally

## 🧪 Development Deep Dive

For detailed technical information about the AI model, training process, and evaluation metrics, visit the **Development Overview** page:

**🌐 [View Technical Details](https://neuroview-brainscans.vercel.app/development)**

### Key Technical Highlights:

- **Custom Neural Network**: Built entirely from scratch without pre-trained models
- **Dataset**: Brain Tumor MRI Dataset by Masoud Nickparvar (7,023 images)
- **Preprocessing**: Images converted to pixel values and stored in CSV format
- **Training**: Manual forward/backward propagation with custom optimization
- **Evaluation**: Comprehensive confusion matrix and classification reports

## 🤝 Contributing

We welcome contributions to NeuroView! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit changes: `git commit -m 'Add amazing feature'`
5. Push to branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Areas for Contribution

- **UI/UX Improvements**: Enhance the user interface and experience
- **Model Enhancements**: Improve accuracy or add new features
- **Documentation**: Expand guides and technical documentation
- **Testing**: Add unit tests and integration tests
- **Mobile**: Enhance the Android app or create iOS version
- **Accessibility**: Improve accessibility features

### Development Guidelines

- Follow existing code style and patterns
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Credits & Acknowledgments

### Dataset

- **Brain Tumor MRI Dataset** by Masoud Nickparvar
- Sources: Figshare, SARTAJ, and Br35H datasets
- **Total Images**: 7,023 human brain MRI images
- **Classes**: Glioma, Meningioma, Pituitary, No Tumor

### Technology Stack

- **Next.js** - React framework for production
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Open source Firebase alternative
- **Headless UI** - Unstyled, accessible UI components

### Development Team

- AI Model Architecture & Training
- Frontend Development & UI/UX Design
- Backend API Development
- Mobile Application Development

## 🔮 Future Improvements

### Planned Enhancements

- **Data Augmentation**: Image rotation, zooming, and noise injection
- **3D CNN Integration**: Process entire MRI volumes instead of 2D slices
- **Transfer Learning**: Incorporate medical imaging pre-trained components
- **Real-time Collaboration**: Multi-user analysis and sharing
- **Advanced Visualizations**: 3D tumor visualization and measurement tools

### Research Directions

- Integration with hospital PACS systems
- Support for additional imaging modalities
- Automated report generation
- Clinical decision support features

## 📞 Support

If you encounter any issues or have questions:

1. **Check the Documentation**: Review this README and in-app help
2. **Search Issues**: Look through existing GitHub issues
3. **Create New Issue**: Open a detailed issue report
4. **Discussion**: Use GitHub Discussions for general questions

---

**NeuroView** - Empowering medical professionals with AI-driven brain tumor detection for faster diagnoses and better patient outcomes.

_Built with ❤️ for the medical community_
