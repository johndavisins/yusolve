import { About, Breadcrumbs, FootBanner, Teams } from "@/components";
import Seo from "@/components/Seo/Seo";
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
      <Breadcrumbs
        title={"About Us"}
        description="YUSOLVE was founded by professionals with deep roots in US trucking compliance. We give carriers access to the same compliance management that large fleets have in-house."
        image={"/images/truck-8.jpg"}
      />
      <About isAbout={true} />
      <Teams />
      <FootBanner />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      info: {
        seo_home_title: "About YUSOLVE | US Trucking Compliance Experts",
        seo_home_keywords: "trucking compliance, FMCSA, DOT audit, safety management",
        seo_home_description:
          "YUSOLVE LLC — dedicated safety and compliance partner for trucking carriers across the US.",
      },
    },
    revalidate: 86400,
  };
}

export default page;
