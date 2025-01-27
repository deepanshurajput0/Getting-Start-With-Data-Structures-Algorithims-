let currentPlayer = 'X'
let array = Array(9).fill(null)
function handleClick(el){
  const id = Number(el.id)
  array[id] = currentPlayer
  el.innerHTML = currentPlayer
  currentPlayer = currentPlayer === 'X' ? '0' : 'X'
  console.log(array)
}
