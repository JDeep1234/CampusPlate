import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Homepage from "./pages/Homepage";
import HosteliteDashboard from "./pages/HosteliteDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CharityDashboard from "./pages/CharityDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import DayScholarDashboard from "./pages/DayScholarDashboard";
import CollegeAdminDashboard from "./pages/CollegeAdminDashboard";
import StudentAnalytics from "./pages/StudentAnalytics";
import AdminAnalytics from "./pages/AdminAnalytics";
import SmartMealAnalytics from "./pages/SmartMealAnalytics";
import QueuePage from "./pages/QueuePage";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student" element={<HosteliteDashboard />} />
          <Route path="/student/analytics" element={<StudentAnalytics />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/charity" element={<CharityDashboard />} />
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/dayscholar" element={<DayScholarDashboard />} />
          <Route path="/college-admin" element={<CollegeAdminDashboard />} />
          <Route path="/smart-meal-analytics" element={<SmartMealAnalytics />} />
          <Route path="/queue" element={<QueuePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
