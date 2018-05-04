class Carousel {
  constructor(config) {
    this.list = document.getElementById("js-carousel-list");
    this.rightButton = document.getElementById("js-carousel-right-button");
    this.leftButton = document.getElementById("js-carousel-left-button");
    this.items = document.querySelectorAll(".js-carousel-item");
    this.initItemLength = this.items.length;
    this.firstItem = this.items.item(0);
    this.itemWidth = this.firstItem.getBoundingClientRect().width;
    this.config = config || {};
    this.count = 1;
    this.allItems = {};
    this.allItemsLength = 0;
    this.isAnimating = false;
  }

  // 時間で進む

  // 右ボタンクリックで進む
  rightButtonClick() {
    if (this.isAnimating) return;
    this.count += 1;
    this.animteSlide("right");
  }

  // 左ボタンクリックで戻る
  leftButtonClick() {
    if (this.isAnimating) return;
    this.count -= 1;
    this.animteSlide("left");
  }

  /**
   *
   * @param {String} direction - 進行方向
   * @param {Number} element - 何番目のアイテムを表示するか
   */
  animteSlide(direction) {
    const x = this.itemWidth * this.count;
    const isRight = direction === "right";
    const activeElement = this.allItems.item(
      isRight ? this.count - 1 : this.count + 1
    );
    activeElement.classList.remove("st-active");

    let setActiveClass = () => {
      this.allItems.item(this.count).classList.add("st-active");
      console.log(this.count);
      // const nextActiveElement = isRight
      //   ? activeElement.nextElementSibling
      //   : activeElement.previousElementSibling;
      // nextActiveElement.classList.add("st-active");
      // console.log(nextActiveElement);
      this.list.removeEventListener("transitionend", setActiveClass);
    };

    // カウントが初期リストアイテムの最大値を超えたら
    let overMax = () => {
      if (this.count > this.initItemLength) {
        this.count = 1;
        this.list.style.transition = "none";
        this.list.style.transition = "";
        this.list.removeEventListener("transitionend", overMax);
      }
    };

    // カウントが初期リストアイテム最小値を下回ったら
    let underMin = () => {
      if (this.count < 1) {
        this.count = this.initItemLength;
        this.list.style.transition = "none";
        this.list.style.transition = "";
        this.list.removeEventListener("transitionend", underMin);
      }
    };

    overMax = overMax.bind(this);
    underMin = underMin.bind(this);
    setActiveClass = setActiveClass.bind(this);

    this.list.addEventListener("transitionend", overMax);
    this.list.addEventListener("transitionend", underMin);
    this.list.addEventListener("transitionend", setActiveClass);

    this.setPositionX(x);
  }

  setPositionX(x) {
    this.list.style.transform = `translate3d(-${x}px, 0, 0)`;
  }

  // ループ用の複製を作る
  async addClone() {
    const { items } = this;
    const firstElement = items.item(0).cloneNode(true);
    const lastElement = items.item(items.length - 1).cloneNode(true);
    const { firstItem } = this;

    this.list.appendChild(firstElement);
    this.list.insertBefore(lastElement, firstItem);
    this.allItems = this.list.querySelectorAll(".js-carousel-item");
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
