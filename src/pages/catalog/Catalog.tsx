import { DOCUMENT_TITLE } from "../../constants/content";

export default function Catalog() {
  document.title = DOCUMENT_TITLE.CATALOG;
  return <div className="center-div">Catalog</div>;
}
