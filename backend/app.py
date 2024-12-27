import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

model_path = 'models/logreg_model1.pkl'  
scaler_path = 'models/scaler1.pkl'  

model = joblib.load(model_path)
scaler = joblib.load(scaler_path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    data_array = [list(data.values())]  
    scaled_data = scaler.transform(data_array)
    prediction = model.predict(scaled_data)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)