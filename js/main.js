var bookMarkName = document.getElementById("siteName");
var webSiteUrl = document.getElementById("siteUrl");
var submitBtn = document.getElementById("submit");
var inputs = document.getElementsByClassName("form-control");
var websites = [];


if (JSON.parse(localStorage.getItem("bookMarkList")) != null) {

    websites = JSON.parse(localStorage.getItem("bookMarkList"));
    displayData()
}


submitBtn.onclick = function () {
    addData();
    displayData();
    clearForm();
}
function addData() {
    var bookMarkData =
    {
        name: bookMarkName.value,
        website: webSiteUrl.value,
    }
    websites.push(bookMarkData);

    localStorage.setItem("bookMarkList", JSON.stringify(websites))
}


function displayData() {
    var trs = "";
    for (let i = 0; i < websites.length; i++) {
        trs +=
            `
        <tr>
        <td>${i + 1}</td>
        <td>${websites[i].name}</td>
        <td><a target="_blank" href="${webSiteUrl.value}" class="btn btn-warning">visit</a></td>
        <td><button onclick="deleteLine(${i})" class="btn btn-danger ">Delete</button></td>
        </tr>
        `;
    }
    document.getElementById("tableBody").innerHTML = trs
}

function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function deleteLine(index) {
    websites.splice(index, 1);
    displayData()
    localStorage.setItem("bookMarkList", JSON.stringify(websites))
}


