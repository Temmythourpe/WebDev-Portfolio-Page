import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-900 pb-20">
      <div className="relative w-full h-[80vh] ">
        <div className="flex flex-col items-center justify-center w-9/12 h-full mx-auto">
          <div className="flex items-center justify-center ">
            <div className="flex-shrink-0 flex-nowrap">
              <Image
                src="/images/about-pic.png"
                alt="About image"
                width={500}
                height={500}
                className="h-[60vh] object-contain"
              />
            </div>
            <div>
              <h1 className="text-gray-800 dark:text-gray-100 font-semibold text-4xl pb-2">
                About<span className="text-primary"> Me</span>
              </h1>
              <p className="grid gap-4 text-gray-700 dark:text-gray-300">
                <span>
                  My journey into IT began not with a job title, but with a
                  mindset to solve, support, innovate, and simplify. Over the
                  past years, I have grown from a curious IT Support Technician
                  into a confident Administrator, driven by a passion for
                  exellent digital infrastructure and service exellence.
                </span>
                <span>
                  I have built a profession around empowering users and
                  optimizing systems. More so, my career path has been defined
                  by continuous learning, and my previous roles have deepened my
                  technical expertise and sharpened my ability to translate
                  complexity into clarity, whether through PowerShell
                  automation, Bash scripting, Intune deployments, or seamless
                  onboarding and offboarding experiences.
                </span>
              </p>
              <p></p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid w-10/12 grid-cols-2 gap-5 mx-auto text-gray-800 dark:text-gray-100">
        <div className="border-[1px] border-gray-400 dark:border-gray-600 rounded-3xl py-10 bg-white dark:bg-gray-800">
          <div className="flex flex-col items-center justify-center h-full">
            <Award className="block mx-auto font-bold" />
            <h1 className="font-semibold text-[20px] text-center">
              Experience
            </h1>
            <p className="text-center">IT Support</p>
          </div>
        </div>
        <div className="border-[1px] border-gray-400 dark:border-gray-600 rounded-3xl py-10 bg-white dark:bg-gray-800">
          <GraduationCap className="block mx-auto font-bold" />
          <h1 className="font-semibold text-[20px] text-center">Education</h1>
          <p className="text-center">Diploma Cyber Security</p>
          <p className="text-center">M.Sc. Hydro Science & Engineering</p>
          <p className="text-center">B.Tech. Meteorology</p>
        </div>
      </div>
    </section>
  );
}
