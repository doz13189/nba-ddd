import { MapAccessHandler } from '@/utils/mapAccessHandler'
import {
  firestoreProductionConfig,
  firestoreService
} from '@/domain/services/firestoreService'


class quizTypeValueObject extends MapAccessHandler {
  // 責務 : クイズタイプの属性値を持つ。

  private _quizTypeMap = new Map<string, string>()

  constructor() {
    super()
    this.setQuizType()
  }

  setQuizType(): void {
    this._quizTypeMap.set('team', 'このチームはどこ？')
    this._quizTypeMap.set('player', 'この画像の人はだれ？')
  }

  getQuizType(key: string): string {
    const getResult = this.getMapAccessHandler(this._quizTypeMap, key)
    return getResult
  }

}


class SelectQuizTypeValueObject extends quizTypeValueObject {
  private _quizId: string
  private _selectedQuizType: string

  
  constructor(quizId: string, selectedQuizType: string) {
    super()

    this._quizId = quizId
    this._selectedQuizType = selectedQuizType
  }

  checkQuizType(): boolean {
    // 初期値だった場合
    if (this._selectedQuizType === '') { return false }

    const getResult = this.getQuizType(this._selectedQuizType)

    // 正しい値が設定されている場合
    if (getResult) { return true }

    // 不正な値が設定されている場合
    return false
  }

  writeQuizType(): void {
    if (!this.checkQuizType()) return

    const selectQuizTypeRepository = new firestoreService(firestoreProductionConfig)
    selectQuizTypeRepository.setDocument('quiz', this._quizId, { selectedQuizType: this._selectedQuizType })

  }

}



export {
  quizTypeValueObject,
  SelectQuizTypeValueObject
}