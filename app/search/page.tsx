import SearchHeader from "./components/search-header";
import SearchRestaurantCard from "./components/search-restaurant-card";
import SearchSidebar from "./components/search-sidebar";

export default function Search() {
  return (
    <>
      <SearchHeader />
      <div className="flex py-4 m-auto mt-5 w-2/3 justify-between items-start">
        <SearchSidebar />
        <div className="w-5/6 mt-5">
          <SearchRestaurantCard />
        </div>
      </div>
    </>
  );
}
