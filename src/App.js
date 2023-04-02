import Video from "./components/video";
import "./App.css";
import data from "./data/data.js";

let videos = data;

let App = () => {
  return (
    <>
      <h4>Videos</h4>

      <div className="row">

        {
          videos.map(video =><div className="video"><Video
            channel={video.channel }
            varified={video.varified}
            time={video.time}
            views={video.views}
            title={video.title}
            imglink={video.imglink} ></Video> </div>
          )
        }

        <div className="video">
          <Video
            channel="Coder Dost"
            varified={false}
            time="1 month ago"
            views="10k"
            title="ReactJs-Tutorial Thumbnail"
            imglink="https://source.unsplash.com/random/220x150"
          ></Video>
        </div>

        <div className="video">
          <Video
            channel="Geeky Show"
            time="1 year ago"
            varified={true}
            views="1.2M"
            title="NodeJs-Tutorial Thumbnail"
            imglink="https://picsum.photos/220/150?random=1"
          ></Video>
        </div>
      </div>
    </>
  );
};

export default App;
