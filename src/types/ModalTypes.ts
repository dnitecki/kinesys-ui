import { Dispatch, SetStateAction } from "react";

export type ModalProps = {
  ContentType: string | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
