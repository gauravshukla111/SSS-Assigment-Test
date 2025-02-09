


import User from '../model/userModel.js';

//////////////CREATE API//////////////
export const create = async(req, res)=>{
    try{
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg: "Invalid user data"});
        }
        const savedData = await userData.save()
        res.status(201).json({ message: "User created successfully", data: savedData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



/////////////FETCH ALL DATA API///////
export const getAll = async(req, res)=>{
    try{
        const userData = await User.find();
        if(!userData){
            return res.status(404).json({message: "No user data found"});
        }
        res.status(200).json({ message: "Users retrieved successfully", data: userData });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


///////////GET ONE DATA WITH ID API////
export const getOne = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "user not found"})
        }
        res.status(200).json({ message: "User retrieved successfully", data: userExist });
            } catch (error) {
                res.status(500).json({ message: error.message });

    }
}

///////////UPDATE DATA API//////////////

export const update = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "user not found"})
            }
            const updatedData = await User.findByIdAndUpdate(id, req.body, { new: true });
                    res.status(200).json({ message: "User updated successfully", data: updatedData });
                } catch (error) {
                    res.status(500).json({ message: error.message });
    }
}


///////////DELETE DATA API/////////////

export const deleteUSer = async(req,res)=>{
    try{
        const id = req.params.id;
        const userExist = User.findById(id);
        if(!userExist){
            return res.status(404).json({msg: "user not found"})
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}

