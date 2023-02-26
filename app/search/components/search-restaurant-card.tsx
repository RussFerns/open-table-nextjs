import Link from "next/link";

export default function SearchRestaurantCard() {
  return (
    <div className="border-b flex pb-5 mt-5">
        <Link href="/restaurant/one">
            <img src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg" alt="" className="w-40 rounded" />
        </Link>
        <div className="pl-5">
            <h2 className="text-3xl">Alinea</h2>
            <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2 text-sm">Awesome! (26)</p>
            </div>
            <div className="mb-9">
            <div className="font-light flex text-reg">
                <p className="mr-4">$$$</p>
                <p className="mr-4">Haute Cuisine</p>
                <p className="mr-4">Chicago</p>
            </div>
            </div>
            <div className="text-red-600">
                <Link href="/restaurant/one">View more information</Link>
            </div>
        </div>
        
    </div>
  )
}