// @ts-nocheck
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { VIDEO_FILE } from '../../assets/data/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './styles.css';
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  A11y,
  History,
} from 'swiper/modules';
import { Button } from '@mui/material';

const YourComponent = () => {
  const [isPlaying, setIsPlaying] = useState();
  const [showButton, setShowButton] = useState(true);
  const [play, setPlay] = useState(false);
  const swiperRef = useRef(null);
  const videoRefs = useRef({});
  const [totalDuration, setTotalDuration] = useState(5000);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const videodata = Object.entries(VIDEO_FILE).map(([key, value]) => ({
    id: key,
    url: value,
  }));

  const handleSlideChange = () => {
    // Stop the previous video
    if (isPlaying) {
      const prevVideo = videoRefs.current[isPlaying];
      if (prevVideo) {
        prevVideo.pause();
        setPlay(false);
      }
    }

    // Get the current slide index
    const index = swiperRef.current.swiper.realIndex;

    // Check if the current slide has a video
    if (videodata[index].url) {
      // Play the current video only if there was a user interaction
      if (hasUserInteracted()) {
        const currVideo = videoRefs.current[videodata[index].id];
        if (currVideo) {
          currVideo.play();
          setPlay(true);
          setIsPlaying(videodata[index].id);
          setShowButton(true);
          // Set a timeout to hide the button after 2 seconds
          setTimeout(() => {
            setShowButton(false);
          }, 1000);
        }
      }
    }
  };

  const hasUserInteracted = () => {
    // Add your logic here to check for user interaction
    // For example, you can set a state when the component is clicked or touched
    // and check the state here.
    return true; // Change this based on your actual implementation
  };

  const handleVideoEnd = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handleLoadedMetaData = (event) => {
    // Access the total duration from the event
    const duration = event.target.duration;
    setTotalDuration(duration * 1000);
  };

  const handleTimeUpdate = (event) => {
    const currentTime = event.target.currentTime;
    // Your logic based on the current playback time
  };

  const handlePlayPauseClick = () => {
    // Toggle play/pause for the currently playing video
    if (isPlaying) {
      const currVideo = videoRefs.current[isPlaying];
      if (currVideo) {
        if (currVideo.paused) {
          currVideo.play();
          setPlay(true);
        } else {
          currVideo.pause();
          setPlay(false);
        }
      }
    }
  };

  return (
    <div className='main'>
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        watchSlidesProgress={true}
        onSlideChange={handleSlideChange}
        centeredSlides={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        onSwiper={(e) => console.log(e)}
        direction='vertical'
        navigation
        lazy={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, History]}
        history={{
          key: 'slide',
        }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        style={{ height: '100vh' }}
        className='mySwiper'
      >
        {videodata.map((video, index) => (
          <SwiperSlide key={index} data-history={`video-${index}`}>
            <div className='video-wrapper'>
              <video
                ref={(el) => (videoRefs.current[video.id] = el)}
                id={`video-${video.id}`}
                playsInline
                preload='metadata'
                // autoPlay
                onEnded={handleVideoEnd}
                loading='lazy'
                className={`video-${index}`}
                src={video.url}
                type='video/mp4'
                aria-label={`Video ${index + 1}`}
                aria-orientation={'horizontal'}
                onLoadedMetadata={handleLoadedMetaData}
                onTimeUpdate={handleTimeUpdate}
                poster='/src/pages/vertical/IMG_20230411_065321.jpg'
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
        <div className='autoplay-progress' slot='container-end'>
          <svg viewBox='0 0 48 48' ref={progressCircle}>
            <circle cx='24' cy='24' r='20'></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      <Button
        variant='contained'
        color={!play ? 'error' : 'primary'}
        sx={{
          position: 'absolute',
          top: '50%',
          zIndex: '15',
          transition: 'opacity 0.3s',
          opacity: showButton ? 1 : 0,
          '&:hover': {
            opacity: 1,
          },
        }}
        onClick={handlePlayPauseClick}
        onMouseEnter={() => setShowButton(true)}
        onMouseLeave={() => setShowButton(false)}
      >
        {!play ||
        (videoRefs.current[isPlaying] && videoRefs.current[isPlaying].paused)
          ? 'Play'
          : 'Pause'}
      </Button>
    </div>
  );
};

export default YourComponent;
