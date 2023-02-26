import React from 'react'

export default function ReserveForm() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
        <input className="border rounded p-3 w-80 mb-4" placeholder="firstname" />
        <input className="border rounded p-3 w-80 mb-4" placeholder="lastname" />
        <input className="border rounded p-3 w-80 mb-4" placeholder="phone" />
        <input className="border rounded p-3 w-80 mb-4" placeholder="email" />
        <input className="border rounded p-3 w-80 mb-4" placeholder="special occasion (optional)" />
        <input className="border rounded p-3 w-80 mb-4" placeholder="special requests (optional)" />
        <button className="bg-red-600 disabled:bg-gray-300 text-white p-3 w-full rounded font-bold">Complete reservation</button>
        <p className="mt-3 text-sm">Amet consectetur adipisicing elit. Adipisci quasi repellendus iste dolorem sit eligendi dicta non sapiente distinctio consequuntur?</p>
    </div>
  )
}
