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
const listRestaurants = document.getElementById("list-restaurants");
let allRestaurants;

window.onload = () => {
	setTimeout(() => {
		postSplash();
		getAllRestaurant();
	}, 1000);
}

postSplash = () => {
	splash.style.display = "none";
	main.style.display = "block";
	header.style.display = "block";
}

const getAllRestaurant = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', './data/restaurants-miraflores.json', true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let xhrRestaurants = JSON.parse(xhr.responseText);
			showRestaurants(xhrRestaurants);
			allRestaurants = xhrRestaurants;
    }
  }
  xhr.send();
}

const getRestaurantByFilter = (type) => {
	let filterRestaurants = [];
	allRestaurants.map(restaurant => {
		if(type === restaurant.type) {
			filterRestaurants.push(restaurant);
		}
	});
	showRestaurants(filterRestaurants);
}

const showRestaurants = (restaurants) => {
	listRestaurants.innerHTML = "";
	restaurants.map(restaurant => {
		listRestaurants.innerHTML +=
	`
		<nav class="level is-mobile">
			<div class="level-left">
				<div class="level-item">
					<figure class="image is-48x48">
						<img class="is-rounded" src="${restaurant.img}" alt="icon">
					</figure>
				</div>
				<div class="level-item">
					<div>
						<p class="subtitle is-5">
							<strong>${restaurant.name}</strong>
						</p>
						<p class="subtitle is-6">${restaurant.type}</p>
					</div>
				</div>
			</div>
		</nav>
	`
	});
}

filterParrilla.addEventListener("click", () => {
	getRestaurantByFilter("Carnes y Parrillas")
});
filterChifa.addEventListener("click", () => {
	getRestaurantByFilter("Chifa")
});
filterCriolla.addEventListener("click", () => {
	getRestaurantByFilter("Comida Criolla")
});
filterSelva.addEventListener("click", () => {
	getRestaurantByFilter("Comida Selvática")
});
filterSushi.addEventListener("click", () => {
	getRestaurantByFilter("Comida Japonesa")
});
filterInternacional.addEventListener("click", () => {
	getRestaurantByFilter("Comida Peruana Internacional")
});
filterFusion.addEventListener("click", () => {
	getRestaurantByFilter("Fusión")
});
filterPostre.addEventListener("click", () => {
	getRestaurantByFilter("Pastelería")
});
filterPescado.addEventListener("click", () => {
	getRestaurantByFilter("Pescados y Mariscos")
});
filterBar.addEventListener("click", () => {
	getRestaurantByFilter("Restaurante Bar")
});
filterSandwich.addEventListener("click", () => {
	getRestaurantByFilter("Sandwicherias y Cafés")
});

// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));
// filter.addEventListener("click", () => console.log(""));