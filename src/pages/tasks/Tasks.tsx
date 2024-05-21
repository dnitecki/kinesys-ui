import { DOCUMENT_TITLE } from "../../constants/content";

export default function Tasks() {
  document.title = DOCUMENT_TITLE.TASKS;
  return <div className="center-div">Tasks</div>;
}
