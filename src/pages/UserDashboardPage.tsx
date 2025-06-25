import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

// Placeholder data reflecting the user journey
const upcomingTrips = [
  {
    id: 'TRP789123',
    destination: 'Kerala Backwaters',
    dates: '2024-09-15 to 2024-09-22',
    status: 'Confirmed',
  },
  {
    id: 'TRP456789',
    destination: 'Jaipur, Rajasthan',
    dates: '2024-12-20 to 2024-12-26',
    status: 'Confirmed',
  },
];

const pastTrips = [
  {
    id: 'TRP123456',
    destination: 'Goa Beaches',
    dates: '2024-03-10 to 2024-03-15',
    status: 'Completed',
  },
  {
    id: 'TRP987654',
    destination: 'Rishikesh Adventure',
    dates: '2023-11-05 to 2023-11-10',
    status: 'Completed',
  },
];

const UserDashboardPage = () => {
  console.log('UserDashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">My Dashboard</h1>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
              <TabsTrigger value="past">Past Trips</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            {/* Upcoming Trips Tab */}
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Trips</CardTitle>
                  <CardDescription>Here are your scheduled trips. Adventure awaits!</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Destination</TableHead>
                        <TableHead>Dates</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingTrips.map((trip) => (
                        <TableRow key={trip.id}>
                          <TableCell className="font-medium">{trip.destination}</TableCell>
                          <TableCell>{trip.dates}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{trip.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">View Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Past Trips Tab */}
            <TabsContent value="past">
              <Card>
                <CardHeader>
                  <CardTitle>Past Trips</CardTitle>
                  <CardDescription>A look back at your amazing journeys with us.</CardDescription>
                </CardHeader>
                <CardContent>
                   <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Destination</TableHead>
                        <TableHead>Dates</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pastTrips.map((trip) => (
                        <TableRow key={trip.id}>
                          <TableCell className="font-medium">{trip.destination}</TableCell>
                          <TableCell>{trip.dates}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{trip.status}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm">Write a Review</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Profile Tab */}
            <TabsContent value="profile">
               <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Manage your account details and preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue="Alex Doe" disabled />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue="alex.doe@example.com" disabled />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" defaultValue="+91 98765 43210" disabled />
                    </div>
                    <Button>Edit Profile</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;