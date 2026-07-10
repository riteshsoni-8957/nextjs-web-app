import React from 'react'

function productDetails({data}) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        <img
          src={data.thumbnail}
          alt={data.title}
          className="w-full rounded-xl"
        />

        <div>

          <h1 className="text-4xl font-bold">
            {data.title}
          </h1>

          <p className="mt-5 text-gray-600">
            {data.description}
          </p>

          <h2 className="mt-5 text-3xl font-bold">
            ₹ {data.price}
          </h2>

          <p className="mt-3">
            Brand:
            <span className="font-semibold">
              {" "}{data.brand}
            </span>
          </p>

          <p className="mt-3">
            Category:
            <span className="font-semibold">
              {" "}{data.category}
            </span>
          </p>

          <p className="mt-3">
            Rating:
            <span className="font-semibold">
              {" "}{data.rating}
            </span>
          </p>

          <button
            className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default productDetails