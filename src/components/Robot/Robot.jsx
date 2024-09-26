import {Label} from './Label.jsx';
import {Description} from "./Description.jsx";
import {Card} from 'react-bootstrap';
import {useState} from "react";

export function Robot({robot, setSelectedPartsIds}) {
    const [isSelected, setIsSelected] = useState(false);

    const handleSelectedRobot = () => {
        if (isSelected) {
            setSelectedPartsIds([]);
            setIsSelected(false);
        } else {
            setSelectedPartsIds(robot.parts);
            setIsSelected(true);
        }
    }

    return (
        <div style={{"margin": "1rem"}}>
            <Card style={{"width": "18rem"}} onClick={handleSelectedRobot}
                  className={isSelected ? "border-primary" : ""}>
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