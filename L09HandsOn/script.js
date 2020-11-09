let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myObj = JSON.parse(this.responseText);
        document.getElementById("einsteinInfo").innerHTML = myObj.name + "'s Birthday is " + myObj.birthday;
    }
};
newRequest.open("GET", "einstein.json", true);
newRequest.send();

let einsteinBio = new XMLHttpRequest();
einsteinBio.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let hisBio = JSON.parse(this.responseText);
        document.getElementById("clicked").addEventListener("click",function(){
            document.getElementById("einsteinBio").innerHTML = hisBio.bio;
        })
    };
}
einsteinBio.open("GET", "einstein.json", true);
einsteinBio.send();
