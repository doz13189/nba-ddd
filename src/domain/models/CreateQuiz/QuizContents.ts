import { MapAccessHandler } from '@/utils/mapAccessHandler'


class PositionService extends MapAccessHandler {
  // 責務 : ポジションの属性値を持つ。

  private _positionMap = new Map<string, string>()

  constructor() {
    super()
    this.setPosition()
  }

  setPosition(): void {
    this._positionMap.set('Guards', 'ガード')
    this._positionMap.set('Forwards', 'フォワード')
    this._positionMap.set('Center', 'センター')
  }

  getPosition(key: string): string {
    const getResult = this.getMapAccessHandler(this._positionMap, key)
    return getResult
  }

}


class HeightService {
  // 責務 : 身長の属性値を持つ。

  // マヌート・ボルが NBA の歴史上一番高身長
  private _maxHeight: number = 231
  // マグジー・ボーグスが NBA の歴史上一番低身長
  private _minHeight: number = 160

  constructor() {
  }

  get maxHeight(): number {
    return this._maxHeight
  }

  get minHeight(): number {
    return this._minHeight
  }

}

class HeightValueObject extends HeightService {
  private _height: number
  constructor(height: number) {
    super()

    this._height = height

  }

  checkHeight(): boolean {

    if (this._height > this.maxHeight) {
      // throw new Error('不正な身長が入力されました')
      return false
    }
    if (this._height < this.minHeight) {
      // throw new Error('不正な身長が入力されました')
      return false
    }

    return true
  }

  get height() {
    return this._height
  }

}

class OrderService {
  // 責務 : クイズ番号の範囲を保持
  private _orderRange: Array<string> = ['one', 'two', 'three', 'four', 'five']

  constructor() {
  }

  get orderRange(): Array<string> {
    return this._orderRange
  }

}


class OrderValueObject extends OrderService {
  // 責務 : クイズ番号の値オブジェクト
  private _order: string

  constructor(order: string) {
    super()
    
    this._order = order
  }

  checkOrder(): boolean {
    if (!(this.orderRange.includes(this._order))) {
      throw new Error('不正なクイズ番号が選択されました')
    }

    return true
  }

  get order(): string {
    return this._order
  }

}

class PositionValueObject extends PositionService {
  // 責務 : ポジションの値オブジェクト
  private _position: string

  constructor(position: string) {
    super()

    this._position = position

  }

  checkPosition(): boolean {
    // 初期値だった場合
    if (this._position === '') { return false }

    const getResult = this.getPosition(this._position)
    if (getResult) { return true }
    return false

  }

  get position() {
    return this._position
  }

}


class NameValueObject {
  // 責務 : プレイヤー名の値オブジェクト

  private _name: string

  constructor(name: string) {

    this._name = name

  }

  checkName(): boolean {
    if (this._name === '') { return false }
    return true
  }

  get name() {
    return this._name
  }
}


interface QuizContentsInterface {
  position: string | null,
  height: number | null,
  name: string | null
}

class CreateQuizContentsEntity extends MapAccessHandler {

  private _quizContents = new Map<string, QuizContentsInterface>()

  constructor() {
    super()
    this.initialQuizContents()
  }

  initialQuizContents(): void {
    this._quizContents.set('one', { position: null, height: null, name: null })
    this._quizContents.set('two', { position: null, height: null, name: null })
    this._quizContents.set('three', { position: null, height: null, name: null })
    this._quizContents.set('four', { position: null, height: null, name: null })
    this._quizContents.set('five', { position: null, height: null, name: null })
  }

  updateQuizContents(
    order: OrderValueObject,
    position: PositionValueObject,
    height: HeightValueObject,
    name: NameValueObject,
  ): void {
    this.setMapAccessHandler(this._quizContents, order.order, { position: position.position, height: height.height, name: name.name })
  }

  checkAllQuizContents() {
    for (const [key, value] of this._quizContents) {
      if (!value.height) { return false }
      if (!value.position) { return false }
      if (!value.name) { return false }
    }
    return true
  }

}


export {
  PositionService,
  HeightService,
  OrderValueObject,
  HeightValueObject,
  PositionValueObject,
  NameValueObject,
  CreateQuizContentsEntity
}