import { MapAccessHandler } from '@/utils/mapAccessHandler'


class ProcessManagementValueObject extends  MapAccessHandler {
  // 責務 : クイズ作成工程のステータス管理
  private _processComplete =  new Map<string, boolean>()
  
  constructor() {
    super()

    this.initialSetProcessComplete()
  }

  initialSetProcessComplete(): void {
    // 責務 : クイズ作成工程のステータスの初期値
    this._processComplete.set('selectQuizType', false)
    this._processComplete.set('createQuizContents', false)
    this._processComplete.set('createAnswer', false)
    this._processComplete.set('decideTitle', false)
    this._processComplete.set('saveQuiz', false)
  }

  setProcessComplete(processType: string, processStatus: boolean): void {
    // 責務 : setter
    this.setMapAccessHandler(this._processComplete, processType, processStatus)
  }

  exportProcessComplete(): { [index: string]: boolean } {
    // 責務 : new Map() はリアクティブオブジェクトとして扱えないためオブジェクトに変換
    return Object.fromEntries(this._processComplete)
  }

  updateProcessComplete(updateTargetObject: { [index: string]: boolean }): void {
    // 責務 : 値オブジェクトの変更をオブジェクトに反映
    for (const [key, value] of this._processComplete) {
      updateTargetObject[key] = value
    }
  }

}


class ProcessManagementEntity extends  MapAccessHandler {
  // 責務 : クイズ作成工程のステータス管理
  private _activeProcess =  new Map<string, boolean>()
  private _processOrder =  new Map<string, number>()
  
  constructor() {
    super()

    this.initialSetActiveProcess()
    this.initialSetProcessOrder()
  }

  initialSetActiveProcess(): void {
    // 責務 : クイズ作成工程に対応した画面の表示・非表示を管理する Map の初期値
    this._activeProcess.set('selectQuizType', true)
    this._activeProcess.set('createQuizContents', false)
    this._activeProcess.set('createAnswer', false)
    this._activeProcess.set('decideTitle', false)
    this._activeProcess.set('saveQuiz', false)
  }

  initialSetProcessOrder(): void {
    // 責務 : クイズ作成工程の順序
    this._processOrder.set('selectQuizType', 1)
    this._processOrder.set('createQuizContents', 2)
    this._processOrder.set('createAnswer', 3)
    this._processOrder.set('decideTitle', 4)
    this._processOrder.set('saveQuiz', 5)
  }

  setActiveProcess(processType: string, processStatus: boolean): void {
    // 責務 : setter
    this.setMapAccessHandler(this._activeProcess, processType, processStatus)
  }

  setNextActiveProcess(processType: string): void {
    // 責務 :  クイズ作成工程で次に表示するべき画面に対応する工程のステータスの setter

    // 現在、アクティブなクイズ作成工程の画面を false にする
    this.setActiveProcess(processType, false)

    // 次に、アクティブにするべきクイズ作成工程の画面を true にする
    const processOrder = this.getMapAccessHandler(this._processOrder, processType)
    const nextProcessOrder: number = processOrder + 1
    for (const [key, value] of this._processOrder) {
      if (nextProcessOrder === value) {
        const nextprocessType: string = key
        this.setActiveProcess(nextprocessType, true)
      }
    }

  }

  exportActiveProcess(): { [index: string]: boolean } {
    // 責務 : new Map() はリアクティブオブジェクトとして扱えないためオブジェクトに変換
    return Object.fromEntries(this._activeProcess)
  }

  updateActiveProcess(updateTargetObject: { [index: string]: boolean }): void {
    // 責務 : 値オブジェクトの変更をオブジェクトに反映
    for (const [key, value] of this._activeProcess) {
      updateTargetObject[key] = value
    }
  }

}

export {
  ProcessManagementValueObject,
  ProcessManagementEntity,
}