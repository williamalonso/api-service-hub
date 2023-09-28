import CustomRequest from "../interface/customRequest";
import Demand from "../models/Demand";
import { Response } from "express";

export const createDemand = async(req: CustomRequest, res: Response) => {

  const userId = req.userId;
  // console.log('userId', userId);
  const { title, description } = req.body;
  // console.log('controller title', title);
  
  try {

    const newDemand = new Demand({ 
      title, 
      description, 
      user: userId,
    });

    // console.log(newDemand);
    const savedDemand = await newDemand.save();
    res.status(201).json({ message: 'Demand created succesfuly', demand: savedDemand });

  } catch(e) {

    res.status(400).json({ message: 'Error creating demand' });

  }

}