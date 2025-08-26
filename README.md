# Campus Plate Forward 🍽️🌱

> **From Plate to Purpose: Revolutionizing Food Waste Management in Educational Institutions**

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-brightgreen.svg)](https://web.dev/progressive-web-apps/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-red.svg)](https://fastapi.tiangolo.com/)
[![AI Powered](https://img.shields.io/badge/AI-Powered-orange.svg)](https://gemini.google.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Campus Plate Forward** is an AI-powered Progressive Web App that revolutionizes food waste management in educational institutions by creating a comprehensive ecosystem connecting students, canteen administrators, NGOs, and sustainability partners.

## 🌟 Key Features

### 🎯 Three-Phase Approach
- **🛡️ Waste Prevention (Pre-Meal)** - Smart meal RSVP & AI attendance forecasting
- **🔄 Waste Redistribution (Post-Meal)** - Real-time surplus alerts & NGO coordination  
- **♻️ Waste Sustainability (Beyond Meal)** - AI-powered recycling & composting insights

### 🤖 AI-Driven Intelligence
- **Menu Insights**: LLM-powered nutrition recommendations and meal explanations
- **Surplus Optimization**: AI prioritizes NGO pickups by urgency and proximity
- **Waste Classification**: Automated categorization of kitchen waste with optimal disposal routing
- **Impact Analytics**: Converts food savings into carbon footprint and water conservation metrics

Impact Analytics: Converts food savings into carbon footprint and water conservation metrics

### 📱 Multi-Role Dashboards
- **Student Dashboard**: 10-second meal RSVP, gamified eco-impact tracking
- **Mess Admin**: Live headcount predictions, surplus reporting, AI cooking optimization
- **Charity Partners**: Prioritized surplus alerts, driver logistics, impact reporting
- **College Administration**: Multi-canteen analytics, sustainability scorecards

## 🏗️ System Architecture

<img width="443" height="458" alt="image" src="https://github.com/user-attachments/assets/e62bd013-c206-4b54-bbfd-6827e5e6eae6" />
<img width="788" height="441" alt="image" src="https://github.com/user-attachments/assets/dfaa5894-1894-40db-afd4-0b7441165304" />



## 🔗 Architecture Links  

- **High-Level System Architecture**  
  [View on Figma](https://www.figma.com/board/z2AkKQjYMUs31oEC5rozOb/Untitled?node-id=0-1&t=J1Tyl751bynsVsiY-1)  

- **Data Processing Phase**  
  [View on Figma](https://www.figma.com/board/z2AkKQjYMUs31oEC5rozOb/Untitled?node-id=0-1&t=J1Tyl751bynsVsiY-1)  



### Tech Stack Overview

#### Frontend Layer
- **React PWA** - Progressive Web App with offline capabilities
- **TailwindCSS** - Mobile-first responsive design
- **Real-time Updates** - Socket.io for live notifications

#### Backend Services  
- **Node.js + Express** - Core API server with authentication
- **FastAPI (Python)** - ML service for AI predictions and analytics
- **Socket.io** - Real-time communication layer

#### AI/ML Integration
- **Gemini LLM** - Menu insights and sustainability recommendations via MCP
- **Attendance Forecasting** - Machine learning models for headcount prediction
- **Impact Analytics** - Carbon and water footprint calculations

#### Data Layer
- **MongoDB** - Primary database for user data, RSVPs, and analytics

#### External Integrations
- **Maps Integration** - Real-time driver tracking and route optimization
- **Fast API** - API connections 

## 🚀 Quick Start

### Prerequisites
```bash
node.js >= 18.0.0
python >= 3.9
mongodb >= 5.0
```

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/campus-plate-forward.git
cd campus-plate-forward
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Install backend dependencies**
```bash
cd ../backend
npm install
```

4. **Setup ML service**
```bash
cd ../ml-service
pip install -r requirements.txt
```

5. **Environment Configuration**
```bash
# Copy environment templates
cp .env.example .env

# Configure your environment variables
MONGODB_URI=mongodb://localhost:27017/campus-plate
GEMINI_API_KEY=your_gemini_api_key
MAPS_API_KEY=your_maps_api_key
```

6. **Start the development servers**
```bash
# Terminal 1: Frontend (React PWA)
cd frontend && npm start

# Terminal 2: Backend API
cd backend && npm run dev

# Terminal 3: ML Service
cd ml-service && uvicorn main:app --reload

# Terminal 4: MongoDB
mongod
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8000`
- ML Service: `http://localhost:8001`

## 📱 Usage Guide

### For Students
1. **Daily RSVP**: Receive push notifications at 8 PM to confirm meal attendance
2. **Menu Insights**: Get AI-powered nutrition tips for upcoming meals
3. **Eco-Impact**: Track your contribution to waste reduction and sustainability
4. **Gamification**: Compete with peers and earn sustainability badges

### For Canteen Administrators
1. **Smart Forecasting**: View AI-predicted attendance with confidence intervals
2. **Cooking Optimization**: Get recommendations for batch cooking and portion control
3. **Surplus Management**: Quick surplus reporting with instant NGO notifications
4. **Waste Tracking**: Log kitchen waste and receive AI disposal recommendations

### For NGO Partners
1. **Priority Alerts**: Receive surplus notifications ranked by urgency and distance
2. **Route Optimization**: AI-suggested pickup routes for multiple canteens
3. **QR Validation**: Scan QR codes to confirm successful food collection
4. **Impact Reports**: Monthly analytics showing meals rescued and environmental impact

### For College Administration
1. **Multi-Canteen View**: Aggregated analytics across all dining facilities
2. **Load Balancing**: AI suggestions for redistributing crowds and resources
3. **Sustainability Hub**: Comprehensive waste stream tracking and partner management
4. **Executive Reports**: Monthly sustainability scorecards for management

## 🤖 AI Features Deep Dive

### Attendance Forecasting Model
```python
# Example prediction flow
features = {
    'rsvp_count': current_rsvps,
    'historical_avg': historical_data,
    'weather': weather_api_data,
    'campus_events': event_calendar,
    'day_of_week': datetime.weekday(),
    'exam_period': academic_calendar
}

predicted_attendance = ml_model.predict(features)
confidence_interval = ml_model.predict_interval(features)
```

### Waste Classification AI
- **Image Recognition**: Classifies waste types from photos
- **Disposal Routing**: Matches waste categories to optimal disposal methods
- **Impact Calculation**: Estimates environmental benefits of proper disposal

### LLM Integration (Gemini via MCP)
- **Menu Analysis**: Nutritional breakdowns and dietary recommendations
- **Sustainability Tips**: Personalized eco-friendly suggestions
- **Impact Storytelling**: Converts metrics into engaging narratives

## 📊 Impact Metrics

### Environmental Benefits
- **Carbon Footprint Reduction**: Track CO₂ equivalent savings
- **Water Conservation**: Calculate water saved through waste prevention
- **Waste Diversion**: Measure materials redirected from landfills

### Social Impact
- **Meals Rescued**: Surplus food converted to NGO meal distributions  
- **Community Engagement**: Students and staff participation rates
- **Sustainability Education**: Awareness and behavior change metrics

### Operational Efficiency
- **Food Cost Savings**: Reduced over-preparation and waste
- **Resource Optimization**: Better inventory and staff planning
- **Process Automation**: Time saved through AI-powered workflows

## 🔧 API Documentation

### Core Endpoints

#### Authentication
```http
POST /api/auth/login
POST /api/auth/register
POST /api/auth/refresh
```

#### RSVP Management  
```http
GET /api/rsvp/today
POST /api/rsvp/submit
PUT /api/rsvp/update/{id}
```

#### Surplus Tracking
```http
POST /api/surplus/report
GET /api/surplus/active
PUT /api/surplus/pickup/{id}
```

#### Analytics
```http
GET /api/analytics/dashboard
GET /api/analytics/impact
GET /api/analytics/forecasts
```

### ML Service Endpoints
```http
POST /ml/predict/attendance
POST /ml/classify/waste
POST /ml/analyze/impact
GET /ml/insights/menu
```

## 🧪 Testing

### Frontend Testing
```bash
cd frontend
npm test              # Unit tests
npm run test:e2e      # End-to-end tests
npm run test:coverage # Coverage report
```

### Backend Testing
```bash
cd backend
npm test              # API tests
npm run test:integration # Integration tests
```

### ML Service Testing
```bash
cd ml-service
pytest                # ML model tests
pytest --cov=.        # Coverage report
```

## 🚀Expected Deployment

### Production Build
```bash
# Build frontend PWA
cd frontend && npm run build

# Build backend
cd backend && npm run build

# Package ML service
cd ml-service && docker build -t campus-plate-ml .
```

### Docker Deployment
```bash
docker-compose up -d
```

### Expected Cloud Deployment
- **Frontend**: Netlify/Vercel with PWA optimization
- **Backend**: Railway/Render with auto-scaling
- **ML Service**: Google Cloud Run for serverless ML
- **Database**: MongoDB Atlas for global distribution


---

**Made with 💚 for a sustainable future**
