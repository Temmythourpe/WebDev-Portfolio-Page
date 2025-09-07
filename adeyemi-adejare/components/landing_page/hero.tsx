import Header from "@/components/layout/header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Urbanist } from "next/font/google";
import Link from "next/link";

const cv = "/files/Adeyemi-Temitope-Adejare-FlowCV-Resume-20250905.pdf";
const urbanist = Urbanist({ subsets: ["latin"] });

export default function Hero() {
  return (
    <div id="home" className="relative w-full h-screen pt-5">
      <Header />

      {/* Main Introductions */}
      <div className="relative pt-12">
        <Image
          src="/images/Vector.png"
          alt="vector"
          width={20}
          height={20}
          className="absolute md:right-[36rem] md:top-[2rem]"
        />
        <Image
          src="/images/Vector2.png"
          alt="vector"
          width={35}
          height={35}
          className="absolute md:left-[23rem] md:bottom-[-2rem]"
        />
        <Badge className="bg-transparent text-[18px] px-4 rounded-full border-[1px] border-black text-black font-[400] mx-auto block ">
          Hello!
        </Badge>
        <div>
          <h1
            className={`grid text-6xl font-semibold text-center ${urbanist.className}`}
          >
            <span>
              I'm <span className="text-primary">Adeyemi</span>,
            </span>
            <span>IT Administrator</span>
          </h1>
        </div>
      </div>

      <div className="flex justify-between px-8 pt-20">
        <div>
          <Image
            src="/images/quote-up.png"
            alt="quote"
            width={20}
            height={20}
            className="pb-3"
          />
          <p className="font-[500] text-[#344054]">
            Adeyemi’s outstanding IT administration
            <br /> kept our systems running smoothly
            <br /> and securely.
          </p>
        </div>
        <div className="text-right">
          <div className="flex justify-end gap-1 pb-1">
            {Array.from({ length: 5 }, (_, index) => (
              <Image
                key={index}
                src="/images/star.png"
                alt="star"
                width={15}
                height={15}
              />
            ))}
          </div>
          <h2
            className={`${urbanist.className} text-3xl font-bold grid leading-tighter`}
          >
            <span>3+ Years</span>
            <span
              className={`${urbanist.className} text-[14px] text-right font-[500]`}
            >
              Experience
            </span>
          </h2>
        </div>
      </div>

      {/* Bottom Images */}
      <Image
        src="/images/Ellipse.png"
        alt="Ellipse Background"
        width={600}
        height={400}
        className="absolute bottom-0 -translate-x-1/2 left-1/2"
      />
      <Image
        src="/images/adeyemi.png"
        alt="Profile Picture"
        width={700}
        height={700}
        className="absolute bottom-0 -translate-x-1/2 left-1/2"
      />
      <div className="absolute -translate-x-1/2 rounded-full left-1/2 bottom-2 bg-white/10 backdrop-blur-2xl border-[1px] border-[#C9C9C9] p-2 flex items-center space-x-3">
        <Link href={cv} download>
          <Button className="px-6 rounded-full cursor-pointer">
            Download CV
          </Button>
        </Link>
        <Link href="#contact">
          <Button className="bg-transpant text-[16px] font-thin hover:bg-transparent cursor-pointer">
            Contact info
          </Button>
        </Link>
      </div>
    </div>
  );
}
