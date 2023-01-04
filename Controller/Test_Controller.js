const User = require("../Models/User_Model");
const Subject = require("../Models/Subject_Model");
const Class = require("../Models/Class_Model");
const TestMod = require("../Models/Test_Model");
const Topic_Model = require("../Models/Topic_Model");
const Standard = require("../Models/Class_Model");

/**
 * @swagger
 * components:
 *    schemas:
 *       Books:
 *          type: object
 *          required:
 *              - title
 *              - author
 *          properties:
 *            id:
 *               type: string
 *               description: The auto-generated id of the book
 *            title:
 *              type: string
 *              description: The Book title
 *            author:
 *               type: string
 *               description: The book author
 *          example:
 *             id: A87SDYA7SYWQ
 *             title: example title
 *             author: example author
 */

/**
 * @swagger
 * tags:
 *    name: Books
 *    description: The Book managing tag
 */

/**
 * @swagger
 * /getAllClasses:
 *  get:
 *    summary: Use to request all classes with their respective subjects
 *    tags: [Books]
 *    responses:
 *        200:
 *          description: A successful response
 *          content:
 *            application/json:
 *               schema:
 *                  type: array
 *                  items:
 *                     $ref: "#/components/schemas/Books"
 */

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
  const { subjectName, subjectType, classId, className } = req.body;
  const subjectModel = await Subject.create({
    subjectName,
    subjectType,
    "standard.className": className,
    "standard.classId": classId,
  });
  const classModel = await Class.findByIdAndUpdate(classId, {
    $push: { subjectList: subjectModel._id },
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

exports.createHomeWork = async (req, res) => {
  const {} = req.body;
};

exports.getAllClasses = async (req, res) => {
  const classess = await Standard.aggregate([
    {
      $group: {
        _id: "$standard",
        sections: { $push: { section: "$section", classId: "$_id" } },
      },
    },
    {
      $sort: {
        _id: -1,
      },
    },
  ]);
  res.status(200).json({ classess });
};

exports.getSingleClass = async (req, res) => {
  const singleClass = await Class.findById(req.body.classId);
  res.status(200).json({ singleClass, success: true });
};

// if(newArr.forEach((item, index) => {
//   if(item.standard === el.standard) return false

// }))
