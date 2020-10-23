fetch("http://efcreations.es/t9w1/wp-json/wp/v2/bike")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    //we now have the JSON. I could have also called posts, data
    /*console.log(posts)*/

    //loop through theme
    posts.forEach(showPost)
}

function showPost(post) {
    console.log(post);
    //template cloning
    const template = document.querySelector("template#bikeTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("h4").textContent = post.model;
    copy.querySelector(".price").textContent = "$" + post.price;
    /*copy.querySelector(".colour").innerHTML = post.content.colour;*/
   /*copy.querySelector(".in-stock").innerHTML = post.content.in_stock;*/


    /*copy.querySelector(".content").innerHTML = post.content.rendered;*/


    //appending
    document.querySelector("main").appendChild(copy);
}
