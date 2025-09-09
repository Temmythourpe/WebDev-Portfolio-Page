export default function Experience() {
  const timeline = [
    {
      company: "Neumann Kaffee Gruppe",
      location: "Hamburg, Germany",
      duration: "Jan 2024 - Dec 2024",
      role: " Student Intern",
      description:
        "Managed IT infrastructure by deploying devices, configuring user accounts, and administering Active Directory/Microsoft 365. Automated software installations and updates with PowerShell and Intune, ensuring compliance and seamless user experience.",
      color: "bg-orange-500",
    },
    {
      company: "Jan Evangelista Purkyně University",
      location: "Ùstí, Czech Republic",
      duration: "Feb 2023 - Aug 2023",
      role: "ERASMUS Intern",
      description:
        "Conducted field experiments on soil carbon sequestration with Ryegrass and Miscanthus. Optimized wireless LAN configurations, monitored system performance, and documented support processes to enhance IT service quality.",
      color: "bg-gray-900",
    },
    {
      company: "KwamePrep International Consult",
      location: "Abeokuta, Nigeria",
      duration: "Sep 2023",
      role: "IT Project Manager",
      description:
        "Collaborated with teams to meet operational goals and project deliverables while supporting business applications. Created technical documentation and resolved issues with productivity and company-specific software.",
      color: "bg-orange-500",
    },
  ];
  return (
    <section id="experience">
      <div className="py-20">
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 text-center mb-16">
          My <span className="text-primary">Work Experience</span>
        </h1>
        <div className="relative w-9/12 mx-auto">
          {/* Vertical dotted line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600"></div>

          {timeline.map((time, index) => (
            <div key={index} className="relative grid grid-cols-2 gap-8 mb-12">
              {/* Left Column */}
              <div className="pr-8 text-left">
                <h3 className="text-[20px] font-semibold text-gray-800 dark:text-gray-100">
                  {time.company}
                </h3>
                <p className="text-[16px] text-gray-500 dark:text-gray-400">
                  {time.location}
                </p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400">
                  {time.duration}
                </p>
              </div>

              {/* Center Dot */}
              <div className="absolute z-10 transform -translate-x-1/2 left-1/2 top-2">
                <div
                  className={`w-4 h-4 rounded-full ${time.color} border-4 border-white dark:border-gray-900 shadow-md`}
                />
              </div>

              {/* Right Column */}
              <div className="pl-8 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  {time.role}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {time.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
