const express = require("express");
const { getNotes, createNotes,getNoteById,updateNote,deleteNote } = require("../controllers/notesController");
const { protect } = require("../middleware/authMiddleware");

const router=express.Router();

router.route("/").get(protect,getNotes)
router.route("/create").post(protect,createNotes)
router.route("/:id").get(getNoteById).put(protect,updateNote).delete(protect,deleteNote);
// router.route("/create").post()
// router.route("/:id").get().put().delete();
module.exports=router;