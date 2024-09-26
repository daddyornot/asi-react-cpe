import {Card} from "react-bootstrap";
import {TablePart} from "./TablePart.jsx";
import {useDispatch, useSelector} from "react-redux";

export function PartItem({part}) {
    const dispatch = useDispatch();
    const selectedPart = useSelector(state => state.partReducer.selectedPart);

    const handleSelectedPart = () => {
        console.log(part);
        if (selectedPart != null) {
            dispatch({
                type: 'UPDATE_SELECTED_PART',
                payload: null
            })
        } else {
            dispatch({
                type: 'UPDATE_SELECTED_PART',
                payload: part
            })
        }
    }

    return (
        <Card style={{"margin": "1rem"}}
              className={selectedPart === part ? "border-primary" : ""}
              onClick={handleSelectedPart}
        >
            <Card.Header className='card-title'>Part {part.title} description</Card.Header>
            <TablePart part={part}/>
        </Card>
    )
}