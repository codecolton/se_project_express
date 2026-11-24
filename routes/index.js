const router = require("express").Router();

const userRouter = require("./users");
const clothingItem = require("./clothingItem");

const { NOT_FOUND_STATUS_CODE } = require("../utils/errors");

router.use("/users", userRouter);
router.use("/items", clothingItem);

router.use((req, res) => {
  res.status(NOT_FOUND_STATUS_CODE).send({ message: "Router not found" });
});

module.exports = router;
