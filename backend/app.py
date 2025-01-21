import joblib
from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# CVD model and scaler
model_cvd_path = 'models/logreg_model1.pkl'
scaler_cvd_path = 'models/scaler1.pkl'

model_cvd = joblib.load(model_cvd_path)
scaler_cvd = joblib.load(scaler_cvd_path)

# Sleep score model and scaler
model_sleep_path = 'models/sleep_quality_model.joblib'
scaler_sleep_path = 'models/scaler.joblib'

model_sleep = joblib.load(model_sleep_path)
scaler_sleep = joblib.load(scaler_sleep_path)

# CVD prediction endpoint
@app.route('/predict-cvd', methods=['POST'])
def predict_cvd():
    data = request.get_json()
    df = pd.DataFrame([data])
    
    # Ensure the DataFrame has the same columns as the training data
    expected_columns = ['age', 'gender', 'height', 'weight', 'systolic_bp', 'diastolic_bp', 'cholesterol', 'glucose', 'smoke', 'alcohol', 'physical_activity']
    for col in expected_columns:
        if col not in df.columns:
            df[col] = 0
    
    df_encoded = pd.get_dummies(df)
    
    # Ensure the encoded DataFrame has the same columns as the training data
    expected_encoded_columns = scaler_cvd.feature_names_in_
    for col in expected_encoded_columns:
        if col not in df_encoded.columns:
            df_encoded[col] = 0
    
    df_encoded = df_encoded[expected_encoded_columns]
    
    scaled_data = scaler_cvd.transform(df_encoded)
    prediction = model_cvd.predict(scaled_data)
    return jsonify({'prediction': prediction.tolist()})

# Sleep score prediction endpoint
@app.route('/predict-sleep', methods=['POST'])
def predict_sleep():
    data = request.get_json()
    df = pd.DataFrame([data])
    
    # Ensure the DataFrame has the same columns as the training data
    expected_columns = ['Gender', 'Age', 'Occupation', 'Sleep Duration', 'Physical Activity Level', 'Stress Level', 'BMI Category', 'Daily Steps']
    for col in expected_columns:
        if col not in df.columns:
            df[col] = 0
    
    df_encoded = pd.get_dummies(df)
    
    # Ensure the encoded DataFrame has the same columns as the training data
    expected_encoded_columns = scaler_sleep.feature_names_in_
    for col in expected_encoded_columns:
        if col not in df_encoded.columns:
            df_encoded[col] = 0
    
    df_encoded = df_encoded[expected_encoded_columns]
    
    scaled_data = scaler_sleep.transform(df_encoded)
    prediction = model_sleep.predict(scaled_data)
    return jsonify({'prediction': prediction.tolist()})
if __name__ == '__main__':
    app.run(debug=True)