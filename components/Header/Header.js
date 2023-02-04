import Image from "next/image";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const Header = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.currentTarget.value);
  };

  const handleClearSearch = (e) => {
    setSearchText("");
    e.currentTarget.parentElement.children[0].focus();
  };

  return (
    <div className="w-full h-[56px] flex items-center sticky top-0 justify-between px-[18px] z-10 bg-white">
      <div className="flex">
        <div className="flex items-center">
          <div className="w-[38px] h-[38px] flex justify-center items-center rounded-[50%] hover:bg-black/10 cursor-pointer">
            <div className="w-[18px] h-[13px] flex flex-col justify-between">
              <div className="w-full h-[1px] bg-black"></div>
              <div className="w-full h-[1px] bg-black"></div>
              <div className="w-full h-[1px] bg-black"></div>
            </div>
          </div>
          <div className="flex items-center ml-[17px]">
            <Image
              src={"/assets/yt_logo_rgb_light.png"}
              width={90}
              height={20}
              alt="youtube logo"
            />
          </div>
        </div>
        <div className="flex items-center ml-[168px]">
          <div className="w-[563px] h-[40px] flex items-center justify-end relative">
            <input
              type="text"
              name="youtube-search"
              id="youtube-search"
              placeholder="Search"
              onChange={handleSearch}
              value={searchText}
              className="w-[95%] h-full border border-[#d6d6d6] rounded-tl-[40px] rounded-bl-[40px] outline-none pl-[17px] focus:border-[blue] focus:w-full peer focus:pl-[45px] shadow-[inset_0_1px_1px_rgba(50,50,50,0.1)] focus:shadow-[inset_0_1px_2px_rgba(50,50,50,0.4)]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-search ml-[20px] absolute left-0 hidden peer-focus:block"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              fill="currentColor"
              className={`bi bi-x absolute cursor-pointer ${
                searchText.length > 0 ? "" : "hidden"
              }`}
              // onClick={() => setSearchText("")}
              onClick={handleClearSearch}
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="w-[65px] h-[40px] flex items-center bg-[#f8f8f8] border border-[#d6d6d6] border-l-0 rounded-tr-[40px] rounded-br-[40px] cursor-pointer hover:bg-[#e8e8e8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-search ml-[20px]"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
          <div className="w-[40px] h-[40px] flex justify-center items-center bg-[#707070]/5 rounded-[50%] hover:bg-black/10 ml-[8px] cursor-pointer">
            <MicIcon sx={{ fontSize: "22px" }} />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-[40px] h-[40px] flex justify-center items-center rounded-[50%] mr-[7px] cursor-pointer">
          <MoreVertIcon />
        </div>
        <div className="h-[35px] flex items-center border pl-[10px] pr-[15px] rounded-[40px] cursor-pointer">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="blue"
              className="bi bi-person-circle mr-[8px]"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
          </div>
          <p className="text-[15px] font-[500] text-[blue]">Sign in</p>
        </div>
      </div>
    </div>
  );
};
