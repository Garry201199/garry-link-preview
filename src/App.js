import { useEffect, useState } from "react";
import { BiErrorCircle } from "react-icons/bi";
import Preview from "./Comp/Preview";
import SearchBar from "./Comp/SearchBar";
import "./styles.css";
import { Client } from "peekalink";

const client = new Client({ apiKey: "28584624-d187-47ff-a5a6-786370d6a23b" });

export default function App() {
  const [link, setLink] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (link === "") {
        setData(null);
        setLoading(false);
      }
      setError("");
    }, 3000);
  }, [error, link]);

  const fetchLink = async () => {
    link === "" ? setError("Please enter valid link") : setLoading(true);
    setData(null);
    console.log("laoding started" + loading);
    await client
      .preview(link)
      // await getLinkPreview(link)
      .then((data) => {
        setLoading(false);
        setData(data);
        if (data.contentType !== "html") {
          setError("Provided link has no data suitable for preview");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError("Provided link has no preview ");
      });
  };
  return (
    <div className="bg-slate-800 select-none h-screen ">
      <div className="px-2  App lg:px-24">
        <div className="  container h-screen overflow-y-auto bg-gray-100  mx-auto">
          <p className="py-5 text-5xl   select-none font-bold heading text-black ">
            Garry Link previewer
          </p>

          <SearchBar
            fetchLink={fetchLink}
            setLink={setLink}
            link={link}
            setData={setData}
          />
          <Preview data={data} loading={loading} />

          {error && (
            <div className="flex items-center  justify-center">
              <p className="px-4 py-3 bg-red-100 text-red-700 gap-x-4 rounded-md w-fit text-center flex ">
                {" "}
                <span>
                  <BiErrorCircle size={30} />
                </span>{" "}
                {error.toString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
