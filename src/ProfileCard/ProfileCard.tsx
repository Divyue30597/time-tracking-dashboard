import "./profilecard.css";

export function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-card_header">
        <picture>
          <img src="" alt="" />
        </picture>
        <p>Report for</p>
        <h1>Tomchi Sharma</h1>
      </div>
      <div className="profile-card_body">
        <nav>
          <ul>
            <li>
              <a href="/daily">Daily</a>
            </li>
            <li>
              <a href="/weekly">Weekly</a>
            </li>
            <li>
              <a href="/monthly">Monthly</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
