import {PartItem} from "./PartItem.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export function PartList() {

    const dispatch = useDispatch();

    // get selected part ids from the store
    const selectedPartIds = useSelector(state => state.partReducer.selectedPartIds);

    const selectedParts = useSelector(state =>
        state.partReducer.parts.filter(part => selectedPartIds.includes(part.id))
    );

    console.log("selectedParts", selectedParts)

    useEffect(() => {
        console.log("updating parts")

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