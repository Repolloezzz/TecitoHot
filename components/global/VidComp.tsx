import ReactPlayer from "react-player";
import { useState } from "react";

export function Video({
  url,
  controls = true,
  loop = false,
  className = "",
  play = false,
}: {
  url: string;
  controls?: boolean;
  loop?: boolean;
  className?: string;
  play?: boolean;
}) {
  const [urlChange, setUrl] = useState(url);
  return (
    <div className={`${className}`}>
      <ReactPlayer
        url={urlChange}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          setUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }}
        controls={controls}
        loop={loop}
        playing={play}
      />
    </div>
  );
}
