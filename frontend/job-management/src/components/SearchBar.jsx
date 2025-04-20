import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const SearchFilter = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState({
    min: 50000,
    max: 80000,
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-5 shadow-sm rounded-md">
      <div className="flex items-center gap-2 mt-2 border-r-1 lg:border-r-3 lg:border-[#EAEAEA] pr-0 lg:pr-4 ml-0 lg:ml-7">
        <FiSearch className="text-gray-600" />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="outline-none border-none text-sm font-medium w-full bg-transparent"
        />
      </div>

      <div className="flex items-center gap-2 mt-2 border-r-1 lg:border-r-3 lg:border-[#EAEAEA] pr-0 lg:pr-4">
        <GoLocation className="text-gray-600" />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Preferred Location"
          className="outline-none border-none text-sm font-medium w-full bg-transparent"
        />
      </div>

      <div className="flex items-center gap-2 mt-2 border-r-1 lg:border-r-3 lg:border-[#EAEAEA] pr-0 lg:pr-4">
        <FaUser className="text-gray-600" />
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="outline-none border-none text-sm font-medium bg-transparent w-full text-gray-400"
        >
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="flex flex-col justify-center">
        <label className="flex items-center mt-2 justify-between lg:gap-20 text-sm text-[#222222] font-medium px-2 lg:px-5">
          Salary Per Month
          <span className="text-sm text-[#222222] font-normal">
            ₹{salaryRange.min / 1000}k - ₹{salaryRange.max / 1000}k
          </span>
        </label>
        <div className="flex items-center gap-2 px-2 lg:px-0">
          <input
            type="range"
            min={50000}
            max={2000000}
            step={500}
            value={salaryRange.max}
            onChange={(e) =>
              setSalaryRange({
                ...salaryRange,
                max: parseInt(e.target.value),
              })
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;