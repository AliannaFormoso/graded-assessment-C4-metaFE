
$(document).ready(function(){
    $("#date").datepicker({
        dateFormat: "mm/dd/yy",
        beforeShowDay: $.datepicker.noWeekends,
        minDate: 2,
        maxDate: 32
    });
});



function submitform() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let datepicker = document.getElementById("date").value;
    let textdream = document.getElementById("knowuser").value;
    let weekdayintern = document.getElementById("date").value;
    let weekday = days[new Date(weekdayintern).getDay()];

    if (textdream === "" || datepicker === "") {
        alert("Form must be fully filled");
        
        return false;
    } else {
        alert(`    Great! Thanks for your appointment!
    It has been set for next ${weekday}, ${datepicker} at 10:00 am!
    The Garden of your dreams we'll become True!`);
    return true
    }
}

/* -----------------------Getting dates by using JS ------------------ */

/*
let date = new Date();
date.setDate(date.getDate()+2);
let daydate = date.getDate();
if (daydate <10) {
    daydate = "0" + daydate;
}
let monthdate = date.getMonth() + 1;
if (monthdate <10) {
    monthdate = "0" + monthdate;
}
let yeardate = date.getFullYear();
mindate = yeardate + "-" + monthdate + "-" + daydate;
document.getElementById("date").setAttribute('min', mindate)

let othermonth = date.getMonth() + 3;
if (othermonth <10) {
    othermonth = "0" + othermonth;
}
maxdate = yeardate + "-" + othermonth + "-" + daydate;
document.getElementById("date").setAttribute('max', maxdate)
console.log(maxdate);*/