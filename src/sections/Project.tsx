import ProjectCard from "../components/UI/ProjectCard";

interface Project {
  projectName: string;
  details: string;
  githubLink: string;
  techStack: string[];
  tag: string;
}

const projects: Project[] = [
  {
    projectName: "Infra-DSC",
    details: "Road crack segmentation tool for pedestrian smartphone reporting. Submitted to the Infrastructure Management Contest 2025.",
    githubLink: "https://infra-dsc.vercel.app",
    techStack: ["Next.js", "FastAPI", "YOLO"],
    tag: "Contest",
  },
  {
    projectName: "CyBon",
    details: "Flutter app for tracking corporate cycling activity. Built during KOSEN Global Camp 2026 in Sendai.",
    githubLink: "https://github.com/bamboo51/CyBon-BikeCompeteApplication",
    techStack: ["Flutter", "Docker", "PostgreSQL"],
    tag: "KOSEN Global Camp",
  },
  {
    projectName: "HKOptimizer",
    details: "Food production optimizer built at Junction 2024, tackling HKFood's real-world supply chain challenge.",
    githubLink: "https://github.com/infrainka/junction2024/",
    techStack: ["React", "Python"],
    tag: "Hackathon",
  },
];

export default function ProjectSection() {
  return (
    <section className="py-10 mx-auto max-w-4xl px-6 scroll-mt-16" id="projects">
      <h1 className="text-4xl font-bold mb-2">Projects</h1>
      <p className="text-gray-500 text-sm mb-10">A few things I've built and shipped</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.projectName} {...project} />
        ))}
      </div>
    </section>
  );
}