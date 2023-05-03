import { profileData } from "../App";
import ellipsis from "../assets/images/icon-ellipsis.svg";
import "./card.css";

export function Card({ title, timeframes }: profileData) {
  return (
    <div className="card">
      <div className="card-header">
        <picture>
          <img src="" alt="" />
        </picture>
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <h1>{title}</h1>
          <picture>
            <img src={ellipsis} alt="" />
          </picture>
        </div>
        <div className="card-main-body">
          <p>{timeframes.daily.current}</p>
        </div>
        <div className="card-body-footer">
          Last Week - <p>{timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
  );
}
