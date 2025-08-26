import os
import google.generativeai as genai
from fastapi import APIRouter, HTTPException, Body
from pydantic import BaseModel
from typing import List

# Model for chat request
class ChatRequest(BaseModel):
    message: str
    history: List[dict] = []

# Model for chat response
class ChatResponse(BaseModel):
    response: str

# Initialize the router
router = APIRouter()

# Configure the Gemini API
API_KEY = os.getenv("GEMINI_API_KEY", "AIzaSyBsTemrlRf-_p4AQCclmcP1ziWCCIpHGec")  # Using provided API key
genai.configure(api_key=API_KEY)

# Set up the model
model = genai.GenerativeModel('gemini-1.5-flash')

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest = Body(...)):
    try:
        # Format the conversation history for Gemini
        chat_history = []
        for msg in request.history:
            role = "user" if msg.get("isUser", False) else "model"
            chat_history.append({"role": role, "parts": [msg.get("content", "")]})
        
        # Add the current message
        chat_history.append({"role": "user", "parts": [request.message]})
        
        # Generate response from Gemini
        chat = model.start_chat(history=chat_history)
        response = chat.send_message(request.message)
        
        # Remove markdown formatting symbols like ** from the response
        formatted_response = response.text.replace("**", "").replace("*", "")
        
        return ChatResponse(response=formatted_response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating response: {str(e)}")