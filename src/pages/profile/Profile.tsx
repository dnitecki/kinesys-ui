import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Profile() {
  useTitle(DOCUMENT_TITLE.PROFILE);
  return <div className="center-div">Profile</div>;
}
