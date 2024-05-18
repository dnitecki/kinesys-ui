import { Dispatch, FC, SetStateAction } from "react";

export type ModalProps = {
  ModalContentType: string | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export type ModalContentMapperType = {
  [key: string]: FC;
};
