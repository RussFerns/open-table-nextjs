import Link from "next/link";
import SearchBar from "../../components/searchbar";

export default function SearchHeader() {
  return (
    <div className="h-64 p-2 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
      <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">Find your Table for any occasion</h1>
          <SearchBar />
      </div>
    </div>
  )
}