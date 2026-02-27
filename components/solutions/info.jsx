import React from "react";
import { Timeline } from "../ui/timeline";

export function Info() {
  const data = [
    {
      title: "Overweight Permits",
      content: (
        <div>
          <p className="text-dark text-sm md:text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos repellendus, error cumque molestias ad numquam ex quae,
            accusamus impedit itaque cum culpa porro tempora. Vero asperiores
            impedit, quae aperiam porro velit fugit nihil facere corrupti
            mollitia deleniti dicta tenetur incidunt, fugiat reprehenderit
            accusantium repellat totam. Eum, necessitatibus distinctio accusamus
            corrupti voluptates mollitia doloremque porro illo ut tenetur soluta
            iste recusandae a obcaecati facilis hic, laudantium nemo quas
            ducimus ullam nam corporis veniam harum? Magnam, voluptatem.
            Consequuntur voluptatibus asperiores quod incidunt numquam nemo
            sint? Cupiditate cum omnis tenetur sed eos consequatur iure!
            Mollitia placeat impedit dolore atque cupiditate vitae ab possimus.
          </p>
        </div>
      ),
    },
    {
      title: "Oversize Permits",
      content: (
        <div>
          <p className="text-dark text-sm md:text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos repellendus, error cumque molestias ad numquam ex quae,
            accusamus impedit itaque cum culpa porro tempora. Vero asperiores
            impedit, quae aperiam porro velit fugit nihil facere corrupti
            mollitia deleniti dicta tenetur incidunt, fugiat reprehenderit
            accusantium repellat totam. Eum, necessitatibus distinctio accusamus
            corrupti voluptates mollitia doloremque porro illo ut tenetur soluta
            iste recusandae a obcaecati facilis hic, laudantium nemo quas
            ducimus ullam nam corporis veniam harum? Magnam, voluptatem.
            Consequuntur voluptatibus asperiores quod incidunt numquam nemo
            sint? Cupiditate cum omnis tenetur sed eos consequatur iure!
            Mollitia placeat impedit dolore atque cupiditate vitae ab possimus.
          </p>
        </div>
      ),
    },
    {
      title: "Oversize Permits",
      content: (
        <div>
          <p className="text-dark text-sm md:text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos repellendus, error cumque molestias ad numquam ex quae,
            accusamus impedit itaque cum culpa porro tempora. Vero asperiores
            impedit, quae aperiam porro velit fugit nihil facere corrupti
            mollitia deleniti dicta tenetur incidunt, fugiat reprehenderit
            accusantium repellat totam. Eum, necessitatibus distinctio accusamus
            corrupti voluptates mollitia doloremque porro illo ut tenetur soluta
            iste recusandae a obcaecati facilis hic, laudantium nemo quas
            ducimus ullam nam corporis veniam harum? Magnam, voluptatem.
            Consequuntur voluptatibus asperiores quod incidunt numquam nemo
            sint? Cupiditate cum omnis tenetur sed eos consequatur iure!
            Mollitia placeat impedit dolore atque cupiditate vitae ab possimus.
          </p>
        </div>
      ),
    },
    {
      title: "Oversize Permits",
      content: (
        <div>
          <p className="text-dark text-sm md:text-base font-normal mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos repellendus, error cumque molestias ad numquam ex quae,
            accusamus impedit itaque cum culpa porro tempora. Vero asperiores
            impedit, quae aperiam porro velit fugit nihil facere corrupti
            mollitia deleniti dicta tenetur incidunt, fugiat reprehenderit
            accusantium repellat totam. Eum, necessitatibus distinctio accusamus
            corrupti voluptates mollitia doloremque porro illo ut tenetur soluta
            iste recusandae a obcaecati facilis hic, laudantium nemo quas
            ducimus ullam nam corporis veniam harum? Magnam, voluptatem.
            Consequuntur voluptatibus asperiores quod incidunt numquam nemo
            sint? Cupiditate cum omnis tenetur sed eos consequatur iure!
            Mollitia placeat impedit dolore atque cupiditate vitae ab possimus.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
