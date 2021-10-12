// const index = 0

// showImage(index)

// const showImage = (i) => {
//   //Increment/Decrement based on paramenter
//   index += i

//   let images = document.getElementsByClassName("image")
//   let dots = document.getElementsByClassName("dot")

//   // Blocking images from appearing each time button is clicked
//   for (i = 0; i < images.length; i++) images[i].style.display = "none"

//   // Color indicator for dot highlite

//   for (i = 0; i < dots.length; i++)
//     // Replacing active class with empty class I.e. removing a class
//     dots[i].className = dots[i].className.replace("active", "")

//   // Sending user from last image to first or vice versa
//   if (index > images.length - 1) index = 0

//   if (index < 0) index = images.length - 1

//   images[index].style.display = "block"
//   dots[index].className += "active"
// }

// window.addEventListener("onload", showImage(index))




var index = 0

showSlide = (i) => {
  //increment/decrement slide index
  index += i

  //grab all the images
  var images = document.getElementsByClassName("image")
  //grab all the dots
  var dots = document.getElementsByClassName("dot")

  // hide all the images
  for (i = 0; i < images.length; i++) images[i].style.display = "none"

  // remove the active class from the dot
  for (i = 0; i < dots.length; i++)
    dots[i].className = dots[i].className.replace(" active", "")

  // if index is greater than the amount of images (set it to zero)
  if (index > images.length - 1) index = 0

  // if index is less than zero (set it to the length of images)
  if (index < 0) index = images.length - 1

  // only display the image that's next or previous
  images[index].style.display = "block"
  // only make the current dot active
  dots[index].className += " active"
}

window.addEventListener("onload", showSlide(index))