import CustomRequest from "../interface/customRequest";
import Demand from "../models/Demand";
import { Response } from "express";

export const createDemand = async(req: CustomRequest, res: Response) => {

  const userId = req.userId;
  const { title, description } = req.body;
  const newDemand = new Demand({ title, description, userId });

  try {
    const savedDemand = await newDemand.save();
    res.status(201).json({ demand: savedDemand });
  } catch(e) {
    res.status(400).json({ message: 'Error creating demand' });
  }


}