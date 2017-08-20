'use strict'

class Carousel {
  constructor(config) {
    this._list = document.getElementById('js-carousel-list');
    this._rightButton = document.getElementById('js-carousel-right-button')
    this._leftButton = document.getElementById('js-carousel-left-button')
    this._items = document.querySelectorAll('.js-carousel-item')
    this._config = config || {

    }
    this._count = 0
    this._init()
  }

  // 時間で進む

  // 右ボタンクリックで進む

  // 左ボタンクリックで戻る

  _slide(direction, element) {
    const activeElement;
    const nextElement;
    // 最後だったら最初に戻る
    // 最初だったら最後に進む

  }

  start() {

  }

  stop() {

  }

  _handleEvent() {

  }

  _setBind() {

  }

  _init() {
  }
}

export default Carousel
