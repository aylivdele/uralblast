const tableData = [
      { model: "УИТ-7.5", power: "7.5", abrasiveFlow: "125", flangeA: "670", flangeB: "140", flangeV: "230", flangeG: "200", flangeD: "275", holes: "21" },
      { model: "УИТ-11", power: "11", abrasiveFlow: "180", flangeA: "150", flangeB: "240", flangeV: "240", flangeG: "", flangeD: "", holes: "" },
      { model: "УИТ-15", power: "15", abrasiveFlow: "250", flangeV: "", flangeG: "", flangeD: "", holes: "" },
      { model: "УИТ-18", power: "22", abrasiveFlow: "360", flangeA: "645", flangeB: "173", flangeV: "258", flangeG: "100 или 190", flangeD: "370 или 190", holes: "" }
    ]


for (let index = 0; index < tableData.length - 1; index++) {
  const row = tableData[index];
  for (const key in row) {
    let count = 1;
    while ((index + count) < tableData.length && tableData[index + count][key] === row[key]) {
      delete tableData[index + count][key];
      count++;
    }
    if (count > 1) {
      row[key] = {rowspan: count.toString(), value: row[key]}
    }
  }
}

const fs = require('fs');
const path = require('path');

function createDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Directory "${dirPath}" created successfully.`);
  } else {
    console.log(`Directory "${dirPath}" already exists.`);
  }
}

const directoryPath = path.join(__dirname, 'build');
createDirSync(directoryPath);

const filePath = path.join(directoryPath, 'resultData.json');

fs.writeFileSync(filePath, JSON.stringify(tableData, null, 0));
console.log(`File "${filePath}" created successfully.`);
