import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plane, Hotel, CreditCard, User, Calendar, Mail } from 'lucide-react';

const bookingFormSchema = z.object({
  // Passenger Details
  passengerTitle: z.string().min(1, { message: 'Title is required' }),
  passengerFullName: z.string().min(2, { message: 'Full name must be at least 2 characters.' }),
  passengerEmail: z.string().email({ message: 'Please enter a valid email.' }),
  
  // Hotel Details
  primaryGuestName: z.string().min(2, { message: 'Guest name is required.' }),
  specialRequests: z.string().optional(),

  // Payment Details
  cardholderName: z.string().min(2, { message: "Cardholder's name is required." }),
  cardNumber: z.string().regex(/^\d{16}$/, { message: 'Please enter a valid 16-digit card number.' }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, { message: 'Please use MM/YY format.' }),
  cvv: z.string().regex(/^\d{3,4}$/, { message: 'Please enter a valid CVV.' }),

  // Agreement
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions.',
  }),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

const BookingPage = () => {
  console.log('BookingPage loaded');
  const navigate = useNavigate();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      passengerFullName: '',
      passengerEmail: '',
      primaryGuestName: '',
      specialRequests: '',
      cardholderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log('Form Submitted:', data);
    toast.success('Booking Confirmed!', {
      description: 'Your trip to Kerala has been successfully booked.',
      action: {
        label: 'View Trip',
        onClick: () => navigate('/user-dashboard'),
      },
    });
    // Redirect to dashboard after a short delay
    setTimeout(() => {
        navigate('/user-dashboard');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Confirm and Pay</h1>
            <p className="text-muted-foreground mt-2">Complete your booking for your dream getaway to Kerala.</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Main Content - Tabs */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="passengers" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="passengers"><Plane className="h-4 w-4 mr-2"/>Passenger Details</TabsTrigger>
                  <TabsTrigger value="hotel"><Hotel className="h-4 w-4 mr-2"/>Guest Information</TabsTrigger>
                  <TabsTrigger value="payment"><CreditCard className="h-4 w-4 mr-2"/>Payment</TabsTrigger>
                </TabsList>

                {/* Passenger Details Tab */}
                <TabsContent value="passengers">
                  <Card>
                    <CardHeader>
                      <CardTitle>Flight &amp; Travel Information</CardTitle>
                      <CardDescription>Enter the details for the primary passenger.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <FormField
                        control={form.control}
                        name="passengerTitle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger><SelectValue placeholder="Select a title" /></SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mr">Mr.</SelectItem>
                                <SelectItem value="mrs">Mrs.</SelectItem>
                                <SelectItem value="ms">Ms.</SelectItem>
                                <SelectItem value="dr">Dr.</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passengerFullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                                    <Input placeholder="John Doe" {...field} className="pl-10"/>
                                </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="passengerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                             <FormControl>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                                    <Input type="email" placeholder="john.doe@example.com" {...field} className="pl-10"/>
                                </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Guest Information Tab */}
                <TabsContent value="hotel">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hotel Guest Information</CardTitle>
                      <CardDescription>Details for your hotel check-in.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <FormField
                        control={form.control}
                        name="primaryGuestName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Primary Guest Name</FormLabel>
                            <FormControl>
                               <Input placeholder="Enter same as passenger or a different name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="specialRequests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requests (Optional)</FormLabel>
                            <FormControl>
                               <Input placeholder="e.g., room with a view, early check-in" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Payment Tab */}
                <TabsContent value="payment">
                   <Card>
                    <CardHeader>
                      <CardTitle>Payment Details</CardTitle>
                      <CardDescription>Enter your payment information. All transactions are secure.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <FormField
                        control={form.control}
                        name="cardholderName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name on Card</FormLabel>
                            <FormControl><Input placeholder="John M. Doe" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cardNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Card Number</FormLabel>
                            <FormControl>
                                <div className="relative">
                                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                                    <Input placeholder="•••• •••• •••• ••••" {...field} className="pl-10"/>
                                </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                       <div className="grid grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="expiryDate"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Expiry Date</FormLabel>
                                <FormControl><Input placeholder="MM/YY" {...field} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="cvv"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>CVV</FormLabel>
                                <FormControl><Input placeholder="•••" {...field} /></FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                       </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <img src="https://images.unsplash.com/photo-1542361358-f66b26c75f0d?q=80&w=2070&auto=format&fit=crop" alt="Kerala Backwaters" className="rounded-lg object-cover aspect-video"/>
                    <div className="flex justify-between font-semibold">
                        <span>Trip to Kerala</span>
                        <span>7 Days / 6 Nights</span>
                    </div>
                    <div className="border-t pt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex justify-between"><span>Flights (2 adults)</span><span>₹ 25,000</span></div>
                        <div className="flex justify-between"><span>Hotel (Luxury Villa)</span><span>₹ 60,000</span></div>
                        <div className="flex justify-between"><span>Taxes & Fees</span><span>₹ 8,500</span></div>
                    </div>
                    <div className="border-t pt-4 flex justify-between font-bold text-lg">
                        <span>Total Cost</span>
                        <span>₹ 93,500</span>
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm font-normal">
                            I agree to the <a href="#" className="font-medium text-primary hover:underline">terms and conditions</a>.
                          </FormLabel>
                           <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? 'Processing...' : 'Pay Now'}
                  </Button>
                </CardFooter>
              </Card>
            </div>

          </form>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default BookingPage;