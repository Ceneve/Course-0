const content = document.querySelector(".content");
const button = document.getElementById("search");
const input = document.getElementById("image-search");
const footer = document.querySelector(".footer");


const defaultSearchTerm = "cat";


function imageGenerator(searchTerm) {
    fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo`)
        .then(result => result.json())
        .then(data => {
            let dataArray = data.results;
            for (i = 0; i < 30; i++) {
                let image = document.createElement('img');
                image.src = dataArray[i].urls.small;
                content.appendChild(image);
            }
        })
};

imageGenerator(defaultSearchTerm);

button.addEventListener("click", () => {
    content.innerHTML = "";
    let inputValue = input.value;
    imageGenerator(inputValue);
});

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        button.click();
    }
});