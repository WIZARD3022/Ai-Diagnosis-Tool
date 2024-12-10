import os
import cv2
import numpy as np
from tensorflow.keras.models import load_model

# Load the trained model
model = load_model('bone_fracture_model.h5')  # Make sure this is the correct path to your model

# Directory containing images to test
test_folder = './xyz-path'  # Update with your test folder location

# Set the expected image size based on model input
image_size = (224, 224)

# Initialize counters
fractured_count = 0
healthy_count = 0

# Function to preprocess images
def preprocess_image(image_path):
    img = cv2.imread(image_path)
    img = cv2.resize(img, image_size)  # Resize image to 224x224 pixels
    img = img / 255.0  # Normalize the image
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    return img

# Loop through the images in the test folder
for filename in os.listdir(test_folder):
    if filename.endswith('.jpg') or filename.endswith('.png'):
        image_path = os.path.join(test_folder, filename)
        
        # Preprocess the image
        img = preprocess_image(image_path)
        
        # Make prediction
        prediction = model.predict(img)[0][0]
        print(f"The value of Prediction is {prediction}")
        # Threshold the prediction (assuming sigmoid activation, 0.5 as the threshold)
        if prediction >= 0.7:
            fractured_count += 1
            print(f"{filename}: Fractured (Prediction: {prediction:.2f})")
        else:
            healthy_count += 1
            print(f"{filename}: Healthy (Prediction: {prediction:.2f})")

# Output the final counts
print(f"Total Fractured: {fractured_count}")
print(f"Total Healthy: {healthy_count}")
