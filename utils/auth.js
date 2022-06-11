// utils/auth.js

import jwt from "jsonwebtoken"

const secret_key = process.env.SECRET_KEY

const auth = (handler) => {
  return async(req, res) => {
    if(req.method === "GET"){
      return handler(req, res)
    }
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvZ2VAaG9nZS5jb20iLCJpYXQiOjE2NTQ5MzgwOTIsImV4cCI6MTY1NTAyMDg5Mn0.z5YVLFssPMh4coSFSy99f_6arSUYL_MDD5-kiR5MKr8"
    // const token = await req.headers.authorization.split(" ")[1]
    if(!token){
      return res.status(400).json({message: "トークンがありません"})
    }
    try{
      const decoded = jwt.verify(token, secret_key)
      req.body.email = decoded.email
      return handler(req, res)
    } catch(err){
      return res.status(401).json({message: "トークンが正しくありません"})
    }
  }
}

export default auth
