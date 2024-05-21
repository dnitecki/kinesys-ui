import { DOCUMENT_TITLE } from "../../constants/content";

export default function Settings() {
  document.title = DOCUMENT_TITLE.SETTINGS;
  return <div className="center-div">Settings</div>;
}
