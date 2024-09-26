import {Robot} from "./Robot.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addRobots} from "../../core/actions.js";
import {getRobots} from "../../core/selectors.js";


export function RobotList() {
  const dispatch = useDispatch();
  const robots = useSelector(getRobots);

  useEffect(() => {
    fetch('https://robot-cpe-2024.cleverapps.io/robots')
        .then(response => response.json())
        .then(data => {
            dispatch(addRobots(data))
        });
  }, [dispatch]);

  return (
    <div>
      {robots.map((robot) => (
        <Robot key={robot.id} robot={robot}/>
      ))}
    </div>
  );
}