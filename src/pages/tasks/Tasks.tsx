import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Tasks() {
  useTitle(DOCUMENT_TITLE.TASKS);
  return <div className="center-div">Tasks</div>;
}
