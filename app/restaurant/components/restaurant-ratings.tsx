import React from 'react'

export default function RestaurantRatings() {
  return (
    <div className="flex items-end">
        <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <p className="text-reg ml-3">4.8</p>
        </div>
        <div>
        <p className="text-reg ml-4">600 reviews</p>
        </div>
    </div>
  )
}
