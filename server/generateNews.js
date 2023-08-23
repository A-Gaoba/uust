const fs = require("fs").promises;

async function generateNews() {
  try {
    const jsonData = await fs.readFile("newsData.json", "utf-8");
    const newsItems = JSON.parse(jsonData);
    return newsItems;
  } catch (error) {
    console.error(`Error reading or parsing JSON file: ${error}`);
    return [];
  }
}

module.exports = generateNews;
