const button = document.querySelector("input[type=button]");
HTMLCollection.prototype.forEach = Array.prototype.forEach;


button.addEventListener("click", function(){
    let tr = document.querySelectorAll("tbody tr");
    let input = document.querySelector("input[type=text]").value;
    let ar = 0;
    console.log(tr);

    tr.forEach(tr =>{
        let td = tr.firstElementChild;
        tr.style.background = '#fff';
        tr.innerHTML = tr.innerHTML.replace("★","");

    })
    
    tr.forEach(tr => {
        ar = 1;
        let td = tr.firstElementChild;
        if(td.innerHTML == input){
            tr.style.background = '#EF5350';
            td.innerHTML = "★" + td.innerHTML;
        }
    })

    if(ar != 1){
        alert("입력다시해시벨아.");
    }

});


