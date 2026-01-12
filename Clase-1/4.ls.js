const fs = require("node:fs");

fs.readdir(".", (err, items) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  console.log("Directory Contents:");
  items.forEach((item) => {
    console.log(item);
  });
});
