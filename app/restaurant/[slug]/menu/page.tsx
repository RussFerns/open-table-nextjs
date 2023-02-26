import RestaurantNavbar from "../../components/restaurant-navbar";
import Menu from "./components/menu";

export default function RestaurantMenu() {
  return (
    <>
      <div className="bg-white w-[100%] rounded ">
        <RestaurantNavbar />
        <Menu />
      </div> 
    </>
  )
}
