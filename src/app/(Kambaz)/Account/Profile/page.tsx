import Link from "next/link";
import { FormLabel, FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      {/* Profile title */}
      <FormLabel style={{ fontSize: "36px", fontWeight: "bold" }}>
        Profile
      </FormLabel>
      {/* Userame */}
      <FormControl
        defaultValue="zhenzhen"
        placeholder="username"
        className="wd-username"
      />
      {/* Password */}
      <br />
      <FormControl
        defaultValue="142857"
        placeholder="password"
        type="password"
        className="wd-password"
      />
      {/* First name & Last name */}
      <br />
      <FormControl
        defaultValue="Zhenzhen"
        placeholder="First Name"
        id="wd-firstname"
      />
      <br />
      <FormControl
        defaultValue="Liu"
        placeholder="Last Name"
        id="wd-lastname"
      />

      {/* Birth date */}
      <br />
      <FormControl defaultValue="2003-07-01" type="date" id="wd-dob" />
      {/* Email Address */}
      <br />
      <FormControl
        defaultValue="Liu.zhenz@northeastern.edu"
        type="email"
        id="wd-email"
      />
      <br />
      {/* Position */}
      <FormSelect defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <br />
      <Button variant="danger" size="lg">
        <Link href="Signin" style={{ color: "white", textDecoration: "none" }}>
          Sign out
        </Link>
      </Button>
    </div>
  );
}
