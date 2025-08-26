import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Award, BarChart3, Clock, Utensils } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Homepage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="flex-1 text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transforming Campus Food Management
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                Innovative solutions for educational institutions to reduce waste, 
                improve nutrition, and create sustainable dining experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => window.location.href = '/login'}>
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Delicious Campus Food" 
                className="w-full h-auto rounded-lg shadow-elegant object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-md">
                <p className="font-bold text-white text-xl">30%</p>
                <p className="text-white text-sm">Food Waste Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30" ref={targetRef}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to revolutionize campus dining experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-card transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Utensils className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Meal Planning</h3>
                  <p className="text-muted-foreground mb-4">
                    AI-powered meal planning that optimizes nutrition, reduces waste, and caters to dietary preferences.
                  </p>
                  <Button variant="link" className="mt-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-card transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                  <p className="text-muted-foreground mb-4">
                    Real-time data insights to track consumption patterns, waste metrics, and cost optimization.
                  </p>
                  <Button variant="link" className="mt-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-card transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Queue Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Streamline dining hall operations with real-time queue monitoring and capacity management.
                  </p>
                  <Button variant="link" className="mt-auto">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Dashboard Services Section */}
       <section className="py-16 md:py-24 bg-white">
         <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Dashboards</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
               Tailored solutions for every stakeholder in the campus food ecosystem
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">Student Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Personalized meal planning, dietary preferences, and campus food ordering
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/student">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Comprehensive management tools for campus-wide food operations
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/admin">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">College Admin Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Institution-level oversight and strategic food service management
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/collegeadmin">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">Teacher Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Faculty meal management, scheduling, and special dietary accommodations
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/teacher">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.5 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">Charity Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Food donation tracking, distribution management, and impact reporting
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/charity">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.6 }}
               viewport={{ once: true }}
             >
               <Card className="h-full hover:shadow-card transition-shadow">
                 <CardContent className="p-6 flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                     </svg>
                   </div>
                   <h3 className="text-xl font-semibold mb-2">Day Scholar Dashboard</h3>
                   <p className="text-muted-foreground mb-4">
                     Commuter meal planning, pre-ordering, and special accommodations
                   </p>
                   <Button variant="link" className="mt-auto" asChild>
                     <a href="/dayscholar">Access Dashboard <ArrowRight className="ml-2 h-4 w-4" /></a>
                   </Button>
                 </CardContent>
               </Card>
             </motion.div>
           </div>
         </div>
       </section>

      {/* Additional space for content */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Campus Dining</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Our platform helps educational institutions reduce food waste and improve dining experiences
          </p>
        </div>
      </section>

      {/* Transforming Campus Dining Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Transforming Campus Dining</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                Campus Plate is dedicated to revolutionizing campus dining through innovative 
                technology and sustainable practices that benefit students, staff, and the environment.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
              <p className="text-muted-foreground">
                We've helped educational institutions reduce food waste by up to 40% while 
                improving student satisfaction and nutritional outcomes across campuses.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;