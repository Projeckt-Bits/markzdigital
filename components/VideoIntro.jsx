// components/VideoIntro.jsx
'use client';

import React, { useRef, useEffect } from 'react';
import styles from './VideoIntro.module.css';

/**
 * A full-screen video intro component for Next.js.
 * @param {object} props
 * @param {string} props.src - The source path of the video file (e.g., '/videos/intro.mp4').
 * @param {function} props.onFinished - A callback function to be called when the intro is skipped or finished.
 */
const VideoIntro = ({ src, onFinished }) => {
  const videoRef = useRef(null);

  // Function to handle skipping or finishing the intro
  const handleEnd = () => {
    if (onFinished) {
      onFinished();
    }
  };

  // Add an event listener for when the video ends
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('ended', handleEnd);
    }

    // Cleanup: remove the event listener when the component unmounts
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleEnd);
      }
    };
  }, [onFinished]);

  return (
    <div className={styles.introContainer}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        autoPlay
        muted     // Muted is crucial for autoplay to work in most browsers
        playsInline // Important for iOS devices
      />
      <button onClick={handleEnd} className={styles.skipButton}>
        Skip Intro
      </button>
    </div>
  );
};

export default VideoIntro;