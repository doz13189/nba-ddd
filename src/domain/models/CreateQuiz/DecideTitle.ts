class DecideTitleValueObject {

  private _title: string

  constructor(title: string) {
    this._title = title
  }

  checkTitle(): boolean {
    if (this._title === '') { return false }
    return true
  }
}

export {
  DecideTitleValueObject
}