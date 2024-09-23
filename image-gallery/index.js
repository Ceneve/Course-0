let url = "https://api.unsplash.com/search/photos?query=dog&per_page=30&orientation=landscape&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo";

// function getData() {
//     fetch(url)
//     .then((result) => {
//         return result.json();
//       });
// };

function getData() {
    fetch(url)
    .then(result => result.json())
    .then(data => {
        let a = data.results;
        return console.log(a[0].urls.small);
    })

};



getData();