function activateButton(id) {
    alert('Hello world');
}

function activateButton(name) {
    var activeBtns = document.getElementsByClassName("active");
    console.log(activeBtns);
    console.log("element sending event = " + name)
    activeBtns[0].setAttribute('class', '');
    document.getElementById(name).setAttribute('class', 'active');
  }

 