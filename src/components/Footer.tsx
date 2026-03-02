import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-white border-t border-cream-200">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-charcoal-400 text-sm">
          <span>Curated with</span>
          <Heart size={14} className="text-rose-400 fill-current" />
          <span>by Kristina</span>
        </div>
        <p className="mt-4 text-xs text-charcoal-400">
          © {new Date().getFullYear()} Kristina's AI Library. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
