import Header from "@/app/components/landing/Header";
import Hero from "@/app/components/landing/Hero";
import SocialProof from "@/app/components/landing/SocialProof";
import ProblemSolution from "@/app/components/landing/ProblemSolution";
import DemoPinned from "@/app/components/landing/DemoPinned";
import Features from "@/app/components/landing/Features";
import Workflow from "@/app/components/landing/Workflow";
import Integrations from "@/app/components/landing/Integrations";
import Security from "@/app/components/landing/Security";
import Pricing from "@/app/components/landing/Pricing";
import FAQ from "@/app/components/landing/FAQ";
import CTA from "@/app/components/landing/CTA";
import Footer from "@/app/components/landing/Footer";

export const metadata = {
  title: "Revisy - Audio Collaboration Reinvented",
  description:
    "The new standard for audio collaboration. Share tracks, get frame-accurate feedback, and approve mixes in real-time.",
  openGraph: {
    title: "Revisy - Audio Collaboration Reinvented",
    description: "Streamline your mix reviews with frame-accurate notes, real-time chat, and instant A/B comparison.",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main className="dark bg-background min-h-screen text-foreground selection:bg-primary/30">
      <Header />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <DemoPinned />
      <Features />
      <Workflow />
      <Integrations />
      <Security />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
