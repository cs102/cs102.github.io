// const userWord = document.getElementById('word');
// console.log(userWord);

// const wordPrefix = document.getElementsByClassName("word_prefix_1");
// console.log(wordPrefix);
// console.dir(document);
// console.log(document.all);

let wordPrefix = document.getElementsByClassName('.morphene');
console.log(wordPrefix);

// Colors for each morpheme
const colorMap = {
    pre: "#ffcc80",  // orange
    root:   "#40bfd0ff",  // teal
    suffix:   "#ce93d8",  // purple
    suffix_2:   "#a5d6a7"   // green
};

// Apply colors
document.querySelectorAll(".morpheme").forEach(el => {
    el.style.backgroundColor = colorMap[el.dataset.color];
});

// Enable mobile-friendly drag sorting
Sortable.create(container, {
    animation: 150,
    ghostClass: "drag-ghost",
    chosenClass: "drag-chosen",
});
