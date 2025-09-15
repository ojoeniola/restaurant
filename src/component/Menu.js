import React from 'react'

function Menu() {
  return (
    <div>
      <div className="text-center py-12">
        <h2 className="text-3xl font-bold mb-4 text-brand">Menu</h2>
        <p className="text-base text-gray-700 max-w-2xl mx-auto leading-loose">
          Discover our carefully curated selection of traditional Nigerian
          dishes, each prepared with authentic ingredients and time-honored
          techniques.
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex justify-between items-start border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              Special Firewood Jollof
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Fresh tomatoes, basmati rice, basil, olive oil
            </p>
            <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Main Course
            </span>
          </div>
          <div className="text-lg font-bold text-red-600 ml-6">₦18,000</div>
        </div>

        <div className="flex justify-between items-start border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              Grilled Turkey
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Atlantic turkey with lemon herbs and seasonal vegetables
            </p>
            <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Main Course
            </span>
          </div>
          <div className="text-lg font-bold text-red-600 ml-6">₦28,000</div>
        </div>

        <div className="flex justify-between items-start border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              Village Noodles
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Ugwu, ponmo, smoked fish, special sauce
            </p>
            <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Noodles
            </span>
          </div>
          <div className="text-lg font-bold text-red-600 ml-6">₦14,000</div>
        </div>

        <div className="flex justify-between items-start border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">
              Chocolate Lava Cake
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Warm chocolate cake with vanilla ice cream
            </p>
            <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
              Desserts
            </span>
          </div>
          <div className="text-lg font-bold text-red-600 ml-6">₦12,000</div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="bg-red-600 text-white px-6 py-2 rounded-full shadow hover:bg-red-700 transition">
          View Full Menu
        </button>
      </div>
    </div>
  );
}

export default Menu
