export default function Header() {
  const title = document.querySelector('[data-js="title"]');

  title.addEventListener('click', () => {
    console.log('Hello Quiz App');
  });
}
