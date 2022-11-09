let content = document.querySelector('.content');
content.addEventListener('keyup', addNewItem);

let addButton = document.querySelector('.addButton');
addButton.addEventListener('click', addNewInput);

let icon1 = document.querySelector('.az1');
icon1.addEventListener('click', sortingFunction);

let icon2 = document.querySelector('.az2');
icon2.addEventListener('click', sortingReverseFunction);

let input = document.querySelector('#mainpart');
document.getElementById("mainpart").focus();

let list = document.querySelector('.list');

function addNewItem(a) {

  if (a.keyCode == 13 && list.style.display != 'none') {
      let line = document.createElement('li');
      line.className = 'new_list item';
      line.setAttribute('addNewElement', true);
      line.innerHTML = `${input.value}<ion-icon name="close-outline" class="close"></ion-icon>`;

      let listMain = document.querySelector('#listMain');
      listMain.appendChild(line);

      input.value = '';
      list.style.display = 'none';
      blocklist.style.paddingBottom = " 20px";
      console.log(list.style.display);
      
      deleteItem();
      dragAreaFunc();
  }
}

function addNewInput(e) {
  list.style.display = 'flex';
  document.getElementById("inputMain").focus();
}

function deleteItem() {

  const close = document.querySelectorAll('.close');

  close.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.className.includes('close')) {

        e.target.parentElement.remove();

        if (listMain.childElementCount == 0) {
          list.style.display = 'flex';
        }
      }
    });
  });

}
let sortingArray = [];
function sortingFunction() {
  let listChoice = document.querySelectorAll('li');
  sortingArray = [];
  listChoice.forEach(item => {
    sortingArray.push(item.innerHTML);
  })
  sortingArray.sort();

  for (let i = 0; i < (listChoice.length); i++) {
    listChoice[i].innerHTML = sortingArray[i];
  }

  deleteItem();
  let icon2 = document.querySelector('.az2');
  icon1.style.display='none';
  icon2.style.display='flex';

  newElementAreaFunction();
}

function sortingReverseFunction() {
  icon2.style.display='none';
  icon1.style.display='block';

  listChoice=document.querySelectorAll('li');
  sortingArray=[];
  listChoice.forEach(element => {
    sortingArray.push(element.innerHTML);
})
sortingArray.sort().reverse();

  for (let i = 0; i < (listChoice.length) ; i++) {
    listChoice[i].innerHTML = sortingArray[i];
  }
  newElementAreaFunction}

function newElementAreaFunction() {
  const newElement = document.querySelector('.wrap');
  new Sortable(drag, {
    animation: 350
  })
}