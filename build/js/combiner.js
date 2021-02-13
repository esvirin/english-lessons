//get lessons from LS
const getNewLesson = localStorage.getItem('newLesson')
const parseNewLesson = JSON.parse(getNewLesson)
let quizList = [];

// add new class with functions
class currentLesson  {
  
  
  constructor (id,q,a) {
    this.id = id;
    this.question = q;
    this.answers = a;
  }
  //checking type of chosen answer, correct or no, then return true or false to LS
  
  checkAnswer(iter) {
    
    
      let checkingItems = $answersList.getElementsByClassName('answers__item')
      let correctAnswer = this.answers.filter( q => q.key === true)
      let chosenAnswerArray = Array.from(checkingItems)
      let chosenAnswer = chosenAnswerArray.filter( a => a.checked === true)
      
          if(chosenAnswer.length!=0){
            
            if(Number(chosenAnswer[0].id) === correctAnswer[0].id){
              console.log('yes')}
            else{
                console.log('no')}
            }


          }



  display(){

      $quizQuestion.innerHTML = this.question
      $quizQuestion.key = this.id
      const lessonTask = document.querySelector('#task-name')

      let arr = ''
      
      if(this.answers.length > 1){
        lessonTask.innerHTML = 'выберите правильный вариант:'
          this.answers.forEach(e => {
            arr += `
            <li><input class="answers__item" type="radio" name="answers_item" id="${e.id}" >${e.name}</li>
            `})} 
      else if(this.answers.length = 1){
        lessonTask.innerHTML = 'переведите на английский:' 
          this.answers.forEach(e => {
              arr += `
              <li><input class="answers__item text-input" type="text" name="answers_item" id="${e.id}" >${e.name}</li>
              `})
            
        }

        $answersList.innerHTML = arr

        $quizCounter.innerHTML = `${this.id+1}/${quizList.length}`

      }
    }






parseNewLesson.forEach(function(item){
  let iter = new currentLesson(item.id,item.q,item.a)
  quizList.push(iter)
})


