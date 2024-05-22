import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Teams() {
  useTitle(DOCUMENT_TITLE.TEAMS);
  return <div className="center-div">Teams</div>;
}
