import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./ui/hero/hero";
import ServicesOverview from "./ui/servicesOverview/servicesOverview";
import HowItWorks from "./ui/How it works/howitworks";
import CallToAction from "./ui/cta/cta";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <CallToAction />
    </main>
  );
}
