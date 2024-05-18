const Assistant=require("../models/assistant.models")
const addAssistant=async(req,res)=>{
    console.log(req.body); 
    const user =new Assistant({
        name:req.body.name,
        email:req.body.email,
        contact_no:req.body.contact_no,
        City:req.body. City,
        Pincode:req.body.Pincode,
        Address:req.body.Address,
    }); 
    try {
        const result=await user.save(); 
        if(result)
            res.status(202).json({
        success:"true",
        message:"Data Inserted"
        })
    } catch (error) {
        res.status(401).json({message:"Data not inserted",
        error:error
    });
    }
   
};
const UpdateAssistant= async (req, res) => {
    const ID = req.params.id;
    const NewData= req.body;
   try {
      const updatedUser = await Assistant.findByIdAndUpdate(ID, NewData, { new: true });
      if (!updatedUser) 
        return res.status(404).send('Item not exist');
      res.send(updatedUser);
    } catch (error) {
      res.status(500).send(`Error in updating item: ${error.message}`);
    }
  }
  const DeleteAssistant=async(req,res)=>{
    const ID = req.params.id;
    try {
        const User = await Assistant.findByIdAndDelete(ID);
        if (!User) 
          return res.status(404).send('Item not exist');
        res.send(User);
      } catch (error) {
        res.status(500).send(`Error in Deleting item: ${error.message}`);
      }
  }
  const GetAssistant=async(req,res)=>{

    try{
        const user=await Assistant.find({_id:req.params.id}); 
        console.log(user);
        res.status(202).send(user);
    
    }
    catch(error){
      console.log("User with this specific ID is not available")
        res.status(401).json({message:"Data not Found",
        error:error
    });
    }
    
    }
    module.exports={addAssistant, GetAssistant,DeleteAssistant,UpdateAssistant}; 