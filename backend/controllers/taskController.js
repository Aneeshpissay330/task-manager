import Task from '../models/Task.js';

// @desc    Create a new task
// @route   POST /api/tasks
// @access  Private
export const createTask = async (req, res) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Create a new task',
    schema: 
    {
      title: 'string',
      description: 'string',
      dueDate: 'date',
      priority: 'string',
      status: 'string',
      category: 'string'
    }
  } */
  try {
    const { title, description, dueDate, priority, status, category } = req.body;

    const task = await Task.create({
      title,
      description,
      dueDate,
      priority,
      status,
      category,
      user: req.user.id,
    });

    res.status(201).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Get all tasks for logged-in user
// @route   GET /api/tasks
// @access  Private
export const getTasks = async (req, res) => {
  // #swagger.tags = ['Tasks']
  try {
    const tasks = await Task.find({ user: req.user.id }).populate('category');
    res.status(200).json({ success: true, tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Get single task
// @route   GET /api/tasks/:id
// @access  Private
export const getTaskById = async (req, res) => {
  // #swagger.tags = ['Tasks']
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id }).populate('category');
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Update task
// @route   PUT /api/tasks/:id
// @access  Private
export const updateTask = async (req, res) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Update an existing task',
    schema: 
    {
      title: 'string',
      description: 'string',
      dueDate: 'date',
      priority: 'string',
      status: 'string',
      category: 'string'
    }
  } */
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    res.status(200).json({ success: true, task });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// @desc    Delete task
// @route   DELETE /api/tasks/:id
// @access  Private
export const deleteTask = async (req, res) => {
// #swagger.tags = ['Tasks']
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    res.status(200).json({ success: true, message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
