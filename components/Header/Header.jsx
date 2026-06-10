import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 w-full z-10">
      <div className="container">
        <div
          className={`p-3 sm:p-5 rounded-xl border flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "bg-dark border-white border-opacity-20 backdrop-blur-md shadow-lg shadow-black/30"
              : "bg-white bg-opacity-5 border-white backdrop-blur-md"
          }`}
        >
          <Link href="/">
            <a
              title="Yusolve"
              role="link"
              className="w-[120px] sm:w-[160px] block"
            >
              <img src="/images/logo-yellow.png" alt="logo" title="Yusolve" />
            </a>
          </Link>
          <div className="lg:flex hidden items-center gap-14">
            <div title="Solutions" className="relative z-0 group">
              <Link href="/#solutions">
                <a
                  role="link"
                  title="Solutions"
                  className="text-white font-medium hover:text-main"
                >
                  Solutions
                </a>
              </Link>
              <div className="absolute invisible opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible top-full -left-5 w-[200px] flex flex-col items-center justify-center gap-0 p-3 rounded-xl bg-white text-dark backdrop-blur-3xl transition-transform duration-150">
                <Link href="/solutions/1">
                  <a title="Safety" className="font-medium hover:text-main p-2 w-full text-center">
                    Safety & DOT Compliance
                  </a>
                </Link>
                <Link href="/solutions/2">
                  <a title="Fleet" className="font-medium hover:text-main p-2 w-full text-center">
                    Fleet Documentation
                  </a>
                </Link>
                <Link href="/solutions/3">
                  <a title="HR" className="font-medium hover:text-main p-2 w-full text-center">
                    HR & Driver Management
                  </a>
                </Link>
                <Link href="/solutions/4">
                  <a title="Insurance" className="font-medium hover:text-main p-2 w-full text-center">
                    Insurance Consulting
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/about">
              <a
                role="link"
                title="About us"
                className="text-white font-medium hover:text-main"
              >
                About us
              </a>
            </Link>
            <Link href="/contact">
              <a
                role="link"
                title="Contact"
                className="text-white font-medium hover:text-main"
              >
                Contact
              </a>
            </Link>
          </div>
          <Link href={"/contact"}>
            <button
              type="button"
              className="px-5 py-2 bg-white bg-opacity-5 backdrop-blur-lg border border-white rounded-lg text-white hover:bg-white hover:text-dark transition-all duration-150"
            >
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
