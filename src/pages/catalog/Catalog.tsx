import { DOCUMENT_TITLE } from "../../constants/content";
import { useTitle } from "../../hooks/useTitle";

export default function Catalog() {
  useTitle(DOCUMENT_TITLE.CATALOG);
  return <div className="center-div">Catalog</div>;
}
