const $magicQuiz = document.getElementById('magic-quiz__wrapper')
const $quizQuestion = document.getElementById('quiz_question')
const $answersList = document.getElementById('answers-list')
const $btnPrev = document.getElementById('quiz_btn_prev')
const $btnNext = document.getElementById('quiz_btn_next')
const $quizCounter = document.getElementById('quizCounter')
quizList[0].display()




$magicQuiz.addEventListener('click', event => {
  if (event.target === $btnPrev){

    if($quizQuestion.key > 0){
      
      let iter = quizList[$quizQuestion.key]
      iter.checkAnswer(this)
      quizList[$quizQuestion.key - 1].display()
    }
  }

  if (event.target === $btnNext){
    if($quizQuestion.key < quizList.length-1 ){
      let iter = quizList[$quizQuestion.key]
      iter.checkAnswer(this)
      quizList[$quizQuestion.key + 1].display()
      }
  }
})







