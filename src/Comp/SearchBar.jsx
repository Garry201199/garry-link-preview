import { BiSearch, BiX } from "react-icons/bi";

const SearchBar = ({ fetchLink, setLink, link, setData }) => {
  return (
    <div className="text-2xl flex items-center  z-10 h-20  backdrop-blur-xl text-black ">
      <div className="flex   gap-x-4 w-full justify-center items-center">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="enter your link here"
          className="outline-none h-12 px-4  text-base relative
          placeholder:text-base  w-[70%] drop-shadow-2xl border-none 
          rounded-full  focus:outline-none
          "
        />
        <BiX
          className="absolute right-[22%]  bg-gray-200 rounded-full cursor-pointer "
          onClick={() => setLink("")}
        />

        <button onClick={() => fetchLink()} className="relative">
          <BiSearch
            size={40}
            className="  bg-cyan-200 rounded-full hover:bg-cyan-400
         hover:rounded-full mx-1 p-2  text-slate-800 duration-300 transition-all"
          />
          <div
            className="bg-cyan-500  animate-pulse trasition  
          duration-400 blur opacity-50 -z-10  absolute -top-1 -right-1 -left-1 rounded-full p-4 h-14 w-14"
          ></div>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
