"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function SearchBar() {
    const router  = useRouter()
    const [ location, setLocation ] = useState("")
    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input className="rounded mr-3 w-[450px]" 
                placeholder="State, city or town"
                value={location}
                onChange={(e) => setLocation(e.target.value)}>
            </input>
            <button className="rounded bg-red-600 text-white px-9 py-2"
                    onClick={() => {
                    if (location === "banana") return;
                    router.push("/search");
                    }}
            >
            Let's Go
            </button>
        </div>
    )
}
