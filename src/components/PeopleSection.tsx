import { useState } from 'react';
import { people } from '../data';
import { motion } from 'motion/react';

export default function PeopleSection() {
  const [activeTab, setActiveTab] = useState<'x' | 'rednote'>('x');

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-left">
          <h2 className="font-serif text-4xl text-charcoal-900 mb-4">People to Follow</h2>
          <p className="text-charcoal-600 max-w-2xl mb-8">
            The voices I trust for clarity, ethics, and practical application.
          </p>

          <div className="flex gap-8 border-b border-cream-200">
            <button
              onClick={() => setActiveTab('x')}
              className={`pb-3 text-lg font-medium transition-colors relative ${
                activeTab === 'x' ? 'text-charcoal-900' : 'text-charcoal-400 hover:text-charcoal-600'
              }`}
            >
              X
              {activeTab === 'x' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-charcoal-900"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('rednote')}
              className={`pb-3 text-lg font-medium transition-colors relative ${
                activeTab === 'rednote' ? 'text-charcoal-900' : 'text-charcoal-400 hover:text-charcoal-600'
              }`}
            >
              Rednote (小红书)
              {activeTab === 'rednote' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-charcoal-900"
                />
              )}
            </button>
          </div>
        </div>

        <div className="min-h-[200px]">
          {activeTab === 'x' ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {people.map((person) => (
                <a 
                  key={person.id} 
                  href={person.link}
                  target="_blank"
                  rel="noopener"
                  className="group block h-full relative z-10"
                >
                  <div className="h-full bg-cream-50 p-6 rounded-xl border border-cream-200 transition-all duration-300 hover:border-cream-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="flex items-center gap-4 mb-6">
                      <img 
                        src={person.avatar} 
                        alt={person.name} 
                        className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-charcoal-900 leading-tight group-hover:text-charcoal-600 transition-colors">
                          {person.name}
                        </h3>
                        <p className="text-xs font-mono text-charcoal-400">{person.handle}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6 min-h-[3rem]">
                      <p className="text-sm text-charcoal-600 leading-relaxed">
                        {person.reason}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-cream-300 rounded-xl bg-cream-50"
            >
              <p className="text-charcoal-500 font-serif text-xl italic">Rednote recommendations coming soon...</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
