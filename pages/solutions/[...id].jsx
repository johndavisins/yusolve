import { Breadcrumbs, FootBanner } from "@/components";
import Seo from "@/components/Seo/Seo";
import { Info } from "@/components/solutions/info";

const solutionMeta = {
  1: {
    title: "Safety & DOT Compliance | YUSOLVE",
    description: "FMCSA compliance, DQF management, CSA score monitoring, DOT audit preparation.",
    image: "/images/truck-1.jpg",
    breadcrumbTitle: "Safety & DOT Compliance",
    breadcrumbDesc: "Complete safety and compliance management — from DOT audits to CSA score improvement.",
  },
  2: {
    title: "Fleet Documentation | YUSOLVE",
    description: "Vehicle registration, IFTA, annual inspections, maintenance records, ELD compliance.",
    image: "/images/truck-2.jpg",
    breadcrumbTitle: "Fleet Documentation",
    breadcrumbDesc: "Every truck. Every document. Always current — keeping your fleet legal and audit-ready.",
  },
  3: {
    title: "HR & Driver Management | YUSOLVE",
    description: "Driver qualification files, drug & alcohol program, HR support for trucking carriers.",
    image: "/images/truck-6.jpg",
    breadcrumbTitle: "HR & Driver Management",
    breadcrumbDesc: "Hire compliant, manage smart, terminate clean — full FMCSA HR compliance.",
  },
  4: {
    title: "Insurance Consulting | YUSOLVE",
    description: "Reduce premiums, close coverage gaps, smarter insurance strategy for trucking.",
    image: "/images/truck-5.jpg",
    breadcrumbTitle: "Insurance Consulting",
    breadcrumbDesc: "Better coverage, lower premiums — we connect your safety record to your insurance costs.",
  },
};

function page({ id }) {
  const meta = solutionMeta[id] || solutionMeta[1];

  return (
    <>
      <Seo title={meta.title} description={meta.description} body={meta.title} />
      <Breadcrumbs
        title={meta.breadcrumbTitle}
        description={meta.breadcrumbDesc}
        image={meta.image}
      />
      <Info id={id} />
      <FootBanner />
    </>
  );
}

// getStaticPaths + getStaticProps → build vaqtida render, sahifalar tezkor
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: ["1"] } },
      { params: { id: ["2"] } },
      { params: { id: ["3"] } },
      { params: { id: ["4"] } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params?.id?.[0]) || 1;
  if (![1, 2, 3, 4].includes(id)) return { notFound: true };

  return {
    props: { id },
    revalidate: 86400,
  };
}

export default page;
