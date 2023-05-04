import { profileData } from "../App";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import "./card.css";
import playIcon from "../assets/images/icon-play.svg";
import exerciseIcon from "../assets/images/icon-exercise.svg";
import selfCareIcon from "../assets/images/icon-self-care.svg";
import socialIcon from "../assets/images/icon-social.svg";
import studyIcon from "../assets/images/icon-study.svg";
import workIcon from "../assets/images/icon-work.svg";

interface cardHeaderStyles {
  image: string;
  backgroundColor: string;
}

function getCardHeaderStyle(title: string): cardHeaderStyles {
  if (title === "Work") {
    return { image: workIcon, backgroundColor: "#ff8c66" };
  } else if (title === "Play") {
    return { image: playIcon, backgroundColor: "#56c2e6" };
  } else if (title === "Study") {
    return { image: studyIcon, backgroundColor: "#ff5c7c" };
  } else if (title === "Exercise") {
    return { image: exerciseIcon, backgroundColor: "#4acf81" };
  } else if (title === "Social") {
    return { image: socialIcon, backgroundColor: "#7536d3" };
  } else if (title === "Self Care") {
    return { image: selfCareIcon, backgroundColor: "#f1c65b" };
  } else {
    return { image: "", backgroundColor: "" };
  }
}

export function Card({
  title,
  timeframes,
  weeklyActive,
  dailyActive,
  monthlyActive,
}: profileData) {
  const { image, backgroundColor }: cardHeaderStyles =
    getCardHeaderStyle(title);

  return (
    <div className="card">
      <div className="card-header" style={{ backgroundColor: backgroundColor }}>
        <picture>
          <img src={image} alt={title} />
        </picture>
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <p>{title}</p>
          <picture>
            <img src={ellipsis} alt="Know more" />
          </picture>
        </div>
        <CardBody
          timeframes={timeframes}
          weeklyActive={weeklyActive}
          dailyActive={dailyActive}
          monthlyActive={monthlyActive}
        />
      </div>
    </div>
  );
}

type cardBody = {
  timeframes: {
    weekly: {
      current: number;
      previous: number;
    };
    daily: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
  weeklyActive: boolean;
  dailyActive: boolean;
  monthlyActive: boolean;
};

function CardBody({
  timeframes,
  weeklyActive,
  dailyActive,
  monthlyActive,
}: cardBody) {
  return (
    <>
      {weeklyActive && !dailyActive && !monthlyActive ? (
        <>
          <div className="card-main-body">
            <h1>{timeframes.weekly.current}hrs</h1>
          </div>
          <div className="card-body-footer">
            <p>Last Week - {timeframes.weekly.previous}hrs</p>
          </div>
        </>
      ) : dailyActive && !weeklyActive && !monthlyActive ? (
        <>
          <div className="card-main-body">
            <h1>{timeframes.daily.current}hrs</h1>
          </div>
          <div className="card-body-footer">
            <p>Yesterday - {timeframes.daily.previous}hrs</p>
          </div>
        </>
      ) : (
        monthlyActive &&
        !dailyActive &&
        !weeklyActive && (
          <>
            <div className="card-main-body">
              <h1>{timeframes.monthly.current}hrs</h1>
            </div>
            <div className="card-body-footer">
              <p>Last Month - {timeframes.monthly.previous}hrs</p>
            </div>
          </>
        )
      )}
    </>
  );
}
