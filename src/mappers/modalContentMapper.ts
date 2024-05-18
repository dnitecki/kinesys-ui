import { NewClientForm } from "../components/newClientForm/NewClientForm";
import { ModalContentEnums } from "../enums/FormEnums";
import { ModalContentMapperType } from "../types/ModalTypes";

export const ModalContentMapper: ModalContentMapperType = {
  [ModalContentEnums.NewClientForm]: {
    headerText: "Add New Client",
    Component: NewClientForm,
  },
  [ModalContentEnums.NewEstimateForm]: {
    headerText: "Create New Estimate",
    Component: NewClientForm,
  },
};
