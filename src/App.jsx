import {RobotList} from "./components/Robot/RobotList.jsx";
import {PartList} from "./components/Part/PartList.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {PartDetail} from "./components/Part/PartDetail.jsx";

function App() {

    return (
        <Container fluid>
            <Row>
                <h1> this is my first React Component</h1>
            </Row>
            <Row>
                <h2>Robot List</h2>
                <Col>
                    <RobotList/>
                </Col>
                <Col>
                    <PartList/>
                </Col>
                <Col>
                    <PartDetail/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;