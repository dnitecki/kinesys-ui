import { NewClientForm } from "../components/forms/newClientForm/NewClientForm";
import { NewEstimateForm } from "../components/forms/newEstimateForm/NewEstimateForm";
import { ModalContentEnums } from "../enums/FormEnums";
import { ModalContentMapperType } from "../types/ModalTypes";

export const ModalContentMapper: ModalContentMapperType = {
  [ModalContentEnums.NewClientForm]: {
    headerText: "Add New Client",
    Component: NewClientForm,
  },
  [ModalContentEnums.NewEstimateForm]: {
    headerText: "Create New Estimate",
    Component: NewEstimateForm,
  },
};
