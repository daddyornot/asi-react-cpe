import React, {useEffect, useState} from 'react';
import {RobotList} from "./components/RobotList.jsx";
import {PartList} from "./components/PartList.jsx";

function App() {
    // state is initialized by a props
    const [robots, setRobots] = useState([]);
    const [selectedPartsIds, setSelectedPartsIds] = useState([])

    useEffect(() => {
        fetch('https://robot-cpe-2024.cleverapps.io/robots')
            .then(response => response.json())
            .then(data => setRobots(data));
    }, []);

    useEffect(() => {
        console.log(selectedPartsIds)
    }, [selectedPartsIds]);

    return (
        <div className="App">
            <h1> this is my first React Component</h1>
            <h2>Robot List</h2>
            <div style={{"display": "flex"}}>
                <RobotList robots={robots} setSelectedPartsIds={setSelectedPartsIds}/>
                <PartList partsId={selectedPartsIds}/>
            </div>
        </div>
    );
}

export default App;