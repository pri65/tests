// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

 
var form=document.querySelector("form");
form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();
    console.log("inside");
    var name=document.getElementById("name").value;
    var batch=document.getElementById("batch").value;
    var ds=document.getElementById("dsa").value;
    var cs=document.getElementById("cs").value;
    var coding=document.getElementById("coding").value;

    displayTable(name,batch,ds,cs,coding);
}
    
   
function displayTable(name,batch,ds,cs,coding){
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=name;
    var td2=document.createElement("td");
    td2.innerText=batch;
    var td3=document.createElement("td");
    td3.innerText=ds;
    var td4=document.createElement("td");
    td4.innerText=cs;
    var td5=document.createElement("td");
    td5.innerText=coding;
   
    var avg=(Number(ds)+Number(cs)+Number(coding))/3;
    console.log(avg);

    var td6=document.createElement("td");
    td6.innetext=avg;

    var td7=document.createElement("td");
    if(avg>4) {
        td7.innertext="Regular";
        td7.style.background="Green";
        td7.style.color="white";
    } else{
        td7.innerText="Async";
        td7.style.background="red";
        td7.style.color="white";
    }
  tr.append(td1,td2,td3,td4,td5,td6,td7);
  document.querySelector("tbody").append(tr);
}