import mongoose from "mongoose";

const GradeSchema = new mongoose.Schema({
  student_id: { type: Number, required: true },
  scores: { type: Array, required: true },
  class_id: { type: Number, required: true },
});

const gradeModel = mongoose.model("Grade", GradeSchema);

export default gradeModel;
