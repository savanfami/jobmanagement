import { jobModel } from "../models/JobSchema.js";

export const getAllJobsController = async (req , res, next) => {
  try {
    const jobs = await jobModel.find();
    res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs,
    });
  } catch (error) {
    next(error); 
  }
};
