const User = require("../Models/User_Model");
const Subject = require("../Models/Subject_Model");
const Class = require("../Models/Class_Model");
const TestMod = require("../Models/Test_Model");
const Topic_Model = require("../Models/Topic_Model");

exports.createNewUser = async (req, res) => {
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
  });
  res.status(200).json({ success: true });
};

exports.createNewClass = async (req, res) => {
  const { standard, section } = req.body;
  const newClass = await Class.create({
    standard,
    section,
  });
  res.status(200).json({ success: true });
};

exports.addStudentToClass = async (req, res) => {
  const { studentId, classId } = req.body;
  const findClass = await Class.findByIdAndUpdate(
    classId,
    {
      $push: {
        students: studentId,
      },
    },
    { new: true }
  );
  res.status(200).json({ success: true, findClass });
};

exports.addClassTeacher = async (req, res) => {
  const { teacherId, classId } = req.body;
  const existingClass = await Class.findByIdAndUpdate(classId, {
    classTeacher: teacherId,
  });
  res.status(200).json({ success: true });
};

exports.addSubjects = async (req, res) => {
  const { subjectName, subjectType, classId } = req.body;
  const subject = await Subject.create({
    subjectName,
    subjectType,
    "standard.className": "1 - A",
    "standard.classId": classId,
  });
  res.status(200).json({ success: true });
};

exports.createTopic = async (req, res) => {
  const { classId, topicName } = req.body;
  const topic = await Topic_Model.create({
    topicName,
    classId,
  });
  res.status(200).json({ success: true });
};

exports.createTest = async (req, res) => {
  const { questionType, questions } = req.body;
  const createTest = await TestMod.create({
    questions,
    questionType,
    topicId: "63ad7ff016bfbc2042d38dfd",
    subjectId: "63ad71d70e8e0931c19dd845",
  });
  res.status(200).json({ questions });
};
