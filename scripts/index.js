// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content; 

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// // // @todo: Функция создания карточки
const createCard =  function (cardData, delButton) {
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = cardData.name;

  const image = cardElement.querySelector('.card__image');
  image.src = cardData.link;
  image.alt = cardData.name;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', () => delButton(cardElement));

  return cardElement;
}

// @todo: Функция удаления карточки
function delButton(cardElement) {
    cardElement.remove();
  }

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, delButton);
  placesList.append(cardElement);
});