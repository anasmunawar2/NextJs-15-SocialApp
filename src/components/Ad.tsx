import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      {/* top */}
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span className="">Sponsered Ads</span>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      {/* bottom */}
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/25478461/pexels-photo-25478461/free-photo-of-men-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/25478461/pexels-photo-25478461/free-photo-of-men-girl.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={24}
            height={24}
            className="rounded-full w-6 h-6 object-cover"
          />
          <span className="text-blue-500 font-medium">John Doe</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          {size === "sm"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
            : size === "md"
            ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, sapiente enim."
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dignissimos quaerat, deserunt neque asperiores beatae consectetur possimus provident sunt atque officiis omnis nulla temporibus ad nesciunt eos earum similique velit"}
        </p>
        <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
