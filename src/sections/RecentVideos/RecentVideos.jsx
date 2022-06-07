import "./RecentVideos.scss";

import React, { useEffect, useState } from "react";

import Axios from "axios";
import Youtube from "react-youtube";

export default function RecentVideos() {
  const [video, setVideo] = useState([]);

  const getLatestVideo = async () => {
    try {
      const link = `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${
        import.meta.env.VITE_CHANNEL_ID
      }&key=${import.meta.env.VITE_YOUTUBE_API}`;

      const vid = await Axios.get(link).then((res) => res.data.items);

      setVideo([...vid]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getLatestVideo();
  }, []);

  return (
    <div className="support-section" id="videos">
      <div className="container">
        <h1 className="styled-title section">Recent videos</h1>
        <div className="video-list" id="latestVideo">
          {video.map((x) => (
            <Youtube
              id={import.meta.env.VITE_CHANNEL_ID}
              videoId={x.id.videoId}
              key={x.id.videoId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
