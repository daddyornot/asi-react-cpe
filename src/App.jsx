import React, {useEffect, useState} from 'react';
import {RobotList} from "./components/Robot/RobotList.jsx";
import {PartList} from "./components/Part/PartList.jsx";
import {Col, Container, Row} from "react-bootstrap";

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
        <Container fluid>
            <Row>
                <h1> this is my first React Component</h1>
            </Row>
            <Row>
                <h2>Robot List</h2>
                <Col>
                    <RobotList robots={robots} setSelectedPartsIds={setSelectedPartsIds}/>
                </Col>
                <Col>
                    <PartList partsId={selectedPartsIds}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;