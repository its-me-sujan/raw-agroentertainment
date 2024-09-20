//------------------------------------------------------News Carousel-----------------------------------------------

const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalItems = document.querySelectorAll(".carousel-item").length;
const itemsPerView = 4;
const width = document.querySelector(".carousel-item").offsetWidth;

// Handle Next Button (Infinite Scroll)
nextButton.addEventListener("click", () => {
  if (currentIndex < totalItems - itemsPerView) {
    currentIndex++;
  } else {
    currentIndex = 0; // Reset to the first item after reaching the end
  }
  carousel.style.transform = `translateX(-${currentIndex * (width + 16)}px)`;
});

// Handle Prev Button (Infinite Scroll)
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - itemsPerView; // Wrap around to the last set of items
  }
  carousel.style.transform = `translateX(-${currentIndex * (width + 16)}px)`;
});

toggleSidebar("hamburger", "sidebar", "hamburger-icon");
//----------------------------------------------Collaborative Carousel----------------------------------------------

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

//------------------------------------------------FAQ accordion-----------------------------------------------------

// JavaScript to toggle the accordion
function toggleAccordion(index) {
  const accordionContents = document.querySelectorAll(".accordion-content");
  const accordionToggles = document.querySelectorAll(".accordion-toggle svg");

  accordionContents.forEach((content, idx) => {
    if (idx === index) {
      // Toggle the visibility of the selected accordion content
      content.classList.toggle("hidden");

      // Toggle the rotation of the selected arrow
      accordionToggles[idx].classList.toggle("rotate-180");
    } else {
      // Hide other accordion content and reset the arrow rotation
      content.classList.add("hidden");
      accordionToggles[idx].classList.remove("rotate-180");
    }
  });
}

//--------------------------------------------FAQ Toggle--------------------------------------------------------------

// Accordion data for each category
const faqData = {
  showInfo: {
    titles: [
      "What is the premise of the reality show?",
      "How can I apply?",
      "Who are the hosts of the show?",
    ],
    contents: [
      "You can apply online by submitting a form and a video audition.",
      "Contestants must follow strict rules, avoid elimination, and win immunity.",
      "The show is hosted by well-known celebrities in the reality TV world.",
    ],
  },
  viewers: {
    titles: [
      "What are the rules of the competition?",
      "How can I watch previous seasons?",
      "What is the airing schedule?",
    ],
    contents: [
      "The show follows contestants as they compete in a series of challenges to win a grand prize.",
      "Previous seasons are available on our streaming platform and YouTube.",
      "The show airs every Friday at 8 PM on the main network channel.",
    ],
  },
  contestants: {
    titles: [
      "What is the contestant experience like?",
      "Do contestants have access to the outside world?",
      "What is the prize for the winner?",
    ],
    contents: [
      "Contestants are filmed 24/7 and compete in various challenges.",
      "No, contestants are isolated from the outside world during the competition.",
      "The winner receives a cash prize of $500,000 and a contract for future shows.",
    ],
  },
};

// References to accordion titles and content
const accordionTitles = [
  document.getElementById("accordion-title-1"),
  document.getElementById("accordion-title-2"),
  document.getElementById("accordion-title-3"),
];

const accordionContents = [
  document.getElementById("accordion-content-1"),
  document.getElementById("accordion-content-2"),
  document.getElementById("accordion-content-3"),
];

// Function to update accordion content
function updateAccordion(data) {
  for (let i = 0; i < 3; i++) {
    accordionTitles[i].textContent = data.titles[i];
    accordionContents[i].textContent = data.contents[i];
  }
}

// Function to update the button styles
function updateButtonStyles(selectedBtn, otherBtn1, otherBtn2) {
  selectedBtn.className =
    "my-4 h-fit w-fit py-3 px-10 bg-[#961E00] rounded-full";
  selectedBtn.querySelector("span").className = "text-2xl text-white";

  otherBtn1.className =
    "my-4 h-fit w-fit py-3 px-10 border border-[#961E00] rounded-full";
  otherBtn1.querySelector("span").className = "text-2xl text-[#961E00]";

  otherBtn2.className =
    "my-4 h-fit w-fit py-3 px-10 border border-[#961E00] rounded-full";
  otherBtn2.querySelector("span").className = "text-2xl text-[#961E00]";
}

// Button elements
const showInfoBtn = document.getElementById("show-info-btn");
const viewersBtn = document.getElementById("viewers-btn");
const contestantBtn = document.getElementById("contestant-btn");

// Event listeners for buttons
showInfoBtn.addEventListener("click", () => {
  updateAccordion(faqData.showInfo);
  updateButtonStyles(showInfoBtn, viewersBtn, contestantBtn);
});

viewersBtn.addEventListener("click", () => {
  updateAccordion(faqData.viewers);
  updateButtonStyles(viewersBtn, showInfoBtn, contestantBtn);
});

contestantBtn.addEventListener("click", () => {
  updateAccordion(faqData.contestants);
  updateButtonStyles(contestantBtn, showInfoBtn, viewersBtn);
});
