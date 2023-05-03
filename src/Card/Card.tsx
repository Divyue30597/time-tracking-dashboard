import { profileData } from "../App";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import "./card.css";
import playIcon from "../assets/images/icon-play.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import selfCareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";
import studyIcon from "../assets/images/icon-study.svg";
import workIcon from "../assets/images/icon-work.svg";

function getImage(title: string): string | undefined {
  if (title === "Work") {
    return workIcon;
  } else if (title === "Play") {
    return playIcon;
  } else if (title === "Study") {
    return studyIcon;
  } else if (title === "Exercise") {
    return exerciseIcon;
  } else if (title === "Social") {
    return socialIcon;
  } else if (title === "Self Care") {
    return selfCareIcon;
  }
}

export function Card({ title, timeframes }: profileData) {
  return (
    <div className="card">
      <div className="card-header">
        <picture>
          <img src={getImage(title)} alt="" />
        </picture>
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <p>{title}</p>
          <picture>
            <img src={ellipsis} alt="" />
          </picture>
        </div>
        <div className="card-main-body">
          <h1>{timeframes.daily.current}hrs</h1>
        </div>
        <div className="card-body-footer">
          <p>Last Week - {timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
  );
}
