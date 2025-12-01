import { 
    getFirestore, collection, getDocs, query, orderBy, serverTimestamp, doc, updateDoc, addDoc 
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

export class RequestFeed {
    constructor({ feedContainerId, donatePopupId, donateFormId }) {
        this.feedContainer = document.getElementById(feedContainerId);
        this.donatePopup = document.getElementById(donatePopupId);
        this.donateForm = document.getElementById(donateFormId);

        this.requests = [];
        this.upvotedRequests = new Set();
        this.currentRequestId = null;

        this.districtsData = {
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
            Mullaittivu: ["Mullaittivu", "Oddusuddan", "Nanthikadal", "Chundikulam"],
            Jaffna: ["Jaffna", "Mullaitivu", "Nallur", "Chavakacheri", "Kopay"],
        };

        this.init();
    }

    async init() {
        if (!this.feedContainer) return console.error("Feed container not found");

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
        this.db = getFirestore(app);

        await this.fetchRequests();
        this.renderRequests();
        this.setupPopupListeners();
    }

    async fetchRequests() {
        try {
            const requestsRef = collection(this.db, "requestfeed");
            const q = query(requestsRef, orderBy("category"), orderBy("subject"));
            const snapshot = await getDocs(q);

            this.requests = snapshot.docs
                .map(doc => ({ id: doc.id, ...doc.data() }))
                .filter(req => !req.fulfilled); // Hide fulfilled requests
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    }

    renderRequests() {
        this.feedContainer.innerHTML = "";

        if (!this.requests.length) {
            this.feedContainer.innerHTML = `<div class="empty-state">No requests found</div>`;
            return;
        }

        const sortedRequests = this.requests.sort((a, b) => {
            if (a.category !== b.category) return a.category === "ol" ? -1 : 1;
            return a.subject.localeCompare(b.subject);
        });

        sortedRequests.forEach(req => {
            const card = document.createElement("div");
            card.classList.add("request-card");

            card.innerHTML = `
                <div class="request-header">
                    <h3 class="request-subject">${req.subject}</h3>
                    <span class="request-category-badge ${req.category}">${req.category.toUpperCase()}</span>
                </div>
                <div class="request-details">
                    <p><strong>Book Title:</strong> ${req.bookTitle}</p>
                    <p><strong>Requester:</strong> ${req.name}</p>
                    <p><strong>WhatsApp:</strong> ${req.whatsapp}</p>
                    <p><strong>Location:</strong> ${req.town}, ${req.district}</p>
                </div>
                <div class="request-actions">
                    <button class="upvote-btn ${this.upvotedRequests.has(req.id) ? "voted" : ""}" data-id="${req.id}" ${this.upvotedRequests.has(req.id) ? "disabled" : ""}>
                        Upvote (${req.upvotes || 0})
                    </button>
                    <button class="donate-to-btn" data-id="${req.id}">Donate</button>
                </div>
            `;

            this.feedContainer.appendChild(card);
        });

        this.setupCardListeners();
    }

    setupCardListeners() {
        const upvoteButtons = this.feedContainer.querySelectorAll(".upvote-btn");
        upvoteButtons.forEach(btn => {
            btn.addEventListener("click", () => this.handleUpvote(btn));
        });

        const donateButtons = this.feedContainer.querySelectorAll(".donate-to-btn");
        donateButtons.forEach(btn => {
            btn.addEventListener("click", () => this.openDonatePopup(btn.dataset.id));
        });
    }

    async handleUpvote(button) {
        const requestId = button.dataset.id;
        if (this.upvotedRequests.has(requestId)) return;

        const request = this.requests.find(r => r.id === requestId);
        if (!request) return;

        request.upvotes = (request.upvotes || 0) + 1;
        button.textContent = `Upvote (${request.upvotes})`;
        button.classList.add("voted");
        button.disabled = true;

        this.upvotedRequests.add(requestId);

        try {
            const requestDocRef = doc(this.db, "requestfeed", requestId);
            await updateDoc(requestDocRef, { upvotes: request.upvotes });
        } catch (error) {
            console.error("Failed to update upvotes in Firestore:", error);
        }
    }

    setupPopupListeners() {
        if (!this.donatePopup || !this.donateForm) return;

        const closeBtn = this.donatePopup.querySelector(".close-popup");
        if (closeBtn) closeBtn.addEventListener("click", () => this.closeDonatePopup());

        this.donateForm.addEventListener("submit", e => this.handleDonateSubmit(e));

        const districtSelect = this.donateForm.querySelector("#d-district");
        const townSelect = this.donateForm.querySelector("#d-town");

        if (districtSelect && townSelect) {
            districtSelect.innerHTML = `<option value="">Select District</option>` + 
                Object.keys(this.districtsData).map(d => `<option value="${d}">${d}</option>`).join("");

            districtSelect.addEventListener("change", () => {
                const selected = districtSelect.value;
                townSelect.innerHTML = `<option value="">Select Town</option>` +
                    (selected && this.districtsData[selected] ? this.districtsData[selected].map(t => `<option value="${t}">${t}</option>`).join("") : "");
            });
        }
    }

    openDonatePopup(requestId) {
        if (!this.donatePopup) return;
        this.currentRequestId = requestId;
        this.donatePopup.classList.add("active");

        const request = this.requests.find(r => r.id === requestId);
        if (request) {
            const dNote = this.donateForm.querySelector("#d-note");
            if (dNote) dNote.value = `Donation for "${request.bookTitle}" requested by ${request.name}`;
        }
    }

    closeDonatePopup() {
        if (this.donatePopup) this.donatePopup.classList.remove("active");
        if (this.donateForm) this.donateForm.reset();
        this.currentRequestId = null;
    }

    async handleDonateSubmit(e) {
        e.preventDefault();
        if (!this.currentRequestId) return;

        const district = this.donateForm.querySelector("#d-district").value;
        const town = this.donateForm.querySelector("#d-town").value;
        const note = this.donateForm.querySelector("#d-note").value;

        if (!district || !town || !note) {
            alert("Please fill all donation details.");
            return;
        }

        try {
            // 1️⃣ Add donation
            await addDoc(collection(this.db, "requestdonation"), {
                requestId: this.currentRequestId,
                district,
                town,
                note,
                createdAt: serverTimestamp()
            });

            // 2️⃣ Mark request as fulfilled so it disappears from feed
            const requestDocRef = doc(this.db, "requestfeed", this.currentRequestId);
            await updateDoc(requestDocRef, { fulfilled: true });

            // 3️⃣ Show success and close popup
            const successMessage = this.donateForm.parentElement.querySelector("#donate-success");
            if (successMessage) {
                successMessage.textContent = "Donation request submitted!";
                successMessage.classList.add("show");
                setTimeout(() => {
                    successMessage.classList.remove("show");
                    this.closeDonatePopup();
                    this.fetchRequests().then(() => this.renderRequests());
                }, 2000);
            } else {
                this.closeDonatePopup();
                await this.fetchRequests();
                this.renderRequests();
            }
        } catch (error) {
            console.error("Error submitting donation:", error);
        }
    }
}
