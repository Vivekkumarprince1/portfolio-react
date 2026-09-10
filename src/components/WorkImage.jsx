import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const WorkImage = (props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const handleClick = (e) => {
    if (props.onSelect) {
      e.preventDefault();
      props.onSelect();
    }
  };

  const content = (
    <div
      className="work-image-in"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsVideo(false)}
      data-cursor={"disable"}
    >
      <div className="work-link">
        <MdArrowOutward />
      </div>
      <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
      {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
    </div>
  );

  if (props.onSelect) {
    return (
      <div className="work-image" onClick={handleClick} role="button" tabIndex={0}>
        {content}
      </div>
    );
  }

  return (
    <div className="work-image">
      {props.link ? (
        props.link.startsWith("/") ? (
          <Link to={props.link} className="work-image-in" data-cursor={"disable"}>
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </Link>
        ) : (
          <a
            className="work-image-in"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={"disable"}
          >
            <div className="work-link">
              <MdArrowOutward />
            </div>
            <img src={props.image} alt={props.alt} loading="lazy" decoding="async" />
          </a>
        )
      ) : (
        content
      )}
    </div>
  );
};

export default WorkImage;

