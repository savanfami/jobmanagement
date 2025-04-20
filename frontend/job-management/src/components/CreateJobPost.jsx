import { ChevronDown, Calendar, ChevronRight, Import } from "lucide-react";
import { FiChevronUp } from "react-icons/fi";
import { useState } from "react";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

import { apiInstance } from "../common/axiosInstance";

export const CreateJobPost = ({ closeModal }) => {
  const [jobType, setJobType] = useState("Select Job Type");
  const [loading, setLoading] = useState(false);
  const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    minSalary: "",
    maxSalary: "",
    deadline: "",
    jobDescription: "",
  });

  const [errors, setError] = useState({});

  const validate = () => {
    const Error = {};
    if (!formData.jobTitle.trim()) Error.jobTitle = "job title is required";
    if (!formData.companyName.trim())
      Error.companyName = "company name is required";
    if (!formData.location.trim()) Error.location = "location is required";
    if (!formData.minSalary.trim())
      Error.minSalary = "minimum salary is required";
    if (!formData.maxSalary.trim())
      Error.maxSalary = "maximum salary  is required";
    if (jobType === "Select Job Type")
      Error.jobType = "Please select a job type";
    if (Number(formData.maxSalary) < Number(formData.minSalary)) {
      Error.maxSalary = "Maximum must be greater than minimum salary";
    }
    if (!formData.jobDescription.trim())
      Error.jobDescription = "job description is required";
    if (!formData.deadline) Error.deadline = "Application deadline is required";

    setError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleChange = (e) => {
    setError({
      ...errors,
      [e.target.name]: "",
    });

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleJobTypeSelect = (type) => {
    setJobType(type);
    setShowJobTypeDropdown(false);
    setError({
      ...errors,
      jobType: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      ...formData,
      jobType,
    };

    try {
      console.log(payload, "payload dataaaa");
      setLoading(true);
      const { data } = await apiInstance.post("/api/jobs", payload);
      setLoading(false);
      if (data?.success) {
        toast.success(data?.message);
        setTimeout(() => {
          closeModal();
        }, 2000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error?.response?.data?.message);
    }
  };

  const jobTypes = ["Full-Time", "Part-Time", "Contract", "Internship"];

  return (
    <>
      <Toaster />
      <div className="max-w-2xl mx-auto  bg-white rounded-lg border border-blue-200 shadow-sm p-6">
        <h1 className="text-center text-xl font-medium mb-6">
          Create Job Opening
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="jobTitle" className="block text-gray-600 mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1"
                placeholder="enter job title"
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>
              )}
            </div>

            <div>
              <label htmlFor="companyName" className="block text-gray-600 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1"
                placeholder="enter company name"
              />
              {errors.companyName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyName}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label htmlFor="location" className="block text-gray-600 mb-2">
                Location
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-1"
                  placeholder="Choose Preferred Location"
                />
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location}</p>
              )}
            </div>

            <div>
              <label htmlFor="jobType" className="block text-gray-600 mb-2">
                Job Type
              </label>
              <div className="relative">
                <div
                  className="w-full border border-gray-300 rounded-md p-2 pr-10 focus:outline-none focus:ring-1 cursor-pointer flex justify-between items-center"
                  onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
                >
                  <span className="text-gray-600">{jobType}</span>
                  <ChevronDown className="text-gray-400" size={16} />
                </div>

                {showJobTypeDropdown && (
                  <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md z-10">
                    {jobTypes.map((type, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleJobTypeSelect(type)}
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                )}
                {errors.jobType && (
                  <p className="text-red-500 text-sm mt-1">{errors.jobType}</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Salary Range
              </label>
              <div className="flex gap-4">
                <div className="w-full">
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <FiChevronUp className="text-gray-400 mr-2" />
                    <span className="text-gray-400 mr-1"></span>
                    <input
                      type="number"
                      value={formData.minSalary}
                      name="minSalary"
                      onChange={handleChange}
                      className="w-full text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                      placeholder=""
                    />
                  </div>
                  {errors.minSalary && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.minSalary}
                    </p>
                  )}
                </div>

                <div className="w-full">
                  <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                    <FiChevronUp className="text-gray-400 mr-2" />
                    <span className="text-gray-400 mr-1"></span>
                    <input
                      type="number"
                      value={formData.maxSalary}
                      name="maxSalary"
                      onChange={handleChange}
                      className="w-full text-gray-700 placeholder-gray-400 bg-transparent outline-none"
                      placeholder=""
                    />
                  </div>
                  {errors.maxSalary && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.maxSalary}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="deadline"
                className="block text-gray-600 mb-2 font-medium"
              >
                Application Deadline
              </label>
              <div className="relative">
                <input
                  value={formData.deadline}
                  onChange={handleChange}
                  name="deadline"
                  type="date"
                  id="deadline"
                  className="w-full border border-gray-300 text-gray-600  rounded-md p-2 pr-10 focus:outline-none focus:ring-1"
                />
                {errors.deadline && (
                  <p className="text-red-500 text-sm mt-1">{errors.deadline}</p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="jobDescription"
              className="block text-gray-600 mb-2"
            >
              Job Description
            </label>
            <textarea
              id="jobDescription"
              value={formData.jobDescription}
              name="jobDescription"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 h-24 focus:outline-none focus:ring-1"
              placeholder="Please share a description to let the candidate know more about the job role"
            ></textarea>
            {errors.jobDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.jobDescription}
              </p>
            )}
          </div>

          <div className="flex justify-between">
            <button
              type="button"
              className="border border-gray-300 rounded-md py-2 px-4 flex items-center gap-2 text-gray-600 hover:bg-gray-50"
            >
              Save Draft
              <ChevronDown size={16} />
            </button>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 cursor-pointer text-white rounded-md py-2 px-8 flex items-center gap-2 hover:bg-blue-600"
            >
              {loading ? "Posting" : "Publish"}
              <ChevronRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
