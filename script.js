fetch("http://efcreations.es/t9w1/wp-json/wp/v2/bike")
    .then(initial => initial.json())
    .then(callback);

function callback(data) {
    console.log(data)

    data.forEach(showPost)
}

function showPost(post) {
    console.log(post)
    const template = document.querySelector("template#bikeTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".brand").textContent = post.bike_brand;
    clone.querySelector(".model").textContent = post.model;
    clone.querySelector(".price").textContent = "$" + post.price;
    clone.querySelector(".colour").textContent = post.colour;
    clone.querySelector(".in-stock").textContent = post.in_stock;

    /*copy.querySelector(".content").innerHTML = post.content.rendered;*/

    document.querySelector("main").appendChild(clone);
}
