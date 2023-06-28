fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

    var countDisplay = document.getElementById("All");
    var totalCount = result.length;
    countDisplay.innerHTML = `Product List ${totalCount}`;
    countDisplay.addEventListener("click", function () {
      renderProductCards(result);
    });

    var clickReviews = document.getElementById("reviews");
    var emptyReviews = result.filter(function (product) {
      return product.property_reviews > 0;
    });
    clickReviews.innerHTML = `Reviews: ${emptyReviews.length}`;
    clickReviews.addEventListener("click", function () {
      renderProductCards(emptyReviews);
    });

    var clickShowBadReview = document.getElementById("showBadReviews");
        var badReviews = result.filter(function (product) {
          return product.property_reviews < 5;
        });
        clickShowBadReview.innerHTML = `Bad Reviews: ${badReviews.length}`;
  
        clickShowBadReview.addEventListener("click", function () {
          var noReviews = result.filter(function (product) {
            return product.property_reviews === 0;
          });
          renderProductCards(noReviews);
        });




    function renderProductCards(products) {
      productContainer.innerHTML = "";
      products.forEach(function (product) {
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
        <img class="img" src="${product.image[product.image.length - 1]}" />
        <div class="container">
            <div class="product-title">${product.title.slice(0, 15)}</div>
            <div class="product-price">${product.price[0].number + " " + product.price[0].currency.slice(0, 1)}</div>
          </div>
            <div class="product-location">${product.location}</div>
        <div class="price">
        </div>
        <hr>
        <div class="dateRating">
            <div class="product-currDate">${date}</div>
            <div class="product-rating">${ratingStars}</div>
        </div>
    </div>`;

        productContainer.appendChild(card);


      });
    }
    renderProductCards(result);
  })

  .catch((error) => console.log(error));

