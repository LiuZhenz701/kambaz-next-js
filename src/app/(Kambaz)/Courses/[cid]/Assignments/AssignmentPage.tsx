import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import TitleButton from "./AssignmentTitleButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuClipboardPenLine } from "react-icons/lu";
import Link from "next/link";

export default function AssignmentPage() {
  return (
    <div>
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroupItem className="wd-assignment p-0 mb-5 fs-5 border-gray">
          {/* Assignment Title */}
          <div className="wd-title p-3 ps-2 bg-secondary position-relative">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS <TitleButton />
          </div>

          {/* Assignment List */}
          <ListGroup className="wd-task rounded-0">
            {/* Assignment 1 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row className="align-items-center">
                <Col xs="auto" className="align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardPenLine
                    className="me-3 fs-3"
                    style={{ color: "green" }}
                  />
                </Col>
                <Col xs="8">
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "28px" }}>
                      <Link
                        href="/Courses/1234/Assignments/1"
                        className="wd-assignment-link"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        A1 - ENV + HTML
                      </Link>
                    </span>
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      <span style={{ color: "red" }}> Multiple Modules </span> |
                      <b> Not available until </b> May 6 at 12:00 am | Due May
                      13 at 11:59pm | 100 pts
                    </span>
                  </div>
                </Col>
                <Col xs="auto" className="d-flex ms-auto">
                  <LessonControlButtons />
                </Col>
              </Row>
            </ListGroupItem>
            {/* Assignment 2 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row className="align-items-center">
                <Col xs="auto" className="align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardPenLine
                    className="me-3 fs-3"
                    style={{ color: "green" }}
                  />
                </Col>
                <Col xs="8">
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "28px" }}>
                      <Link
                        href="/Courses/1234/Assignments/2"
                        className="wd-assignment-link"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        A2 - CSS + BOOTSTRAP
                      </Link>
                    </span>
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      <span style={{ color: "red" }}> Multiple Modules </span> |
                      <b> Not available until </b> May 13 at 12:00 am | Due May
                      20 at 11:59pm | 100 pts
                    </span>
                  </div>
                </Col>
                <Col xs="auto" className="d-flex ms-auto">
                  <LessonControlButtons />
                </Col>
              </Row>
            </ListGroupItem>
            {/* Assignment 3 */}
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <Row className="align-items-center">
                <Col xs="auto" className="align-items-start">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuClipboardPenLine
                    className="me-3 fs-3"
                    style={{ color: "green" }}
                  />
                </Col>
                <Col xs="8">
                  <div>
                    <span style={{ fontWeight: "bold", fontSize: "28px" }}>
                      <Link
                        href="/Courses/1234/Assignments/3"
                        className="wd-assignment-link"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        A3 - JAVASCRIPT + REACT
                      </Link>
                    </span>
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      <span style={{ color: "red" }}> Multiple Modules </span> |
                      <b> Not available until </b> May 20 at 12:00 am | Due May
                      27 at 11:59pm | 100 pts
                    </span>
                  </div>
                </Col>
                <Col xs="auto" className="d-flex ms-auto">
                  <LessonControlButtons />
                </Col>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
