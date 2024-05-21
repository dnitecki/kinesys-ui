import { DOCUMENT_TITLE } from "../../constants/content";

export default function Market() {
  document.title = DOCUMENT_TITLE.MARKET;
  return <div className="center-div">Market</div>;
}
