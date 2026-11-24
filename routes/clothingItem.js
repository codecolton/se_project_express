const router = require("express").Router();
const {
  createItem,
  getItems,
  updateItem,
  deleteItem,
} = require("../controllers/clothingItem");

const { likeItem, unlikeItem } = require("../controllers/likeItem");

router.put("/:itemId/likes", likeItem);
router.delete("/:itemId/likes", unlikeItem);

router.post("/", createItem);
router.get("/", getItems);
router.put("/:itemId", updateItem);
router.delete("/:itemId", deleteItem);

module.exports = router;
