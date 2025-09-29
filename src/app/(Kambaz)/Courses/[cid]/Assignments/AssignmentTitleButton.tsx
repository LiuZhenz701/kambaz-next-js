import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";

export default function TitleButton() {
  return (
    <div className="position-absolute top-50 end-0 pe-3 translate-middle-y">
      {/* Grade percentage bar */}
      <span className="wd-border-percentage wd-rounded-corners-percentage me-1">
        40% of Total
      </span>
      {/* Plus */}
      <FaPlus className="me-3" />
      {/* 3 dots */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
