
class QuizContentsOrderValueObject {
  private _order: number
  private _orderRange: Array<number> = [1, 2, 3, 4, 5]

  constructor(order: number) {
    this._order = order
    this.checkOrder()
  }

  checkOrder(): void {
    if (!(this._orderRange.includes(this._order))) {
      throw new Error('不正なクイズ番号が選択されました')
    }
  }

  get order(): number {
    return this._order
  }

}

class QuizContentsValueObject {
  private _position: string
  private _positions: Array<string> = [
    'Guards',
    'Forwards',
    'Center'
  ]

  private _height: number
  // マヌート・ボルが NBA の歴史上一番高身長
  private _maxHeight: number = 231
  // マグジー・ボーグスが NBA の歴史上一番低身長
  private _minHeight: number = 160

  private _name: string

  constructor(position: string, height: number, name: string) {
    this._position = position
    this.checkPosition()

    this._height = height
    this.checkHeight()

    this._name = name
    // this.checkHeight()
  }

  checkPosition(): void {
    if (this._position === null) {
      return
    }

    if (!(this._positions.includes(this._position))) {
      throw new Error('不正なポジションが選択されました')
    }
  }

  checkHeight(): void {
    if (this._height === null) { return }

    if (this._height > this._maxHeight) {
      throw new Error('不正な身長が入力されました')
    }
    if (this._height < this._minHeight) {
      throw new Error('不正な身長が入力されました')
    }
  }

  get quizContents(): QuizContentsInterface {
    return {
      position: this._position,
      height: this._height,
      name: this._name,
    }
  }

  get maxHeight(): number {
    return this._maxHeight
  }

  get minHeight(): number {
    return this._minHeight
  }

}

interface QuizContentsInterface {
  position: string | null,
  height: number | null,
  name: string | null
}

class CreateQuizContentsValueObject {

  private _quizContents = new Map<number, QuizContentsInterface>()

  constructor() {
  }

  initialQuizContents(): void {
    this._quizContents.set(1, { position: null, height: null, name: null })
    this._quizContents.set(2, { position: null, height: null, name: null })
    this._quizContents.set(3, { position: null, height: null, name: null })
    this._quizContents.set(4, { position: null, height: null, name: null })
    this._quizContents.set(5, { position: null, height: null, name: null })
  }

  updateQuizContents(quizContentsOrder: QuizContentsOrderValueObject, quizContents: QuizContentsValueObject): void {
    this._quizContents.set(quizContentsOrder.order, quizContents.quizContents)
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
  QuizContentsOrderValueObject,
  QuizContentsValueObject,
  CreateQuizContentsValueObject
}