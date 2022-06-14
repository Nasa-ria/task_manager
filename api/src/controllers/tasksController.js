require("../models/mongooseConnection");
const Task = require("../models/Task");

const makeResponse = (status = 200) => ({
	success: true,
	message: "ok",
	status: status,
	data: [],
});

exports.index = async (req, res) => {
	let response = makeResponse();
	const tasks = await Task.find({});
	response.data = tasks;
	res.status(response.status).json(response);
};

exports.save = async (req, res) => {
	let response = makeResponse(201);
	const task = new Task(req.body);
	// task.task_date=Date()
	await task.save();
	response.data = task;
	res.status(response.status).json(response.data);
};

exports.edit = async (req, res) => {
	let response = makeResponse();
	let task = await Task.findById(req.params.id);
	task = await Task.updateOne(
		{ _id: req.params.id },
		{ task: req.body.task, task_date: req.body.task_date, note: req.body.note },
	);
	response.data = task;
	res.status(response.status).json(response);
	};

exports.task = async (req, res) => {
	let response = makeResponse();
	const task = await Task.findById(req.params.id);
	response.data = task;

	res.status(response.status).json(response);
};

exports.delete = async (req, res) => {
	let response = makeResponse();
    const id= req.params.id  
    let  task =await Task.deleteOne({id:id})
     response.data= task
	res.status(response.status).json(response);
};

exports.clear = async (req, res) => {
	let response = makeResponse();
	res.status(response.status).json(response);
};

exports.toggleCompleted = async (req, res) => {
	let response = makeResponse();
	const task = await Task.findById(req.params.id)
	if(task.completed) {
	  task.completed = false;
	}else {
	  task.completed = true;
	}
	await task.save();
	response.data = task;
	return res.status(response.status).json(response);
	
};
