export default function ConditionalOutputInline() {
  const loggedIn1 = false;
  const loggedIn2 = true;

  if (loggedIn2) {
    return (
      <div id="wd-conditional-output-inline">
        <h2 id="wd-conditional-output-if-else-welcome">Welcome If Else</h2>
        {loggedIn1 && <h2>Welcome Inline</h2>}
        {!loggedIn1 && <h2>Please login Inline</h2>}
        <hr />
      </div>
    );
  } else {
    return (
      <div id="wd-conditional-output-inline">
        <h2 id="wd-conditional-output-if-else-login">Please login If Else</h2>
        {loggedIn1 && <h2>Welcome Inline</h2>}
        {!loggedIn1 && <h2>Please login Inline</h2>}
        <hr />
      </div>
    );
  }
}
