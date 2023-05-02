import ellipsis from "../assets/images/icon-ellipsis.svg";
import "./card.css";

export function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <picture>
          <img src="" alt="" />
        </picture>
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <h1>Card-body-header</h1>
          <picture>
            <img src={ellipsis} alt="" />
          </picture>
        </div>
        <div className="card-main-body">
          <p>32hrs</p>
        </div>
        <div className="card-footer">
          Last Week - <p></p>
        </div>
      </div>
    </div>
  );
}
