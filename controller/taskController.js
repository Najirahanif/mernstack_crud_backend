import Task from '../model/taskModel.js';

export const create = async (req, res) => {
  try {
    const { taskName, description, dueDate } = req.body;

    const newTask = new Task({
      taskName,
      description,
      dueDate,
      userId: req.userId,
    });

    await newTask.save();
    res.status(201).json({ message: 'Task created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save task', error: error.message });
  }
};


export const getAllTask = async (req, res) => {
  try {
    const { page = 1, limit = 5 } = req.query;

    const tasks = await Task.find({ userId: req.userId })
      .sort({ dueDate: 1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Task.countDocuments({ userId: req.userId });

    res.status(200).json({
      tasks,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getTaskbyId = async(req,res) => {
    try {
        const id = req.params.id;
        const taskExist = await Task.findById(id);
        if(!taskExist ){
            return res.status(404).json({message:"Task not Found"});
        }
        res.status(200).json(taskExist)
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const update = async(req,res) => {
    try {
        const id = req.params.id;
        const taskExist = await Task.findById(id);
        if(!taskExist ){
            return res.status(404).json({message:"Task not Found"});
        }
        await Task.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json({message:"Updated Successfully"})
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}

export const deleteTask = async(req,res) => {
    try {
        const id = req.params.id;
        const taskExist = await Task.findById(id);
        if(!taskExist ){
            return res.status(404).json({message:"Task not Found"});
        }
        await Task.findByIdAndDelete(id)
        res.status(200).json({message:"Task Deleted Successfully"})
    } catch (error) {
        res.status(500).json({errorMessage:error.message})
    }
}