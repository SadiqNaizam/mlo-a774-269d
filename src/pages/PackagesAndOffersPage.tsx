import React from 'react';
import { Link } from 'react-router-dom';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackageCard from '@/components/PackageCard';
import OfferBanner from '@/components/OfferBanner';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';

// Icons
import { Filter } from 'lucide-react';

// Placeholder data for packages
const samplePackages = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=2070&auto=format&fit=crop',
    destination: 'Kerala Backwaters',
    summary: 'A tranquil journey through serene canals and lush greenery.',
    highlights: ['Houseboat Stay', 'Local Cuisine', 'Village Tours'],
    link: '/booking?package=kerala-backwaters',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1599661046227-14e7a705a416?q=80&w=1932&auto=format&fit=crop',
    destination: 'Rajasthan Forts',
    summary: 'Explore the majestic forts and royal palaces of the kings.',
    highlights: ['Amber Fort', 'City Palace', 'Camel Safari'],
    link: '/booking?package=rajasthan-forts',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1573342173544-3343a8af1c88?q=80&w=2070&auto=format&fit=crop',
    destination: 'Goan Beaches',
    summary: 'Relax on sun-kissed beaches and enjoy the vibrant nightlife.',
    highlights: ['Beach Parties', 'Water Sports', 'Seafood Feasts'],
    link: '/booking?package=goa-beaches',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    destination: 'Himalayan Trek',
    summary: 'An adventurous trek through breathtaking mountain landscapes.',
    highlights: ['Guided Trekking', 'Camping Under Stars', 'Monastery Visits'],
    link: '/booking?package=himalayan-trek',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1620766165457-a8025baa82e0?q=80&w=1974&auto=format&fit=crop',
    destination: 'Mystical Varanasi',
    summary: 'Experience the spiritual heart of India along the Ganges.',
    highlights: ['Ganges Boat Ride', 'Evening Aarti', 'Temple Visits'],
    link: '/booking?package=varanasi',
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1603291698331-b7627b2a75ab?q=80&w=2070&auto=format&fit=crop',
    destination: 'Gardens of Kashmir',
    summary: 'Discover the paradise on Earth with its beautiful gardens.',
    highlights: ['Shikara Ride', 'Mughal Gardens', 'Gondola Ride'],
    link: '/booking?package=kashmir-gardens',
  },
];


const PackagesAndOffersPage = () => {
  console.log('PackagesAndOffersPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container py-8 px-4 md:px-6">
          {/* Breadcrumb and Title */}
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Packages & Offers</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl font-extrabold tracking-tight mb-6">
            Travel Packages & Offers
          </h1>

          {/* Filter and Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <div className="w-full sm:w-auto sm:ml-auto">
               <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                  <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Separator className="my-8" />

          {/* Offers Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Exclusive Deals</h2>
            <OfferBanner 
              title="Monsoon Magic Getaway"
              description="Embrace the romance of the rains with 20% off on select Kerala and Goa packages. Book before it's gone!"
              buttonText="Explore Offer"
              linkTo="/booking?offer=monsoon-magic"
            />
          </section>

          {/* Packages Grid Section */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Available Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {samplePackages.map((pkg) => (
                <PackageCard
                  key={pkg.destination}
                  imageUrl={pkg.imageUrl}
                  destination={pkg.destination}
                  summary={pkg.summary}
                  highlights={pkg.highlights}
                  link={pkg.link}
                />
              ))}
            </div>
             <div className="text-center mt-12">
              <Button size="lg" variant="outline">Load More Packages</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PackagesAndOffersPage;