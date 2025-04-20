import { User, Building, DollarSign } from 'lucide-react';
import React from 'react';
import logo from '../assets/images/amazon.png'

import { getTimeAgo } from '../utils/timeConveter';

export const JobCard=({jobs})=> {
  const {jobTitle,companyName,deadline,minSalary,maxSalary,jobDescription,location,createdAt,jobType}=jobs
  return (
    <div className="max-w-xs mt-5 bg-white   rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className=" w-15 h-15">
           <img src={logo} alt="" />
          </div>
        </div>
        <div className="bg-[#B0D9FF]  text-xs font-medium px-2 py-1 rounded-lg ">
          {getTimeAgo(createdAt)}
        </div>
      </div>
      
      <h2 className="text-lg font-bold mb-2">{jobTitle}</h2>
      
      <div className="flex gap-4 mb-3 text-gray-600 text-sm">
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <Building size={16} className="mr-1" />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center">
          <DollarSign size={16} className="mr-1" />
          <span>{maxSalary/100000}LPA</span>
        </div>
      </div>
      
      <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
        <li>{jobDescription}</li>
      </ul>
      
      <button className="w-full bg-[#00AAFF] text-white font-medium py-2 rounded-md">
        Apply Now
      </button>
    </div>
  );
}