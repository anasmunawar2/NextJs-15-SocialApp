import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* write */}
      <div className="flex items-center gap-4">
        <Image
          src="https://images.pexels.com/photos/6769533/pexels-photo-6769533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src="/emoji.png"
            width={16}
            height={16}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* comments */}
      <div className="">
        {/* comment */}
        <div className="flex gap-4  justify-between mt-6">
          {/* avatar */}

          <Image
            src="https://images.pexels.com/photos/6769533/pexels-photo-6769533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />

          {/* desc */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">John Doe</span>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="flex  items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  className="cursor-pointer w-4 h-4"
                  alt=""
                  width={12}
                  height={12}
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>

              <div className="">Reply</div>
            </div>
          </div>
          {/* icon */}
          <Image
            src="/more.png"
            className="cursor-pointer w-4 h-4"
            alt=""
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Comments;
