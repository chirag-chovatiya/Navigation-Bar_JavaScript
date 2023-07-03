fetch("product.json")
  .then((response) => response.json())
  .then((data) => {
    var result = data.result;
    var productContainer = document.getElementById("productContainer");

    function updateCountAndRender(status, elementId) {
      var countDisplay = document.getElementById(elementId);
      var filteredProducts=result;
      if (status !== "result") {
        filteredProducts = result.filter(function (product) {
          return product.status === status;
        });
      }
      countDisplay.innerHTML = `${status} Status: ${filteredProducts.length}`;
      countDisplay.addEventListener("click", function () {
        return renderProductCards(filteredProducts);
      });
    }
    

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
        <img class="img" src="${product.image[0]}" />  
        <div class="display" style="padding:10px;">
          <div class="titlePrice">
              <div class="product-title">${product.title}</div>
              <div><span class="product-price">${product.price[0].number + " " + product.price[0].currency}</span></div>
          </div>
          <div class="product-location">${product.location}</div>
          <div class="dateRating">
            <div class="product-currDate">${date}</div>
            <div class="product-rating">${ratingStars}</div>
          </div>
        </div>
    </div>`;
        productContainer.appendChild(card);
      });
    }
    updateCountAndRender("result", "defaults")
    updateCountAndRender("approved", "All");
    updateCountAndRender("pending", "reviews");
    updateCountAndRender("decline", "showBadReviews");
    renderProductCards(result);
  })
  .catch((error) => console.log(error));

