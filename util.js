const fs = require("fs");

module.exports = {
  getDateString() {
    let date = new Date();
    let str = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}T${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return str;
  },

  ensureFolderExists(folder) {
    let folderExists = fs.existsSync(folder);
    if (!folderExists) {
      fs.mkdirSync(folder);
    }
  }
}