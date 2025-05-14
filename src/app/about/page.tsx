import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      <div className="max-w-2xl w-full bg-black bg-opacity-60 border border-white/20 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col items-center">
        {/* Optional profile image - place your image in public/profile.jpg */}
        {/* <Image src="/profile.jpg" alt="Profile" width={120} height={120} className="rounded-full mb-6" /> */}
        <h1 className="text-3xl font-bold mb-2">Alexander West</h1>
        <p className="text-gray-200 mb-6 text-center">
          I'm a passionate software developer from Victoria, BC, Canada. I love building creative digital experiences, bots, and tools that make life easier or more fun. Always learning, always coding.
        </p>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-2">Skills & Interests</h2>
          <ul className="flex flex-wrap gap-3 mb-4">
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Python</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">JavaScript/TypeScript</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">HTML</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">CSS</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Rust</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">C</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">React & Next.js</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Discord Bots</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">APIs</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Databases (MongoDB, etc.)</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Automation</li>
            <li className="bg-gray-800 px-4 py-2 rounded-full text-sm">Open Source</li>
          </ul>
        </div>
        <div className="mt-4 text-center text-gray-300">
          Want to collaborate or chat? <a href="mailto:your@email.com" className="text-blue-400 underline">Email me</a> or connect on <a href="https://www.linkedin.com/in/alexander-west-2a35822a1/" className="text-blue-400 underline">LinkedIn</a>.
        </div>
      </div>
    </div>
  );
} 