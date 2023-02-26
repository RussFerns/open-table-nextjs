import Link from "next/link";
import SearchRestaurantCard from "./search-restaurant-card";

export default function SearchSidebar() {
  return (
    <div className="mt-5 w-1/5">
      <div className="border-b pb-4 mt-5">
        <h1 className="mb-2 mt-2">Region</h1>
        <p className="font-light text-reg">Toronto</p>
        <p className="font-light text-reg">Detroit</p>
        <p className="font-light text-reg">Chicago</p>
        <p className="font-light text-reg">Cleveland</p>
        <p className="font-light text-reg">New York</p>
      </div>
      <div className="border-b pb-4 mt-5">
        <h1 className="mb-2 mt-2">Cuisine</h1>
        <p className="font-light text-reg">Chinese</p>
        <p className="font-light text-reg">Indian</p>
        <p className="font-light text-reg">Mexican</p>
        <p className="font-light text-reg">Italian</p>
        <p className="font-light text-reg">American</p>
      </div>
      <div className="mt-3 pb-4">
        <div className="mb-2">Price</div>
        <div className="flex">
          <button className="bg-gray-200 border w-full font-right text-reg p-2 rounded-l">$</button>
          <button className="bg-gray-200 border-r border-t border-b w-full font-right text-reg p-2">$$</button>
          <button className="bg-gray-200 border-r border-t border-b w-full font-right text-reg p-2 rounded-r">$$$</button>
        </div>
      </div>
    </div>
  )
}


