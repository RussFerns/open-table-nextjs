"use client";

import React from 'react'

export default function RestaurantReservation() {
  return (
    <div className="w-[27%] relative text-reg">
        <div className="fixed w-[15%] bg-white rounded p-3 shadow">
        <div className="text-center border-b pb-2 font-bold">
            <h4 className="mr-7 text-lg">
            Make a Reservation
            </h4>
        </div>
        <div className="my-3 flex flex-col">
            <label htmlFor="">Party size</label>
            <select name="" id="" className="py-3 border-b font-light">
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            </select>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col w-[48%]">
            <label htmlFor="date">Date</label>
            <input type="text" name="date" className="py-3 border-b font-light w-28" />
            </div>
            <div className="flex flex-col w-[48%]">
            <label htmlFor="time">Time</label>
            <select name="time" id="" className="py-3 border-b font-light">
                <option value="12PM">12PM</option>
                <option value="6PM">6PM</option>
                <option value="8PM">8PM</option>
            </select>
            </div>
        </div>
        <div className="mt-5">
            <button className="bg-red-600 text-white rounded w-full px-4 font-bold h-8">Pick a Time</button>
        </div>
        </div>
    </div>
  )
}
