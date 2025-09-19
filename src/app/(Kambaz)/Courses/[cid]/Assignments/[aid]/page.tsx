export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={50} rows={8}>
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your full name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <table>
        {/* Points text field */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input
              id="wd-points"
              type="number"
              placeholder="100"
              defaultValue={100}
            />
          </td>
        </tr>

        {/* Assignment Group */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          {/* Assignment Group Drop Down Menu */}
          <td>
            <select id="wd-group">
              <option defaultValue="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>

        {/* Display grade as */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          {/* Display grade as Drop Down Menu */}
          <td>
            <select id="wd-display-grade-as">
              <option defaultValue="Percentage">Percentage</option>
              <option value="Letter-Grade">Letter Grade</option>
            </select>
          </td>
        </tr>

        {/* Submission type */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          {/* Submission type drop down menu */}
          <td>
            <select id="wd-submission-type">
              <option selected value="Online">
                Online
              </option>
              <option value="On class">On class</option>
              <option value="None">None</option>
            </select>

            {/* Online entry options check boxes */}
            <br />
            <br />
            <label>Online Entry Options</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-option"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        {/* Assign */}
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>

          <td>
            <label>Assign to</label>
            <br />
            <input defaultValue="Everyone" id="wd-assign-to" />

            {/* Due date */}
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" defaultValue="2025-09-17" id="wd-due-date" />

            {/* Avaliable time */}
            <br />
            <br />
            <table>
              <tr>
                {/* Available from */}
                <td valign="top">
                  <label htmlFor="wd-available-from">Avaliable from</label>
                  <br />
                  <input type="date" id="wd-available-from" />
                </td>

                {/* Available until */}
                <td valign="top">
                  <label htmlFor="wd-available-until">Until</label>
                  <br />
                  <input type="date" id="wd-available-until" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Buttons for save and cancel */}
      <hr />
      <div
        style={{
          marginTop: "8px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
}
