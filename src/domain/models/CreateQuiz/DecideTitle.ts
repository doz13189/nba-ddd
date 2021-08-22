import {
  QuizIdObjectValue
} from '@/domain/models/Quiz/QuizId'

import {
  firestoreProductionConfig,
  firestoreService
} from '@/domain/services/firestoreService'


class DecideTitleValueObject {

  private _quizId: QuizIdObjectValue
  private _title: string

  constructor(quizId: QuizIdObjectValue, title: string) {
    this._quizId = quizId
    this._title = title
  }

  checkTitle(): boolean {
    if (this._title === '') { return false }
    return true
  }

  writeAnswer(): void {
    if (!this.checkTitle()) return

    const selectQuizContentsRepository = new firestoreService(firestoreProductionConfig)
    selectQuizContentsRepository.setDocument('quiz', this._quizId.quizId, { title: this._title })
  }

}

export {
  DecideTitleValueObject
}