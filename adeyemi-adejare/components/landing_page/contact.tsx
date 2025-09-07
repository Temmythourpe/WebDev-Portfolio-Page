import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact">
      <div className="block w-6/12 py-10 pb-5 mx-auto">
        <h1 className="text-[#344054] font-semibold text-5xl text-center pb-8">
          Have an Awesome Project idea?{" "}
          <span className="text-primary">Let's Discuss</span>
        </h1>

        <div className="border-[1px] border-[#E4E7EC] rounded-full p-3 w-full flex justify-between ">
          <div className="flex items-center gap-2">
            <div className="relative h-12 rounded-full w-15 bg-primary/20">
              <MdEmail className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-primary" />
            </div>
            <Link
              href="mailto:temmythourpe1907@gmail.com"
              className="text-[#344054] font-[500] text-[16px]"
            >
              temmythourpe1907@gmail.com
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative h-12 rounded-full w-15 bg-primary/20">
              <FaLinkedinIn className="absolute w-6 h-6 -translate-x-1/2 -translate-y-1/2 absolut top-1/2 left-1/2 text-primary" />
            </div>
            <Link
              href="https://www.linkedin.com/in/adeyemi-temitope-a-2019432a6/"
              className="text-[#344054] font-[500] text-[16px]"
            >
              Adeyemi Temitope A.
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
