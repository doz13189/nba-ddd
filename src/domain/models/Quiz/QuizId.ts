import { provide, inject } from 'vue';


class QuizIdObjectValue {

  private _quizId: string

  constructor(quizId: string | null) {

    if (quizId) {
      this._quizId = quizId
    }
    this._quizId = this.generateQuizId()

  }

  generateQuizId(): string {

    const quizId: string = 'aaaaaaaaaaaaaaa'
    return quizId
    
  }

  callProvide(): void {
    provide('quizId', this._quizId)
  }


  get quizId(): string {
    return this._quizId
  }

}

class QuizIdService {

  callInject(): QuizIdObjectValue {
    const quizId: string | undefined = inject('quizId')
    if (quizId === undefined) { throw new Error('クイズIDが設定されていません。') }

    return new QuizIdObjectValue(quizId)

  }

}


export {
  QuizIdObjectValue,
  QuizIdService
}