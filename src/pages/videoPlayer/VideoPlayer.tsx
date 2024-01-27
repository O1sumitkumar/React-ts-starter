import React, { useRef, useState, useEffect } from 'react';
import './VideoPlayer.css';
import { AUDIO_FILE, VIDEO_FILE } from '../../assets/data/data';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';
import { Box, Stack, Typography } from '@mui/material';
import ReactWaves from '@dschoon/react-waves';

const VideoPlayer: React.FC = () => {
  const playerContainerRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const handlePlayPauses = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const handlePlayPause = () => {
    if (playerRef.current) {
      if (playerRef.current.paused || playerRef.current.ended) {
        playerRef.current.play();
        setIsPlaying(true);
      } else {
        playerRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    if (playerRef.current) {
      playerRef.current.currentTime =
        (playerRef.current.duration / 100) * newProgress;
    }
  };

  const handleProgressUpdate = () => {
    if (playerRef.current) {
      const newProgress =
        (playerRef.current.currentTime / playerRef.current.duration) * 100;
      setProgress(newProgress);
    }
  };

  const handlePlaybackRateChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPlaybackRate(Number(e.target.value));
  };

  const toggleFullScreen = () => {
    const playerContainer = playerContainerRef.current;
    if (!document.fullscreenElement && playerContainer) {
      playerContainer.requestFullscreen();
      setIsFullScreen(true);
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  const skipTime = (time: number) => {
    if (playerRef.current) {
      const newTime = playerRef.current.currentTime + time;
      playerRef.current.currentTime = newTime >= 0 ? newTime : 0;
      setProgress(
        (playerRef.current.currentTime / playerRef.current.duration) * 100,
      );
    }
  };

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);
  console.log(VIDEO_FILE.FALAK_TAK);

  return (
    <div style={{ maxWidth: '' }}>
      <div ref={playerContainerRef} className='player-container'>
        <video
          //   key={isFullScreen ? 'fullscreen' : 'inline'}
          ref={playerRef}
          className='video'
          onTimeUpdate={handleProgressUpdate}
          onClick={handlePlayPause}
          playsInline={!isFullScreen}
          preload='metadata'
          loop
        >
          <source
            // src='https://www.w3schools.com/tags/mov_bbb.mp4'
            // src=video_FILE.DIL_JHOOM}`}
            src={`${VIDEO_FILE.FALAK_TAK}`}
            type='video/mp4'
            // type='audio/mpeg'
          />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* <img src={AudiotrackOutlined} alt='' /> */}
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <HeadphonesRoundedIcon fontSize='large' color='primary' />
            </Box>
            <Typography
              variant='h3'
              sx={{ fontSize: { xs: '24px', md: '30px' } }}
            >
              Audio | By Mark
            </Typography>
            <Typography sx={{ fontSize: { xs: '12px', md: '16px' } }}>
              The Professional Cookery
            </Typography>
            <div style={{ width: '700px' }}>
              <ReactWaves
                audioFile={AUDIO_FILE.DIL_JHOOM} // replace 'track1' with your actual audio file
                className={'react-waves'}
                options={{
                  barWidth: 3,
                  barHeight: 5,
                  barGap: 6,
                  backend: 'MediaElement',
                  normalize: true,
                  cursorWidth: 0,
                  mediaType: 'audio',
                  hideScrollbar: true,
                  responsive: true,
                  progressColor: '#2492FC',
                  waveColor: '#E9EFF4',
                }}
                zoom={1}
                volume={0}
                playing={isPlaying}
                // onFinishedPlaying={() => setPlaying(false)} // Add this line if you want to stop playing when the audio finishes
              />
            </div>
          </Stack>
        </Box>
        <div className='controls'>
          <button onClick={() => skipTime(-2)}>&lt;&lt; 10s</button>
          <button onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={() => skipTime(2)}>10s &gt;&gt;</button>
          <input
            type='range'
            min='0'
            max='100'
            value={progress}
            onChange={handleProgressChange}
          />
          <input
            type='range'
            min='0'
            max='1'
            step='0.01'
            value={volume}
            onChange={handleVolumeChange}
          />
          {/* <RangeSlider value={volume} onChange={handleVolumeChange} /> */}
          <select value={playbackRate} onChange={handlePlaybackRateChange}>
            <option value='0.5'>0.5x</option>
            <option value='1'>1x</option>
            <option value='1.5'>1.5x</option>
            <option value='2'>2x</option>
          </select>
          <button onClick={toggleFullScreen}>
            {isFullScreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
