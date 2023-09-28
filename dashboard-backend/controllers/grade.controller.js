import Grade from "../mongodb/models/grade.js";

const getGradeByClass = async (req, res) => {
  console.log("getGradeByClass");

  try {
    const { id } = req.params;
    console.log("id", id);

    const gradeInfo = await Grade.findOne({ class_id: id });
    console.log("getGradeByClass", gradeInfo);

    if (gradeInfo) {
      res.status(200).json(gradeInfo);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllGradesByClass = async (req, res) => {
  console.log("getAllGradesByClass");

  try {
    const grades = await Grade.find();

    console.log("getAllGradesByClass", grades);

    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getGradeByClass, getAllGradesByClass };
