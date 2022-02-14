const quotes = document.querySelectorAll(".quote-container");

function setPrevious(item) {
  item.classList.add("previous-item");
}

function setCurrent(item) {
  item.classList.add("current-item");
}

function setNext(item) {
  item.classList.add("next-item");
}

function removePrevious(item) {
  item.classList.remove("previous-item");
}

function removeCurrent(item) {
  item.classList.remove("current-item");
}

function removeNext(item) {
  item.classList.remove("next-item");
}

function moveCarousel(items) {
  let currentItem = 0;
  const itemQuantity = items.length;

  setInterval(() => {
    currentItem++;
    if (currentItem == itemQuantity) {
      currentItem = 0;
    }
    items.forEach((item, index) => {
      if (
        index == currentItem - 1 ||
        (currentItem == 0 && index == itemQuantity - 1)
      ) {
        removeCurrent(item);
        setPrevious(item);
        return;
      }
      if (index == currentItem) {
        removeNext(item);
        setCurrent(item);
        return;
      }
      if (
        index == currentItem + 1 ||
        (currentItem == itemQuantity - 1 && index == 0)
      ) {
        removePrevious(item);
        setNext(item);
      }
    });
  }, 5000);
}

moveCarousel(quotes);
