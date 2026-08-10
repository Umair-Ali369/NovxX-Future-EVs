const User = require("../Models/User.js")

// GET PROFILE
exports.getProfile = async(req, res) => {
    try {
        const user = await User.find(req.user.id).select("-password")
        if(!user) {
            res.status(400).json({ message : "User Not Found"})
        }
        res.status(200).json({ data : user})

    } catch(error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }

}

// UPDATE PROFILE PUT
exports.updateProfile = async (req, res) => {
    try {
         const { vehicleType, vehicleName, preferredDrivingStyle, preferredDrivingCondition} = req.body
         
         const updateProfile  = await User.findByIdAndUpdate( 
            req.user.id,
           {
            vehicleType, 
            vehicleName, 
            preferredDrivingStyle, 
            preferredDrivingCondition,
            profileComplete : true
           },
           {returnDocument: 'after', runValidators : true}
        ).select("-password")
        if(!updateProfile) {
            res.status(400).json({message : "User Not found."})
        }
        
        res.status(200).json({
            message : "Profile Updated!",
            data : updateProfile
        })

    } catch(error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}