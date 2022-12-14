let sortImg = document.querySelector(".sortImg img");
let reverseImg = document.querySelector(".reverseImg img");
sortImg.addEventListener("mouseover", () => {
  sortImg.src = "pictures/Group 73.svg";
});
sortImg.addEventListener("mouseout", () => {
  sortImg.src = "pictures/Group 74.svg";
});
reverseImg.addEventListener("mouseover", () => {
  reverseImg.src = "pictures/Group 91.svg";
});
reverseImg.addEventListener("mouseout", () => {
  reverseImg.src = "pictures/Group 90.svg";
});
let btnClear = document.querySelector(".clearButton");
btnClear.addEventListener("mouseover", () => {
  btnClear.style.background = "purple";
  btnClear.style.color = "white";
  btnClear.style.border = "none";
});
btnClear.addEventListener("mouseout", (e) => {
  btnClear.style.background = "white";
  btnClear.style.color = "#C4C4C4";
  btnClear.style.border = "1px solid #C4C4C4";
});
btnClear.addEventListener("click", () => {
  inp.value = "";
});
let inp = document.querySelector("input");
let inp_div = document.querySelector(".inputAll");
let inp_list = document.querySelector(".inputList");
let btnAdd = document.querySelector(".buttonAdd");
let ul_div = document.querySelector(".ulDiv");
let bol = false;
let a = 0;
const listItems = [];
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    if (inp.value.trim().length != 0) {
      ul_div.style.display = "block";
      p = document.createElement("p");
      p.innerHTML = inp.value;
      btn = document.createElement("button");
      btn.classList.add("deleteButton");
      btn.innerHTML = btnClear.innerHTML;
      new_div_li = document.createElement("li");
      new_div_li.classList.add("liDiv");
      new_div = document.createElement("div");
      new_div.classList.add("listText");
      new_div.append(p);
      new_div.append(btn);
      new_div_li.append(new_div);
      new_div_li.setAttribute("data-index", a);
      new_div_li.setAttribute("draggable", "true");
      listItems.push(new_div_li);
      a += 1;
      ul_div.append(new_div_li);
      ul_div.style.padding = "7.52px 0";
      pInp = document.querySelector(".listText p");
      if ((inp.value.length / pInp.offsetWidth) * 100 > 14) {
        p.style.overflowX = "scroll";
      }
      
      inp.value = "";
      btnAdd.addEventListener("click", () => {
        inp_list.style.display = "block";
        inp_list.style.display = "flex";
        btnClear.style.justifyContent = "center";
        inp.focus();
      });
      if (ul_div.children.length > 5) {
        ul_div.style.overflowY = "scroll";
        ul_div.scrollTop = ul_div.scrollHeight;
        ul_div.style.paddingTop = "5px";
        ul_div.style.paddingBottom = "0px";
      }
      sortImg.addEventListener("click", sortList);
      deleteList();
      addDragDrop();
      styleFunction();
    }
  }
});
function styleFunction() {
  inp_list.style.display = "none";

  inp.focus();
}
function dragStart() {
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}
function dragEnter() {
  this.classList.add("over");
}
function dragLeave() {
  this.classList.remove("over");
}
function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}
function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".listText");
  const itemTwo = listItems[toIndex].querySelector(".listText");
  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
function addDragDrop() {
  const draggables = document.querySelectorAll(".liDiv");
  const dragListItems = document.querySelectorAll(".ulDiv li");
  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });
  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
function sortList() {
  arrSorting = [];
  list = document.querySelectorAll(".listText p");
  list.forEach((item) => {
    arrSorting.push(item.innerHTML);
  });
  arrSorting.sort();
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML = arrSorting[i];
  }
  sortImg.style.display = "none";
  reverseImg.style.display = "block";
  reverseImg.addEventListener("click", reverseList);
}
function reverseList() {
  arrSorting = [];
  list = document.querySelectorAll(".listText p");
  list.forEach((item) => {
    arrSorting.push(item.innerHTML);
  });
  arrSorting.sort().reverse();
  for (i = 0; i < list.length; i++) {
    list[i].innerHTML = arrSorting[i];
  }
  sortImg.style.display = "block";
  reverseImg.style.display = "none";
}
function deleteList() {
  btnDel = document.querySelectorAll(".deleteButton");
  btnDel.forEach((item) => {
    item.addEventListener("mouseover", (event) => {
      item.style.background = "purple";
      item.style.color = "white";
      item.style.border = "none";
    });
    item.addEventListener("mouseout", (event) => {
      item.style.background = "white";
      item.style.color = "#C4C4C4";
      item.style.border = "1px solid #C4C4C4";
    });
  });
  for (var i = 0; i < btnDel.length; i++) {
    btnDel[i].addEventListener("click", deleteListElement);
  }
}
function deleteListElement() {
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
  if (ul_div.children.length == 0) {
    inp_list.style.display = "block";
    inp_list.style.display = "flex";
    ul_div.style.padding = "0";
    inp.focus();
  }
  if (ul_div.children.length < 6) {
    ul_div.style.overflowY = "hidden";
  }
}