import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/heroSection/HeroSection";
import AboutSection from "./components/aboutSection/AboutSection";
import GeneralTaskSection from "./components/generalTasksSection/GeneralTaskSection";
import OurProjects from "./components/ourProjects/OurProjects";
import ContactUsSection from "./components/contactUsSection/ContactUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GeneralTaskSection />
      <OurProjects />
      <ContactUsSection />
    </>
  );
}
