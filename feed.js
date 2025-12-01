// feed.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  updateDoc,
  increment,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA7couJ2N6P8Ew6bjWyBTG4CCWJ2NrtTcM",
  authDomain: "books-3bbeb.firebaseapp.com",
  projectId: "books-3bbeb",
  storageBucket: "books-3bbeb.firebasestorage.app",
  messagingSenderId: "28862274150",
  appId: "1:28862274150:web:3de6dd399b7af41e0e6ba7",
  measurementId: "G-BTG34BTFTM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Sri Lanka Districts and Towns
const districtsData = {
  Colombo: ["Colombo", "Negombo", "Ja-Ela", "Wattala", "Attanagalla"],
  Gampaha: ["Gampaha", "Negombo", "Ja-Ela", "Kelaniya", "Peliyagoda"],
  Kalutara: ["Kalutara", "Panadura", "Beruwala", "Aluthgama", "Matugama"],
  Kandy: ["Kandy", "Peradeniya", "Gampola", "Nawalapitiya", "Akurana"],
  Matara: ["Matara", "Weligama", "Mirissa", "Atuwara", "Hakmana"],
  Galle: ["Galle", "Unawatuna", "Koggala", "Thalpe", "Benthota"],
  Ampara: ["Ampara", "Kalmunai", "Akkaraipattu", "Pottuvil", "Sammanthurai"],
  Trincomalee: ["Trincomalee", "Kinniya", "Kuchchaveli", "Mutur", "China Bay"],
  Batticaloa: ["Batticaloa", "Kalkudah", "Kallady", "Eravur", "Porativupattu"],
  Anuradhapura: ["Anuradhapura", "Kekirawa", "Medawachchiya", "Nuwara Wewa", "Eppawala"],
  Polonnaruwa: ["Polonnaruwa", "Kaduruwela", "Habarana", "Medirigiriya", "Thabuttegama"],
  Badulla: ["Badulla", "Bandarawela", "Haputale", "Diyatalawa", "Welimada"],
  Monaragala: ["Monaragala", "Bibile", "Buttala", "Madulla", "Kataragama"],
  Ratnapura: ["Ratnapura", "Balangoda", "Eheliyagoda", "Pelmadulla", "Kalawana"],
  Kegalle: ["Kegalle", "Mawanella", "Rambukkana", "Warakapola", "Kitulgala"],
  "Nuwara Eliya": ["Nuwara Eliya", "Kandy", "Peradeniya", "Ambewela", "Pussellawa"],
  Kurunegala: ["Kurunegala", "Warapitiya", "Kuliyapitiya", "Ibbagamuwa", "Nikaweratiya"],
  Puttalam: ["Puttalam", "Chilaw", "Nattandiya", "Wennappuwa", "Lankanida"],
  Mullaittivu: ["Mullaittivu", "Mullaitivu", "Oddusuddan", "Nanthikadal", "Chundikulam"],
  Jaffna: ["Jaffna", "Mullaittivu", "Nallur", "Chavakacheri", "Kopay"]
};

export class Feed {
  constructor({ feedContainerId, category, sortSubjectId, sortLanguageId, requestPopupId, requestFormId }) {
    this.feedContainer = document.getElementById(feedContainerId);
    this.sortSubject = document.getElementById(sortSubjectId);
    this.sortLanguage = document.getElementById(sortLanguageId);
    this.requestPopup = document.getElementById(requestPopupId);
    this.requestForm = document.getElementById(requestFormId);
    this.districtSelect = document.getElementById("r-district");
    this.townSelect = document.getElementById("r-town");
    this.currentPostId = null;
    this.category = category;
    this.donations = [];
    this.currentDisplayList = [];

    this.init();
  }

  async init() {
    await this.fetchDonations();
    this.populateDistricts();
    this.setupSorting();
    this.setupPopup();
    this.setupDistrictChange();
  }

  async fetchDonations() {
    try {
      const snapshot = await getDocs(collection(db, "donations"));
      this.donations = snapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .filter(d => d.s?.category === this.category)
        .filter(d => !d.fulfilled)
        .sort((a, b) => (b.likes || 0) - (a.likes || 0));

      this.populateSortingOptions();
      this.displayDonations(this.donations);
    } catch (err) {
      console.error("Failed to fetch donations:", err);
      this.feedContainer.innerHTML = `<div class="empty-state"><p>Failed to load donations.</p></div>`;
    }
  }

  displayDonations(list) {
    this.currentDisplayList = list;
    this.feedContainer.innerHTML = "";

    if (list.length === 0) {
      this.feedContainer.innerHTML = `<div class="empty-state"><p>No donations available.</p></div>`;
      return;
    }

    list.forEach((donation) => {
      const description = donation.book?.description && donation.book.description.length > 150
        ? donation.book.description.slice(0, 150) + `... <span class="read-more" data-full-desc="${this.escapeHtml(donation.book.description)}">Read more</span>`
        : (donation.book?.description || "");

      const card = document.createElement("div");
      card.classList.add("donation-card");

      const locationText = donation.location
        ? `${donation.location.town || ""}, ${donation.location.district || ""}`
        : "Not provided";

      const phoneText = donation.personal?.whatsapp || "Not provided";

      card.innerHTML = `
  <h3 class="donation-title">${donation.book?.title || "No title"}</h3>

  <div class="donation-tags">
    <span class="tag">${donation.s?.language || "Unknown"}</span>
    <span class="tag">${donation.s?.subject || "Unknown"}</span>
  </div>

  <p class="donation-description">${description}</p>

  <p class="donor-name">Donated by: <small>${donation.personal?.name || "Unknown"}</small></p>
  <p class="donor-location"><strong>Location:</strong> ${locationText}</p>
  <p class="donor-phone"><strong>Phone:</strong> ${phoneText}</p>

  <div class="donation-actions">
    <button class="like-btn" data-id="${donation.id}">❤️ Like (${donation.likes || 0})</button>
    <button class="request-btn" data-id="${donation.id}">Request Book</button>
  </div>
`;


      this.feedContainer.appendChild(card);
    });

    this.attachDonationListeners();
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  attachDonationListeners() {
    this.feedContainer.querySelectorAll(".like-btn").forEach(btn => {
      btn.addEventListener("click", async () => {
        try {
          const postRef = doc(db, "donations", btn.dataset.id);
          await updateDoc(postRef, { likes: increment(1) });

          const matches = btn.textContent.match(/\d+/);
          const count = (matches ? parseInt(matches[0]) : 0) + 1;
          btn.textContent = `❤️ Like (${count})`;

        } catch (err) {
          console.error("Failed to update likes:", err);
        }
      });
    });

    this.feedContainer.querySelectorAll(".request-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        this.currentPostId = btn.dataset.id;
        this.requestPopup.classList.add("active");
      });
    });

    this.feedContainer.querySelectorAll(".read-more").forEach(elem => {
      elem.addEventListener("click", () => {
        elem.parentElement.textContent = elem.dataset.fullDesc;
      });
    });
  }

  populateSortingOptions() {
    const subjects = [...new Set(this.donations.map(d => d.s.subject))].sort();
    const languages = [...new Set(this.donations.map(d => d.s.language))].sort();

    subjects.forEach(sub => this.sortSubject.appendChild(new Option(sub, sub)));
    languages.forEach(lang => this.sortLanguage.appendChild(new Option(lang, lang)));
  }

  setupSorting() {
    this.sortSubject.addEventListener("change", () => this.applyFilters());
    this.sortLanguage.addEventListener("change", () => this.applyFilters());
  }

  applyFilters() {
    const subjectFilter = this.sortSubject.value;
    const languageFilter = this.sortLanguage.value;

    const filtered = this.donations.filter(d =>
      (subjectFilter === "" || d.s.subject === subjectFilter) &&
      (languageFilter === "" || d.s.language === languageFilter)
    );

    this.displayDonations(filtered);
  }

  populateDistricts() {
    Object.keys(districtsData).forEach(d => {
      this.districtSelect.appendChild(new Option(d, d));
    });
  }

  setupDistrictChange() {
    this.districtSelect.addEventListener("change", () => {
      const district = this.districtSelect.value;
      this.townSelect.innerHTML = '<option value="">Select Town</option>';

      if (districtsData[district]) {
        districtsData[district].forEach(town =>
          this.townSelect.appendChild(new Option(town, town))
        );
      }
    });
  }

  setupPopup() {
    const closePopup = this.requestPopup.querySelector(".close-popup");

    closePopup.addEventListener("click", () => this.requestPopup.classList.remove("active"));
    window.addEventListener("click", e => {
      if (e.target === this.requestPopup) this.requestPopup.classList.remove("active");
    });

    let successMessage = document.getElementById("request-success");
    if (!successMessage) {
      successMessage = document.createElement("div");
      successMessage.id = "request-success";
      successMessage.classList.add("success-message");
      this.requestForm.prepend(successMessage);
    }

    this.requestForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (!this.currentPostId) return alert("No donation selected.");

      const phoneInput = this.requestForm.querySelector("#r-phone");
      const phonePattern = /^\+?\d{10,12}$/;

      if (!phonePattern.test(phoneInput.value)) {
        return alert("Please enter a valid phone number (10-12 digits).");
      }

      const data = {
        donationId: this.currentPostId,
        name: this.requestForm.querySelector("#r-name").value,
        phone: phoneInput.value,
        nic: this.requestForm.querySelector("#r-nic").value,
        district: this.districtSelect.value,
        town: this.townSelect.value,
        address: this.requestForm.querySelector("#r-address").value,
        note: this.requestForm.querySelector("#r-note").value,
        location: this.requestForm.querySelector("#r-location").value,
        timestamp: new Date().toISOString()
      };

      try {
        await addDoc(collection(db, "requests"), data);

        // Mark donation as fulfilled
        const ref = doc(db, "donations", this.currentPostId);
        await updateDoc(ref, { fulfilled: true });

        this.donations = this.donations.filter(d => d.id !== this.currentPostId);
        this.displayDonations(this.donations);

        this.requestForm.reset();
        this.townSelect.innerHTML = '<option value="">Select Town</option>';

        successMessage.innerHTML = `Request created successfully! We will contact you via <strong>${phoneInput.value}</strong>.`;
        successMessage.classList.add("show");

        setTimeout(() => {
          successMessage.classList.remove("show");
          this.requestPopup.classList.remove("active");
          this.currentPostId = null;
        }, 5000);

      } catch (err) {
        console.error("Request submit error:", err);
        alert("Failed to submit request.");
      }
    });
  }
}
