const $app = document.getElementById("app");
const $observe = document.getElementById("observe");
const API = " https://api.escuelajs.co/api/v1/products?offset=4&limit=10";


const getData = api => {
  
  fetch(api)
    .then(response => response.json())
    .then(response => {
      let products = response;
      let output = '';
      
      products.map(product => { output = output +
        // template
        `
        <article class="Card">
          <img src=${product.images} />
          <h2>
            ${product.title}
            <small>${product.price}</small>
          </h2>
        </article>
        `
      });

      let newItem = document.createElement('section');
      newItem.classList.add('Item');
      newItem.innerHTML = output;
      $app.appendChild(newItem);
    })
    .catch(error => console.log(error));
}

const loadData = () => {
  getData(API);
}

loadData();





const intersectionObserver = new IntersectionObserver(entries => {
  // logic...


}, {
  rootMargin: '0px 0px 100% 0px',
});

intersectionObserver.observe($observe);


const savedData = () => {

  localStorage.setItem(
    'entries',
    'https://api.escuelajs.co/api/v1/products?offset=4&limit=10'
    );
}

savedData();