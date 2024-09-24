

// function getData() {
//     fetch(url)
//     .then((result) => {
//         return result.json();
//       });
// };
// console.log(a[0].urls.small);


const content = document.querySelector(".content");

let defaultUrl = "https://api.unsplash.com/search/photos?query=dog&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

function imageGenerator(url) {
    fetch(url)
    .then(result => result.json())
    .then(data => {
        let dataArray = data.results;
        for (i=0;  i<30; i++ ) {
            let image = document.createElement('img');
            image.src = dataArray[i].urls.small;
            content.appendChild(image);
        }
    })
};

imageGenerator(defaultUrl);