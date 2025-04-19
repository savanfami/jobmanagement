import { User, Building, DollarSign } from 'lucide-react';
import React from 'react';

export const JobCard=()=> {
  return (
    <div className="max-w-xs mt-5 bg-white   rounded-lg shadow-sm p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
            <span className="text-white text-xl font-bold">a</span>
          </div>
        </div>
        <div className="bg-[#B0D9FF]  text-xs font-medium px-2 py-1 rounded-full">
          24h Ago
        </div>
      </div>
      
      <h2 className="text-lg font-bold mb-2">Full Stack Developer</h2>
      
      <div className="flex gap-4 mb-3 text-gray-600 text-sm">
        <div className="flex items-center">
          <User size={16} className="mr-1" />
          <span>1-3 yr Exp</span>
        </div>
        <div className="flex items-center">
          <Building size={16} className="mr-1" />
          <span>Onsite</span>
        </div>
        <div className="flex items-center">
          <DollarSign size={16} className="mr-1" />
          <span>12LPA</span>
        </div>
      </div>
      
      <ul className="list-disc pl-5 text-sm text-gray-600 mb-4">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style, and create personalized</li>
      </ul>
      
      <button className="w-full bg-[#00AAFF] text-white font-medium py-2 rounded-md">
        Apply Now
      </button>
    </div>
  );
}