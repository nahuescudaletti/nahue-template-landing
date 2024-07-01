import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer/";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OurHelp } from "@/components/OurHelp";
import { PaymentsMethods } from "@/components/PaymentsMethods";
import { Team } from "@/components/Team";
import Testimonials from "@/components/Testimonials/Testimonials";
import { TrackRecord } from "@/components/TrackRecord";
import WppFloating from "@/components/WppFloating/WppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/>
      <FirstBlock/>
      <TrackRecord/>
      <OurHelp/>
      <Testimonials/>
      <Team/>
      <WppFloating/>
      <PaymentsMethods />
      <Footer />
    </>
  )
}
