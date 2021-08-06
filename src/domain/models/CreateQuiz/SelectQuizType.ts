class SelectQuizTypeValueObject {
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

export {
  SelectQuizTypeValueObject
}