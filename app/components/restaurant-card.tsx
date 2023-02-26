import Link from "next/link";

export default function RestaurantCard({}) {
  return (
    <div className="bg-gray-100 w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
    <Link href="/restaurant/one">
      <img src="https://resizer.otstatic.com/v2/photos/xlarge/2/47420150.jpg" alt="restaurant-image" className="w-full h-36"></img>
      <div className="p-1">
        <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
        <div className="flex items-start">
          <div className="flex mb-2 text-yellow-800">*****</div>
          <p className="ml-2">33 reviews</p>
        </div>
        <div className="flex text-reg font-light capitalize">
          <p className="mr-2 ">Mexican</p>
          <p className="mr-2">$$$$</p>
          <p className="mr-2">Toronto</p>
        </div>
        <p className="text-sm font-bold mt-1">Booked 3 times today</p>
      </div>
      </Link>
    </div>
  )
}