import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock } from 'lucide-react';
import { videos } from '../data';

const FILTERS = ['All', 'Founder Interview', 'Practical Tutorial', 'Vibe Coding', 'Marketing and Growth'];

export default function VideoSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredVideos = activeFilter === 'All' 
    ? videos 
    : videos.filter(video => video.tags.includes(activeFilter));

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="font-serif text-4xl text-charcoal-900 mb-4">Videos</h2>
          <p className="text-charcoal-600 max-w-2xl">
            A collection of the most insightful videos I've found. Filter by topic to find exactly what you need.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12 justify-start">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-charcoal-900 text-cream-50 shadow-md'
                  : 'bg-cream-50 text-charcoal-600 hover:bg-cream-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group bg-cream-50 rounded-xl overflow-hidden border border-cream-200 hover:border-cream-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-charcoal-400 bg-cream-100 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-serif text-xl font-semibold text-charcoal-900 mb-2 group-hover:text-charcoal-800 transition-colors">
                    {video.title}
                  </h3>
                  
                  <p className="text-charcoal-600 mb-4 text-sm line-clamp-3 flex-grow">{video.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-charcoal-400 font-mono mt-auto pt-4 border-t border-cream-100">
                    <span>{video.channel}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {video.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
