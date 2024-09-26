import {PartItem} from "./PartItem.jsx";
import {useEffect, useState} from "react";

export function PartList({partsId}) {
    const [parts, setParts] = useState(partsId);

    useEffect(() => {
        console.log("updating parts")
        // /parts?id=A1&id=A2
        let partsIdString = '';
        if (partsId.length > 0) {
            partsIdString = partsId.map(id => `id=${id}`).join('&');
        }
        fetch(`https://robot-cpe-2024.cleverapps.io/parts?${partsIdString}`)
            .then(response => response.json())
            .then(data => setParts(data));
    }, [partsId]);

    return (
        <div>
            {parts.map((part) => (
                <PartItem key={part.id} part={part} style={{"margin-bottom": "1rem"}}/>
            ))}
        </div>
    );
}