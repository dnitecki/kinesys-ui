import { DOCUMENT_TITLE } from "../../constants/content";

export default function Profile() {
  document.title = DOCUMENT_TITLE.PROFILE;
  return <div className="center-div">Profile</div>;
}
