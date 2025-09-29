import {
  FormLabel,
  FormControl,
  FormSelect,
  Row,
  Col,
  FormCheck,
  Button,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      {/* Assignment Name & Description */}
      <Row>
        <Col xs={12} md={{ span: 5, offset: 2 }} className="field-wide">
          <FormLabel id="wd-name">Assignment Name</FormLabel>
          <FormControl placeholder="A1" />
          <br />
          <FormControl
            as="textarea"
            rows={10}
            placeholder="The assignment is available online ..."
          />
        </Col>
      </Row>

      {/* Points */}
      <br />
      <Row>
        <Col xs={12} md={3} className="text-md-end align-self-start">
          <FormLabel htmlFor="wd-points" className="me-2">
            Points
          </FormLabel>
        </Col>
        <Col xs={12} md={9} className="field-narrow">
          <FormControl id="wd-points" type="number" placeholder={"100"} />
        </Col>
      </Row>

      {/* Assignment Group */}
      <br />
      <Row>
        <Col xs={12} md={3} className="text-md-end align-self-start">
          <FormLabel htmlFor="wd-group" className="me-2">
            Assignment Group
          </FormLabel>
        </Col>
        <Col xs={12} md={9} className="field-narrow">
          <FormSelect id="wd-group">
            <option value="ASSIGNMENTS" defaultChecked>
              ASSIGNMENTS
            </option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </FormSelect>
        </Col>
      </Row>

      {/* Display Grade As */}
      <br />
      <Row>
        <Col xs={12} md={3} className="text-md-end align-self-start">
          <FormLabel htmlFor="wd-display-grade-as" className="me-2">
            Display Grade as
          </FormLabel>
        </Col>
        <Col xs={12} md={9} className="field-narrow">
          <FormSelect id="wd-display-grade-as">
            <option value="Percentage" defaultChecked>
              Percentage
            </option>
            <option value="Letter-Grade">Letter Grade</option>
          </FormSelect>
        </Col>
      </Row>

      {/* Submission Type */}
      <br />
      <Row>
        <Col xs={12} md={3} className="text-md-end align-self-start">
          <FormLabel htmlFor="wd-submission-type" className="me-2">
            Submission Type
          </FormLabel>
        </Col>
        <Col xs={12} md={9} className="field-narrow">
          <div className="border p-3 rounded">
            <FormSelect id="wd-submission-type">
              <option value="Online" defaultChecked>
                Online
              </option>
              <option value="On class">On class</option>
              <option value="None">None</option>
            </FormSelect>

            <br />
            <FormLabel>
              <b>Online Entry Options</b>
            </FormLabel>
            <br />
            <FormCheck type="checkbox" id="wd-text-entry" label="Text Entry" />
            <FormCheck
              type="checkbox"
              id="wd-website-url"
              label="Website URL"
            />
            <FormCheck
              type="checkbox"
              id="wd-media-recordings"
              label="Media Recordings"
            />
            <FormCheck
              type="checkbox"
              id="wd-student-annotation"
              label="Student Annotation"
            />
            <FormCheck
              type="checkbox"
              id="wd-file-upload"
              label="File Uploads"
            />
          </div>
        </Col>
      </Row>

      {/* Assign */}
      <br />
      <Row>
        <Col xs={12} md={3} className="text-md-end align-self-start">
          <FormLabel htmlFor="wd-assign-to" className="me-2">
            Assign
          </FormLabel>
        </Col>
        <Col xs={12} md={9} className="field-narrow">
          <div className="border p-3 rounded">
            <FormLabel style={{ fontSize: 20 }}>
              <b>Assign to</b>
            </FormLabel>
            <FormControl defaultValue="Everyone" id="wd-assign-to" />

            <br />
            <br />
            <FormLabel style={{ fontSize: 18 }}>
              <b>Due</b>
            </FormLabel>
            <FormControl type="date" id="wd-due-date" />

            <br />
            <br />
            <Row>
              <Col>
                <FormLabel htmlFor="wd-available-from">
                  Available from
                </FormLabel>
                <FormControl id="wd-available-from" type="date" />
              </Col>
              <Col>
                <FormLabel htmlFor="wd-available-until">Until</FormLabel>
                <FormControl id="wd-available-until" type="date" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Buttons */}
      <hr />
      <div
        style={{ marginTop: 8, display: "flex", justifyContent: "flex-end" }}
      >
        <Button variant="secondary" size="lg" className="me-1">
          Cancel
        </Button>
        <Button variant="danger" size="lg" className="me-1">
          Save
        </Button>
      </div>
    </div>
  );
}
