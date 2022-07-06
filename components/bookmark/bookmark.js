export default function Bookmark() {
  const bookmark = document.querySelector('[data-js="bookmark"]');

  let isBookmarked = false;

  bookmark.addEventListener('click', () => {
    isBookmarked = !isBookmarked;

    if (isBookmarked) {
      bookmark.classList.remove('bookmark--active');
    } else {
      bookmark.classList.add('bookmark--active');
    }
  });
}
