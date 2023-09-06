import React from "react";
import YouTube from "react-youtube";

const BackgroundVideo = ({ videoId }) => {
  const videoOpts = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      showinfo: 0,
      mute: 1, // Mute the video for background
    },
  };

  return (
    <div className="background-video">
      <YouTube videoId={`${videoId}`} opts={videoOpts} />
    </div>
  );
};

export default BackgroundVideo;
