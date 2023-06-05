import express from "express";
import {
  getPeople,
  createPeople,
  createPeoplePostman,
  deletePerson,
  updatePerson,
} from "../controllers/people.js";

const router = express.Router();

// router.get("/", getPeople);
// router.post("/", createPeople);
// router.post("/postman", createPeoplePostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

router.route("/").get(getPeople).post(createPeople);
router.route("/postman").post(createPeoplePostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

export default router;
