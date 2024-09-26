import {Robot} from "./Robot.jsx";


export function RobotList({ robots, setSelectedPartsIds }) {

  return (
    <div>
      {robots.map((robot) => (
        <Robot key={robot.id} robot={robot} setSelectedPartsIds={setSelectedPartsIds}/>
      ))}
    </div>
  );
}