class CarouselAnimate {
  constructor(list) {
    this.list = list;
    this.count = 0;
    this.tempCount = 0;
    this.setBind();
  }

  addAllItems(allItems) {
    this.allItems = allItems;
  }

  counter(count, x, isAnimation) {
    if (this.count === count) return;
    this.tempCount = this.count;
    this.count = count;
    this.setPositionX(x, isAnimation);
  }

  setPositionX(x, isAnimation) {
    if (!isAnimation) this.list.style.transition = "none";
    this.removeActiveClass();
    this.list.style.transform = `translate3d(-${x}px, 0, 0)`;
    setTimeout(() => {
      this.list.style.transition = "";
    }, 4);
    this.setActiveState();
  }

  setActiveState() {
    const activeItem = this.allItems.item(this.count);
    activeItem.classList.add("st-active");
    activeItem.setAttribute("tabindex", "0");
    activeItem.setAttribute("aria-hidden", "false");
    this.tempCount = this.count;
  }

  removeActiveClass() {
    const activeItem = this.allItems.item(this.tempCount);
    activeItem.classList.remove("st-active");
    activeItem.setAttribute("tabindex", "-1");
    activeItem.setAttribute("aria-hidden", "true");
  }

  setBind() {
    this.counter = this.counter.bind(this);
  }
}

export default CarouselAnimate;
