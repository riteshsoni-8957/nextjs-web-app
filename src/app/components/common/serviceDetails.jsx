import React from 'react'

function serviceDetails({service}) {
    return (
        <div className="max-w-5xl mx-auto p-10">
            <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover rounded-lg"
            />

            <h1 className="text-4xl font-bold mt-6">
                {service.name}
            </h1>

            <p className="mt-4 text-gray-600">
                {service.description}
            </p>
        </div>
    );
}

export default serviceDetails