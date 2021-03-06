import React from 'react'
import { isMobile } from 'react-device-detect'

import classes from './BackgroundVideo.module.css'

const BackgroundVideo = () => {
  const videoSource = 'https://circuitsofvalue.com/public/circuits.mp4'
  return (
    <>
      {!isMobile ? (
        <video id="VideoBG" autoPlay={true} loop={true} muted className={classes.Video}>
          <source src={videoSource} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : null}
    </>
  )
}

export default BackgroundVideo
