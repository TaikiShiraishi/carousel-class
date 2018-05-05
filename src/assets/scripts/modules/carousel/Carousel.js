import CarouselAnimate from "./CarouselAnimate";

class Carousel {
  constructor() {
    this.list = document.getElementById("js-carousel-list");
    this.rightButton = document.getElementById("js-carousel-right-button");
    this.leftButton = document.getElementById("js-carousel-left-button");
    this.items = document.querySelectorAll(".js-carousel-item");
    this.initItemLength = this.items.length;
    this.firstItem = this.items.item(0);
    this.itemWidth = this.firstItem.getBoundingClientRect().width;
    this.allItems = {};
    this.allItemsLength = 0;
    this.isAnimating = false;
    this.carouselAnimate = new CarouselAnimate(this.list);
    this.counter = this.carouselAnimate.counter;
  }

  // 時間で進む

  // 右ボタンクリックで進む
  rightButtonClick() {
    if (this.isAnimating) return;
    const count = this.carouselAnimate.count + 1;
    this.animteSlide(count);
  }

  // 左ボタンクリックで戻る
  leftButtonClick() {
    if (this.isAnimating) return;
    const count = this.carouselAnimate.count - 1;
    this.animteSlide(count);
  }

  /**
   *
   * @param {Number} element - 何番目のアイテムを表示するか
   */
  animteSlide(count) {
    this.isAnimating = true;
    const x = this.itemWidth * count;

    this.counter(count, x, true);

    // カウントが初期リストアイテムの最大値を超えたら
    let overMax = () => {
      if (count > this.initItemLength) {
        const minCount = 1;
        const loopX = this.itemWidth;
        this.counter(minCount, loopX, false);
      }
      this.list.removeEventListener("transitionend", overMax);
    };

    // カウントが初期リストアイテム最小値を下回ったら
    let underMin = () => {
      if (count < 1) {
        const maxCount = this.initItemLength;
        const loopX = this.itemWidth * (this.allItemsLength - 1);
        this.counter(maxCount, loopX, false);
      }
      this.list.removeEventListener("transitionend", underMin);
    };

    let offFlag = () => {
      this.isAnimating = false;
    };

    overMax = overMax.bind(this);
    underMin = underMin.bind(this);
    offFlag = offFlag.bind(this);

    this.list.addEventListener("transitionend", overMax);
    this.list.addEventListener("transitionend", underMin);
    this.list.addEventListener("transitionend", offFlag);
  }

  // ループ用の複製を作る
  addClone() {
    const { items } = this;
    const firstElement = items.item(0).cloneNode(true);
    const lastElement = items.item(items.length - 1).cloneNode(true);
    const { firstItem } = this;

    this.list.appendChild(firstElement);
    this.list.insertBefore(lastElement, firstItem);
    this.allItems = this.list.querySelectorAll(".js-carousel-item");
    this.carouselAnimate.addAllItems(this.allItems);
    this.allItemsLength = this.allItems.length - 1;
  }

  setInitPosition() {
    const listLeftPosition = this.list.getBoundingClientRect().left;
    const firstItemLeftPosition = this.firstItem.getBoundingClientRect().left;
    const initPosition = firstItemLeftPosition - listLeftPosition;
    this.list.setAttribute(
      "style",
      `transform: translate3d(-${initPosition}px, 0, 0`
    );
    this.firstItem.classList.add("st-active");
    this.firstItem.setAttribute("tabindex", "0");
    this.firstItem.setAttribute("aria-hidden", "false");
  }

  start() {
    this.handleEvent();
  }

  // stop() {}

  handleEvent() {
    this.rightButton.addEventListener("click", this.rightButtonClick);
    this.leftButton.addEventListener("click", this.leftButtonClick);
  }

  setBind() {
    this.rightButtonClick = this.rightButtonClick.bind(this);
    this.leftButtonClick = this.leftButtonClick.bind(this);
  }

  init() {
    this.setBind();
    this.handleEvent();
    this.addClone();
    this.setInitPosition();
  }
}

export default Carousel;
