import {Label} from './Label.jsx';
import {Description} from "./Description.jsx";
import {Card} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {resetSelectedPart, resetSelectedRobot, updateSelectedRobot} from "../../core/actions.js";

export function Robot({robot}) {

    const dispatch = useDispatch();
    const selectedRobotId = useSelector(state => state.robotReducer.selectedRobotId);

    const handleSelectedRobot = () => {
        dispatch(resetSelectedRobot())
        dispatch(resetSelectedPart())
        if (selectedRobotId !== robot.id) {
            dispatch(updateSelectedRobot(robot))
        }
    }

    return (
        <div style={{"margin": "1rem"}}>
            <Card style={{"width": "18rem"}}
                  onClick={handleSelectedRobot}
                  className={selectedRobotId === robot.id ? "border-primary" : ""}
            >
                <Card.Header>Robot Description</Card.Header>
                <Label title={robot.title}/>
                <Description id={robot.id} label={robot.title}/>
                {robot.visual_type === 'img' && <img className='card-img' src={robot.visual_src} alt="robot"/>}
                {robot.visual_type === 'video' &&
                    <object className='card-img' data={robot.visual_src} type="video/mp4" width="320" height="240"/>}
            </Card>
        </div>
    );
}