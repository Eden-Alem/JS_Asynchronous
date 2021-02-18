// UI Vars 
const container = document.querySelector('.slideshow-container');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://picsum.photos/v2/list')
        .then(function(res) {
            
            return res.json(); //return the JSON Promise
        })
        .then(function(images) {
            //iterate over each post [100 posts]
            let output = '';
            images.forEach(function(image) {
                output += `
                <img width="100%" height="100%" class="slide active" src=${image.download_url}>
                `;
            });
            container.innerHTML += output;
        })
        .catch(function(err) {
            console.log(err);
        });



}

async function load_fromPlaceHolder_new() {

    //open the request 
    let response = await fetch('https://picsum.photos/v2/list');

    let data = await response.json();

    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(images) {
            //iterate over each post [100 posts]
            let output = '';
            images.forEach(function(image) {
                output += `
                <img width="100%" height="100%" class="slide active" src=${image.download_url}>
                `;
            });
            container.innerHTML += output;
        })
        .catch(function(err) {
            console.log(err);
        });

}
