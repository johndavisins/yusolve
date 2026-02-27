import { Breadcrumbs, FootBanner } from "@/components";
import Seo from "@/components/Seo/Seo";
import { Info } from "@/components/solutions/info";
import { useRouter } from "next/router";

function page({ info, params }) {
  const router = useRouter();

  return (
    <>
      <Seo title={info?.title} description={info?.title} body={info?.title} />
      <Breadcrumbs
        title={info?.title}
        description={`YUSOLVE is your trusted partner in trucking business solutions,
        providing comprehensive services to help you navigate the
        complexities of the industry`}
        image={"/images/main.png"}
      />
      <Info />
      <FootBanner />
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  const data = [
    {
      id: 1,
      title: "Our solutions 1",
    },
    {
      id: 2,
      title: "Our solutions 2",
    },
    {
      id: 3,
      title: "Our solutions 3",
    },
    {
      id: 4,
      title: "Our solutions 4",
    },
    {
      id: 5,
      title: "Our solutions 5",
    },
    {
      id: 6,
      title: "Our solutions 6",
    },
  ];

  //   const info = await axios
  //     .get(`products/detail/${params?.id}`, {
  //       headers: {
  //         "Accept-Language": locale,
  //       },
  //     })
  //     .then((res) => res?.data)
  //     .catch((err) => console.error(err));

  const info = data.find((item) => item.id == params?.id);

  if (!info) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      info: info,
      params,
    },
  };
}

export default page;
