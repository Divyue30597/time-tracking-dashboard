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
          <p>{title}</p>
          <picture>
            <img src={ellipsis} alt="" />
          </picture>
        </div>
        <div className="card-main-body">
          <h1>{timeframes.daily.current}hrs</h1>
        </div>
        <div className="card-body-footer">
          Last Week - <p>{timeframes.daily.previous}</p>
        </div>
      </div>
    </div>
  );
}
