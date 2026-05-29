import HeroSection from '../components/landing/HeroSection';
import WhySkillBridge from '../components/landing/WhySkillBridge';
import LearningHub from '../components/landing/LearningHub';
import CodingPractice from '../components/landing/CodingPractice';
import AIMentor from '../components/landing/AIMentor';
import ProjectMarketplace from '../components/landing/ProjectMarketplace';
import CareerCenter from '../components/landing/CareerCenter';
import PricingSection from '../components/landing/PricingSection';

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-24 md:gap-40">
      <HeroSection />
      <WhySkillBridge />
      <LearningHub />
      <CodingPractice />
      <AIMentor />
      <ProjectMarketplace />
      <CareerCenter />
      <PricingSection />
    </div>
  );
}
