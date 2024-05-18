import { FC, useState } from "react";
import "./Dashboard.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AddIcon from "@mui/icons-material/Add";
import { tabItems } from "./tabItems";
import {
  getOverviewService,
  getStatusService,
} from "../../services/dashboardService";
import { useQuery } from "@tanstack/react-query";
import Status from "./tabs/status/Status";
import Overview from "./tabs/overview/Overview";
import Modal from "../../components/modal/Modal";
import { ModalContentEnums } from "../../enums/FormEnums";

export default function Dashboard() {
  const [value, setValue] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const {
    isLoading: isOverviewLoading,
    error: overviewError,
    data: overviewData,
  } = useQuery({ queryKey: ["overview"], queryFn: getOverviewService });

  const {
    isLoading: isStatusLoading,
    error: statusError,
    data: statusData,
  } = useQuery({ queryKey: ["status"], queryFn: getStatusService });

  const handleModalClick = (content: ModalContentEnums) => {
    setShowModal(true);
    setModalContent(content);
  };

  return (
    <>
      <div className="page-container" id="page-container">
        {showModal ? (
          <Modal setShowModal={setShowModal} ModalContentType={modalContent} />
        ) : null}
        <section className="page-header">
          <Tabs
            className="page-tabs"
            value={value}
            textColor="primary"
            indicatorColor="primary"
            onChange={(e, newValue) => {
              setValue(newValue);
            }}
          >
            {tabItems.map((item, index) => (
              <Tab key={index} label={item.text} />
            ))}
          </Tabs>
          <div className="page-header-buttons">
            <button
              className="new-client-button"
              onClick={() => handleModalClick(ModalContentEnums.NewClientForm)}
            >
              <AddIcon />
              Add New Client
            </button>
            <button
              className="new-estimate-button"
              onClick={() =>
                handleModalClick(ModalContentEnums.NewEstimateForm)
              }
            >
              <AddIcon />
              Add New Estimate
            </button>
          </div>
        </section>
        <div className="page-content">
          {value === 0 ? (
            <>
              <Overview
                data={overviewData}
                isLoading={isOverviewLoading}
                error={overviewError}
              />
            </>
          ) : null}
          {value === 1 ? (
            <>
              <Status
                data={statusData}
                isLoading={isStatusLoading}
                error={statusError}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
