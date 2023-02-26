import RestaurantHeader from "../components/restaurant-header";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RestaurantHeader />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-9">
        {children}
      </div>
    </>
  );
}
