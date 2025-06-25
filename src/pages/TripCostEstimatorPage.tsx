import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TripCostEstimator from '@/components/TripCostEstimator';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import { Slash } from 'lucide-react';

const TripCostEstimatorPage = () => {
  console.log('TripCostEstimatorPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Trip Cost Estimator</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="flex justify-center">
            <TripCostEstimator />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TripCostEstimatorPage;