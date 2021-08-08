class MapAccessHandler {
  // 責務 : Map の getter & setter。エラーハンドラは共通で使用するため実装。

  getMapAccessHandler(targetMap: Map<any, any>, key: any): any {
    const getResult = targetMap.get(key)
    if (getResult !== undefined) {
      return getResult
    }

    console.error(targetMap)
    console.error(key)

    throw new Error(`${targetMap} に ${key} は存在しません。`)
  }

  setMapAccessHandler(targetMap: Map<any, any>, key: any, value: any): void {
    // targetMap に key が存在していることを確認した上で、set 実行
    this.getMapAccessHandler(targetMap, key)
    targetMap.set(key, value)
  }
}

export {
  MapAccessHandler
}
