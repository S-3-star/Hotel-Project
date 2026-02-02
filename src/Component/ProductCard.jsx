import React from "react";


export default function ProductCard(props) {
  return (
    <div className="border border-amber-500 rounded p-4 w-80 shadow-lg flex flex-col items-center">
      <img
        src={props.image}
        alt={props.name}
        className="h-60 w-60 object-cover rounded"
      />

      <p className="mt-2 font-semibold">{props.name}</p>
      <p className="text-amber-600">{props.price}</p>
      <p className="text-sm text-green-500">{props.address}</p>
      <p className="text-sm">{props.contact}</p>
    </div>
  );
}
