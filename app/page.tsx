import Header from "./components/header";
import RestaurantCard from "./components/restaurant-card";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// Could not run seed.js, so manually created data in Location, Cuisine, Restaurant tables in Supabase.
// Ran the entire schema.prisma from 'harblaith7/Next13-Udemy-Course' so have the following tables
// Wondering if any other data integrity issues are causing the problem. 
// Also enabled RLS with read policy in Supabase for all tables
// in SupaBase: Tables (9)...
// Booking
// BookingsOnTables
// Cuisine (3 rows)
// Item
// Location (3 rows)
// Restaurant (2 rows referencing the Location(#4) and Cuising(#1) IDs)
// Review
// Table
// User

const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants
};


export default async function Home() {
  // un-commenting the fetchRestaurants() line below breaks the app.
  // const restaurants = await fetchRestaurants()

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />

        {/* So never tried the code below */}
        {/* {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant}/>
        ))} */}

      </div>
    </main>
  );
}


