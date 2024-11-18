from flask import Flask, request, jsonify
import joblib
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from datetime import datetime

app = Flask(__name__)

# Load the trained models and scaler
scaler = joblib.load('scaler.pkl')
logistic_regression_model = joblib.load('logistic_regression.pkl')

# Load LabelEncoder for 'start' and 'stop'
start_stop_encoder = joblib.load('location_encoder.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    # Input date as a string (e.g., '2023-11-18')
    input_date = data['date']
    
    # Convert input date to datetime object
    date_obj = datetime.strptime(input_date, '%Y-%m-%d')
    
    # Extract date components
    day_of_week = date_obj.weekday()  # 0 (Monday) to 6 (Sunday)
    date_only = date_obj.day
    month = date_obj.month
    year = date_obj.year

    # Input data
    start = data['start']
    stop = data['stop']
    miles = data['miles']
    start_hour = data['start_hour']
    
    # Label encode the 'start' and 'stop' locations
    start_encoded = start_stop_encoder.transform([start])[0]
    stop_encoded = start_stop_encoder.transform([stop])[0]
    
    # Prepare the data for prediction
    input_data = pd.DataFrame({
        'start': [start_encoded],  # Encoded start location
        'stop': [stop_encoded],    # Encoded stop location
        'miles': [miles],
        'start_hour': [start_hour],
        'day_of_week': [day_of_week],
        'date_only': [date_only],
        'month': [month],
        'year': [year]
    })

    # Scaling the input data
    input_scaled = scaler.transform(input_data)

    # Make a prediction
    prediction = logistic_regression_model.predict(input_scaled)

    # Calculate the driver commission, Uber profit, and fuel cost
    fare = prediction[0]
    driver_commission = fare * 0.82  # 82% for the driver
    uber_profit = fare * 0.11  # 11% for Uber
    fuel_cost = fare * 0.40  # 40% for fuel cost

    # Return the results in JSON format
    result = {
        'fare': fare,
        'driver_commission': driver_commission,
        'uber_profit': uber_profit,
        'fuel_cost': fuel_cost
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
# features = [
#         'start', 'stop', 'miles',  'start_hour',
#         'day_of_week', 'date_only',
#        'month', 'year'
#     ]

# target column = 'fare'

