# 🔥 Fire Detection System ( temporary README )

Intelligent fire detection system that integrates physical sensors (ESP32), a Machine Learning model and a real-time web interface.

## 📁 Structure of the project

```bash
fire-detection-system/
│
├── embedded/  # ESP32 code (sensor monitoring system)  
├── backend/   # FastAPI code (API + ML model)
├── frontend/  # NextJS code (web interface)  
└── model/     # ML model 
```

### 🔄 Communication Flow

```
ESP32   (sensors) 
  ↓     [HTTP POST]
FastAPI (ML Model)
  ↓     [JSON Response]
Next.js (Dashboard)
```

## 📡 Embedded

IoT system that uses an ESP32-S3 board to monitor 3 sensors and send data periodically to the backend via HTTP.

### 🛰️ Sensors used:

- DHT22 – Temperature and humidity sensor

- MQ-2 – Gas/smoke sensor

- LDR – Light sensor

### 🔧 Stack:

- PlatformIO

- Arduino Framework

## 🐍 Backend (FastAPI)

Receives data from the ESP32 and classifies it using a machine learning model to determine if there is an active fire.

### 📊 Features:

- RESTful API to receive sensor data (POST /dados)

- Integration with trained model (.pkl via scikit-learn or joblib)

- Returns diagnosis: {"incendio": true/false}

- Stores latest data for frontend visualization (optional: DB or in-memory)

### 🔧 Stack:

- FastAPI

- Scikit-learn or TensorFlow (for model loading)

- Joblib or pickle (for model persistence)

## 🌐 Frontend (Next.js)

Displays the current sensor readings and the result of the fire detection diagnosis.

### 📊 Features:

- Dashboard with live or periodic data updates

- Visual indicators for:

  - Temperature

  - Humidity

  - Gas concentration

  - Light level

  - Fire detection status

## 🔧 Stack:

- Next.js (App Router)

- Tailwind CSS

- React Hooks + SWR or Axios

- Chart.js or Recharts (for graphs, optional)