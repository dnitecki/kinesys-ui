import { DOCUMENT_TITLE } from "../../constants/content";

export default function Teams() {
  document.title = DOCUMENT_TITLE.TEAMS;
  return <div className="center-div">Teams</div>;
}
