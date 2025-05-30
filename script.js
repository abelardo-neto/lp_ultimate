//PRODUCT SELECTOR
const osSelectors = document.querySelectorAll(
  'input[name="os_selector-option"]'
);
const buttonValue = document.getElementById("button_value");
const linkValue = document.getElementById("link_value");
let otValue = document.getElementById("ot_value");
let ssValue = document.getElementById("ss_value");

const urls = {
  ["1 Box"]: "https://exemplo.com/1-box",
  ["3 Boxes"]: "https://exemplo.com/3-boxes",
  ["6 Boxes"]: "https://exemplo.com/6-boxes",
};

osSelectors.forEach((selector) => {
  selector.addEventListener("change", () => {
    if (selector.checked) {
      document.querySelectorAll(".os_label").forEach((label) => {
        label.classList.remove("bg-red-100");
      });

      const selectedLabel = selector.closest("label");
      selectedLabel.classList.add("bg-red-100");

      const url = urls[selector.value];
      linkValue.href =
        url + (subscribeRadio.checked ? "/subscribe" : "/one-time");
      buttonValue.textContent = `CLAIM YOUR DISCOUNT - ${selector.value.toUpperCase()}`;

      const selectedPrice = selectedLabel.querySelector(".selected_price");
      otValue.textContent = selectedPrice.textContent;

      const discountedPrice = (
        parseFloat(selectedPrice.textContent.replace("$", "")) * 0.88
      ).toFixed(2);
      ssValue.textContent = `$${discountedPrice}`;
    }
  });
});

window.addEventListener("DOMContentLoaded", () => {
  osSelectors.forEach((selector) => {
    if (selector.checked) {
      const subscribeRadio = document.getElementById("subscribe");
      const url = urls[selector.value];
      linkValue.href =
        url + (subscribeRadio.checked ? "/subscribe" : "/one-time");
      buttonValue.textContent = `CLAIM YOUR DISCOUNT - ${selector.value.toUpperCase()}`;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const subscribeRadio = document.getElementById("subscribe");
  const oneTimeRadio = document.getElementById("one-time");

  const toggleOtpElements = document.querySelectorAll(".toggle_otp");
  const toggleSsElements = document.querySelectorAll(".toggle_ss");

  function updateVisibility() {
    const isSubscribe = subscribeRadio.checked;

    toggleOtpElements.forEach((el) =>
      el.classList.toggle("hidden", isSubscribe)
    );
    toggleSsElements.forEach((el) =>
      el.classList.toggle("hidden", !isSubscribe)
    );
  }

  // Atualiza no carregamento inicial
  updateVisibility();

  // Adiciona os eventos de mudança
  subscribeRadio.addEventListener("change", updateVisibility);
  oneTimeRadio.addEventListener("change", updateVisibility);
});

function trocarLink() {
  const selectedOs = document.querySelector(
    'input[name="os_selector-option"]:checked'
  );
  if (selectedOs) {
    const url = urls[selectedOs.value];
    linkValue.href =
      url + (subscribeRadio.checked ? "/subscribe" : "/one-time");
  }
}

//TERMS

const oneTimeRadio = document.getElementById("one-time");
const subscribeRadio = document.getElementById("subscribe");
const osTerms = document.querySelector(".os_terms");
const termsCheckbox = document.getElementById("terms");

function aceitarTermos() {
  const isSubscribe = subscribeRadio.checked;
  const acceptedTerms = termsCheckbox.checked;

  osTerms.style.display = isSubscribe ? "flex" : "none";

  if (isSubscribe && !acceptedTerms) {
    linkValue.classList.add(
      "pointer-events-none",
      "opacity-50",
      "cursor-not-allowed"
    );
  } else {
    linkValue.classList.remove(
      "pointer-events-none",
      "opacity-50",
      "cursor-not-allowed"
    );
  }
}

oneTimeRadio.addEventListener("change", aceitarTermos);
oneTimeRadio.addEventListener("change", trocarLink);
subscribeRadio.addEventListener("change", aceitarTermos);
subscribeRadio.addEventListener("change", trocarLink);
termsCheckbox.addEventListener("change", aceitarTermos);
window.addEventListener("DOMContentLoaded", aceitarTermos);

//CARROSSEL

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("hidden", i !== index);
    });

    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add("ring-2", "ring-energo", "scale-110");
      } else {
        thumb.classList.remove("ring-2", "ring-energo", "scale-110");
      }
    });

    current = index;
  }

  prevBtn.addEventListener("click", () => {
    showImage((current - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener("click", () => {
    showImage((current + 1) % images.length);
  });

  thumbnails.forEach((thumb, index) => {
    thumb.addEventListener("click", () => showImage(index));
  });

  showImage(current);
});


// Initialize Slick Slider
$(document).ready(function () {
  $(".slider-slick").slick({
     infinite: false,
     dots: true,
     centerMode: true,
     adaptiveHeight: true

  });
  
});
