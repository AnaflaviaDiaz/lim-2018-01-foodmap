const splash = document.getElementById("splash");
const main = document.getElementById("main");
const header = document.getElementById("header");
const inputSearch = document.getElementById("input-search");
const filterParrilla = document.getElementById("filter-parrilla");
const filterChifa = document.getElementById("filter-chifa");
const filterCriolla = document.getElementById("filter-criolla");
const filterSushi = document.getElementById("filter-sushi");
const filterInternacional = document.getElementById("filter-internacional");
const filterPostre = document.getElementById("filter-postre");
const filterPescado = document.getElementById("filter-pescado");
const filterSandwich = document.getElementById("filter-sandwich");
const filterFusion = document.getElementById("filter-fusion");
const filterSelva = document.getElementById("filter-selva");
const filterBar = document.getElementById("filter-bar");

window.onload = () => {
	setTimeout(() => {
		postSplash();
	}, 1000);
}

postSplash = () => {
	splash.style.display = "none";
	main.style.display = "block";
	header.style.display = "block";
}

const getData = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrjson = JSON.parse(xhr.responseText);
      callback(null, xhrjson);
    }
  };
  xhr.send();
}

const getRestaurants = () => {
	let restaurants = [];
	getData("./data/restaurants-miraflores.json", (err, restaurantsjson) => {
		restaurantsjson.map(restaurant => {
			restaurants.push(restaurant);
		});
	});
	return restaurants;
}

const showRestaurants = () => {

}

filterParrilla.addEventListener("click", () => console.log("parrilla"));
filterChifa.addEventListener("click", () => console.log("chifa"));
filterCriolla.addEventListener("click", () => console.log("comida criolla"));
filterSelva.addEventListener("click", () => console.log("comida selvatica"));
filterSushi.addEventListener("click", () => console.log("sushi"));
filterInternacional.addEventListener("click", () => console.log("internacional"));
filterFusion.addEventListener("click", () => console.log("fusion"));
filterPostre.addEventListener("click", () => console.log("postres"));
filterPescado.addEventListener("click", () => console.log("mariscos"));
filterBar.addEventListener("click", () => console.log("karaoke bar"));
filterSandwich.addEventListener("click", () => console.log("sandwinch"));

// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));