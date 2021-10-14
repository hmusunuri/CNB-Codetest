import React from "react";
import like from "../Images/likeshare.PNG";

function Card(props) {
  return (
    <div className="mt-4 bg-theme-analog rounded-lg shadow">
      <div className="p-3 flex space-x-2 cursor-pointer">
        <div className="avatar">
          <div className="rounded-full w-10 h-10">
            <img alt="profile pic" src={props.feed.profilePicUrl} />
          </div>
        </div>
        <div>
          <div className="hover:underline">{props.feed.userName}</div>
          <a href={() => false} className="text-xs hover:underline">
            {props.feed.timeStamp}
          </a>
        </div>
      </div>
      <div className="p-3">{props.feed.description}</div>
      <div className="flex justify-between mb-2">
        <div className="flex space-x-1 pt-2 px-2">
          <div className="">
            <img
              alt="like button"
              className="cursor-pointer hover:underline h-6 pt-1"
              src={like}
            />
          </div>
          <div className="text-gray-400 cursor-pointer hover:underline">
            {props.feed.likeShareCount}
          </div>
        </div>
        <div>
          <div className="flex space-x-2 pt-2 px-4 cursor-pointer text-gray-400">
            <div className="hover:underline">
              {Math.floor(Math.random() * 10 + 1)} Comments
            </div>
            <div className="hover:underline">
              {Math.floor(Math.random() * 10 + 1)} Shares
            </div>
          </div>
        </div>
      </div>
      <div className="flex cursor-pointer justify-between border-t-2 border-b-2 border-fuchsia-600 mx-3 mb-4 lg:px-32 py-1">
        <div className="flex justify-center items-center space-x-1 hover:bg-gray-200 lg:px-12 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M15.43 8.814c.808-3.283 1.252-8.814-2.197-8.814-1.861 0-2.35 1.668-2.833 3.329-1.971 6.788-5.314 7.342-8.4 7.743v9.928c3.503 0 5.584.729 8.169 1.842 1.257.541 3.053 1.158 5.336 1.158 2.538 0 4.295-.997 5.009-3.686.5-1.877 1.486-7.25 1.486-8.25 0-1.649-1.168-2.446-2.594-2.507-1.21-.051-2.87-.277-3.976-.743zm3.718 4.321l-1.394.167s-.609 1.109.141 1.115c0 0 .201.01 1.069-.027 1.082-.046 1.051 1.469.004 1.563l-1.761.099c-.734.094-.656 1.203.141 1.172 0 0 .686-.017 1.143-.041 1.068-.056 1.016 1.429.04 1.551-.424.053-1.745.115-1.745.115-.811.072-.706 1.235.109 1.141l.771-.031c.822-.074 1.003.825-.292 1.661-1.567.881-4.685.131-6.416-.614-2.238-.965-4.437-1.934-6.958-2.006v-6c3.263-.749 6.329-2.254 8.321-9.113.898-3.092 1.679-1.931 1.679.574 0 2.071-.49 3.786-.921 5.533 1.061.543 3.371 1.402 6.12 1.556 1.055.059 1.025 1.455-.051 1.585z" />
          </svg>
          <div className="">Like</div>
        </div>
        <div className="flex justify-center items-center space-x-1 hover:bg-gray-200 lg:px-12 py-1 rounded-md">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M12 1c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625l-1.993 6.368 6.946-3c1.705.439 3.334.641 4.864.641 7.174 0 12.136-4.439 12.136-9.634 0-5.812-5.701-10.007-12-10.007zm0 1c6.065 0 11 4.041 11 9.007 0 4.922-4.787 8.634-11.136 8.634-1.881 0-3.401-.299-4.946-.695l-5.258 2.271 1.505-4.808c-1.308-1.564-2.165-3.128-2.165-5.402 0-4.966 4.935-9.007 11-9.007zm-5 7.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z" />
          </svg>
          <div>Comment</div>
        </div>
        <div className="flex justify-center items-center space-x-1 hover:bg-gray-200 lg:px-12 py-1 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6 17c1.513-6.587 7-7.778 7-7.778v-2.222l5 4.425-5 4.464v-2.223c0 .001-3.78-.114-7 3.334z" />
          </svg>
          <div>Share</div>
        </div>
      </div>
      <div className="flex pr-3">
        <div className="avatar online p-3">
          <div className="rounded-full w-5 h-5">
            <img alt="profile pic" src={props.feed.profilePicUrl} />
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            className="border-0 px-1 py-2 placeholder-gray-500 text-black bg-theme-main rounded-full text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
