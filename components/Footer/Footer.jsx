import Link from "next/link";
import Socials from "../socials";

export default function Footer() {
  return (
    <footer
      className="py-10 bg-dark text-white relative z-0 lamp__container"
      id="footer"
    >
      <div className="container flex flex-col relative z-10">
        <div className="flex flex-row items-start justify-between flex-wrap gap-10">
          <div className="flex flex-col gap-5 w-full sm:w-2/5">
            <Link href={"/"}>
              <a
                title="Yusolve"
                role="link"
                className="w-[140px] sm:w-[180px] block"
              >
                <img src="/images/logo-yellow.png" alt="logo" title="Yusolve" />
              </a>
            </Link>
            <p>
              YUSOLVE is your trusted partner in trucking business solutions,
              providing comprehensive services to help you navigate the
              complexities of the industry
            </p>
            <p>
              128 Sunset Blvd <br />
              New Castle, DE 19720 <br />
              Phone:{" "}
              <a
                href="tel:+1 216 377 1111"
                className="hover:text-main transition-colors duration-150"
              >
                +1 216 377 1111
              </a>{" "}
              <br />
              <a
                href="mailto:yusolvellc@gmail.com"
                className="hover:text-main transition-colors duration-150"
              >
                yusolvellc@gmail.com
              </a>
            </p>
          </div>
          <div className="flex flex-row text-white items-start gap-8 sm:gap-20 w-full sm:w-auto">
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-xl sm:pb-5">Company</h2>
              <Link href={"/about"}>
                <a
                  role="link"
                  title="About us"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  About us
                </a>
              </Link>
              <Link href={"/contact"}>
                <a
                  role="link"
                  title="Contact us"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  Contact us
                </a>
              </Link>
              <Link href={"#"}>
                <a
                  role="link"
                  title="Blog"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  Blog
                </a>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold text-xl sm:pb-5">Legal</h2>
              <Link href={"/about"}>
                <a
                  role="link"
                  title="Privacy Police"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  Privacy Police
                </a>
              </Link>
              <Link href={"/contact"}>
                <a
                  role="link"
                  title="Terms of Service"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  Terms of Service
                </a>
              </Link>
              <Link href={"#"}>
                <a
                  role="link"
                  title="Cookies Policy"
                  className="text-gray-300 hover:text-main transition-colors duration-150"
                >
                  Cookies Policy
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-10 h-[1px] my-14"></div>
        <div className="flex items-center justify-between sm:flex-row flex-col text-center gap-5">
          <Socials />
          <p>© Yusolve LLC. All rights reserved. 2026 - present</p>
        </div>
      </div>
    </footer>
  );
}
