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


class ProcessManagementEntity {
  private _activeProcess =  new Map<string, boolean>()
  private _processComplete =  new Map<string, boolean>()
  private _processOrder =  new Map<string, number>()
  
  constructor() {
    this.initialSetActiveProcess()
    this.initialSetProcessComplete()
    this.initialSetProcessOrder()
  }

  initialSetActiveProcess(): void {
    this._activeProcess.set('selectQuizType', true)
    this._activeProcess.set('createQuizContents', false)
    this._activeProcess.set('selectAnswerType', false)
    this._activeProcess.set('createAnswer', false)
    this._activeProcess.set('decideTitle', false)
    this._activeProcess.set('saveQuiz', false)
  }

  initialSetProcessComplete(): void {
    this._processComplete.set('selectQuizType', false)
    this._processComplete.set('createQuizContents', false)
    this._processComplete.set('selectAnswerType', false)
    this._processComplete.set('createAnswer', false)
    this._processComplete.set('decideTitle', false)
    this._processComplete.set('saveQuiz', false)
  }

  initialSetProcessOrder(): void {
    this._processOrder.set('selectQuizType', 1)
    this._processOrder.set('createQuizContents', 2)
    this._processOrder.set('selectAnswerType', 3)
    this._processOrder.set('createAnswer', 4)
    this._processOrder.set('decideTitle', 5)
    this._processOrder.set('saveQuiz', 6)
  }

  setActiveProcess(processType: string, processStatus: boolean): void {
    this._activeProcess.set(processType, processStatus)
  }

  getActiveProcess(processType: string): boolean {
    const getResult = this._activeProcess.get(processType)

    if (getResult) { return true }
    return false
  }

  setNextActiveProcess(processType: string): void {
    const getResult: number | undefined = this._processOrder.get(processType)
    if (!getResult) { throw new Error('プロセスタイプが見つかりません。')}
    // Map へのアクセスのエラーハンドラを持った関数を用意するべき
    // この関数だけエラーハンドラを用意しているのは統一性に欠ける

    const nextProcessOrder: number = getResult + 1

    for (const [key, value] of this._processOrder) {
      if (nextProcessOrder === value) {
        const nextprocessType: string = key
        this.setActiveProcess(nextprocessType, true)
      }
    }

    // throw new Error('次の工程のプロセスタイプが見つかりません。')
  }

  setProcessComplete(processType: string, processStatus: boolean): void {
    this._processComplete.set(processType, processStatus)
  }

  getProcessComplete(processType: string): boolean {
    const getResult = this._processComplete.get(processType)

    if (getResult) { return true }
    return false
  }

  exportActiveProcess(): { [index: string]: boolean } {
    return Object.fromEntries(this._activeProcess)
  }

  exportProcessComplete(): { [index: string]: boolean } {
    return Object.fromEntries(this._processComplete)
  }

  updateActiveProcess(updateTargetObject: { [index: string]: boolean }): void {
    for (const [key, value] of this._activeProcess) {
      updateTargetObject[key] = value
    }
  }

  updateProcessComplete(updateTargetObject: { [index: string]: boolean }): void {
    for (const [key, value] of this._processComplete) {
      updateTargetObject[key] = value
    }
  }


}

export {
  SelectQuizValueObject,
  ProcessManagementEntity
}