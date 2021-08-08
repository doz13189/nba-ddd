# nba-quiz

## パッケージ図
https://docs.google.com/spreadsheets/d/1cPxA91XbwgMuFw-RWi7NOMjOuS8Q6drFRlR316xikE0/edit#gid=0

## URL
https://nba-quiz-23.web.app/


## コンセプト

すぐにクイズが作れて、みんなが参加して回答できる。
NBA 井戸端会議でリアルタイムにクイズ大会をしたい。

## メモ
createQuiz 画面の QuizID を生成。
各工程に受け渡し、各工程の中でDB書き込みを実行。


## ドメイン駆動設計

### 値オブジェクト
- 不変である
- 交換が可能である
- 等価性によって比較される

### エンティティ
- 可変である
- 同じ属性であっても区別される
- 同一性を持つ


### ドメインサービス

### アプリケーションサービス
