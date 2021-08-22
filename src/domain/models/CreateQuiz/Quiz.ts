import {
  QuizIdObjectValue
} from '@/domain/models/Quiz/QuizId'


import {
  firestoreProductionConfig,
  firestoreService
} from '@/domain/services/firestoreService'

// import {
//   QueryDocumentSnapshot,
//   SnapshotOptions
// } from "firebase/firestore";


class QuizValueObject {

  private _quizId: QuizIdObjectValue

  constructor(quizId: QuizIdObjectValue) {
    this._quizId = quizId
  }

  getQuiz(): void {
    const quizRepository = new firestoreService(firestoreProductionConfig)
    const document = quizRepository.getDocument('quiz', this._quizId.quizId)

    console.log(document)

  }

}


export {
  QuizValueObject,
}