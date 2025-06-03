const tableData = [
      { model: "УИД-376", voltage: "380/50", power: "24.9", telpherCount: "1", turbineCount: "2*7.5 кВт", load: "500", productivity: "6", ventilation: "5200", dimensions: "800/1200", availability: "Под заказ" },
      { model: "УИД-376Е", voltage: "380/50", power: "24.9", telpherCount: "2", turbineCount: "2*7.5 кВт", load: "1000", productivity: "6", ventilation: "5200", dimensions: "800/1200", availability: "Под заказ" },
      { model: "УИД-378", voltage: "380/50", power: "41.35", telpherCount: "1", turbineCount: "2*11 кВт", load: "2000", productivity: "12", ventilation: "10500", dimensions: "1000/1500", availability: "Под заказ" },
      { model: "УИД-378Е", voltage: "380/50", power: "41.35", telpherCount: "2", turbineCount: "2*11 кВт", load: "1000", productivity: "12", ventilation: "10500", dimensions: "1000/1500", availability: "Под заказ" },
      { model: "УИД-3710", voltage: "380/50", power: "49.35", telpherCount: "1", turbineCount: "2*15 кВт", load: "2000", productivity: "12", ventilation: "11000", dimensions: "1200/1600", availability: "Под заказ" },
      { model: "УИД-3710Е", voltage: "380/50", power: "50", telpherCount: "2", turbineCount: "2*15 кВт", load: "5000", productivity: "30", ventilation: "11000", dimensions: "1200/1600", availability: "Под заказ" },
      { model: "УИД-3720", voltage: "380/50", power: "68", telpherCount: "1", turbineCount: "3*15 кВт", load: "5000", productivity: "30", ventilation: "15000", dimensions: "1500/2000", availability: "Под заказ" },
      { model: "УИД-3720Е", voltage: "380/50", power: "68", telpherCount: "2", turbineCount: "3*15 кВт", load: "2000", productivity: "30", ventilation: "15000", dimensions: "1500/2000", availability: "Под заказ" },
      { model: "УИД-3750", voltage: "380/50", power: "102.2", telpherCount: "1", turbineCount: "4*15 кВт", load: "10000", productivity: "60", ventilation: "18000", dimensions: "2000/2500", availability: "Под заказ" },
      { isColSpan: true, text: "Очистка производится со всех сторон" }
    ];

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
