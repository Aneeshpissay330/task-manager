import Category from '../models/Category.js';

// @desc    Create a new category
// @route   POST /api/categories
// @access  Private
export const createCategory = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Create a new category',
    schema: 
    {
      name: 'string',
      description: 'string',
      colorTag: 'string'
    }
  } */
  try {
    const { name, description, colorTag } = req.body;

    if (!name) {
      return res.status(400).json({ success: false, message: 'Category name is required' });
    }

    const category = new Category({
      name,
      description,
      colorTag,
      user: req.user.id, // assuming categories are user-specific
    });

    await category.save();
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all categories for a user
// @route   GET /api/categories
// @access  Private
export const getCategories = async (req, res) => {
  // #swagger.tags = ['Category']
  try {
    const categories = await Category.find({ user: req.user.id });
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private
export const updateCategory = async (req, res) => {
  // #swagger.tags = ['Category']
  /* #swagger.parameters['body'] = {
    in: 'body',
    description: 'Update an existing category',
    schema: 
    {
      name: 'string',
      description: 'string',
      colorTag: 'string'
    }
  } */
  try {
    const category = await Category.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private
export const deleteCategory = async (req, res) => {
  // #swagger.tags = ['Category']
  try {
    const category = await Category.findOneAndDelete({ _id: req.params.id, user: req.user.id });

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
