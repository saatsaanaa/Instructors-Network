let questions = {
  
}

function testClosed(n){
  console.log('Кто-то вышел');
}

document.addEventListener('DOMContentLoaded', () => {
  container = document.getElementsByClassName('main')[0]
  frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)
  header = document.createElement('p')
  header.textContent = "Тест №1";
  frame.appendChild(header)
  window.onblur = () => console.log( 'Кто-то вышел' );
})

function createTest() {

}
