import "./profilecard.css";
import jeremyImage from "../assets/images/image-jeremy.png";

type profileCard = {
  dailyActive: boolean;
  weeklyActive: boolean;
  monthlyActive: boolean;
  setMonthlyActive: any;
  setWeeklyActive: any;
  setDailyActive: any;
};

export function ProfileCard({
  dailyActive,
  weeklyActive,
  monthlyActive,
  setMonthlyActive,
  setWeeklyActive,
  setDailyActive,
}: profileCard) {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <picture>
          <img src={jeremyImage} alt="Jeremy Robson" />
        </picture>
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <nav className="profile-card-body">
        <ul>
          <li>
            <a
              href="#"
              onClick={() => {
                setWeeklyActive(false);
                setDailyActive(true);
                setMonthlyActive(false);
              }}
              className={dailyActive ? "" : "is-inactive"}
            >
              Daily
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setWeeklyActive(true);
                setDailyActive(false);
                setMonthlyActive(false);
              }}
              className={weeklyActive ? "" : "is-inactive"}
            >
              Weekly
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => {
                setWeeklyActive(false);
                setDailyActive(false);
                setMonthlyActive(true);
              }}
              className={monthlyActive ? "" : "is-inactive"}
            >
              Monthly
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
