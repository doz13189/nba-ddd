
class QuizId {

  private _quizId: string

  constructor() {

    this._quizId = this.generateQuizId()

  }

  generateQuizId(): string {

    const quizId: string = 'aaaa'
    return quizId
    
  }

  get quizId(): string {
    return this._quizId
  }

}


// class QuizObjectValue {
//   private 
// }

export {
  QuizId
}