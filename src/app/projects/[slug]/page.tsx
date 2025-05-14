import Link from 'next/link';

const projects = [
  {
    slug: 'roblox-valuator-bot',
    title: 'Roblox Valuator Bot',
    description: 'A Discord bot that estimates the value of any Roblox account by fetching and analyzing public account data. Users can check the value of their Roblox account (in Robux and USD), see the number of limited items, and get other useful account stats—all with a simple !value <username> command in Discord.',
    tags: ['Python', 'Discord.py', 'Roblox API'],
    github: 'https://github.com/kyprexs/roblox-valuator-bot',
    demo: '/screenshots/ex1.png',
  },
  {
    slug: 'github-profile-analyzer',
    title: 'GitHub Profile Analyzer',
    description: 'A tool to analyze GitHub profiles and provide insights into repositories, languages, and activity. (Add your own description here!)',
    tags: ['Python', 'GitHub API', 'Data Analysis'],
    github: 'https://github.com/kyprexs/github-profile-analyzer',
    demo: '/screenshots/ex2.png',
  },
];

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return <div className="text-white p-8">Project not found.</div>;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <div className="max-w-2xl w-full bg-[#1a2332] rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <img src={project.demo} alt="Demo" className="w-full rounded mb-4" style={{background:'#222', minHeight:200}} />
        <p className="mb-4">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span key={tag} className="bg-[#263143] px-3 py-1 rounded text-sm">{tag}</span>
          ))}
        </div>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">View on GitHub</a>
        <div className="mt-6">
          <Link href="/">
            <span className="text-gray-400 hover:underline cursor-pointer">← Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 