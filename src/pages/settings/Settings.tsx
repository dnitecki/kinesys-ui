import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Settings() {
  useTitle(DOCUMENT_TITLE.SETTINGS);
  return <div className="center-div">Settings</div>;
}
