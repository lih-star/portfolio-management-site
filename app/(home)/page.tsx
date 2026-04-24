import React from "react";
import Calendar from "../component/calendar/calendar";

const Page: React.FC = () => {
  const today = new Date();
  
  return (
    <div>
      <Calendar year={today.getFullYear()} month={today.getMonth()} />
    </div>
  );
};

export default Page;
