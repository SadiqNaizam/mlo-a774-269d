import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackageCard from '@/components/PackageCard';
import OfferBanner from '@/components/OfferBanner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const featuredPackages = [
  {
    destination: 'Kerala Backwaters',
    summary: 'Tranquil houseboat stays and lush green landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop',
    highlights: ['Houseboat Cruise', 'Kathakali Performance', 'Spice Plantations', 'Local Cuisine'],
    link: '/packages-and-offers?destination=kerala',
  },
  {
    destination: 'Royal Rajasthan',
    summary: 'Explore the majestic forts and vibrant culture of the maharajas.',
    imageUrl: 'https://images.unsplash.com/photo-1599661046227-14e7a7104a33?q=80&w=1965&auto=format&fit=crop',
    highlights: ['Amber Fort Visit', 'Camel Safari in Jaisalmer', 'Udaipur City Palace', 'Blue City of Jodhpur'],
    link: '/packages-and-offers?destination=rajasthan',
  },
  {
    destination: 'Himalayan Escapade',
    summary: 'Breathtaking views and serene monasteries in Himachal.',
    imageUrl: 'https://images.unsplash.com/photo-1617474443213-33a395b00b55?q=80&w=1935&auto=format&fit=crop',
    highlights: ['Trekking in Manali', 'Dalai Lama Temple', 'Rohtang Pass', 'Scenic Drives'],
    link: '/packages-and-offers?destination=himachal',
  },
];

const Homepage: React.FC = () => {
  console.log('Homepage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop"
            alt="Taj Mahal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-20 container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
              Discover Your Next Adventure in India
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              From majestic mountains to serene backwaters, your unforgettable journey starts here.
            </p>
            <div className="flex w-full max-w-xl mx-auto items-center space-x-2">
              <Input
                type="text"
                placeholder="Search destinations (e.g., Kerala, Goa...)"
                className="bg-white/90 text-gray-800 placeholder:text-gray-500 border-none h-12 text-base"
              />
              <Link to="/packages-and-offers">
                <Button type="submit" size="lg" className="h-12">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Destinations Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Featured Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPackages.map((pkg) => (
                <div key={pkg.destination} className="h-96">
                  <PackageCard {...pkg} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer Banner Section */}
        <section className="py-16 md:py-24 bg-muted/40">
          <div className="container mx-auto px-4">
            <OfferBanner
              title="Monsoon Magic Special"
              description="Get 20% off on all South India packages this rainy season. Embrace the beauty of a rain-washed paradise."
              buttonText="Explore Offers"
              linkTo="/packages-and-offers"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;