import './App.css';
import { AiOutlineFastBackward, AiOutlineFastForward, } from 'react-icons/ai'
import { FaPlay, FaPause } from 'react-icons/fa'
import { useRef, useState } from 'react';

function App() {
  const videoRef = useRef(null)
  const [ playing , setPlaying] = useState(false)
  const [ videoTime, setVideoTime ] = useState(0)

  const videoHandler = control => {
    if (control === 'play') {
      videoRef.current.play()
      setPlaying(true)
      let vid = document.getElementById('video1')
      setVideoTime(vid.duration)
    } else if (control === 'pause') {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  const fastForward = () => {
    videoRef.current.currentTime += 5
  }

  const revert = () => {
    videoRef.current.currentTime -= 5
  }

  return (
    <div className='app'>
      <video
        id='video1'
        ref={videoRef}
        className='video'
        src='https://res.cloudinary.com/dssvrf9oz/video/upload/v1635662987/pexels-pavel-danilyuk-5359634_1_gmixla.mp4'
      ></video>
      <div className='controlsContainer'>
        <div className='controls'>
          <AiOutlineFastBackward className="controlsIcon" onClick={fastForward}/>
          {playing ? (
            <FaPause className="controlsIcon--small" onClick={() => videoHandler('pause')}/>
            ):(
            <FaPlay className="controlsIcon--small" onClick={() => videoHandler('play')}/>
          )}
          <AiOutlineFastForward className="controlsIcon" onClick={revert}/>
        </div>
      </div>
      <div className="timecontrols">
        <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
        <div className="time_progressbarContainer">
          <div style={{ width: "40%" }} className="time_progressBar"></div>
        </div>
        <p className="controlsTime">2:05</p>
      </div>
    </div>
  )
}

export default App;
