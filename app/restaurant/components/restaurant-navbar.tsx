import Link from "next/link";

export default function RestaurantNavbar() {
  return (
    <nav className="flex test-reg border-b pb-2">
        <Link href="/restaurant/one" className="mr-7">Overview</Link>
        <Link href="/restaurant/one/menu" className="mr-7">Menu</Link>
    </nav>
  )
}