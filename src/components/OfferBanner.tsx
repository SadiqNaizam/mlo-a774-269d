import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface OfferBannerProps {
  title: string;
  description: string;
  buttonText: string;
  linkTo: string;
}

const OfferBanner: React.FC<OfferBannerProps> = ({ title, description, buttonText, linkTo }) => {
  console.log('OfferBanner loaded');

  return (
    <div className="relative overflow-hidden rounded-xl p-6 md:p-8 bg-gradient-to-tr from-slate-900 via-purple-900 to-slate-900 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-400/30 hover:scale-[1.02]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start md:items-center gap-4 text-center md:text-left">
          <Sparkles className="h-12 w-12 text-yellow-300 shrink-0 hidden sm:block" aria-hidden="true" />
          <div>
            <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-purple-200 mt-1 max-w-lg">{description}</p>
          </div>
        </div>
        <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-200 font-bold shrink-0 w-full sm:w-auto">
          <Link to={linkTo}>
            {buttonText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferBanner;