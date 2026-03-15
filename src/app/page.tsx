import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClassSchedule from "@/components/ClassSchedule";
import Instructors from "@/components/Instructors";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClassSchedule />
      <Instructors />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
