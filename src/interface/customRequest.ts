import { Request } from "express";

interface CustomRequest extends Request {
  userId?: string;
  userEmail?: string;
}

export default CustomRequest;