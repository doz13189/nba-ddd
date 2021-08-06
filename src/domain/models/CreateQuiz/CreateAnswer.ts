
class SelectAnswerTypeValueObject {

  private _selectedAnswerType: string
  private _answerType: Array<string> = [
    'free',
    'team'
  ]

  constructor(selectedAnswerType: string) {
    this._selectedAnswerType = selectedAnswerType
  }

  checkAnswerType(): boolean {
    if (this._selectedAnswerType === '') {
      return false
    }

    if (!(this._answerType.includes(this._selectedAnswerType))) {
      throw new Error('不正な回答タイプが選択されました')
    }

    return true
  }

  get selectedAnswerType(): string {
    return this._selectedAnswerType
  }

}


class AnswerTypeControlEntity {
  private _answerTypeControl = new Map<string, boolean>()

  constructor() {
    this.setAllAnswerTypeControl()
  }

  setAllAnswerTypeControl(): void {
    this._answerTypeControl.set('free', false)
    this._answerTypeControl.set('team', false)
  }

  setAnswerTypeControl(processType: string): void {
    for (const [key, value] of this._answerTypeControl) {
      this._answerTypeControl.set(key, false)
    }

    this._answerTypeControl.set(processType, true)

  }

  findAnswerType(selectedAnswerType: string): boolean {
    const getResult = this._answerTypeControl.get(selectedAnswerType)

    if (getResult) { return true }
    return false
  }

  exportAnswerTypeControl(): { [index: string]: boolean } {
    // new Map() はリアクティブオブジェクトとして扱えないためオブジェクトに変換
    return Object.fromEntries(this._answerTypeControl)
  }

  updateActiveProcess(updateTargetObject: { [index: string]: boolean }): void {
    // 値オブジェクトの変更をオブジェクトに反映
    for (const [key, value] of this._answerTypeControl) {
      updateTargetObject[key] = value
    }
  }

  get answerTypeControl () {
    return this._answerTypeControl
  }
}

class TeamValueObject {

  private _team: string

  constructor(team: string) {
    this._team = team
  }

  checkTeam(): boolean {
    if (this._team === '') {
      return false
    }
    return true
  }  

}

class TeamService {

  private _team : { [index: number]: string } =  {
    1 : "Atlanta Hawks",
    2 : "Boston Celtics",
    3 : "Brooklyn Nets",
    4 : "Charlotte Hornets",
    5 : "Chicago Bulls",
    6 : "Cleveland Cavaliers",
    7 : "Dallas Mavericks",
    8 : "Denver Nuggets",
    9 : "Detroit Pistons",
    10 : "Golden State Warriors",
    11 : "Houston Rockets",
    12 : "Indiana Pacers",
    13 : "LA Clippers",
    14 : "Los Angeles Lakers",
    15 : "Memphis Grizzlies",
    16 : "Miami Heat",
    17 : "Milwaukee Bucks",
    18 : "Minnesota Timberwolves",
    19 : "New Orleans Pelicans",
    20 : "New York Knicks",
    21 : "Oklahoma City Thunder",
    22 : "Orlando Magic",
    23 : "Philadelphia 76ers",
    24 : "Phoenix Suns",
    25 : "Portland Trail Blazers",
    26 : "Sacramento Kings",
    27 : "San Antonio Spurs",
    28 : "Toronto Raptors",
    29 : "Utah Jazz",
    30 : "Washington Wizards"
  }

  exportTeamAsArray(): Array<string> {
    return Object.values(this._team)
  }

}


class CreateAnswerEntity {

}

export {
  SelectAnswerTypeValueObject,
  AnswerTypeControlEntity,
  TeamValueObject,
  TeamService,
  CreateAnswerEntity
}