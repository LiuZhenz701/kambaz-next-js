import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {/* Student 1 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Tony</span>{" "}
              <span className="wd-last-name">Stark</span>
            </td>
            <td className="wd-login-id">001234561S</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-01</td>
            <td className="wd-total-activity">10:21:32</td>
          </tr>
          {/* Student 2 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Steve</span>{" "}
              <span className="wd-last-name">Evans</span>
            </td>
            <td className="wd-login-id">002154496</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-03</td>
            <td className="wd-total-activity">16:58:02</td>
          </tr>
          {/* Student 3 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jacob</span>{" "}
              <span className="wd-last-name">Adam</span>
            </td>
            <td className="wd-login-id">002144766</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-02</td>
            <td className="wd-total-activity">13:07:34</td>
          </tr>
          {/* Student 4 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Jeongguk</span>{" "}
              <span className="wd-last-name">Kim</span>
            </td>
            <td className="wd-login-id">001244586</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">STUDENT</td>
            <td className="wd-last-activity">2020-10-04</td>
            <td className="wd-total-activity">12:27:43</td>
          </tr>
          {/* Student 5 */}
          <tr>
            <td className="wd-full-name text-nowrap">
              <FaUserCircle className="me-2 fs-1 text-secondary" />
              <span className="wd-first-name">Laosan</span>{" "}
              <span className="wd-last-name">Zhang</span>
            </td>
            <td className="wd-login-id">001355466</td>
            <td className="wd-section">S101</td>
            <td className="wd-role">TA</td>
            <td className="wd-last-activity">2020-10-05</td>
            <td className="wd-total-activity">09:25:18</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
