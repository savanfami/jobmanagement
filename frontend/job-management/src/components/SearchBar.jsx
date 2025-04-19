import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaUser } from "react-icons/fa";

const SearchFilter = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [salaryRange, setSalaryRange] = useState({ min: 50000, max: 80000 });
  

  const handleSearch = async () => {
  
    try {
      console.log(jobTitle,location,jobType,salaryRange)
      // const response = await axios.get("/api/jobs/search", {
      //   params: {
      //     jobTitle,
      //     location,
      //     jobType,
      //     salaryMin: salaryRange.min,
      //     salaryMax: salaryRange.max,
      //   },
      // });

      console.log("Search results:", response.data);
    } catch (err) {
      console.error("Search failed:", err);
  
    }
  };

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-4 p-4 text-[#686868] shadow-sm rounded-md">
      {/* Job Title */}
      <div className="flex items-center gap-2 border-r pr-4 ml-7">
        <FiSearch />
        <input
          type="text"
          placeholder="Search By Job Title, Role"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="outline-none border-none text-sm font-medium w-full"
        />
      </div>

      <div className="flex items-center gap-2 border-r pr-4">
        <GoLocation />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Preferred Location"
          className="outline-none border-none text-sm bg-transparent w-full font-medium"
        />
      </div>

      <div className="flex items-center gap-2 border-r pr-4">
        <FaUser />
        <select
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          className="outline-none border-none text-sm bg-transparent w-full font-medium"
        >
          <option value="">Job type</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
        </select>
      </div>

      <div className="flex flex-col justify-center">
        <label className="text-sm text-black font-medium">
          Salary Per Month
        </label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={50000}
            max={2000000}
            step={5000}
            value={salaryRange.max}
            onChange={(e) =>
              setSalaryRange({ ...salaryRange, max: parseInt(e.target.value) })
            }
            className="w-full"
          />
          <span className="text-sm text-gray-600">
            ₹{salaryRange.min / 1000}k - ₹{salaryRange.max / 1000}k
          </span>
        </div>
      </div>

     

    </div>
      <div className="col-span-full flex justify-center mt-2">
        <button
          onClick={handleSearch}
          className="bg-[#00AAFF] rounded-full w-[120px] text-white p-2 cursor-pointer "
        >
          Search
        </button>
      </div>
      </>
  );
};

export default SearchFilter;
