const dogPhotos = [
  {
    id: 1,
    category: 'cute',
    img: 'images/cute-pug.jpg',
  },
  {
    id: 2,
    category: 'sleeping',
    img: 'images/sleeping-dog (4).jpg',
  },
  {
    id: 3,
    category: 'adventurous',
    img: 'images/adventurous-dog.jpg',
  },
  {
    id: 4,
    category: 'casanova',
    img: 'images/casanova-dog (2).jpg',
  },
  {
    id: 5,
    category: 'casanova',
    img: 'images/casanova-dog (3).jpg',
  },
  {
    id: 6,
    category: 'casanova',
    img: 'images/casanova-dog.jpg',
  },
  {
    id: 7,
    category: 'adventurous',
    img: 'images/adventurous-dog (2).jpg',
  },
  {
    id: 8,
    category: 'cute',
    img: 'images/cute-dog.jpg',
  },

  {
    id: 9,
    category: 'cool',
    img: 'images/cool-dog.jpg',
  },
  {
    id: 10,
    category: 'cool',
    img: 'images/cool-dog (2).jpg',
  },
  {
    id: 11,
    category: 'cool',
    img: 'images/cool-dog (3).jpg',
  },
  {
    id: 12,
    category: 'cool',
    img: 'images/cool-dog (4).jpg',
  },
  {
    id: 13,
    category: 'playful',
    img: 'images/playful-dog.jpg',
  },
  {
    id: 14,
    category: 'playful',
    img: 'images/playful-dog (2).jpg',
  },
  {
    id: 15,
    category: 'playful',
    img: 'images/playful-dog (3).jpg',
  },
  {
    id: 16,
    category: 'quiet',
    img: 'images/quiet-dog.jpg',
  },
  {
    id: 17,
    category: 'quiet',
    img: 'images/quiet-dog (2).jpg',
  },
  {
    id: 18,
    category: 'sleeping',
    img: 'images/sleeping-dog.jpg',
  },
  {
    id: 19,
    category: 'sleeping',
    img: 'images/sleeping-dog (2).jpg',
  },
  {
    id: 20,
    category: 'sleeping',
    img: 'images/sleeping-dog (3).jpg',
  },
]

const imgContainer = document.querySelector('.img-container')
const btnContainer = document.querySelector('.btn-container')

//load items when the page loads

window.addEventListener('DOMContentLoaded', function () {
  renderPhotos(dogPhotos)
  displayFilterBtns()
})

//render items dynamically

function renderPhotos(photos) {
  let renderPhotos = photos.map(function (item) {
    return `<div class="grid-img">
              <img src='${item.img}' alt="a ${item.category} dog" />
            </div>`
  })
  renderPhotos = renderPhotos.join('')
  imgContainer.innerHTML = renderPhotos
}

function displayFilterBtns() {
  //create filter btns categories array
  const categories = dogPhotos.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      return values
    },
    ['all']
  )
  //render btns categories to the DOM
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="btn filter-btn" type="button" data-id=${category}>${category}</button>`
    })
    .join('')
  btnContainer.innerHTML = categoryBtns
  //listen for clicks on each button and filter
  const filterBtns = document.querySelectorAll('.filter-btn')
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id
      const itemCategory = dogPhotos.filter(function (item) {
        if (item.category === category) {
          return item
        }
      })
      if (category === 'all') {
        renderPhotos(dogPhotos)
      } else {
        renderPhotos(itemCategory)
      }
    })
  })
}
