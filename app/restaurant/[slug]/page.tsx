import RestaurantDescription from "../components/restaurant-description";
import RestaurantImages from "../components/restaurant-images";
import RestaurantNavbar from "../components/restaurant-navbar";
import RestaurantRatings from "../components/restaurant-ratings";
import RestaurantReservation from "../components/restaurant-reservation";
import RestaurantReviews from "../components/restaurant-reviews";
import RestaurantTitle from "../components/restaurant-title";


export default function RestaurantDetails() {
  return (
    <>
      <div className="bg-white w-[70%] rounded ">
        <RestaurantNavbar />
        <RestaurantTitle />
        <RestaurantRatings />
        <RestaurantDescription />
        <RestaurantImages />
        <RestaurantReviews />
      </div> 
      <RestaurantReservation />
    </>
  )
}

