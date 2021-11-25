const filterElem = document.querySelector('.filterDisplay');
const filterColorElem = document.querySelector('.colorSelect');
const filterBrandElem = document.querySelector('.brandSelect');
const submitBtn = document.querySelector('.submitFilter')

const filterTemplateText = document.querySelector('.filterTemplate').innerText;

const filterTemplate = Handlebars.compile(filterTemplateText);

submitBtn.addEventListener('click', () => {
    axios
        .get('https://api-tutor.herokuapp.com/v1/cars')
        .then((result) => {
            const colorFilter = filterColorElem.value
            const brandFilter = filterBrandElem.value

            const data = result.data
            const filteredData = [];

            if ((colorFilter === "Any") && (brandFilter === "Any")) {
                console.log('showAll');
                filterElem.innerHTML = filterTemplate({ item: data })
            } else if ((colorFilter !== "Any") && (brandFilter === "Any")) {
                console.log('Filter brand');
                for (i = 0; i < data.length; i++) {
                    if (data[i].color === colorFilter) {
                        filteredData.push(data[i])
                        console.log(filteredData);
                    }
                }
                filterElem.innerHTML = filterTemplate({ item: filteredData })
            } else if ((colorFilter === "Any") && (brandFilter !== "Any")) {
                console.log('Filter Color');
                for (i = 0; i < data.length; i++) {
                    if (data[i].make === brandFilter) {
                        filteredData.push(data[i])
                        console.log(filteredData);
                    }
                }
                filterElem.innerHTML = filterTemplate({ item: filteredData })
            } else {
                console.log('Filter Both');
                for (i = 0; i < data.length; i++) {
                    if ((data[i].make === brandFilter) && (data[i].color === colorFilter)) {
                        filteredData.push(data[i])
                        console.log(filteredData);
                    }
                }
                filterElem.innerHTML = filterTemplate({ item: filteredData })
            }
        })
})