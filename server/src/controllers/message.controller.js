import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

// to get the users and show in sidebar :
export const getUsersForSidebar = async (req , res) => {
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({_id : {$ne : loggedInUserId}}).select("-password");

        res.status(200).json(filteredUsers)
    } 
    catch (error) {
        console.error("Error in getUserFromSidebar :" , error.message) ;
        res.status(500).json({message : "Internal server error"}) ;
    }
}

// to get messages between sender and reciever :
export const getMessages = async (req , res) => {
    try {
        const {id : userToChatId} = req.params ;
        const myId = req.user._id ;

        const messages = await Message.find({
            $or : [{senderId : myId , recieverId : userToChatId} ,
                {senderId : userToChatId , recieverId : myId}
            ]
        })


        res.status(200).json(messages)
    } 
    catch (error) {
        console.error("Error in getMessages controller :" , error.message) ;
        res.status(500).json({message : "Internal server error"}) ;
    }
}

// send message using text or image :
export const sendMessages = async (req , res) => {
    try {
        const { text , image} = req.body ;
        const { id : recieverId } = req.params ;
        const senderId = req.user._id ;

        let imageUrl ;

        if(image) {
            // upload base64 images to cloudinary
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }

        const newMessage = new Message({
            senderId ,
            recieverId ,
            text ,
            image : imageUrl
        });

        await newMessage.save();

        // todo :  realtime functionality goes here using socket.io

        res.status(201).json(newMessage)

    } 
    catch (error) {
        console.error("Error in sendMessage controller :" , error.message) ;
        res.status(500).json({message : "Internal server error"}) ;
    }
}