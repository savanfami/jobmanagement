import { jobModel } from "../models/JobSchema.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const createJobPostController = async (req, res, next) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      minSalary,
      maxSalary,
      deadline,
      jobDescription,
      jobType,
    } = req.body;

    if (
      !jobTitle ||
      !companyName ||
      !location ||
      !minSalary ||
      !maxSalary ||
      !deadline ||
      !jobDescription ||
      !jobType
    ) {
      throw ErrorResponse.badRequest("All fields are required.");
    }

    const newJob = new jobModel({
      jobTitle,
      companyName,
      location,
      minSalary,
      maxSalary,
      deadline,
      jobDescription,
      jobType,
    });

    await newJob.save();

    return res.status(201).json({
      success: true,
      message: "Job post created successfully.",
      data: newJob,
    });
  } catch (error) {
    next(error);
  }
};
