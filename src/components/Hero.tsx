import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-center px-6 py-24 bg-cream-50 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#DAD5CC_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto w-full text-left"
      >
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-charcoal-900 mb-6 tracking-tight leading-tight">
          Kristina’s AI Learning Library
        </h1>
        
        <p className="font-sans text-xl md:text-2xl text-charcoal-600 mb-8 font-light tracking-wide max-w-2xl">
          handpicked free AI resources.
        </p>
        
        <div className="max-w-2xl mb-12">
          <p className="font-sans text-lg text-charcoal-600 leading-relaxed">
            A welcoming space for AI-curious explorers — let’s learn, build, and invent the future together.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
