import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
  first_Name:{
    type:String,
    require:true
  },
  last_Name:{
    type:String,
    require:true
  },
  email:{
    type:String,
    require:true,
    unique:true
  },
  phone:{
    type:String
  },
  password:{
    type:String,
    require:true
  },
  image:{
    type:String
  }
},{
  timestamps:true
})
userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next()
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password,salt)
})

userSchema.methods.matchPassword = async function(enterdPassword){
  return await bcrypt.compare(enterdPassword,this.password)
}

const User = mongoose.model("User", userSchema);
export default User;