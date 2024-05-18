import { NewClientForm } from "../components/newClientForm/NewClientForm";
import { ModalContentEnums } from "../enums/FormEnums";
import { ModalContentMapperType } from "../types/ModalTypes";

export const ModalContentMapper: ModalContentMapperType = {
  [ModalContentEnums.NewClientForm]: NewClientForm,
  [ModalContentEnums.NewEstimateForm]: NewClientForm,
};
