import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, ExternalLink, ChevronDown } from 'lucide-react';
import { podcasts, PodcastResource } from '../data';

export default function PodcastSection() {
  // Group podcasts by name (author)
  const groupedPodcasts = podcasts.reduce((acc, podcast) => {
    if (!acc[podcast.name]) {
      acc[podcast.name] = [];
    }
    acc[podcast.name].push(podcast);
    return acc;
  }, {} as Record<string, PodcastResource[]>);

  const [expandedAuthors, setExpandedAuthors] = useState<string[]>([]);

  const toggleAuthor = (author: string) => {
    setExpandedAuthors(prev =>
      prev.includes(author)
        ? prev.filter(a => a !== author)
        : [...prev, author]
    );
  };

  return (
    <section className="py-24 px-6 bg-cream-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="font-serif text-4xl text-charcoal-900 mb-4">Podcasts</h2>
          <p className="text-charcoal-600">Deep conversations and daily updates to keep you in the loop.</p>
        </div>

        <div className="space-y-4">
          {Object.entries(groupedPodcasts).map(([author, episodes]) => (
            <div key={author} className="bg-white rounded-2xl shadow-sm border border-cream-200 overflow-hidden">
              <button
                onClick={() => toggleAuthor(author)}
                className="w-full flex items-center justify-between p-6 hover:bg-cream-50 transition-colors text-left group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cream-100 flex items-center justify-center text-charcoal-600 group-hover:bg-cream-200 transition-colors">
                    <Mic size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-charcoal-900">{author}</h3>
                    <p className="text-sm text-charcoal-500">{episodes.length} Episode{episodes.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedAuthors.includes(author) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-charcoal-400 group-hover:text-charcoal-600"
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {expandedAuthors.includes(author) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 pt-0 space-y-3">
                      <div className="h-px bg-cream-100 mb-4" />
                      {episodes.map((episode) => (
                        <a
                          key={episode.id}
                          href={episode.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group/item p-4 rounded-xl bg-cream-50 hover:bg-cream-100 transition-all border border-transparent hover:border-cream-200"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-charcoal-900 font-medium mb-1 group-hover/item:text-charcoal-700 transition-colors">
                                {episode.description}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-charcoal-500">
                                <span>{episode.startWith}</span>
                              </div>
                            </div>
                            <ExternalLink size={16} className="text-charcoal-400 group-hover/item:text-charcoal-600 flex-shrink-0 mt-1" />
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
