import { Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export default function AssignmentControl() {
  return (
    <div>
      <Row>
        {/* Search bar */}
        <Col xs={3}>
          <InputGroup className="mb-3">
            <InputGroupText>
              <HiOutlineMagnifyingGlass />
            </InputGroupText>
            <FormControl placeholder={"Search..."} />
          </InputGroup>
        </Col>

        <Col xs={9}>
          {/* Add Assignment Button */}
          <Button
            variant="danger"
            size="lg"
            className="me-1 float-end"
            id="wd-add-assignment-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </Button>

          {/* Add Group Button */}
          <Button
            variant="secondary"
            size="lg"
            className="me-1 float-end"
            id="wd-add-group-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </Button>
        </Col>
      </Row>
    </div>
  );
}
