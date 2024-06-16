console.log(`Number of categories: ${document.querySelectorAll("li.item").length}`);

for (const elem of document.querySelectorAll("li.item")) {
    const categoryName = elem.querySelector("h2");
    console.log(`Category: ${categoryName.textContent}`);
    const elements = elem.querySelector("ul");
    console.log(`Elements: ${elements.children.length}`);
  }