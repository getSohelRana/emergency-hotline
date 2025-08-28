
// count hearts
let heartCount = 0;
const showhearCount = document.getElementById('heart-count');

const hearts = document.getElementsByClassName('heart');
for (const heart  of hearts) {
    heart.addEventListener('click' , () => {
        if(heart.classList.contains('active')){
            heart.classList.remove('active' , 'text-green-500');
            heartCount--;
        }else{
            heart.classList.add('active', 'text-green-500');
             heartCount++;
        }
        //show updated heats
        showhearCount.innerText = heartCount;
    })
}



