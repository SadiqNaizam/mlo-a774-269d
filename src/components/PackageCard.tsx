import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

interface PackageCardProps {
  imageUrl: string;
  destination: string;
  summary: string;
  highlights: string[];
  link: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  imageUrl,
  destination,
  summary,
  highlights,
  link,
}) => {
  console.log(`PackageCard loaded for: ${destination}`);

  return (
    <Link to={link} className="block group">
      <Card className="overflow-hidden relative h-full w-full rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">
        {/* Background Image */}
        <img
          src={imageUrl}
          alt={`Image of ${destination}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Content Gradient & Text */}
        <div className="relative flex flex-col justify-end h-full w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white">
          <h3 className="text-2xl font-bold tracking-tight">{destination}</h3>
          <p className="text-sm text-gray-200 mt-1">{summary}</p>
        </div>

        {/* Hover Overlay with Highlights */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black/70 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h4 className="text-xl font-semibold text-white mb-4">Package Highlights</h4>
          <ul className="space-y-2 text-center">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-center text-gray-100">
                <CheckCircle2 className="h-5 w-5 mr-2 text-green-400 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Link>
  );
};

export default PackageCard;