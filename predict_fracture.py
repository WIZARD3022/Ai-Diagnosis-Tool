import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model

# Load the trained model
model = load_model('bone_fracture_model.h5')

def predict_fracture(img_path):
    img = image.load_img(img_path, target_size=(224, 224))
    img = image.img_to_array(img)
    img = np.expand_dims(img, axis=0)  # Add batch dimension
    img = img / 255.0  # Normalize the image

    # Predict
    prediction = model.predict(img)
    # print(f"The prediction value is {prediction}.")
    if prediction > 0.7:
        return "Fractured"
    else:
        return "Healthy"

# Example usage
image_path = './xyz-path'  # Replace with your input image path
result = predict_fracture(image_path)
print(f"The bone is {result}.")
