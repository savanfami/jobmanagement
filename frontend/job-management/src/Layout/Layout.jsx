import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchFilter from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { JobCard } from "../components/JobCard";
import ModalWrapper from "../components/ModalWrapper";
import { CreateJobPost } from "../components/CreateJobPost";
import { useEffect } from "react";
import { apiInstance } from "../common/axiosInstance";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Layout = () => {
  const [showModal, setShowModal] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const {data} = await apiInstance.get("/api/jobs");
        console.log(data);
        setJobs(data?.data)
        // setFilteredJobs(response.data.jobs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <Navbar onCreateClick={() => setShowModal(true)} />
      <SearchFilter />
      <div className="ml-[64px] gap-[16px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mb-[30px] ">
        {jobs.map((jobs,i)=>(
          <JobCard key={i} jobs={jobs} />
        ))}
      </div>
      <ModalWrapper isOpen={showModal} onClose={() => setShowModal(false)}>
        <CreateJobPost closeModal={() => setShowModal(false)} />
      </ModalWrapper>
    </div>
  );
};

export default Layout;
