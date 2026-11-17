
/* =====================================================
   SMART AGRICULTURE CROP INFORMATION PORTAL
   File Name: script.js
   Features: Search, Language, Category Filter,
   Crop Details, Responsive UI
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // DATABASE
  const crops = window.crops || [];
  const categories = window.cropCategories || [];

  // STATE
  let currentLanguage = localStorage.getItem("cropLanguage") || "hi";
  let currentCategory = "all";
  let searchText = "";

  // HTML ELEMENTS
  const cropContainer = document.getElementById("cropContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const languageBtn = document.getElementById("languageBtn");
  const totalCropCount = document.getElementById("totalCropCount");
  const categoryContainer = document.getElementById("categoryContainer");
  const resultCount = document.getElementById("resultCount");
  const noResults = document.getElementById("noResults");
  const resetBtn = document.getElementById("resetBtn");
  const modal = document.getElementById("cropModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");

  // TRANSLATIONS
  const translations = {

    hi: {
      title: "स्मार्ट कृषि ज्ञान पोर्टल",
      subtitle: "भारत की प्रमुख फसलों की संपूर्ण जानकारी",
      search: "फसल का नाम खोजें...",
      all: "सभी फसलें",
      total: "कुल फसलें",
      viewDetails: "पूरी जानकारी देखें",
      botanical: "वानस्पतिक नाम",
      diseases: "प्रमुख रोग",
      pests: "प्रमुख कीट",
      climate: "जलवायु",
      temperature: "उपयुक्त तापमान",
      varieties: "प्रमुख किस्में",
      origin: "उत्पत्ति स्थान",
      chromosome: "गुणसूत्र संख्या",
      noResults: "कोई फसल नहीं मिली!",
      noResultsText: "कृपया दूसरा नाम खोजें।",
      reset: "सभी फसलें दिखाएँ",
      close: "बंद करें",
      categories: "फसल श्रेणियाँ",
      back: "वापस",
      loading: "फसल की जानकारी लोड हो रही है..."
    },

    en: {
      title: "Smart Agriculture Knowledge Portal",
      subtitle: "Complete Information About Major Indian Crops",
      search: "Search crop name...",
      all: "All Crops",
      total: "Total Crops",
      viewDetails: "View Full Details",
      botanical: "Botanical Name",
      diseases: "Major Diseases",
      pests: "Major Insect Pests",
      climate: "Climate",
      temperature: "Suitable Temperature",
      varieties: "Major Varieties",
      origin: "Origin",
      chromosome: "Chromosome Number",
      noResults: "No Crops Found!",
      noResultsText: "Please search another crop name.",
      reset: "Show All Crops",
      close: "Close",
      categories: "Crop Categories",
      back: "Back",
      loading: "Loading crop information..."
    }

  };

  // HELPER FUNCTION
  function t(key) {
    return translations[currentLanguage][key] || key;
  }

  // GET LANGUAGE VALUE
  function getText(value) {

    if (value && typeof value === "object") {
      return value[currentLanguage] || value.en || "";
    }

    return value || "";
  }

  // SAFE HTML
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    })[char]);
  }

  // INITIALIZATION
  function initialize() {

    if (totalCropCount) {
      totalCropCount.textContent = crops.length;
    }

    createCategoryButtons();
    updateLanguage();
    renderCrops();
    setupEvents();

  }

  // CATEGORY BUTTONS
  function createCategoryButtons() {

    if (categoryContainer) {

      categoryContainer.innerHTML = `
        <button class="category-btn active"
          data-category="all">
          🌾 ${t("all")}
        </button>
      `;

      categories.forEach(category => {

        categoryContainer.innerHTML += `
          <button class="category-btn"
            data-category="${escapeHTML(category.id)}">
            ${category.icon}
            ${escapeHTML(getText(category.name))}
          </button>
        `;

      });

      updateCategoryButtons();
    }

    if (categoryFilter) {

      categoryFilter.innerHTML = `
        <option value="all">${t("all")}</option>
      `;

      categories.forEach(category => {

        categoryFilter.innerHTML += `
          <option value="${escapeHTML(category.id)}">
            ${escapeHTML(getText(category.name))}
          </option>
        `;

      });

      categoryFilter.value = currentCategory;
    }

  }

  // UPDATE CATEGORY BUTTON STYLE
  function updateCategoryButtons() {

    document.querySelectorAll(".category-btn").forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.category === currentCategory
      );

    });

  }

  // FILTER CROPS
  function getFilteredCrops() {

    return crops.filter(crop => {

      // CATEGORY FILTER
      const categoryMatch =
        currentCategory === "all" ||
        crop.category === currentCategory;

      // SEARCH FILTER
      const nameHindi = getText(crop.name);
      const botanical = crop.botanicalName || "";

      const categoryName = getText(
        categories.find(cat => cat.id === crop.category)?.name
      );

      const searchData = [
        nameHindi,
        crop.name?.en,
        botanical,
        categoryName,
        ...((crop.diseases || []).flatMap(item =>
          [item.hi, item.en]
        )),
        ...((crop.pests || []).flatMap(item =>
          [item.hi, item.en]
        )),
        getText(crop.origin),
        getText(crop.varieties)
      ].join(" ").toLowerCase();

      const searchMatch =
        searchData.includes(searchText.toLowerCase());

      return categoryMatch && searchMatch;

    });

  }

  // RENDER CROP CARDS
  function renderCrops() {

    if (!cropContainer) return;

    const filteredCrops = getFilteredCrops();

    cropContainer.innerHTML = "";

    if (resultCount) {
      resultCount.textContent =
        `${filteredCrops.length} / ${crops.length}`;
    }

    if (noResults) {
      noResults.style.display =
        filteredCrops.length === 0 ? "block" : "none";
    }

    filteredCrops.forEach(crop => {

      const category = categories.find(
        cat => cat.id === crop.category
      );

      const card = document.createElement("div");

      card.className = "crop-card";

      card.innerHTML = `

        <div class="crop-image">

          <img
            src="${escapeHTML(crop.image || "")}"
            alt="${escapeHTML(getText(crop.name))}"
            loading="lazy"
            onerror="this.style.display='none'"
          >

          <span class="crop-category">
            ${category?.icon || "🌱"}
            ${escapeHTML(getText(category?.name))}
          </span>

        </div>

        <div class="crop-info">

          <h3>${escapeHTML(getText(crop.name))}</h3>

          <p class="english-name">
            ${escapeHTML(crop.name.en || "")}
          </p>

          <p class="botanical-name">
            <strong>${t("botanical")}:</strong>
            <i>${escapeHTML(crop.botanicalName)}</i>
          </p>

          <button class="view-btn"
            data-id="${crop.id}">
            ${t("viewDetails")}
            →
          </button>

        </div>

      `;

      cropContainer.appendChild(card);

    });

    // CARD CLICK EVENTS
    document.querySelectorAll(".view-btn").forEach(button => {

      button.addEventListener("click", () => {

        const crop = crops.find(
          item => item.id === Number(button.dataset.id)
        );

        if (crop) openCropDetails(crop);

      });

    });

  }

  // OPEN CROP DETAILS
  function openCropDetails(crop) {

    if (!modal || !modalContent) return;

    const fields = [

      {
        title: t("botanical"),
        icon: "🔬",
        value: crop.botanicalName
      },

      {
        title: t("diseases"),
        icon: "🦠",
        value: crop.diseases
      },

      {
        title: t("pests"),
        icon: "🐛",
        value: crop.pests
      },

      {
        title: t("climate"),
        icon: "🌦️",
        value: crop.climate
      },

      {
        title: t("temperature"),
        icon: "🌡️",
        value: crop.temperature
      },

      {
        title: t("varieties"),
        icon: "🌱",
        value: crop.varieties
      },

      {
        title: t("origin"),
        icon: "🌍",
        value: crop.origin
      },

      {
        title: t("chromosome"),
        icon: "🧬",
        value: crop.chromosome
      }

    ];

    const category = categories.find(
      cat => cat.id === crop.category
    );

    modalContent.innerHTML = `

      <div class="modal-header">

        <img
          src="${escapeHTML(crop.image || "")}"
          alt="${escapeHTML(getText(crop.name))}"
          onerror="this.style.display='none'"
        >

        <div>

          <h2>${escapeHTML(getText(crop.name))}</h2>

          <p>${escapeHTML(crop.name.en || "")}</p>

          <span>
            ${category?.icon || "🌱"}
            ${escapeHTML(getText(category?.name))}
          </span>

        </div>

      </div>

      <div class="details-grid">

        ${fields.map(field => {

          let value = field.value;

          if (Array.isArray(value)) {

            value = `
              <ul>
                ${value.map(item => `
                  <li>${escapeHTML(getText(item))}</li>
                `).join("")}
              </ul>
            `;

          } else {

            value = escapeHTML(getText(value));

          }

          return `

            <div class="detail-box">

              <h3>
                ${field.icon}
                ${field.title}
              </h3>

              <div class="detail-value">
                ${value}
              </div>

            </div>

          `;

        }).join("")}

      </div>

    `;

    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

  }

  // CLOSE MODAL
  function hideModal() {

    if (!modal) return;

    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";

  }

  // UPDATE LANGUAGE
  function updateLanguage() {

    document.documentElement.lang = currentLanguage;

    const title = document.getElementById("mainTitle");
    const subtitle = document.getElementById("mainSubtitle");

    if (title) title.textContent = t("title");

    if (subtitle) subtitle.textContent = t("subtitle");

    if (searchInput) {
      searchInput.placeholder = t("search");
    }

    if (resetBtn) {
      resetBtn.textContent = t("reset");
    }

    if (languageBtn) {
      languageBtn.textContent =
        currentLanguage === "hi" ? "English" : "हिंदी";
    }

    createCategoryButtons();

  }

  // CHANGE LANGUAGE
  function changeLanguage() {

    currentLanguage =
      currentLanguage === "hi" ? "en" : "hi";

    localStorage.setItem("cropLanguage", currentLanguage);

    updateLanguage();
    renderCrops();

    // Refresh open modal if necessary
    if (modal && modal.style.display === "flex") {
      const modalTitle = modalContent.querySelector("h2");

      if (modalTitle) {
        const crop = crops.find(
          item => getText(item.name) === modalTitle.textContent
        );

        if (crop) openCropDetails(crop);
      }
    }

  }

  // EVENT LISTENERS
  function setupEvents() {

    // SEARCH
    if (searchInput) {

      searchInput.addEventListener("input", event => {

        searchText = event.target.value.trim();

        renderCrops();

      });

    }

    // CATEGORY SELECT
    if (categoryFilter) {

      categoryFilter.addEventListener("change", event => {

        currentCategory = event.target.value;

        updateCategoryButtons();
        renderCrops();

      });

    }

    // CATEGORY BUTTON CLICK
    if (categoryContainer) {

      categoryContainer.addEventListener("click", event => {

        const button = event.target.closest(".category-btn");

        if (!button) return;

        currentCategory = button.dataset.category;

        if (categoryFilter) {
          categoryFilter.value = currentCategory;
        }

        updateCategoryButtons();
        renderCrops();

      });

    }

    // LANGUAGE BUTTON
    if (languageBtn) {
      languageBtn.addEventListener("click", changeLanguage);
    }

    // RESET FILTER
    if (resetBtn) {

      resetBtn.addEventListener("click", () => {

        currentCategory = "all";
        searchText = "";

        if (searchInput) searchInput.value = "";

        if (categoryFilter) {
          categoryFilter.value = "all";
        }

        updateCategoryButtons();
        renderCrops();

      });

    }

    // CLOSE MODAL
    if (closeModal) {
      closeModal.addEventListener("click", hideModal);
    }

    // OUTSIDE MODAL CLICK
    if (modal) {

      modal.addEventListener("click", event => {

        if (event.target === modal) {
          hideModal();
        }

      });

    }

    // ESCAPE KEY
    document.addEventListener("keydown", event => {

      if (event.key === "Escape") {
        hideModal();
      }

    });

    // MOBILE MENU
    if (mobileMenuBtn && navMenu) {

      mobileMenuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        mobileMenuBtn.setAttribute(
          "aria-expanded",
          navMenu.classList.contains("active")
        );

      });

    }

  }

  // START PROJECT
  initialize();

  console.log("Smart Agriculture Portal Started!");
  console.log("Total Crops:", crops.length);

});
