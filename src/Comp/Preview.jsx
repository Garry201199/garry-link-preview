import { BiLink } from "react-icons/bi";
import { DotLoader } from "react-spinners";

const Preview = ({ data, loading }) => {
  return (
    <>
      <div className="flex  items-center align-center justify-center">
        <DotLoader loading={loading} />
      </div>
      {data && data.contentType === "html" && (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full flex justify-center items-center lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div
            className="overflow-hidden transition-shadow
           duration-300  w-96 bg-white rounded-xl shadow-2xl "
          >
            {data?.image && (
              <img
                loading="lazy"
                src={data?.image?.url}
                className="object-contain 
               hover:scale-110 transition-all duration-300 
               ease-in-out w-full rounded-xl h-64"
                alt=""
              />
            )}

            <div className="p-5 ">
              <div className="flex mb-3 items-center align-center justify-center">
                {data?.icon && (
                  <img
                    src={data?.icon.url}
                    className=" h-[32px] w-[32px] "
                    alt="bohbt"
                  />
                )}
                <p className="inline-block ml-4 text-2xl font-bold leading-2 transition-colors duration-200">
                  {data?.domain}
                </p>
              </div>

              <p className="inline-block ml-4 text-lg font-semibold leading-2 transition-colors duration-200">
                {data?.title}
              </p>

              <p className="mb-2 text-gray-700">
                {data?.description.length > 60
                  ? data?.description.slice(0, 50) + " ..."
                  : data?.description}
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={data?.url}
                className="inline-flex items-center font-semibold 
                transition-colors duration-200 text-blue-500 
                hover:text-blue-800 bg-clip-text	 "
              >
                <BiLink size={20} />
                {data?.url.length > 30
                  ? data?.url.slice(0, 30) + "..."
                  : data?.url}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preview;
