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
    });
    $("#delete").click(function() {
        if(currentEntry !== ""){
            removeEntry(currentEntry);
            currentEntry = "";
            displayEntryList("#list");
        }
    });

});

var type;
var img;
function getOption() {
    type = document.getElementById('genderType').value;
}

function removeEntry(name){
    var pos = -1, index, entry = null;
    for(index = 0; index < entries.length; index += 1){
        if(name === entries[index].name) {
            pos = index;
            break;
        }
    }
    if(pos > -1) {
        entry = entries[pos];
        entries.splice(pos, 1);
    }
    return entry;
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
        list += "<li id=" + index + "> <a  id=listName href=#view><img src=" + entries[index].image + "><h2>" + entries[index].name + "</h2><a href=tel:" + entries[index].phone + " data-rel=popup data-position-to=window data-transition=slidedown class=ui-icon-phone>Contact</a></a></li>";
    }
    return list;
}

function displayEntryList(listElement){
    $(listElement).html(entryList()).listview('refresh');
    return $(listElement);
}

$(document).on('click', "#list a", function() {
   currentEntry = $(this).text();
    console.log("data : " + currentEntry);
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
    if(e != null){
        console.log(e.name + "   name");
        $("#view-img-id").attr("src", e.image);
        $("#view-mobile-id").attr("href", "tel:"+ e.phone);
        document.getElementById("view-name-id").textContent = e.name;
    }
}