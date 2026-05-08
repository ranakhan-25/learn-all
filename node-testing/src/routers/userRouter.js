const User = require("../models/userModels");

const userRouter = require("express").Router();

// get all user
userRouter.get("/users", async (req, res) => {
  try {
    const user = await User.find();
    if (user.length <= 0) {
      return res.json({
        message: "users is not found",
        status: 404,
      });
    }

    res.json({
      message: "get all user successfully",
      data: user,
    });
  } catch (error) {}
});

// get single user by id
userRouter.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.json({
        message: "user is not found with this id",
        status: 400,
      });
    }

    return res.json({
      message: "user found successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 400,
    });
  }
});

// create user
userRouter.post("/users/register", async (req, res) => {
  try {
    const { name, email, password, phone, image } = req.body;

    const newUser = {
      name,
      email,
      password,
      phone,
      image,
    };

    const user = await User.insertOne(newUser);

    if (!user) {
      return res.json({
        message: "user not created",
      });
    }
    return res.status(201).json({
      message: "User received successfully",
      data: user,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 400,
    });
  }
});

// update user by id
userRouter.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, phone, image } = req.body;
    const user = await User.findOne({ _id: id });
     if (!user) {
      return res.json({
        message: "user is not found with this id",
        status: 400,
      });
    }

    const newUser = {
      name,
      phone,
      image,
    }


    
  } catch (error) {
    return res.json({
      message: error.message,
      status:400
    })
  }
});

// delete user by id
userRouter.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await User.deleteOne({ _id: id });

    console.log(user)

    if (!user) {
      return res.json({
        message: "delete user is not found with this id",
        status: 400,
      });
    }

    return res.json({
      message: "user ws deleted successfully",
      data:user
    })


  } catch (error) {
    return res.json({
      message: error.message,
      status: 400,
    });
  }
});

module.exports = userRouter;
