import './video.css';

// In this video funnction title views etc were props...
function Video ({title ,views ,time,channel="Channel", imglink  , varified}) {
  return (
    <div className='thumbnail'>
      <img src={imglink} alt=""></img>
      <p className='videoName'>{title}</p>
      
      {/* {varified ? <p className='channelName'>{channel} ✅</p> : <p className='channelName'>{channel} </p> } */}
      {/* <p className='channelName'>{channel} { varified ? '✅' : null }</p> */}
      <p className='channelName'>{channel} { varified && '✅'}</p>
      
      <p className='views'>{views} views <span>{time}</span></p>
    </div>
  );
}
export default Video; 