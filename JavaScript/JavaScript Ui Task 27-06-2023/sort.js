fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

    // result.sort((a, b) => {
    //   var priceA = a.price[0].number; 
    //   var priceB = b.price[0].number;
    //   return priceA - priceB;
    // });

    result.forEach(function (product) {

      // Date day month year
      var createdAt = new Date(product.createdAt);
      var date = createdAt.toLocaleString("default", { day: 'numeric', month: 'long', year: 'numeric' });

      // Star Solid Regular
      var card = document.createElement("div");
      var ratingStars = "";
      var filledStars = product.property_reviews;
      var emptyStars = 5 - filledStars;

      for (var i = 0; i < filledStars; i++) {
        ratingStars += '<i class="icon fa-solid fa-star"></i>';
      }
      for (var i = 0; i < emptyStars; i++) {
        ratingStars += '<i class="icon fa-regular fa-star"></i>';
      }

      // innerHTML 
      var card = document.createElement("div");
      card.innerHTML = `<div class="product-card">
      <img class="img" src=${product.image[product.image.length - 1]} />
      <div class="title-css">
        <div class="product-title">${product.title}</div>
        <div class='price'>
          <div class="product-location">${product.location}</div>
          <div class="product-price">${product.price.map((e) => e.number + " " + e.currency.slice(0, 1))}</div>
        </div>
      </div>
      <hr />
      <div class='rating'>
        <div class="product-currDate">${date}</div>
        <div class="product-rating">Rating: ${ratingStars}></div>
      </div>
    </div>`;

      productContainer.appendChild(card);

    });

  })
  .catch((error) => console.log(error));


