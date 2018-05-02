class Carousel {
  constructor(config) {
    this.list = document.getElementById("js-carousel-list");
    this.prevButton = document.getElementById("js-carousel-right-button");
    this.leftButton = document.getElementById("js-carousel-left-button");
    this.items = document.querySelectorAll(".js-carousel-item");
    this.config = config || {};
    this.count = 0;
    this.init();
  }

  // 時間で進む

  // 右ボタンクリックで進む
  prevButtonClick() {
    this.count -= 1;
    this.animteSlide("right");
  }

  // 左ボタンクリックで戻る

  /**
   * itme to slide
   * @param {String} direction - 進行方向
   * @param {Number} element - 何番目のアイテムを表示するか
   */
  // animteSlide(direction, element) {
  // const activeElement = "hoge";
  // const nextElement = "foo";
  // 最後だったら最初に戻る
  // 最初だったら最後に進む
  // }

  // ループ用の複製を作る
  addClone() {
    const fragment = document.createDocumentFragment();
    const { items } = this;
    Object.keys(items).forEach(key => {
      const clone = items[key].cloneNode(true);
      fragment.appendChild(clone);
    });
    this.list.appendChild(fragment);
  }

  start() {
    this.handleEvent();
  }

  // stop() {}

  handleEvent() {
    this.prevButton.addEventListener("click");
  }

  static setBind() {
    console.log("bind");
  }

  init() {
    // this.setBind();
    this.addClone();
  }
}

export default Carousel;
