import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchFilter from "../components/SearchBar";
import Navbar from "../components/Navbar";
import {JobCard} from "../components/JobCard";
import ModalWrapper from "../components/ModalWrapper";
import { CreateJobPost } from "../components/CreateJobPost";

const Layout = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar onCreateClick={() => setShowModal(true)} />
      <SearchFilter />
      <div className="ml-[64px] gap-[16px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[20px] mb-[30px] ">
      <JobCard />
      </div>
      <ModalWrapper isOpen={showModal} onClose={()=>setShowModal(false)}>
        <CreateJobPost/>
      </ModalWrapper>
    </div>
  );
};

export default Layout;
