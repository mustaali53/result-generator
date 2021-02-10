
 
 show = () => {

    let maths = document.getElementById("math").value
    let comp = document.getElementById("comp").value
    let phy = document.getElementById("phy").value
    let eng = document.getElementById("eng").value
    let grades = "";
 

    let totalMarks = parseFloat(maths) + parseFloat(comp) + parseFloat(phy) + parseFloat(eng);
    // alert(totalMarks);

    let perc = (totalMarks/400) *100 ;
    // alert(perc)


    if (perc <= 100 && perc >= 80){
        grades = "A+";
        
    } else if (perc <= 79 && perc >= 60){
        grades = "A";
    } else if (perc <= 59 && perc >= 40){
        grades = "B";
    }else {
        grades = "F";
    }



    if(perc >= 39.5){
        document.getElementById("answer").innerHTML = `Your total marks are ${totalMarks} and percentage is 
    ${perc}% and your grade is ${grades}.</br> you are Pass`
    
    }else {
        document.getElementById("answer").innerHTML = `Your total marks are ${totalMarks} and percentage is 
    ${perc}% and your grade is ${grades}.</br> you are Fail`
    }
    

}