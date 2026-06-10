import { Breadcrumbs, FootBanner } from "@/components";
import Seo from "@/components/Seo/Seo";
import Form from "@/components/contact/form";
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
        title={"Contact Us"}
        description="Whether you need a compliance review or are ready to get started — our team responds within 24 hours."
        image={"/images/truck-9.jpg"}
        isButton={false}
      />
      <Form />
      <FootBanner />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      info: {
        seo_home_title: "Contact YUSOLVE | Free Compliance Consultation",
        seo_home_keywords: "contact yusolve, trucking compliance consultation",
        seo_home_description:
          "Schedule a free consultation. We respond within 24 hours. Call +1 216 377 1111.",
      },
    },
    revalidate: 86400,
  };
}

export default page;
