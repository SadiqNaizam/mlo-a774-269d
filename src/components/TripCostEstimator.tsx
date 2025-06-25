import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Plane, Hotel, Train, Car, Bus, Users, CalendarDays, IndianRupee } from 'lucide-react';
import { Link } from 'react-router-dom';

// Assuming AnimatedCounter component exists and accepts a 'value' prop
import AnimatedCounter from '@/components/AnimatedCounter';

const TripCostEstimator: React.FC = () => {
  console.log('TripCostEstimator loaded');

  const [includeFlights, setIncludeFlights] = useState(false);
  const [hotelBudget, setHotelBudget] = useState(3000); // Per night
  const [transportationMode, setTransportationMode] = useState<'cab' | 'train' | 'bus'>('cab');
  const [numberOfDays, setNumberOfDays] = useState(5);
  const [numberOfPeople, setNumberOfPeople] = useState(2);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const calculateCost = () => {
      let cost = 0;
      
      const FLIGHT_COST_PER_PERSON = 8000;
      const TRANSPORT_COSTS_PER_DAY = {
        cab: 2500,
        train: 800,
        bus: 400,
      };
      const BASE_MISC_COST_PER_PERSON_PER_DAY = 1200;

      // Hotel cost
      cost += hotelBudget * numberOfDays;

      // Local transport cost
      cost += (TRANSPORT_COSTS_PER_DAY[transportationMode] || 0) * numberOfDays;
      
      // Base cost for food and miscellaneous activities
      cost += BASE_MISC_COST_PER_PERSON_PER_DAY * numberOfDays * numberOfPeople;

      // One-time flight cost (round trip)
      if (includeFlights) {
        cost += FLIGHT_COST_PER_PERSON * numberOfPeople;
      }
      
      setTotalCost(cost);
    };

    calculateCost();
  }, [includeFlights, hotelBudget, transportationMode, numberOfDays, numberOfPeople]);

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">Trip Cost Estimator</CardTitle>
        <CardDescription className="text-lg">Customize your trip to see a real-time price estimate.</CardDescription>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Controls Column */}
          <div className="space-y-8">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <Label htmlFor="flights" className="flex items-center gap-3 text-base font-medium">
                <Plane className="h-6 w-6 text-blue-500" />
                Include Round-trip Flights
              </Label>
              <Switch id="flights" checked={includeFlights} onCheckedChange={setIncludeFlights} />
            </div>

            <div className="space-y-4 p-4 border rounded-lg">
              <Label htmlFor="hotel-budget" className="flex items-center gap-3 text-base font-medium">
                <Hotel className="h-6 w-6 text-purple-500" />
                Hotel Budget (per night)
              </Label>
              <div className="flex items-center gap-4">
                <Slider id="hotel-budget" min={1000} max={20000} step={500} value={[hotelBudget]} onValueChange={(value) => setHotelBudget(value[0])} />
                <span className="font-semibold text-lg w-24 text-right">₹{hotelBudget.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="space-y-4 p-4 border rounded-lg">
               <Label htmlFor="transportation" className="flex items-center gap-3 text-base font-medium">
                <Car className="h-6 w-6 text-yellow-500" />
                Local Transport Mode
              </Label>
              <Select value={transportationMode} onValueChange={(value: 'cab' | 'train' | 'bus') => setTransportationMode(value)}>
                <SelectTrigger id="transportation">
                  <SelectValue placeholder="Select transport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cab"><div className="flex items-center gap-2"><Car className="h-4 w-4" /> Private Cab</div></SelectItem>
                  <SelectItem value="train"><div className="flex items-center gap-2"><Train className="h-4 w-4" /> Train</div></SelectItem>
                  <SelectItem value="bus"><div className="flex items-center gap-2"><Bus className="h-4 w-4" /> Bus</div></SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Sliders Column */}
          <div className="space-y-8">
             <div className="space-y-4 p-4 border rounded-lg">
              <Label htmlFor="duration" className="flex items-center gap-3 text-base font-medium">
                <CalendarDays className="h-6 w-6 text-green-500" />
                Trip Duration
              </Label>
              <div className="flex items-center gap-4">
                <Slider id="duration" min={1} max={30} step={1} value={[numberOfDays]} onValueChange={(value) => setNumberOfDays(value[0])} />
                <span className="font-semibold text-lg w-24 text-right">{numberOfDays} Days</span>
              </div>
            </div>

            <div className="space-y-4 p-4 border rounded-lg">
              <Label htmlFor="people" className="flex items-center gap-3 text-base font-medium">
                <Users className="h-6 w-6 text-red-500" />
                Number of Travelers
              </Label>
              <div className="flex items-center gap-4">
                <Slider id="people" min={1} max={10} step={1} value={[numberOfPeople]} onValueChange={(value) => setNumberOfPeople(value[0])} />
                <span className="font-semibold text-lg w-24 text-right">{numberOfPeople} {numberOfPeople > 1 ? 'People' : 'Person'}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between p-6 bg-gray-50 border-t">
        <div className="flex items-baseline gap-2 mb-4 sm:mb-0">
          <span className="text-xl font-medium text-gray-600">Estimated Cost:</span>
          <div className="flex items-center text-4xl font-bold text-black">
            <IndianRupee className="h-8 w-8" />
            <AnimatedCounter value={totalCost} />
          </div>
        </div>
        <Button size="lg" asChild>
            <Link to="/booking">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TripCostEstimator;