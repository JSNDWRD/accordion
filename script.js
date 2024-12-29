function showAnswer(id) {
    const arrAnswer = document.getElementsByClassName("answer");
    x = arrAnswer[Number(id) - 1];
    if (x.classList.contains("show")) {
        x.classList.remove("show");
    } else {
        x.classList.add("show");
    }
}