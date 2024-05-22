import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Market() {
  useTitle(DOCUMENT_TITLE.MARKET);
  return <div className="center-div">Market</div>;
}
