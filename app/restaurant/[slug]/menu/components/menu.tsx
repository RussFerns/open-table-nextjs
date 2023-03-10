import React from 'react'
import MenuCard from './menu-card'

export default function Menu() {
  return (
    <div className="bg-white mt-5">
        <div className="mt-4 pb-1 mb-1">
            <h1 className="font-bold text-4xl"> Menu </h1>
            <div className="flex flex-wrap justify-between">
              <MenuCard />
            </div>
        </div>
    </div>
  )
}
