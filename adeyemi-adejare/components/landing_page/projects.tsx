"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const projectList = [
    {
      title: "Project One",
      image: "/projects/project1.png",
      topic: "Intune- Project one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Two",
      image: "/projects/project1.png",
      topic: "Intune- Project two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Three",
      image: "/projects/project1.png",
      topic: "Intune- Project three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
    {
      title: "Project Four",
      image: "/projects/project1.png",
      topic: "Intune- Project four",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
    },
  ];

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projectList.length]);

  const tags = [
    {
      name: "Network Documentation",
    },
    {
      name: "System Monitoring",
    },
    {
      name: "Process Optimization",
    },
    {
      name: "Active Directory",
    },
  ];
  return (
    <section
      className="bg-gray-50 dark:bg-gray-900 w-full py-20 mb-10"
      id="projects"
    >
      <div className="w-11/12 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100">
            Let's have a look at
            <br />
            my <span className="text-primary">Projects</span>
          </h1>

          {/* <Button className="rounded-full">See All</Button> */}
        </div>

        <div className="relative pt-8 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentProject * 50}%)`,
            }}
          >
            {projectList.map((project, index) => (
              <div key={index} className="relative flex-shrink-0 w-1/2 px-3">
                <div
                  className={`relative overflow-hidden rounded-lg ${
                    index === currentProject ? "" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="object-cover w-full h-[40vh] object-top rounded-2xl"
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)",
                    }}
                  />
                  <h1
                    className={`absolute text-3xl font-bold text-white bottom-4 left-4 ${
                      index === currentProject ? "text-shadow-lg" : ""
                    }`}
                  >
                    {project.title}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 pt-8">
          {projectList.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentProject
                  ? "w-8 bg-primary"
                  : "w-2 bg-stone-400 hover:bg-stone-500"
              }`}
              onClick={() => setCurrentProject(index)}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2 py-8">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-full"
            >
              {tag.name}
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center transition-all duration-500">
            {projectList[currentProject].topic}
          </h1>
          <p className="text-lg text-[#667085] leading-relaxed text-center w-6/12 mx-auto text-[14px] transition-all duration-500">
            {projectList[currentProject].description}
          </p>
        </div>
      </div>
    </section>
  );
}
