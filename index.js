const ContArr = document.getElementsByClassName('content');
var LiArr = document.getElementsByClassName('tab');
const copy = ContArr[0].cloneNode(true);
let currentTarget = document.getElementsByClassName("active");
var count =0;
var MyH1=document.getElementsByTagName('h1');
var res = MyH1[0].textContent.split(" ");
console.log(res);
console.log(res[1]);
// ------------------------------------  excute event by clicking mouse--------------------------------
function ShowByClickTabs(){

    for (var i = 0; i < LiArr.length; i++) {
        LiArr[i].addEventListener("click", function() {
                            // to unActivate first element
        currentTarget[0].className = currentTarget[0].className.replace(" active", "");
                        //to set the current Clicked button as activated
        this.className += " active";
        //----------------- to check the source of event ----------------------

                        // means that you have clicked keyboard
        if(event.target.childNodes.length >1){
            if(event.target.childNodes[1].textContent === 'ONE'){
                currentTarget[1].textContent=copy.textContent;
            }
            else {
                currentTarget[1].textContent=ContArr[ConverterFunction(event.target.childNodes[1].textContent)-1].textContent;
                ChangeAndCount(ConverterFunction(event.target.childNodes[1].textContent));
            }
        }
                        // means that you have clicked on tab with mouse
        else{
            if(event.target.childNodes[0].data === 'ONE'){
                currentTarget[1].textContent=copy.textContent;
            }
            else {
                currentTarget[1].textContent=ContArr[ConverterFunction(event.target.textContent)-1].textContent;
                ChangeAndCount(ConverterFunction(event.target.textContent));
            }
        }
        });
      }
}

// ---------------------------------  excute event by clicking keyboard ------------------------------
function KeyBoardEvent(){
    document.body.addEventListener("keypress",(event)=> {
        var x = event.key;
        LiArr[x-1].click();
      })
}

//------------------------------- convert text content to index of element ---------------------------
const ConverterFunction =(Str) =>{
    if(Str === 'ONE'){
        return 1;
    }
    else if(Str === 'TWO'){
        return 2;
    }
    else if(Str === 'THREE'){

        return 3;
    }
    else if(Str === 'FOUR'){
        return 4;
    }

    return Str;
}

// ---------------------------------- function to count and change value of clicking tab 2 -------------------------
function ChangeAndCount(index){
    if(index === 2){
        ++count;
        MyH1[0].textContent="Events "+count;
    }
}
ShowByClickTabs();
KeyBoardEvent();