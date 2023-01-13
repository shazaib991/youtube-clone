import Image from "next/image";
import MicIcon from "@mui/icons-material/Mic";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export const Header = () => {
  return (
    <div className="w-full h-[56px] flex  items-center justify-between px-[18px]">
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
      <div className="flex items-center ml-[18px]">
        <div>
          <input
            type="text"
            name="youtube-search"
            id="youtube-search"
            placeholder="Search"
            style={{
              boxShadow: "inset 0px 3px 6px -6px #888",
            }}
            className="w-[540px] h-[40px] border border-[#d6d6d6] rounded-tl-[40px] rounded-bl-[40px] outline-none pl-[17px] focus:border-[blue]"
          />
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
