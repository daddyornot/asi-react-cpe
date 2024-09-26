import {PartItem} from "./PartItem.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getParts, getSelectedPartIds} from "../../core/selectors.js";

export function PartList() {

    const dispatch = useDispatch();
    const selectedPartIds = useSelector(getSelectedPartIds);

    const selectedParts = useSelector(getParts).filter(part => selectedPartIds.includes(part.id))

    console.log("selectedParts", selectedParts)

    useEffect(() => {
        // /parts?id=A1&id=A2
        let partsIdString = '';
        if (selectedPartIds.length > 0) {
            partsIdString = selectedPartIds.map(id => `id=${id}`).join('&');
        }
        fetch(`https://robot-cpe-2024.cleverapps.io/parts?${partsIdString}`)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'ADD_PARTS',
                    payload: data
                })
            });
    }, [dispatch, selectedPartIds]);

    return (
        selectedParts.length > 0 ? (
            <div>
                {selectedParts.map((part) => (
                    <PartItem key={part.id} part={part} style={{"margin-bottom": "1rem"}}/>
                ))}
            </div>
        ) : (
            <div>
                <h1>No Robot selected</h1>
            </div>
        )
    );
}