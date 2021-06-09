var sitename = document.getElementById("Sitename");
var siteurl = document.getElementById("Siteurl");
var siteindex = document.getElementById("index");
var mainbtn = document.getElementById("mainbtn");


var sitecontainer;
if (localStorage.getItem("site") == null) {
  sitecontainer = [];
}
else {
  sitecontainer = JSON.parse(localStorage.getItem("site"));
  display();
}
function insert() {
  if (checkAndDelete() == true) {
    if (siteindex.value == "") {
      var thesitename = sitename.value;
      var thesiteurl = Siteurl.value;
      var site = { site: thesitename, url: thesiteurl };
      sitecontainer.push(site);
      localStorage.setItem("site", JSON.stringify(sitecontainer));
      display();
    }
    else {
      var theindex = siteindex.value;
      sitecontainer[theindex].site = sitename.value;
      sitecontainer[theindex].url = siteurl.value;
      localStorage.setItem("site", JSON.stringify(sitecontainer));
      display();
    }

  }
  else { alert("please insert all data"); }
  clear();
  mainbtn.innerHTML = "insert";

}


function display() {
  //var cartona =  document.getElementById("mytable").innerHTML;
  document.getElementById("mytable").innerHTML = "";
  for (let index = 0; index < sitecontainer.length; index++) {
    document.getElementById("mytable").innerHTML += `<tr>
    <th scope="row">${index}</th>
    <td>${sitecontainer[index].site}</td>
    <td><a href="${sitecontainer[index].url}" target="_blank" type="button" class="btn btn-outline-success">visit</a>  </td>
    <td><button onclick="deletesite(${index})" type="button" class="btn btn-outline-danger">delete</button> </td>
    <td><button  onclick="update(${index})" type="button" class="btn btn-outline-dark">updata</button></td>
    </tr>`;
  }
}

function deletesite(index) {
  sitecontainer.splice(index, 1);
  localStorage.setItem("site", JSON.stringify(sitecontainer));
  display();
}


function update(index) {
  siteindex.value = index;
  sitename.value = sitecontainer[index].site;
  siteurl.value = sitecontainer[index].url;
  mainbtn.innerHTML = "update";
}

function checkAndDelete() {
  if (sitename.value != "" && siteurl.value != "") {
    return true;
  }
  else {
    return false;
    sitename.value = "";
    siteurl.value = "";
  }
}

function clear() {
  sitename.value = "";
  siteurl.value = "";
  siteindex.value="";
}