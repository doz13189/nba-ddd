import { MapAccessHandler } from '@/utils/mapAccessHandler'


class quizTypeValueObject extends MapAccessHandler {
  // 責務 : クイズタイプの属性値を持つ。

  private _quizTypeMap = new Map<string, string>()

  constructor() {
    super()
    this.setQuizType()
  }

  setQuizType(): void {
    this._quizTypeMap.set('team', 'このチームはどこ？')
    this._quizTypeMap.set('player', 'この画像の人はだれ？')
  }

  getQuizType(key: string): string {
    const getResult = this.getMapAccessHandler(this._quizTypeMap, key)
    return getResult
  }

}


class SelectQuizTypeValueObject extends quizTypeValueObject {
  private _quizId: string
  private _selectedQuizType: string

  
  constructor(quizId: string, selectedQuizType: string) {
    super()

    this._quizId = quizId
    this._selectedQuizType = selectedQuizType
  }

  checkQuizType(): boolean {
    // 初期値だった場合
    if (this._selectedQuizType === '') { return false }

    const getResult = this.getQuizType(this._selectedQuizType)

    // 正しい値が設定されている場合
    if (getResult) { return true }

    // 不正な値が設定されている場合
    return false
  }

}


import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: "AIzaSyArkXyqsAEcABfGP3BEyP-9YpYsdr-lVEo",
  authDomain: "nba-quiz-23.firebaseapp.com",
  projectId: "nba-quiz-23",
  storageBucket: "nba-quiz-23.appspot.com",
  messagingSenderId: "760528421177",
  appId: "1:760528421177:web:cd84d034005b144fe1e8e8",
  measurementId: "G-6V6YLT3K22"
});

const db = getFirestore();


class SelectQuizTypeRepository {
  constructor() { this.db() }
  async db() {

    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
}


export {
  quizTypeValueObject,
  SelectQuizTypeRepository,
  SelectQuizTypeValueObject
}