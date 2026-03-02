import { Mail } from 'lucide-react';
import { newsletters } from '../data';

export default function NewsletterSection() {
  return (
    <section className="py-24 px-6 bg-charcoal-900 text-cream-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <h2 className="font-serif text-4xl text-white mb-4">Newsletters</h2>
            <p className="text-charcoal-400 max-w-md">
              Stay updated without the doomscrolling. These are the few emails I actually open.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((newsletter) => (
            <a 
              key={newsletter.id}
              href={newsletter.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-charcoal-800/50 hover:bg-charcoal-800 rounded-xl p-6 transition-all duration-300 border border-charcoal-600/50 hover:border-charcoal-600 flex flex-col h-full"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-charcoal-600 flex items-center justify-center text-cream-300 group-hover:bg-charcoal-400 group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-white mb-1">{newsletter.name}</h3>
                  <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider bg-charcoal-900/50 px-2 py-0.5 rounded border border-charcoal-600 inline-block mb-2">
                    {newsletter.frequency}
                  </span>
                </div>
              </div>
              
              <p className="text-charcoal-400 text-sm flex-grow">{newsletter.topics}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
