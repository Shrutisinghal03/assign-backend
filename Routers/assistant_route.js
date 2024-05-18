const express=require("express"); 
const router=express.Router();
const {addAssistant, GetAssistant,DeleteAssistant,UpdateAssistant}=require("../Controllers/assistant")
router.get("/:id", GetAssistant)
router.post("/", addAssistant)
router.put('/:id', UpdateAssistant);
router.delete("/:id", DeleteAssistant)
  module.exports=router; 