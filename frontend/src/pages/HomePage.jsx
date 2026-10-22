import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { FormationsSection } from "../components/home/FormationsSection";
import { HeroSection } from "../components/home/HeroSection";
import { PartnersSection } from "../components/home/PartnersSection";
import { RecruitersSection } from "../components/home/RecruitersSection";
import { TechStackSection } from "../components/home/TechStackSection";
import { TestimonialSection } from "../components/home/TestimonialSection";
import { WhyUsSection } from "../components/home/WhyUsSection";
import { InfoSessionModal } from "../components/modals/InfoSessionModal";
import { NotifyModal } from "../components/modals/NotifyModal";

export function HomePage() {
  const location = useLocation();
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [isInfoSessionOpen, setIsInfoSessionOpen] = useState(false);
  useEffect(() => {
    if (location.hash) {
      const a = document.querySelector(location.hash);
      if (a) {
        setTimeout(
          () =>
            a.scrollIntoView({
              behavior: "smooth",
            }),
          100,
        );
      }
    }
  }, [location.hash]);
  return (
    <main className="font-sans text-[#4b5563]">
      <HeroSection />
      <FormationsSection
        onNotify={() => setIsNotifyOpen(true)}
        onInfoSession={() => setIsInfoSessionOpen(true)}
      />
      <TechStackSection />
      <WhyUsSection />
      <TestimonialSection />
      <RecruitersSection />
      <PartnersSection />
      <NotifyModal
        isOpen={isNotifyOpen}
        onClose={() => setIsNotifyOpen(false)}
      />
      <InfoSessionModal
        isOpen={isInfoSessionOpen}
        onClose={() => setIsInfoSessionOpen(false)}
      />
    </main>
  );
}
