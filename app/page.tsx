import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import MenuGrid from "@/components/MenuGrid";
import GoodTimes from "@/components/GoodTimes";
import PhotoStrip from "@/components/PhotoStrip";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import InstagramGrid from "@/components/InstagramGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <FeaturedCarousel />
      <MenuGrid />
      <GoodTimes />
      <PhotoStrip />
      <Reviews />
      <Visit />
      <InstagramGrid />
      <Footer />
    </>
  );
}
