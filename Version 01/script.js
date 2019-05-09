//variables

let i1 = 0
let images1 = []


//image list
images1[0] = "images/0.jpg"
images1[1] = "images/1.jpg"
images1[2] = "images/2.jpg"
images1[3] = "images/3.jpg"

//change image

function changeImgRight1(){

    if (i1<images1.length - 1){
     i1++        
    }else {
     i1 = 0
    }
        document.slide1.src = images1[i1]
    console.log(i1)
}
function changeImgLeft1(){
 
    if (i1<=images1.length - 1 && i1 > 0){
     i1--        
    }else {
     i1 = images1.length - 1
    }
       document.slide1.src = images1[i1]
    console.log(i1)
}

window.onload = function() {
changeImgRight1()

}