import {Card} from "react-bootstrap";
import {useSelector} from "react-redux";
import {getSelectedPart} from "../../core/selectors.js";

export function PartDetail() {
    const part = useSelector(getSelectedPart);

    return (
        part ? (
            <Card style={{"width": "30rem"}}>
                <Card.Header>{part.title}</Card.Header>
                <Card.Text>{part.description}</Card.Text>
                {part.visual_type === 'img' && <img className='card-img' src={part.visual_src} alt="part"/>}
                {part.visual_type === 'video' &&
                    <object className='card-img' data={part.visual_src} type="video/mp4" width="320" height="240"/>}

                <Card.Footer>{part.price}</Card.Footer>
            </Card>
        ) : (
            <div>
                <h1>No part selected</h1>
            </div>
        )
    );
}