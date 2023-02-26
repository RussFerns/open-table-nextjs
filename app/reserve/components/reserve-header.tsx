import React from 'react'

export default function ReserveHeader() {
  return (
    <div className="">
        <h3 className="font-bold">You're almost done</h3>
        <div className="mt-5 flex">
        <img src="https://resizer.otstatic.com/v2/photos/xlarge/8/42510338.jpg" alt="" className="w-32 h-18 rounded" />
        <div className="ml-4">
            <h1 className="text-3xl font-bold">My Restaurant</h1>
            <div className="flex mt-3">
            <p className="mr-6">Tue, 22, 2023</p>
            <p className="mr-6">7:30pm</p>
            <p className="mr-6">4 people</p>
            </div>
        </div>
        </div>
    </div>
  )
}
