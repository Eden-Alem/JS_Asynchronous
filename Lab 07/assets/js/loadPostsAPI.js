// UI Vars 
const postDiv3 = document.getElementById('thePosts');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load a single customer function 
function load_fromPlaceHolder() {

    //open the request 
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(res) {
            
            return res.json(); //return the JSON Promise
        })
        .then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
        
                <div class="item">
                <div class="image">
                    <img src=" https://images.unsplash.com/photo-1568289999810-3dc2072a9def?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlhbW9uZHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60">
                </div>
                <div class="content">
                    <a class="header" href="#" id="bTitle">
                    ${post.title.toUpperCase()}
                    </a>
                    <div class="description">
                        <p id="bDesc">
                        ${post.body}
                        </p>
                    </div>
                    <div class="extra">
                        <a class="ui floated basic violet button" href="#">Read Mores</a>
                    </div>
                </div>
            </div>
        
        `;
            });
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });



}

async function load_fromPlaceHolder_new() {

    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `
                <div class="item">
                    <div class="image">
                        <img src="https://images.unsplash.com/photo-1580269299510-06baba1a0136?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpYW1vbmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60">
                    </div>
                    <div class="content">
                        <a class="header" href="#" id="bTitle">
                        ${post.title.toUpperCase()}
                        </a>
                        <div class="description">
                            <p id="bDesc">
                            ${post.body}
                            </p>
                        </div>
                        <div class="extra">
                            <a class="ui floated basic violet button" href="#">Read Mores</a>
                        </div>
                    </div>
                </div>`;
            });
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

}