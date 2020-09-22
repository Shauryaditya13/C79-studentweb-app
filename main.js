var studentarray=[];
function Submit(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var name3=document.getElementById("name3").value;
    var name4=document.getElementById("name4").value;
    studentarray.push(name1);
    studentarray.push(name2);
    studentarray.push(name3);
    studentarray.push(name4);
    console.log(studentarray)
    document.getElementById("output").innerHTML=studentarray;
    document.getElementById("Submitbutton").style.display="none";
    document.getElementById("Sortingbutton").style.display="inline";
}
function Sorting(){
    studentarray.sort();
    console.log(studentarray)
    document.getElementById("output").innerHTML=studentarray;
}