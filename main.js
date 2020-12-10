var editIndex;

var person = [];
function gas() {
    var x = document.forms["myForm"]["first"].value;
    var y = document.forms["myForm"]["second"].value;
    var z = document.forms["myForm"]["third"].value;
    var a = document.forms["myForm"]["fourth"].value;
    var b = document.forms["myForm"]["fifth"].value;
    var c = document.forms["myForm"]["sixth"].value;
    var status = document.forms["myForm"]["status"].value;
    var ass = document.forms["myForm"]["Associate"].value;

    if (x == "") {
        document.getElementById("one").innerHTML = " required";
        // document.getElementById("fname").style.color = "red";
    }
    else {
        document.getElementById("one").innerHTML = "";

    }

    if (y == "") {
        document.getElementById("two").innerHTML = " required";

    }
    else {
        document.getElementById("two").innerHTML = "";

    }

    if (z == "") {
        document.getElementById("three").innerHTML = " required";

    }
    else {
        document.getElementById("three").innerHTML = "";
    }

    if (a == "") {
        document.getElementById("four").innerHTML = "  required";
        
    }
    else {
        document.getElementById("four").innerHTML = "";

    }
    
    if (b == "") {
        document.getElementById("five").innerHTML = "  required";
    
    }
    else {
        document.getElementById("five").innerHTML = "";

    }

    if (c == "") {
        document.getElementById("six").innerHTML = "  required";

    }
    else {
        document.getElementById("six").innerHTML = "";

    }
    if (status == "") {
        document.getElementById("statusErr").innerHTML = "  required";
       
    }
    else {
        document.getElementById("statusErr").innerHTML = "";

    }
    if (ass == "") {
        document.getElementById("typErr").innerHTML = "  required";
        return false;
    }
    else {
        document.getElementById("typErr").innerHTML = "";

    }

    var customerObj = {
        amar: x,
        nath: y,
        kavin: z,
        thiva: a,
        vizha:b,
        kiru:c,
        sam:status,
        dad:ass
    };


    person.push(customerObj);
    console.log(person);

console.log(editIndex);
if(editIndex != undefined){
person.splice(editIndex,1);
}

    Vic();

    document.forms["myForm"]["first"].value = '';
    document.forms["myForm"]["second"].value = '';
    document.forms["myForm"]["third"].value = '';
    document.forms["myForm"]["fourth"].value = '';
    document.forms["myForm"]["fifth"].value = '';
    document.forms["myForm"]["sixth"].value = '';
    document.forms["myForm"]["status"].value = '';
    document.forms["myForm"]["Associate"].value = '';

    



}

function Vic() {
    var html = "";
    editIndex = undefined;
    for (var i = 0; i < person.length; i++) {
        html += "<tr>";
        html += "<td>" + person[i].amar + "</td>";
        html += "<td>" + person[i].dad + "</td>";
        html += "<td>" + person[i].sam+ "</td>";
        html += '<td><button class=" btn btn-success" onclick="Edit(' + i + ')">Edit</button> <button class=" btn btn-info" onclick="Delete(' + i + ')">Delete</button></td>';
    }

    document.getElementById("body").innerHTML = html;
}
function Delete(del) {
    console.log(del);
    person.splice(del, 1);
    Vic();
};
function Edit(edi) {
    editIndex = edi;
    console.log(edi);
    console.log(person);
    console.log(person[edi]);
    document.forms["myForm"]["first"].value = person[edi].amar;
    document.forms["myForm"]["second"].value = person[edi].nath;
    document.forms["myForm"]["third"].value = person[edi].kavin;
    document.forms["myForm"]["fourth"].value = person[edi].thiva;
    document.forms["myForm"]["fifth"].value = person[edi].vizha;
    document.forms["myForm"]["sixth"].value = person[edi].kiru;
    document.forms["myForm"]["status"].value = person[edi].sam;
    document.forms["myForm"]["Associate"].value = person[edi].dad;

};

