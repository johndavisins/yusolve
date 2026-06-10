import { About, Banner, Costumer, Solutions } from "@/components";
import Seo from "@/components/Seo/Seo";
import WhyUs from "@/components/home/WhyUs";
import ServicesSummary from "@/components/home/ServicesSummary";
import Stats from "@/components/home/Stats";
import HowItWorks from "@/components/home/HowItWorks";
import WhoWeServe from "@/components/home/WhoWeServe";
import ComplianceCost from "@/components/home/ComplianceCost";
import Faq from "@/components/home/Faq";
import { FootBanner } from "@/components";
import { useRouter } from "next/router";
import { useEffect } from "react";

function page({ info }) {
  const router = useRouter();

  useEffect(() => {
    const hash = router.asPath.split("#")[1];
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.asPath]);

  return (
    <>
      <Seo
        title={info?.seo_home_title}
        description={info?.seo_home_description}
        body={info?.seo_home_keywords}
      />

      {/* 1. Hero — video, headline, stats, CTA */}
      <Banner />

      {/* 2. Stats bar — 150+, 98%, 10+, 48 */}
      <Stats />

      {/* 3. About — kim biz, rasm bilan */}
      <About />

      {/* 4. Services summary — 4 ta dark card, checklist */}
      <ServicesSummary />

      {/* 5. Solutions mosaic — 4 ta rasm card */}
      <Solutions />

      {/* 6. Why YUSOLVE — 6 ta feature */}
      <WhyUs />

      {/* 7. Compliance cost — violations table, rasm */}
      <ComplianceCost />

      {/* 8. How it works — 3 qadam */}
      <HowItWorks />

      {/* 9. Who we serve — 4 carrier type + tags */}
      <WhoWeServe />

      {/* 10. Testimonials */}
      <Costumer />

      {/* 11. FAQ accordion */}
      <Faq />

      {/* 12. Final CTA */}
      <FootBanner />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      info: {
        seo_home_title: "YUSOLVE LLC | Trucking Safety & Compliance Solutions",
        seo_home_keywords: "trucking safety, FMCSA compliance, DOT audit, CSA score, driver qualification files",
        seo_home_description:
          "Professional safety and compliance management for US trucking carriers. DOT audits, driver files, HR, insurance, fleet documentation.",
      },
    },
    revalidate: 86400,
  };
}

export default page;
