from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# Fix imports to use relative imports
from routes.chatbot_routes import router as chatbot_router

app = FastAPI(title="Campus Plate Connect API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(chatbot_router, prefix="/api/chatbot", tags=["chatbot"])

@app.get("/")
async def root():
    return {"message": "Welcome to Campus Plate Connect API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)