// -- card

const cardButtonAnswer = document.querySelector(
  '[data-js="card-button-answer"]'
);
const cardAnswer = document.querySelector('[data-js="card-answer"]');

let isAnswerShown = false;

cardButtonAnswer.addEventListener('click', () => {
  isAnswerShown = !isAnswerShown;

  if (isAnswerShown) {
    cardButtonAnswer.innerText = 'Hide answer';
    cardAnswer.classList.add('card__answer--active');
  } else {
    cardButtonAnswer.innerText = 'Show answer';
    cardAnswer.classList.remove('card__answer--active');
  }
});

// -- bookmark

const bookmark = document.querySelector('[data-js="bookmark"]');

let isBookmarked = false;

bookmark.addEventListener('click', () => {
  isBookmarked = !isBookmarked;

  if (isBookmarked) {
    bookmark.classList.add('bookmark--active');
  } else {
    bookmark.classList.remove('bookmark--active');
  }
});
