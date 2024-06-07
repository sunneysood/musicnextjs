import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpComingWebnairs from "@/components/UpComingWebnairs";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] anitaliased bg-grid-white/[0.02]">
      <Herosection></Herosection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <TestimonialCards></TestimonialCards>
      <UpComingWebnairs></UpComingWebnairs>
      <Instructors></Instructors>
      <Footer></Footer>
    </main>
  );
}
