import "./App.css";
import { Card } from "./Card/Card";
import data from "../data.json";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import { useState } from "react";
export interface profileData {
  title: string;
  monthlyActive: boolean;
  dailyActive: boolean;
  weeklyActive: boolean;
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
  const [dailyActive, setDailyActive] = useState(false);
  const [weeklyActive, setWeeklyActive] = useState(true);
  const [monthlyActive, setMonthlyActive] = useState(false);

  return (
    <>
      <main className="dashboard">
        <ProfileCard
          dailyActive={dailyActive}
          monthlyActive={monthlyActive}
          weeklyActive={weeklyActive}
          setWeeklyActive={setWeeklyActive}
          setDailyActive={setDailyActive}
          setMonthlyActive={setMonthlyActive}
        />
        <div className="dashboard-card-body">
          {data.map((profileData) => {
            return (
              <Card
                key={profileData.title}
                title={profileData.title}
                timeframes={profileData.timeframes}
                monthlyActive={monthlyActive}
                dailyActive={dailyActive}
                weeklyActive={weeklyActive}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
