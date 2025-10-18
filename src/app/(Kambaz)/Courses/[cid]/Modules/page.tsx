"use client";

import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControl";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import * as db from "../../../Database";
import { useParams } from "next/navigation";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;

  const validModules = modules.filter((m) => m.course === cid);

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {validModules.map((module) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {module.name} <LessonControlButtons />
            </div>
            {module.lessons?.map((lesson) => (
              <ListGroup key={lesson._id} className="wd-lessons rounded-0">
                <ListGroupItem className="wd-lesson p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  {lesson.name} <LessonControlButtons />
                </ListGroupItem>
              </ListGroup>
            ))}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
