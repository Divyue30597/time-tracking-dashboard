import "./App.css";
import { Card } from "./Card/Card";
import data from "../data.json";
import { ProfileCard } from "./ProfileCard/ProfileCard";

export interface profileData {
  title: string;
  timeframes: {
    daily: {
      current: number;
      previous: number;
    };
    weekly: {
      current: number;
      previous: number;
    };
    monthly: {
      current: number;
      previous: number;
    };
  };
}

function App() {
  return (
    <>
      <h1>Time tracking dashboard</h1>
      <main className="dashboard">
        <ProfileCard />
        <div className="dashboard-card-body">
          {data.map((profileData: profileData) => {
            return (
              <Card
                key={profileData.title}
                title={profileData.title}
                timeframes={profileData.timeframes}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
