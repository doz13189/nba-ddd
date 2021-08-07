class MapAccessHandler {
  // 責務 : Map の getter & setter。エラーハンドラは共通で使用するため実装。

  getMapAccessHandler(targetMap: Map<any, any>, key: any, caller: string): any {
    const getResult = targetMap.get(key)
    if (getResult !== undefined) {
      return getResult
    }

    throw new Error(`${targetMap} に ${key} は存在しません。`)
  }

  setMapAccessHandler(targetMap: Map<any, any>, key: any, value: any): void {
    // targetMap に key が存在していることを確認した上で、set 実行
    this.getMapAccessHandler(targetMap, key, 'setMapAccessHandler')
    targetMap.set(key, value)
  }
}


class ProcessManagementEntity extends  MapAccessHandler {
  // 責務 : クイズ作成工程のステータス管理
  private _activeProcess =  new Map<string, boolean>()
  private _processComplete =  new Map<string, boolean>()
  private _processOrder =  new Map<string, number>()
  
  constructor() {
    super()

    this.initialSetActiveProcess()
    this.initialSetProcessComplete()
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

  initialSetProcessComplete(): void {
    // 責務 : クイズ作成工程のステータスの初期値
    this._processComplete.set('selectQuizType', false)
    this._processComplete.set('createQuizContents', false)
    this._processComplete.set('createAnswer', false)
    this._processComplete.set('decideTitle', false)
    this._processComplete.set('saveQuiz', false)
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

  setProcessComplete(processType: string, processStatus: boolean): void {
    // 責務 : setter
    this.setMapAccessHandler(this._processComplete, processType, processStatus)
  }


  setNextActiveProcess(processType: string): void {
    // 責務 :  クイズ作成工程で次に表示するべき画面に対応する工程のステータスの setter

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


  exportActiveProcess(): { [index: string]: boolean } {
    // new Map() はリアクティブオブジェクトとして扱えないためオブジェクトに変換
    return Object.fromEntries(this._activeProcess)
  }

  exportProcessComplete(): { [index: string]: boolean } {
    // new Map() はリアクティブオブジェクトとして扱えないためオブジェクトに変換
    return Object.fromEntries(this._processComplete)
  }

  updateActiveProcess(updateTargetObject: { [index: string]: boolean }): void {
    // 値オブジェクトの変更をオブジェクトに反映
    for (const [key, value] of this._activeProcess) {
      updateTargetObject[key] = value
    }
  }

  updateProcessComplete(updateTargetObject: { [index: string]: boolean }): void {
    // 値オブジェクトの変更をオブジェクトに反映
    for (const [key, value] of this._processComplete) {
      updateTargetObject[key] = value
    }
  }

}

export {
  ProcessManagementEntity,
}