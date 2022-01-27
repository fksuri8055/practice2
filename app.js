console.log('happy')

// document.getElementById('btn'),
//   btn.addEventListener('onclick'),
//   function myfunction() {
//     alert('time to learn')
//   }
function toggleHide() {
  let btn = document.getElementById('btn')
  let para = document.getElementById('para')
  if (para.style.display != 'none') {
    para.style.display = 'none'
  } else {
    para.style.display = 'block'
  }
}

const willGetYouADog = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random()
    if (rand < 0.5) {
      resolve()
    } else {
      reject()
    }
  }, 5000)
})
willGetYouADog.then(() => {
  console.log('YAY WE GOT A DOG')
})
willGetYouADog.catch(() => {
  console.log('NO DOG')
})

var number = 0
console.log(number++)
console.log(++number)
console.log(number--)
console.log(--number)
console.log(number)
