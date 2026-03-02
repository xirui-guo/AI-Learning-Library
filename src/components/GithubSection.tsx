import React, { ReactNode } from 'react';
import { Github, Brain, BookOpen, Layers } from 'lucide-react';
import { githubSkills, githubMethods, githubProjects, GithubResource } from '../data';

export default function GithubSection() {
  return (
    <section className="py-24 px-6 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="font-serif text-4xl text-charcoal-900 mb-4">GitHub Repositories</h2>
          <p className="text-charcoal-600 max-w-2xl">
            A curated collection of tools, methods, and projects to accelerate your AI journey.
          </p>
        </div>

        <div className="space-y-20">
          {/* Skills Subsection */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-cream-200 pb-4">
              <Brain size={24} className="text-charcoal-600" />
              <h3 className="font-serif text-2xl text-charcoal-900">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubSkills.map((item) => (
                <RepoCard key={item.id} item={item} icon={<Brain size={20} />} />
              ))}
            </div>
          </div>

          {/* Useful Methods Subsection */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-cream-200 pb-4">
              <BookOpen size={24} className="text-charcoal-600" />
              <h3 className="font-serif text-2xl text-charcoal-900">Useful Methods</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubMethods.map((item) => (
                <RepoCard key={item.id} item={item} icon={<BookOpen size={20} />} />
              ))}
            </div>
          </div>

          {/* Large Project Subsection */}
          <div>
            <div className="flex items-center gap-3 mb-8 border-b border-cream-200 pb-4">
              <Layers size={24} className="text-charcoal-600" />
              <h3 className="font-serif text-2xl text-charcoal-900">Large Project</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubProjects.map((item) => (
                <RepoCard key={item.id} item={item} icon={<Github size={20} />} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const RepoCard: React.FC<{ item: GithubResource; icon: ReactNode }> = ({ item, icon }) => {
  return (
    <a 
      href={item.link}
      target="_blank"
      rel="noopener"
      className="group block bg-white p-6 rounded-xl border border-cream-200 hover:border-cream-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative z-10"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-charcoal-800 group-hover:text-blue-600 transition-colors">
            {icon}
          </div>
          <h4 className="font-mono text-lg font-semibold text-charcoal-900 group-hover:text-blue-600 transition-colors">
            {item.title}
          </h4>
        </div>
      </div>
      
      <p className="text-charcoal-600 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
        {item.description}
      </p>

      {item.tags && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] font-medium uppercase tracking-wider text-charcoal-600 bg-cream-100 px-2 py-1 rounded-md border border-cream-200">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};
