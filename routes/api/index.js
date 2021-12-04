const router = require("express").Router();
const userRoutes = require("./user_routes");
const thoughtRoutes = require("./thought-routes");
const { builtinModules } = require("module");

router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

module.exports = router;
