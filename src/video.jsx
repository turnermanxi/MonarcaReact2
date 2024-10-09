import ReactPlayer from 'react-player';
import "./video.css"

function VideoPlayer() {

    return (
        <div id="video">
              <ReactPlayer
              url="/background.mov"
              playsinline={true}
              volume= {0}
              muted={true} 
              width="100%"
              height="100%"
              style={{ width: '100vw' }}
              playing={true}
              loop={true}
              className="react-player" 
              />
        </div>
    )
}

export default VideoPlayer;