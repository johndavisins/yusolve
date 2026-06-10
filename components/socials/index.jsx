import React from "react";
import { IconBrandTelegram, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

const data = [
  { title: "Telegram",  url: "https://t.me/yusolve", Icon: IconBrandTelegram },
  { title: "Instagram", url: "#",                    Icon: IconBrandInstagram },
  { title: "Facebook",  url: "#",                    Icon: IconBrandFacebook },
];

export default function Socials() {
  return (
    <div className="flex items-center gap-4">
      {data.map(({ title, url, Icon }, i) => (
        <a key={i} href={url} target="_blank" rel="noreferrer" title={title}
          className="w-10 h-10 rounded-lg border border-white border-opacity-20 flex items-center justify-center transition-all duration-150 hover:border-opacity-60 hover:bg-white hover:bg-opacity-10">
          <Icon size={18} stroke={1.5} color="white" />
        </a>
      ))}
    </div>
  );
}
