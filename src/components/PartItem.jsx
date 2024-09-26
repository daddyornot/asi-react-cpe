import {Card} from "react-bootstrap";
import {TablePart} from "./TablePart.jsx";

export function PartItem({part}) {
    return (
        <Card style={{"margin" : "1rem"}}>
            <Card.Header className='card-title'>Part {part.title} description</Card.Header>
            <TablePart part={part}/>
        </Card>
    )
}