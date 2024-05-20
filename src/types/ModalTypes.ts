import { Dispatch, FC, SetStateAction } from "react";
import { FormPropsType } from "./FormTypes";

export type ModalProps = {
  ModalContentType: string | null;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};
export type ModalContentMapperType = {
  [key: string]: {
    headerText: string;
    Component: FC<FormPropsType>;
  };
};
