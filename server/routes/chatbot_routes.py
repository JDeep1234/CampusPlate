from fastapi import APIRouter
from services.gemini_service import router as gemini_router

router = APIRouter()

# Include the Gemini service routes
router.include_router(gemini_router, prefix="/gemini", tags=["gemini"])