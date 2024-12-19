# Bone Fracture Diagnosis AI Model

This repository contains an AI model for diagnosing bone fractures from X-ray images. The model classifies input images as **fractured** or **healthy** using a convolutional neural network (CNN). It is designed to assist in medical diagnosis with high accuracy and efficiency.

---

## Features
- **Custom CNN Architecture**: Built and trained from scratch.
- **Data Augmentation**: Enhanced training with artificially augmented images.
- **Transfer Learning**: Optional integration with pre-trained models like VGG16 for better accuracy.
- **Model Optimization**: Includes pruning, quantization, and early stopping to maximize performance.
- **Evaluation Metrics**: Accuracy, confusion matrix, and classification reports for in-depth model analysis.

---

## Dataset
- X-ray images of bones classified into `fractured` and `healthy` categories.
- Ensure the dataset is organized as follows:
```
dataset/
├──train/
├────────fractured/
├────────healthy/
├──test/
├────────fractured/
├────────healthy/
```
# Dataset Download
if want to use mine mode then
You can download the dataset using the link below:
[Download Dataset](https://1024terabox.com/s/1eSkl5GzsHKEjchzRPbwMhQ)

---

## Requirements
Install the python from it official site [Download Python](https://www.python.org/downloads/)
Note: Ensure to install the python version between 3.8 to 3.10

Install dependencies using:
```
pip install -r requirements.txt
```

---

## Key Libraries
- TensorFlow
- Keras
- Numpy
- Scikit-learn

---

## Training the Model
1. Clone the repository:
```
git clone https://github.com/WIZARD3022/Ai-Diagnosis-Tool.git
cd Ai-Diagnosis-Tool-main
```
2. Train the model:
```
python train_model.py
```

# Model Download
if want to use mine mode then
You can download the Model using the link below:
[Download Model](https://mega.nz/folder/tyVWFYSa#PmMt55pnUPykRyDIGy7iag)

3. The training script includes:
- Data augmentation
- Transfer learning options
- Model saving

---

## Testing the Model
Run the following command to evaluate the model on test images:
```
python test_model.py
```
# Outputs:
- Predictions for each test image.
- Total counts of fractured and healthy cases.
- Evaluation metrics:
  - Accuracy
  - Precision
  - Recall
  - F1-Score

---

## Directory Structure
```
bone-fracture-diagnosis/
├── dataset/                 # Directory for train/test data
├── train_model.py           # Script to train the model
├── test_model.py            # Script to test the model
├── requirements.txt         # Dependencies
├── README.md                # Project documentation
└── saved_model/             # Directory for the trained model
```

---

## Optimization Techniques
1. Pruning: Remove unnecessary connections for faster inference.
2. Quantization: Reduce model size while maintaining accuracy.
3. Early Stopping: Stop training when validation loss stops improving.

---

## Results
- Traning Accuracy: 95%
- Testing Accuracy: 78%

---

## Future Enhancements
- Expand dataset for improved generalization.
- Fine-tune the model for different bone types.
- Deploy the model using TensorFlow Lite for mobile and edge devices.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Acknowleadgments
- TensorFlow and Keras communities for their extensive documentation.
- Open-source datasets for training and validation.

---

## Contributing
Contributions are welcome! Please fork this repository and submit a pull request for any feature enhancements or bug fixes.
```
This `README.md` file is now ready to be included in your GitHub repository for the AI-based bone fracture diagnosis project. It provides clear instructions and details for users and contributors.
```
