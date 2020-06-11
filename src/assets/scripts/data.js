// import { data } from "../data/dummy.data";

// let allData = [];

// function getData(data) {
//   try {
//     allData.push(data);
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// getData(data);

// class RenderDates {
//   constructor(options) {
//     this.getClass = options.getClass;
//     this.className = options.className;
//     this.tagElement = options.tagElement;
//     this.data = options.data;
//   }

//   render() {
//     const getElem = document.querySelector(this.getClass);

//     data.forEach((elem) => {
//       getElem.innerHTML += `
//       <${this.tagElement}>
//         <h4>${elem.title}</h4>
//         <img src=${elem.srcImg} class=${this.className}>

//       </${this.tagElement}
//       <${this.tagElement} ></${this.tagElement}>
//       <${this.tagElement}>${elem.city}</${this.tagElement}>
//     `;
//     });
//   }
// }

// const newRender = new RenderDates({
//   getClass: ".list",
//   className: "img-test",
//   tagElement: "li",
//   data: allData,
// });
// newRender.render();

console.log('Проверка')

const cities = ['Санкт-Петербург', 'Санкт-Петербург и ЛО', 'Ленинградская область', 'Россия']
const category = ['Автомобили', 'Мотоциклы', 'Грузовики']
const metro = ['Озерки', 'Площадь Восстания', 'Гостинный двор']

const citiesId = document.querySelector('#cities')
const categoryId = document.querySelector('#category')
const metroId = document.querySelector('#metro')

function setOptions(id, options) {
  options.forEach(option => {
    id.innerHTML += `<option>${option}</option>`;
  });
}

// set cities
setOptions(citiesId, cities);
// set category
setOptions(categoryId, category);
// set metro
setOptions(metroId, metro);

