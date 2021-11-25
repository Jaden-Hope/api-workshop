const colors = document.querySelector('.colors');
const brands = document.querySelector('.brands');
const cars = document.querySelector('.cars')

const colorTemplateText = document.querySelector('.colorTemplate');
const carsTemplateText = document.querySelector('.carsTemplate');

const colorTemplate = Handlebars.compile(colorTemplateText.innerText);
const carsTemplate = Handlebars.compile(carsTemplateText.innerText);

axios
    .get('https://api-tutor.herokuapp.com/v1/colors')
    .then((result) => {
        console.log(result.data);

        colors.innerHTML = colorTemplate({
            item: result.data
        })
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/makes')
    .then((result) => {
        console.log(result.data);

        brands.innerHTML = colorTemplate({
            item: result.data
        })
    })

axios
    .get('https://api-tutor.herokuapp.com/v1/cars')
    .then((result) => {
        console.log(result.data);

        cars.innerHTML = carsTemplate({
            item: result.data
        })
    })