require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Bind to 0.0.0.0 to accept external connections
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
