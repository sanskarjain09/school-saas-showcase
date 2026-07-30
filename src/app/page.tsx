import { companyInfo } from "@/data/company";
import { Hero } from "@/components/home/Hero";
import { TrustedSchools } from "@/components/home/TrustedSchools";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { CoreModules } from "@/components/home/CoreModules";
import { AIFeaturesSection } from "@/components/home/AIFeaturesSection";
import { DashboardPreview } from "@/components/home/DashboardPreview";
import { Statistics } from "@/components/home/Statistics";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { AllFeatures } from "@/components/home/AllFeatures";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";
import { WhiteLabel } from "@/components/home/White-lable";
import { Contact } from "@/components/home/Contact";
import { PlatformOverview } from "@/components/home/PlatformOverview";


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: companyInfo.name,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: companyInfo.description,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "99",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustedSchools />
      <PlatformOverview />
      <WhyChooseUs />
      <ProductShowcase />
      <WhiteLabel />
      <CoreModules />
      <AIFeaturesSection />
      <DashboardPreview />
      <Statistics />
      <Testimonials />
      <Contact />
      {/* <Pricing /> */}
      <AllFeatures />
      <FAQ />
      <CTA />
    </>
  );
}
