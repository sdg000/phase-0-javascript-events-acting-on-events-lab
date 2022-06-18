//grabbing dodger element / saving to variable
const item = document.getElementById('dodger')

//function to move dodger left.
function moveDodgerLeft(){
  console.log(item.style.left)
  const currentLeft = item.style.left.replace('px', '')
  const left = parseInt(currentLeft, 10) 

  //condition check if item is not at end of left field
  if (left > 0){
    item.style.left = `${left - 1}px`
  }
  console.log(item.style.left)
}

//event listener for when left arrow is pressed
item.addEventListener('keydown', function(){
  if (keydown === "ArrowLeft"){
    moveDodgerLeft
  }
})            


//function to move dodger right.
function moveDodgerRight(){
  const currentLeft = item.style.left.replace('px', '')
  const left = parseInt(currentLeft, 10) 


  //condition check if item is not at end of right field
  if (left > 0){
    item.style.left = `${left + 1}px`
  }
}


//event listener for when right arrow is pressed
item.addEventListener('keydown', function(){
  if (keydown === "ArrowLeft"){
    moveDodgerRight
  }
})
