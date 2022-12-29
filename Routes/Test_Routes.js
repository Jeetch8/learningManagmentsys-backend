const {
  createNewClass,
  createNewUser,
  addStudentToClass,
  addClassTeacher,
  addSubjects,
  createTopic,
  createTest,
} = require("../Controller/Test_Controller");
const { checkAuthorization } = require("../Middleware/Authorization");

const router = require("express").Router();

router.post("/newclass", createNewClass);
router.post(
  "/newuser",
  checkAuthorization(["teacher", "student", "admin"]),
  createNewUser
);
router.post("/addstudent", addStudentToClass);
router.post("/addClassTeacher", addClassTeacher);
router.post("/addSubject", addSubjects);
router.post("/createTopic", createTopic);
router.post("/createTest", createTest);

module.exports = router;
