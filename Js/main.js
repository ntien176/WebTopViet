window.addEventListener('DOMContentLoaded', (event) => {
  var menuBtn = document.querySelector('.menu-btn');
  let openStatus = false;
  let navList = document.querySelector('.nav-list');
  menuBtn.addEventListener('click', function () {
    if (!openStatus) {
      menuBtn.classList.add('open');
      navList.classList.add('nav-list__res');
      navList.classList.add('container');

      openStatus = true;
    } else {
      menuBtn.classList.remove('open');
      navList.classList.remove('nav-list__res');
      navList.classList.remove('container');

      openStatus = false;
    }
  });
  // function addClass(clickedObj, addedObj, addedClass) {
  //   let listItem = document.querySelector(clickedObj);
  //   let listOpenStatus = false;
  //   let subMenu = document.querySelector(addedObj);
  //   listItem.addEventListener('click', function () {
  //     if (!listOpenStatus) {
  //       // listItem.classList.add('openSubMenu');
  //       subMenu.classList.add(addedClass);
  //       // subMenu.classList.add('container');

  //       listOpenStatus = true;
  //     } else {
  //       // listItem.classList.remove('openSubMenu');
  //       subMenu.classList.remove(addedClass);
  //       // subMenu.classList.remove('container');

  //       listOpenStatus = false;
  //     }
  //   });
  // }
  // addClass('.nav-list-item', '.sub-menu', 'openSubMenu');

  // var list = document.querySelector('.list');
  // list.addEventListener('click', function (e) {
  //   if (e.target.className == 'del-btn btn') {
  //     const li = e.target.parentElement;
  //     list.removeChild(li);
  //   }
  // });
  var lists = document.querySelectorAll('.nav-list-item');
  Array.from(lists).forEach((list) => {
    let listOpenStatus = false;
    list.addEventListener('click', function (e) {
      let subMenu;
      switch (e.target.className) {
        case 'arrow-down':
          subMenu = e.target.nextElementSibling;
          break;
        case 'fas fa-chevron-down':
          subMenu = e.target.parentElement.nextElementSibling;
          break;
      }
      console.log(subMenu);
      if (!listOpenStatus) {
        subMenu.classList.add('openSubMenu');
        listOpenStatus = true;
      } else {
        subMenu.classList.remove('openSubMenu');
        listOpenStatus = false;
      }

      // if (e.target.className == 'arrow-down') {
      //   let listOpenStatus = false;

      //   // const li = e.target.parentElement;
      //   console.log(listOpenStatus);
      //   const subMenu = e.target.nextElementSibling;
      //   if (!listOpenStatus) {
      //     subMenu.classList.add('openSubMenu');
      //     listOpenStatus = true;
      //   } else {
      //     subMenu.classList.remove('openSubMenu');
      //     listOpenStatus = false;
      //   }
      // }
      // if (e.target.className == 'fas fa-chevron-down') {
      //   let listOpenStatus = false;

      //   // const li = e.target.parentElement;
      //   const subMenu = e.target.parentElement.nextElementSibling;
      //   console.log(subMenu);
      //   if (!listOpenStatus) {
      //     subMenu.classList.add('openSubMenu');
      //     listOpenStatus = true;
      //   } else {
      //     subMenu.classList.remove('openSubMenu');
      //     listOpenStatus = false;
      //   }
      // }
    });
  });

  // // function (clickedObj, addedObj, addedClass)
  // var listItems = document.querySelectorAll('.nav-list-item');
  // let listOpenStatus = false;
  // let subMenus = document.querySelectorAll('.sub-menu');
  // for (let i = 0; i <= listItems.length; i++) {
  //   listItems[i].addEventListener('click', function (e) {
  //     if (!listOpenStatus) {
  //       // listItem.classList.add('openSubMenu');
  //       subMenus[i].classList.add('openSubMenu');
  //       // subMenu.classList.add('container');

  //       listOpenStatus = true;
  //     } else {
  //       // listItem.classList.remove('openSubMenu');
  //       subMenus[i].classList.remove('openSubMenu');
  //       // subMenu.classList.remove('container');

  //       listOpenStatus = false;
  //     }
  //   });
  // }
});
