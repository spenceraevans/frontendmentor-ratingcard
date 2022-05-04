const submitButton = document.querySelector('.submit-btn');
const rateContent = document.querySelector('.rate-content');
const thankYouContent = document.querySelector('.thank-you-content');
const ratingButtons = document.querySelectorAll('.rating-btn');
const score = document.querySelector('.score');
let starScore = 3 //default value

submitButton.addEventListener('click', onSubmit);

ratingButtons.forEach( btn => {
    btn.addEventListener('click', ratingBtnClick);
});

function onSubmit() {
    rateContent.classList.add('hide');
    score.textContent = starScore;
    thankYouContent.classList.remove('hide');
    //console.log('submit clicked');
}

function ratingBtnClick(e) {
    ratingButtons.forEach( btn => {
        btn.classList.remove('active');
    });
    
    if(e.target.classList.contains('rating-btn')) {
        e.target.classList.add('active');
    } else {
        e.target.parentElement.classList.add('active');
    }

    starScore = e.target.textContent;
    console.log(starScore);

    //console.log('rating btn click');
}

