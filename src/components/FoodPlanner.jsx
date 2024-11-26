import React, { useState } from "react";
import "../styles/FoodPlanner.css";

const weeklyMealPlan = {
  Monday: {
    breakfast: "Poha with Chai",
    lunch: "Rajma with Rice",
    dinner: "Aloo Gobi with Chapati",
  },
  Tuesday: {
    breakfast: "Paratha with Yogurt and Pickle",
    lunch: "Chole with Bhature",
    dinner: "Palak Paneer with Rice",
  },
  Wednesday: {
    breakfast: "Idli with Sambar and Coconut Chutney",
    lunch: "Vegetable Biryani with Raita",
    dinner: "Dal Tadka with Chapati",
  },
  Thursday: {
    breakfast: "Upma with Filter Coffee",
    lunch: "Baingan Bharta with Rice",
    dinner: "Vegetable Tikka with Naan",
  },
  Friday: {
    breakfast: "Dosa with Sambar and Coconut Chutney",
    lunch: "Aloo Paratha with Pickle and Curd",
    dinner: "Methi Thepla with Yogurt",
  },
  Saturday: {
    breakfast: "Chole Bhature",
    lunch: "Pav Bhaji with Bread",
    dinner: "Paneer Butter Masala with Rice or Naan",
  },
  Sunday: {
    breakfast: "Masala Dosa with Coconut Chutney",
    lunch: "Pulao with Cucumber Raita",
    dinner: "Vegetable Korma with Garlic Naan",
  }
};



const FoodPlanner = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");

  return (
    <div className="food-planner">
      <h1>Weekly Food Planner</h1>
      <div className="day-selector">
        <button onClick={() => setSelectedDay("Monday")}>Monday</button>
        <button onClick={() => setSelectedDay("Tuesday")}>Tuesday</button>
        <button onClick={() => setSelectedDay("Wednesday")}>Wednesday</button>
        <button onClick={() => setSelectedDay("Thursday")}>Thursday</button>
        <button onClick={() => setSelectedDay("Friday")}>Friday</button>
        <button onClick={() => setSelectedDay("Saturday")}>Saturday</button>
        <button onClick={() => setSelectedDay("Sunday")}>Sunday</button>
      </div>
      
      <div className="meal-plan">
        <h2>{selectedDay}</h2>
        <div className="meal">
          <h3>Breakfast:</h3>
          <p>{weeklyMealPlan[selectedDay].breakfast}</p>
        </div>
        <div className="meal">
          <h3>Lunch:</h3>
          <p>{weeklyMealPlan[selectedDay].lunch}</p>
        </div>
        <div className="meal">
          <h3>Dinner:</h3>
          <p>{weeklyMealPlan[selectedDay].dinner}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodPlanner;


