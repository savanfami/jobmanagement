import mongoose,{Schema} from "mongoose";


const jobSchema = new Schema(
    {
      jobTitle: {
        type: String,
        required: true,
      },
      companyName: {
        type: String,
        required: true,
      },
      location: {
        type: String,
        required: true,
      },
      jobType: {
        type: String,
        enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
        required: true,
      },
      minSalary: {
        type: Number,
        required: true,
      },
      maxSalary: {
        type: Number,
        required: true,
      },
      jobDescription: {
        type: String,
        required: true,
      },
      applicationDeadline: {
        type: Date,
        required: true,
      },
    },
    { timestamps: true }
  );

  export const jobModel=mongoose.model('job',jobSchema)