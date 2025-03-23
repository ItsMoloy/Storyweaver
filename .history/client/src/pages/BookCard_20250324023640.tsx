"use client"

import React from "react"
import { ShoppingCart, Heart, Star } from "lucide-react"

const BookCard = ({ book, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const [isFavorite, setIsFavorite] = React.useState(false)

  // Generate random rating between 3.5 and 5
  const rating = React.useMemo(() => (Math.random() * 1.5 + 3.5).toFixed(1), [])

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Book Cover Image */}
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100" onClick={() => onClick(book)}>
        <img
          src={book.photo || "/placeholder.svg"}
          alt={book.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick action buttons */}
        <div
          className={`absolute top-2 right-2 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFavorite(!isFavorite)
            }}
            className="bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </button>
        </div>

        {/* Category tag */}
        <div className="absolute top-2 left-2">
          <span className="bg-blue-600/90 text-white text-xs px-2 py-1 rounded-full">{book.category}</span>
        </div>
      </div>

      {/* Book Details */}
      <div className="p-4 flex-1 flex flex-col">
        <h3
          className="font-semibold text-gray-800 hover:text-blue-600 transition cursor-pointer line-clamp-2"
          onClick={() => onClick(book)}
        >
          {book.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center mt-2 mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-1">{rating}</span>
        </div>

        {/* Price */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="font-bold text-gray-900">${book.price.toFixed(2)}</span>

          <button
  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center"
  onClick={(e) => {
    e.stopPropagation();
    // Add to cart functionality would go here
  }}
>
  <ShoppingCart className="h-5 w-5" />
</button>
        </div>
      </div>
    </div>
  )
}

export default BookCard

