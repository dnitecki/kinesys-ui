import { FC } from "react";
import { NewClientForm } from "../components/newClientForm/NewClientForm";
import { FormEnums } from "../enums/FormEnums";

type formMapperType = {
  [key: string]: FC;
};

export const formMapper: formMapperType = {
  [FormEnums.NewClientForm]: NewClientForm,
  [FormEnums.NewEstimateForm]: NewClientForm,
};
