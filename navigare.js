const $father = document.querySelector("ul").parentNode;
console.log($father);

const $secondChild = document.querySelector("ul").children[1];
console.log($secondChild.innerText);

const $thirdBrother= $secondChild.nextElementSibling.innerText;

console.log($thirdBrother);

console.log($secondChild.previousElementSibling.innerText);