"use strict";

class Carousel {
  constructor(config) {
    this._list = document.getElementById("js-carousel-list");
    this._prevButton = document.getElementById("js-carousel-right-button");
    this._leftButton = document.getElementById("js-carousel-left-button");
    this._items = document.querySelectorAll(".js-carousel-item");
    this._config = config || {};
    this._count = 0;
    this._init();
  }

  // 時間で進む

  // 右ボタンクリックで進む
  _prevButtonClick() {
    this._count -= 1;
    this._animteSlide("right");
  }

  // 左ボタンクリックで戻る

  /**
   * itme to slide
   * @param {String} direction - 進行方向
   * @param {Number} element - 何番目のアイテムを表示するか
   */
  _animteSlide(direction, element) {
    const activeElement = "hoge";
    const nextElement = "foo";
    // 最後だったら最初に戻る
    // 最初だったら最後に進む
  }

  start() {
    this._handleEvent();
  }

  stop() {}

  _handleEvent() {
    this._prevButton.addEventListener("click");
  }

  _setBind() {}

  _init() {
    this._setBind();
  }
}

export default Carousel;
