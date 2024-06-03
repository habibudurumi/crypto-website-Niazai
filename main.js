/** @format */

// Change language functionality
document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const select = dropdown.querySelector(".select-item");
  const chevron = dropdown.querySelector(".chevron");
  const itemList = dropdown.querySelector(".item-list");
  const options = dropdown.querySelectorAll(".item-list li");
  const selected = dropdown.querySelector(".selected-item");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    chevron.classList.toggle("chevron-rotate");
    itemList.classList.toggle("open-item-list");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      chevron.classList.remove("chevron-rotate");
      itemList.classList.remove("open-item-list");

      options.forEach((option) => {
        option.classList.remove("active");
      });

      option.classList.add("active");
    });
  });
});

// modal funtionality

const openModal = document.querySelector(".need-help");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});

// sidebar functionality

const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar-container");
const closeMenu = document.querySelector(".close-menu");

menu.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

document.addEventListener("DOMContentLoaded", function () {
  const expandableLists = document.querySelectorAll(".truncate");

  expandableLists.forEach((list) => {
    const listItems = list.querySelectorAll("li");
    const button = list.nextElementSibling; // Assuming the button follows the ul element

    if (listItems.length > 1) {
      button.textContent = "Read More";
    } else {
      button.style.display = "none"; // Hide the button if there are fewer than 4 list items
    }

    button.addEventListener("click", () => {
      const isExpanded = list.classList.contains("expanded");

      if (isExpanded) {
        list.classList.remove("expanded");
        button.textContent = "Read More";
      } else {
        list.classList.add("expanded");
        button.textContent = "Show Less";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      item.classList.toggle("expanded");
    });
  });
});
