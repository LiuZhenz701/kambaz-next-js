import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        {/* Course 1 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/react-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 2 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3520" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/cpp-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS3520 Programming in C++ </h5>
              <p className="wd-dashboard-course-title">Basic in C++</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 3 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3500" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/java-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS3500 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Fundamental in Java and OOD
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 4 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4550" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/web-dev-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS4550 Web Development </h5>
              <p className="wd-dashboard-course-title">
                Basic of websites building
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 5 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4530" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/software-eng-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS4530 Fundamental of Software Engineering </h5>
              <p className="wd-dashboard-course-title">
                Procedure of software development
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 6 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/3540" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/game-dev-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS3540 Game Development </h5>
              <p className="wd-dashboard-course-title">
                Build your first game with Unity Engine
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        {/* Course 7 */}
        <div className="wd-dashboard-course">
          <Link href="/Courses/4400" className="wd-dashboard-course-link">
            <Image
              src="/images/course-logo/pl-logo.png"
              width={200}
              height={150}
              alt={""}
            />
            <div>
              <h5> CS4400 Programming Language </h5>
              <p className="wd-dashboard-course-title">
                How to develop a programming language
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
