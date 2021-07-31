// interface QuizInterface {
//   selectQuiz(): void
//   createQuizContents(): void
//   selectAnswerType(): void
//   createAnswer(): void
//   decideTitle(): void
//   saveQuiz(): void
//   goNextStep(): void // 次に進むボタン
// }

// interface SelectQuizValueObjectInterface {
//   checkQuizType(quizType: string): boolean
// }


class QuizValueObject {
  selectQuizType(): void { }
  createQuizContents(): void { }
  selectAnswerType(): void { }
  createAnswer(): void { }
  decideTitle(): void { }
  saveQuiz(): void { }
  manageStep(): void { }
}


class SelectQuizValueObject {
  private _selectedQuizType: string
  private _quizTypeMap = new Map<string, string>()
  
  constructor(selectedQuizType: string) {
    this.setQuizType()
    this._selectedQuizType = selectedQuizType
  }

  setQuizType(): void {
    this._quizTypeMap.set('1', 'このチームはどこ？')
    this._quizTypeMap.set('2', 'この画像の人はだれ？')
  }

  checkQuizType(): boolean {
    const getResult = this._quizTypeMap.get(this._selectedQuizType)

    if (getResult) { return true }
    return false
  }

}


class QuizCreatingProcessManagementEntity {
  // private _quizCreatingProcessMap = new Map<string, boolean>()
  private _quizActiveProcess =  new Map<string, boolean>()
  private _quizProcessOrder =  new Map<string, number>()
  
  constructor() {
    this.setInitialQuizActiveProcess()
    this.setInitialQuizProcessOrder()
  }

  setInitialQuizActiveProcess(): void {
    this._quizActiveProcess.set('selectQuizType', false)
    this._quizActiveProcess.set('createQuizContents', false)
    this._quizActiveProcess.set('selectAnswerType', false)
    this._quizActiveProcess.set('createAnswer', false)
    this._quizActiveProcess.set('decideTitle', false)
    this._quizActiveProcess.set('saveQuiz', false)
  }

  setInitialQuizProcessOrder(): void {
    this._quizProcessOrder.set('selectQuizType', 1)
    this._quizProcessOrder.set('createQuizContents', 2)
    this._quizProcessOrder.set('selectAnswerType', 3)
    this._quizProcessOrder.set('createAnswer', 4)
    this._quizProcessOrder.set('decideTitle', 5)
    this._quizProcessOrder.set('saveQuiz', 6)
  }

  setQuizActiveProcess(): void {
    this._quizActiveProcess.set('selectQuizType', false)
  }

  getQuizActiveProcess(quizCreatingProcess: string): boolean {
    const getResult = this._quizActiveProcess.get(quizCreatingProcess)

    if (getResult) { return true }
    return false
  }

  // getActiveScreen(): string {
  //   return ''
  // }
}

export {
  SelectQuizValueObject,
  QuizCreatingProcessManagementEntity
}