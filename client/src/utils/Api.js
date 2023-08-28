export const fetchNewsData = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/news`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching news data:", error);
    return [];
  }
};
