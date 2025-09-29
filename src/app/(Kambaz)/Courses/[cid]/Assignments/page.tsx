import AssignmentControl from "./AssignmentControl";
import AssignmentPage from "./AssignmentPage";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      {/* Top bar on the assignment page, contains search, add group & assignment */}
      <AssignmentControl />

      {/* The assignments on the page */}
      <AssignmentPage />
    </div>
  );
}
