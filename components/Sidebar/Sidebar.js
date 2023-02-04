import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const Sidebar = () => {
  return (
    <div className="w-[240px] h-full fixed overflow-y-auto invisible hover:visible">
      <div className="visible pt-[14px]">
        <a
          className="flex items-center bg-[#f2f2f2] hover:bg-[#e6e6e6] mx-[11px] py-[9px] rounded-[11px]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-house hidden ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-house-fill ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
            <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
          </svg>
          <p className="text-[14px] ml-[25px] font-medium">Home</p>
        </a>
        <a
          className="flex items-center hover:bg-[#f2f2f2] mx-[11px] py-[9px] rounded-[11px]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-play ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-play-fill hidden ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <p className="text-[14px] ml-[25px]">Shorts</p>
        </a>
        <a
          className="flex items-center hover:bg-[#f2f2f2] mx-[11px] py-[9px] rounded-[11px]"
          href="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-collection-play ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3zm2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1zm2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z" />
            <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5h-13zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5h13z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-play-fill hidden ml-[18px]"
            viewBox="0 0 16 16"
          >
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
          </svg>
          <p className="text-[14px] ml-[25px]">Subscriptions</p>
        </a>
        <hr className="mt-[14px] mb-[12px]" />
        <a
          className="flex items-center hover:bg-[#f2f2f2] mx-[11px] py-[9px] rounded-[11px]"
          href="/"
        >
          <VideoLibraryOutlinedIcon className="ml-[18px] text-[20px]" />
          <VideoLibraryIcon className="hidden ml-[18px] text-[20px]" />
          <p className="text-[14px] ml-[25px]">Library</p>
        </a>
        <a
          className="flex items-center hover:bg-[#f2f2f2] mx-[11px] py-[9px] rounded-[11px]"
          href="/"
        >
          <AccessTimeIcon className="ml-[18px] text-[20px]" />
          <VideoLibraryIcon className="hidden ml-[18px] text-[20px]" />
          <p className="text-[14px] ml-[25px]">History</p>
        </a>
        <hr className="mt-[14px] mb-[14px]" />
        <p className="ml-[36px] text-[14px] mb-[12px]">
          Sign in to like videos, comment and subscribe.
        </p>
        <div className="h-[35px] w-[103px] flex items-center border ml-[36px] pl-[10px] pr-[15px] rounded-[40px] cursor-pointer">
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
        <hr className="mt-[16px] mb-[14px]" />
      </div>
      <div className="h-[800px]"></div>
    </div>
  );
};
