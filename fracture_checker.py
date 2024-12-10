import sys
import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model


# Load the trained model
model = load_model('models/bone_fracture_model.h5')

def predict_fracture(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    img = img / 255.0  # Normalize the image

    # Predict
    prediction = model.predict(img)
    if prediction > 0.7:
        return "AI Diagnosis Result:Fractured"
    else:
        return "AI Diagnosis Result:Healthy"

if __name__ == "__main__":
    image_path = sys.argv[1]  # Get the image path from Node.js
    result = predict_fracture(image_path)
    print(result)  # Output the result to Node.js
