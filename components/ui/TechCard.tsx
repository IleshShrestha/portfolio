interface TechStackProps {
  techstack: {
    name: string;
    icon: React.ReactElement;
  }[];
}

export default function TechCard({ techstack }: TechStackProps) {
  return (
    <div className=" text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techstack.map((tech) => (
            <div
              key={tech.name}
              className=" border border-(--border-color) rounded-sm p-4 flex flex-col items-center justify-center "
            >
              <div className="text-5xl mb-3 flex items-center justify-center h-16">
                {tech.icon}
              </div>

              <h3 className="text-sm font-medium text-gray-300 mb-2 text-center">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
