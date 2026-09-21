import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  projectName: string;
  details: string;
  githubLink: string;
  techStack: string[];
  tag: string;
}

export default function ProjectCard({
  projectName,
  details,
  githubLink,
  techStack,
  tag,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-3 hover:border-gray-300 transition-colors">
      <span className="text-xs font-medium text-gray-400 border border-gray-200 rounded px-2 py-0.5 self-start">
        {tag}
      </span>
      <h3 className="font-serif text-lg font-semibold text-gray-900">
        {projectName}
      </h3>
      <p className="text-sm text-gray-500 leading-relaxed flex-1">{details}</p>
      <div className="flex flex-wrap gap-1.5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs bg-gray-50 text-gray-500 border border-gray-100 rounded px-2 py-0.5"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-gray-100 pt-3 mt-auto">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          {githubLink.replace("https://", "")}
        </a>
        <ArrowUpRight size={14} className="text-gray-300" />
      </div>
    </div>
  );
}
