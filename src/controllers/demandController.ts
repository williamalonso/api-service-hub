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

export const listUserDemands = async(req: CustomRequest, res: Response) => {

  const user = req.userId;
  // console.log(user);

  try {

    const demands = await Demand.find({ user });
    res.status(200).json({ demands });

  } catch(e) {

    res.status(500).json({ message: 'Error fetching user demands' });

  }
}

export const getDemandById = async(req: CustomRequest, res: Response) => {

  const userId = req.userId;
  const demandId = req.params.id;
  // console.log(demandId);

  try {
    const demand = await Demand.findOne({ _id: demandId, user: userId });
    if(!demand) {
      return res.status(404).json({ message: 'Demand not found for this user' });
    }
    res.status(200).json({ demand });
  } catch(e) {
    res.status(500).json({ message: 'Error fetching demand by id' });
  }

}

export const updateDemand = async(req: CustomRequest, res: Response) => {
  
  const userId = req.userId;
  const demandId = req.params.id;
  const { title, description } = req.body;

  try {

    const demand = await Demand.findOne({ _id: demandId, user: userId });

    if(!demand) {
      return res.status(404).json({ message: 'Demand not found to update' });
    }

    demand.title = title;
    demand.description = description;
    const updatedDemand = await demand.save();

    res.status(200).json({ demand: updatedDemand });

  } catch(e) {

    res.status(400).json({ message: 'Error updating demand' });

  }

}