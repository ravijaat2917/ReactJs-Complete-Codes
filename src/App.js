import Video from "./components/conditionalRendering/video";
import "./App.css";
import data from "./data/data.js";
import PlayButton from "./components/events-eventsHandler-syntheticEventObject/playButton";

let videos = data;

let App = () => {
  return (
    <>
      <h4>Videos</h4>

      <div className="row">
        {videos.map((video) => (
          <div className="video">
            <Video
              channel={video.channel}
              varified={video.varified}
              time={video.time}
              views={video.views}
              title={video.title}
              imglink={video.imglink}
              
            >
              <PlayButton onSmash={()=>alert('Play...')} buttonName="Play" messege="Play Button Clicked"></PlayButton>
            </Video>
          </div>
        ))}

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
      </div>

      {/* <PlayButton onSmash={()=>alert('Play...')} buttonName="Play" messege="Play Button Clicked"></PlayButton> */}
      {/* <PlayButton onSmash={()=>alert('Pause...')} buttonName="Pause" messege="Pause Button Clicked"></PlayButton> */}
    </>
  );
};

export default App;
