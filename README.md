# 🔥 Fire Detection System ( TEMPORARY README )

Intelligent fire detection system that integrates physical sensors (ESP32), a Machine Learning model and a real-time web interface.

## 📁 Structure of the project

```bash
fire-detection-system/
│
├── embedded/  # ESP32 code (sensor monitoring system)  
├── backend/   # FastAPI code (API + ML model)
├── frontend/  # NextJS code (web interface)  
```

### 🔄 Communication Flow

```
ESP32   (sensors) 
  ↓     [HTTP POST]
FastAPI (ML Model)
  ↓     [JSON Response]
Next.js (Dashboard)
```