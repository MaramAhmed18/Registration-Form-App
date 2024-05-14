const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.querySelector(".progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let step = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    step++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    step--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    if(formStep.classList.contains("form-step-active")){
        formStep.classList.remove("form-step-active");
    } 
  });
  formSteps[step].classList.add("form-step-active");
}

function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < step + 1) {
        if(step == 1){
            progress.style.width="50%"
        }else if(step == 2){
            progress.style.width="100%"
        }else{
            progress.style.width="0%"
        }
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
        
      }
    });

 
}