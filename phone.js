var CurrentRow = function personInfo(name, phone, email, gender, image) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.gender = gender;
    this.image = image;
}

var entries = [];

$(document).ready(function() {
    displayEntryList("#list");
    $("#add").click(function() {
        currentEntry = "";
        var e = new CurrentRow();
        // displayEntry(e);
        console.log("clicked");
    });

    $("#save").click(function() {
        console.log("Save");
        if(currentEntry === ""){
            console.log("save clicked");
            addNewEntry();
        }
        displayEntryList("#list");
        // Whenever anything is changed, save the whole list...
        // saveList();
    });

    for(index = 0; index < entries.length; index += 1){
        $("#" + index).click(function() {
            console.log("hbd");
        });
    }
});

var type;
var img;
function getOption() {
    type = document.getElementById('genderType').value;
}

function addNewEntry(){
    var name = $("#text-name").val(),
        phone = $("#text-phone").val(),
        email = $("#text-email").val(),
        gender;

        console.log(email);
        if (type == "on") {
            gender = "female";
            img = "1.png";
        } else {
            gender = "male";
            img = "2.png";
        }
    if(name !== "") {
        return addEntry(name, phone, email, gender, img);
    } else {
        return null;
    }
}

function addEntry(name, phone, email, gender, image) {
    var e = new CurrentRow(name, phone, email, gender, image);
    entries.push(e);
    return e;
}

function entryList(){
    var index, list = "";
    for(index = 0; index < entries.length; index += 1){
        list += "<li id=" + index + "> <a id=listName href=#view><img src=" + entries[index].image + "><h2>" + entries[index].name + "</h2><p>" + entries[index].phone + "</p><a href=tel:" + entries[index].phone + " data-rel=popup data-position-to=window data-transition=slidedown class=ui-icon-phone>Contact</a></a></li>";
    }
    return list;
}

function displayEntryList(listElement){
    $(listElement).html(entryList()).listview('refresh');
    return $(listElement);
}

$(document).on('click', "#list a", function() {
    currentEntry = $(this).text();
    var e = getEntryFromDisplayName(currentEntry);
    displayEntry(e);
});
function getEntryFromDisplayName(displayName){
    var index, e;
    for(index = 0; index < entries.length; index += 1){
        if(entries[index].name === displayName){
            return entries[index];
        }
    }
    return null;
}

function displayEntry(e){
    console.log(e.name + "nog3od");
    
    //$("#view-name-id").val(e.name);
    $("#view-img-id").attr("src", e.image);
    $("#view-mobile-id").attr("href", "tel:"+ e.phone);
    document.getElementById("view-name-id").textContent = e.name;
    // $("#email").val(e.email);
    // $("#mailbutton").attr("href", "mailto:"+ e.email);
    // $("#home").val(e.home);
    // $("#homebutton").attr("href", "tel:"+ e.home);
    // // This is a bit of a beast, to do with the way the HTML <input> date type
    // // expects dates to be formatted.  We want the date only (yyyy-mm-dd) and
    // // that dob is a full ISO date.  .toISOString() returns yyyy-mm-mm hh:mm or
    // // something like that.  We therefore need to extract the first 10 characters
    // // from the ISO date string...
    // $("#bday").val(e.dob.toISOString().substring(0, 10));
    // $("#name").text(e.name);
}