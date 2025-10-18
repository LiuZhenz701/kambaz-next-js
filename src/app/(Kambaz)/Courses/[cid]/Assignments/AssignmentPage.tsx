"use client";

import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import TitleButton from "./AssignmentTitleButton";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuClipboardPenLine } from "react-icons/lu";
import Link from "next/link";
import { useParams } from "next/navigation";
import * as db from "../../../Database";

export default function AssignmentPage() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const validAssignments = assignments.filter((a) => a.course === cid);

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
          {validAssignments.map((assignment) => (
            <ListGroupItem key={assignment._id} className="wd-lesson p-3 ps-1">
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
                        href={`/Courses/${cid}/Assignments/${assignment._id}`}
                        className="wd-assignment-link"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        {`${assignment._id} - ${assignment.title}`}
                      </Link>
                    </span>
                    <br />
                    <span style={{ fontSize: "18px" }}>
                      <span style={{ color: "red" }}>Multiple Modules</span> |
                      <b> Not available until </b>{" "}
                      {new Date(assignment.avaliableDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                        }
                      )}{" "}
                      at 12:00 am | <b>Due</b>{" "}
                      {new Date(assignment.dueDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                        }
                      )}{" "}
                      at 11:59 pm | {assignment.points} pts
                    </span>
                  </div>
                </Col>
                <Col xs="auto" className="d-flex ms-auto">
                  <LessonControlButtons />
                </Col>
              </Row>
            </ListGroupItem>
          ))}
          <ListGroup className="wd-task rounded-0"></ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
