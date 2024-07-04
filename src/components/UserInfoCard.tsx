import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* top */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* bottom */}
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">John Doe</span>
          <span className="text-sm">@doejohn</span>
        </div>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          sit sed voluptatem nihil sequi iusto officiis impedit.
        </p>
        <div className="flex items-center">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span className="">
            Living in <b>USA</b>
          </span>
        </div>

        <div className="flex items-center">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span className="">
            Went to <b>UET</b>
          </span>
        </div>

        <div className="flex items-center">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span className="">
            Works at <b>Apple Inc.</b>
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-1 items-center">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link
              href="https://anasmunawar.netlify.app/"
              className="text-blue-500 font-medium"
            >
              anasmunawar
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span className="text-xs">Joined March 2021</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md p-2">
          Follow
        </button>
        <span className="text-red-400 self-end text-xs cursor-pointer">
          Block User
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
