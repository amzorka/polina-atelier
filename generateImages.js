const fs = require('fs');
const path = require('path');

const imagesFolder = path.join(__dirname, 'src/images'); // Путь к папке с изображениями
const outputFile = path.join(__dirname, 'src/imagesData.js'); // Файл для хранения данных

function getFiles(dir) {
  const files = fs.readdirSync(dir);
  return files.reduce((acc, file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      acc[file] = getFiles(filePath); // Если папка, рекурсивно обрабатываем её
    } else {
      acc[file] = filePath.replace(__dirname, ''); // Убираем абсолютный путь
    }
    return acc;
  }, {});
}

const imageData = getFiles(imagesFolder);

fs.writeFileSync(
  outputFile,
  `const IMAGES = ${JSON.stringify(imageData, null, 2)};\n\nexport default IMAGES;`
);

console.log('IMAGES объект успешно создан!');