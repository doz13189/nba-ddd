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
  private _creatingActiveProcess =  new Map<string, boolean>()
  private _creatingProcessComplete =  new Map<string, boolean>()
  private _quizProcessOrder =  new Map<string, number>()
  
  constructor() {
    this.initialSetCreatingActiveProcess()
    this.initialSetCreatingProcessComplete()
    this.initialSetQuizProcessOrder()
  }

  initialSetCreatingActiveProcess(): void {
    this._creatingActiveProcess.set('selectQuizType', false)
    this._creatingActiveProcess.set('createQuizContents', false)
    this._creatingActiveProcess.set('selectAnswerType', false)
    this._creatingActiveProcess.set('createAnswer', false)
    this._creatingActiveProcess.set('decideTitle', false)
    this._creatingActiveProcess.set('saveQuiz', false)
  }

  initialSetCreatingProcessComplete(): void {
    this._creatingProcessComplete.set('selectQuizType', true)
    this._creatingProcessComplete.set('createQuizContents', false)
    this._creatingProcessComplete.set('selectAnswerType', false)
    this._creatingProcessComplete.set('createAnswer', false)
    this._creatingProcessComplete.set('decideTitle', false)
    this._creatingProcessComplete.set('saveQuiz', false)
  }

  initialSetQuizProcessOrder(): void {
    this._quizProcessOrder.set('selectQuizType', 1)
    this._quizProcessOrder.set('createQuizContents', 2)
    this._quizProcessOrder.set('selectAnswerType', 3)
    this._quizProcessOrder.set('createAnswer', 4)
    this._quizProcessOrder.set('decideTitle', 5)
    this._quizProcessOrder.set('saveQuiz', 6)
  }

  setCreatingActiveProcess(quizCreatingProcessType: string, quizCreatingProcessStatus: boolean): void {
    this._creatingActiveProcess.set(quizCreatingProcessType, quizCreatingProcessStatus)
  }

  getCreatingActiveProcess(quizCreatingProcess: string): boolean {
    const getResult = this._creatingActiveProcess.get(quizCreatingProcess)

    if (getResult) { return true }
    return false
  }

  setCreatingProcessComplete(quizCreatingProcessType: string, quizCreatingProcessStatus: boolean): void {
    this._creatingProcessComplete.set(quizCreatingProcessType, quizCreatingProcessStatus)
  }

  getCreatingProcessComplete(quizCreatingProcess: string): boolean {
    const getResult = this._creatingProcessComplete.get(quizCreatingProcess)

    if (getResult) { return true }
    return false
  }

}

export {
  SelectQuizValueObject,
  QuizCreatingProcessManagementEntity
}