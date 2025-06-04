const tableData = [
  [ { model: "УИД-376", voltage: "380/50", power: "24.9", telpherCount: "1", turbineCount: "2*7.5 кВт", load: "500", productivity: "6", ventilation: "5200", dimensions: "800/1200", availability: "Под заказ" },
      { model: "УИД-376Е", voltage: "380/50", power: "24.9", telpherCount: "2", turbineCount: "2*7.5 кВт", load: "1000", productivity: "6", ventilation: "5200", dimensions: "800/1200", availability: "Под заказ" },
      { model: "УИД-378", voltage: "380/50", power: "41.35", telpherCount: "1", turbineCount: "2*11 кВт", load: "2000", productivity: "12", ventilation: "10500", dimensions: "1000/1500", availability: "Под заказ" },
      { model: "УИД-378Е", voltage: "380/50", power: "41.35", telpherCount: "2", turbineCount: "2*11 кВт", load: "1000", productivity: "12", ventilation: "10500", dimensions: "1000/1500", availability: "Под заказ" },
      { model: "УИД-3710", voltage: "380/50", power: "49.35", telpherCount: "1", turbineCount: "2*15 кВт", load: "2000", productivity: "12", ventilation: "11000", dimensions: "1200/1600", availability: "Под заказ" },
      { model: "УИД-3710Е", voltage: "380/50", power: "50", telpherCount: "2", turbineCount: "2*15 кВт", load: "5000", productivity: "30", ventilation: "11000", dimensions: "1200/1600", availability: "Под заказ" },
      { model: "УИД-3720", voltage: "380/50", power: "68", telpherCount: "1", turbineCount: "3*15 кВт", load: "5000", productivity: "30", ventilation: "15000", dimensions: "1500/2000", availability: "Под заказ" },
      { model: "УИД-3720Е", voltage: "380/50", power: "68", telpherCount: "2", turbineCount: "3*15 кВт", load: "2000", productivity: "30", ventilation: "15000", dimensions: "1500/2000", availability: "Под заказ" },
      { model: "УИД-3750", voltage: "380/50", power: "102.2", telpherCount: "1", turbineCount: "4*15 кВт", load: "10000", productivity: "60", ventilation: "18000", dimensions: "2000/2500", availability: "Под заказ" },
      { isColSpan: true, text: "Очистка производится со всех сторон" }],
      [{ model: "УИД-3110", voltage: "380/50", power: "9.7", turbineCount: "1", productivity: "1", ventilation: "800", loadingWeight: "300", widthproduct: "15", availability: "Под заказ" },
      { model: "УИД-3113", voltage: "380/50", power: "11.1", turbineCount: "1", productivity: "2", ventilation: "2000", loadingWeight: "600", widthproduct: "30", availability: "Под заказ" },
      { model: "УИД-320", voltage: "380/50", power: "7", turbineCount: "1*4кВт", productivity: "0.3", ventilation: "1400", loadingWeight: "50", widthproduct: "5", availability: "Под заказ" },
      { model: "УИД-322", voltage: "380/50", power: "6.4", turbineCount: "1*4кВт", productivity: "0.5", ventilation: "1600", loadingWeight: "80", widthproduct: "10", availability: "Под заказ" },
      { model: "УИД-324", voltage: "380/50", power: "10.85", turbineCount: "1*7.5", productivity: "0.7", ventilation: "2000", loadingWeight: "100", widthproduct: "10", availability: "Под заказ" },
      { model: "УИД-326", voltage: "380/50", power: "13.25", turbineCount: "2*7.5кВт", productivity: "1.2", ventilation: "2500", loadingWeight: "200", widthproduct: "10", availability: "Под заказ" },
      { model: "УИД-3210", voltage: "380/50", power: "28.45", turbineCount: "1*15кВт", productivity: "2.5", ventilation: "4200", loadingWeight: "500", widthproduct: "30", availability: "Под заказ" },
      { model: "УИД-3220", voltage: "380/50", power: "46", turbineCount: "2*11кВт", productivity: "5", ventilation: "5600", loadingWeight: "1000", widthproduct: "50", availability: "Под заказ" },
      { model: "УИД-15", voltage: "380/50", power: "50", turbineCount: "1", productivity: "6", ventilation: "7500", loadingWeight: "1500", widthproduct: "250", availability: "Под заказ" },
      { model: "УИД-28", voltage: "380/50", power: "65", turbineCount: "1", productivity: "14", ventilation: "10500", loadingWeight: "3500", widthproduct: "350", availability: "Под заказ" },
      { isColSpan: true, text: "Очистка производится со всех сторон" }],
     
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
