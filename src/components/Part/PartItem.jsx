import {Card} from "react-bootstrap";
import {TablePart} from "./TablePart.jsx";
import {useDispatch, useSelector} from "react-redux";
import {resetSelectedPart, updateSelectedPart} from "../../core/actions.js";
import {getSelectedPart} from "../../core/selectors.js";

export function PartItem({part}) {
    const dispatch = useDispatch();
    const selectedPart = useSelector(getSelectedPart);

    const handleSelectedPart = () => {
        dispatch(resetSelectedPart())
        if (selectedPart !== part) {
            dispatch(updateSelectedPart(part))
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