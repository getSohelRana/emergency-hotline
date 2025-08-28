
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

// counted copy
let copyCount = 0;
const showCopyCount = document.getElementById('copy-count');

// coins count
let mainCoins = 100;

document.getElementById('card-items').addEventListener('click' , (e) => {

    // button action for call-btn
    if(e.target.className.includes('call-btn')){
        const callButton = e.target;
        
        // coins check for new call
        if(mainCoins < 20){
            alert('Not enough coins for the new call');
            mainCoins = 0;
            document.getElementById('main-coin').innerText = mainCoins;
            return
        } 
        mainCoins -= 20;
        document.getElementById('main-coin').innerText = mainCoins;

        // acces call title and number
        const callTitle = callButton.parentNode.parentNode.children[1].innerText;
        const callNumber = callButton.parentNode.parentNode.children[3].innerText;
        
        // show alert
        alert(`${callTitle} is ${callNumber}`)

        // Call History Container
        const callHistoryContainer = document.getElementById('call-history-container');
        const callHistoryList = document.createElement('div');

        callHistoryList.innerHTML = `
            <div class="bg-[#FAFAFA] flex md:flex-col lg:flex-row  justify-between md:items-start gap-2 p-2 rounded-xl">
                <div >
                    <h1 class="text-lg font-semibold sm:text-[14px] lg:text-[20px] 2xl:font-bold sm:font-normal">${callTitle}</h1>
                    <p class="xl:font-bold">${callNumber}</p>
                </div>
                <p>${new Date().toLocaleTimeString()}</p>
            </div>
        `;
        callHistoryContainer.appendChild(callHistoryList);  
    }
    // Clear Call History List
    document.getElementById('clear-call-history').addEventListener('click' , () => {
        document.getElementById('call-history-container').innerText = "";
    })

    //button action for copy-btn
    if(e.target.className.includes('copy-btn')){
        const copyBtn = e.target;
        const copyNumber = copyBtn.parentNode.parentNode.children[3].innerText;
        // show alert copied text
        alert(`${copyNumber}`);

        navigator.clipboard.writeText(copyNumber)
        .then(() => {
            alert(`Copied: ${copyNumber}`);
        })

        // count increment
        copyCount++;

        //show copy count update
        showCopyCount.innerText = copyCount
    }
})



