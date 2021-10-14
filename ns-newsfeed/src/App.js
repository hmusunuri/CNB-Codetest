import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import ImageCard from "./Components/ImageCard";
import feeds from "./data/data"
import {useEffect, useState} from "react"


function App() {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setData(feeds.slice(0,4));
  }, [])

  function loadMore() {
    if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
        // Do load more content here!
        if(data.length<feeds.length) {
          setisLoading(true);
          setTimeout(() => {
            const temp = data;
            temp.push(...feeds.slice(4,feeds.length))
            setData(temp);
            setisLoading(false);
          }, 2000);
        }
    }
}
  window.addEventListener('scroll', loadMore, false);
  return (
    <div>
      <Navbar />
      <div className="flex py-5 md:py-24 bg-theme-main text-black justify-center">
        <div className="md:w-1/2 py-2 md:py-0 mx-2 sm:mx-0">
          {data &&
            data.map((feed, index) =>
              feed.imgUrl ? <ImageCard key={index} feed={feed} /> : <Card key={index} feed={feed} />
            )}
            {isLoading ? 
            <div>
              <div className="py-2 md:py-0 mx-2 sm:mx-0">
              <div className="p-6 mt-4 bg-theme-analog rounded-lg shadow w-full">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-blue-400 rounded"></div>
                      <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="py-2 md:py-0 mx-2 sm:mx-0">
              <div className="p-6 mt-4 bg-theme-analog rounded-lg shadow w-full">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-blue-400 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-blue-400 rounded"></div>
                      <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        :''}
        </div>
      </div>
    </div>
  );
}

export default App;
