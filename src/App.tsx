/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PodcastSection from './components/PodcastSection';
import PeopleSection from './components/PeopleSection';
import NewsletterSection from './components/NewsletterSection';
import GithubSection from './components/GithubSection';
import Footer from './components/Footer';

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream-50 text-charcoal-900 font-sans selection:bg-sage-200 selection:text-charcoal-900">
      <Header />
      
      <div id="hero">
        <Hero />
      </div>
      
      <div id="videos">
        <VideoSection />
      </div>
      
      <div id="podcasts">
        <PodcastSection />
      </div>

      <div id="newsletters">
        <NewsletterSection />
      </div>
      
      <div id="github">
        <GithubSection />
      </div>

      <div id="people">
        <PeopleSection />
      </div>
      
      <Footer />

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            className="fixed bottom-8 right-8 p-3 bg-charcoal-900 text-cream-50 rounded-full shadow-lg hover:bg-charcoal-800 transition-colors z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
