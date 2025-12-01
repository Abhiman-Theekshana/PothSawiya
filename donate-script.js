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
  Jaffna: ["Jaffna", "Mullaitivu", "Nallur", "Chavakacheri", "Kopay"],
}

// O/L Subjects
const olSubjects = [
  "Sinhala",
  "Tamil",
  "English",
  "Mathematics",
  "Science",
  "History",
  "Civic Education",
  "Religion (Buddhism)",
  "Religion (Christianity)",
  "Religion (Hinduism)",
  "Religion (Islam)",
  "Second Language - Sinhala",
  "Second Language - Tamil",
  "Business & Accounting",
  "Economics",
  "Commerce Studies",
  "ICT",
  "Agriculture",
  "Home Science",
  "Health & Physical Education",
  "Art",
  "Music",
  "Drama & Theatre",
  "Literature - English",
  "Literature - Sinhala",
  "Literature - Tamil",
  "French",
  "German",
  "Japanese",
  "Hindi",
  "Design & Construction Technology",
  "Engineering Technology",
]

// A/L Subjects
const alSubjects = [
  "Physics",
  "Chemistry",
  "Biology",
  "Combined Mathematics",
  "Higher Mathematics",
  "Agricultural Science",
  "ICT",
  "Business Studies",
  "Accounting",
  "Economics",
  "Business Statistics",
  "Geography",
  "Political Science",
  "History",
  "Logic & Scientific Method",
  "Sinhala",
  "Tamil",
  "English",
  "Pali",
  "Sanskrit",
  "Arabic",
  "Hindi",
  "Japanese",
  "Chinese",
  "Buddhism",
  "Hinduism",
  "Islam",
  "Christianity",
  "Home Economics",
  "Art",
  "Music",
  "Drama & Performing Arts",
  "Communication & Media Studies",
  "Civil Technology",
  "Mechanical Technology",
  "Electrical Technology",
  "Electronic Technology",
  "Food Technology",
  "Bio-resource Technology",
  "Bio-systems Technology",
]

// Initialize form
document.addEventListener("DOMContentLoaded", () => {
  populateDistricts()
  setupFormSubmit()
  setupHamburgerMenu()
})

// Populate Districts
function populateDistricts() {
  const districtSelect = document.getElementById("district")
  const districts = Object.keys(districtsData).sort()

  districts.forEach((district) => {
    const option = document.createElement("option")
    option.value = district
    option.textContent = district
    districtSelect.appendChild(option)
  })
}

// Update Towns based on District
function updateTowns() {
  const districtSelect = document.getElementById("district")
  const townSelect = document.getElementById("town")
  const selectedDistrict = districtSelect.value

  townSelect.innerHTML = '<option value="">Select Town</option>'

  if (selectedDistrict && districtsData[selectedDistrict]) {
    districtsData[selectedDistrict].forEach((town) => {
      const option = document.createElement("option")
      option.value = town
      option.textContent = town
      townSelect.appendChild(option)
    })
  }
}

// Update Subjects based on Category
function updateSubjects() {
  const categoryRadios = document.querySelectorAll('input[name="category"]')
  const subjectSelect = document.getElementById("subject")
  let selectedCategory = null

  categoryRadios.forEach((radio) => {
    if (radio.checked) {
      selectedCategory = radio.value
    }
  })

  subjectSelect.innerHTML = '<option value="">Select Subject</option>'

  if (selectedCategory === "ol") {
    olSubjects.forEach((subject) => {
      const option = document.createElement("option")
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  } else if (selectedCategory === "al") {
    alSubjects.forEach((subject) => {
      const option = document.createElement("option")
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  }
}

// Form Navigation
function nextStep(stepNumber) {
  if (validateStep(stepNumber - 1)) {
    showStep(stepNumber)
  }
}

function prevStep(stepNumber) {
  showStep(stepNumber)
}

function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll(".form-step").forEach((step) => {
    step.classList.remove("active")
  })

  // Show target step
  const targetStep = document.getElementById(`step${stepNumber}`)
  if (targetStep) {
    targetStep.classList.add("active")
  }

  // Update progress indicator
  document.querySelectorAll(".progress-step").forEach((step) => {
    step.classList.remove("active")
  })
  document.querySelector(`.progress-step[data-step="${stepNumber}"]`)?.classList.add("active")

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Form Validation
function validateStep(stepNumber) {
  clearErrors()
  let isValid = true

  if (stepNumber === 1) {
    const name = document.getElementById("name").value.trim()
    const whatsapp = document.getElementById("whatsapp").value.trim()

    if (!name) {
      showError("nameError", "Name is required")
      isValid = false
    }

    if (!whatsapp) {
      showError("whatsappError", "WhatsApp number is required")
      isValid = false
    } else if (!/[0-9+\s-]{9,}/.test(whatsapp)) {
      showError("whatsappError", "Please enter a valid phone number")
      isValid = false
    }
  }

  if (stepNumber === 2) {
    const district = document.getElementById("district").value
    const town = document.getElementById("town").value

    if (!district) {
      showError("districtError", "Please select a district")
      isValid = false
    }

    if (!town) {
      showError("townError", "Please select a town")
      isValid = false
    }
  }

  if (stepNumber === 3) {
    const category = document.querySelector('input[name="category"]:checked')
    const subject = document.getElementById("subject").value
    const language = document.querySelector('input[name="language"]:checked')

    if (!category) {
      showError("categoryError", "Please select a category")
      isValid = false
    }

    if (!subject) {
      showError("subjectError", "Please select a subject")
      isValid = false
    }

    if (!language) {
      showError("languageError", "Please select a language")
      isValid = false
    }
  }

  if (stepNumber === 4) {
    const title = document.getElementById("title").value.trim()
    const description = document.getElementById("description").value.trim()

    if (!title) {
      showError("titleError", "Book title is required")
      isValid = false
    }

    if (!description) {
      showError("descriptionError", "Book description is required")
      isValid = false
    }
  }

  return isValid
}

// Error Handling
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  if (errorElement) {
    errorElement.textContent = message
  }
}

function clearErrors() {
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = ""
  })
}

// Form Submit
function setupFormSubmit() {
  const form = document.getElementById("donateForm")
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      if (validateStep(4)) {
        // Collect form data
        const formData = {
          name: document.getElementById("name").value,
          whatsapp: document.getElementById("whatsapp").value,
          district: document.getElementById("district").value,
          town: document.getElementById("town").value,
          category: document.querySelector('input[name="category"]:checked').value,
          subject: document.getElementById("subject").value,
          language: document.querySelector('input[name="language"]:checked').value,
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
        }

        // Show success message
        showSuccessMessage(formData.whatsapp)

        // Reset form
        form.reset()
      }
    })
  }
}

function showSuccessMessage(whatsapp) {
  document.getElementById("successWhatsapp").textContent = whatsapp
  document.getElementById("formSection").classList.add("hidden")
  document.getElementById("successSection").classList.remove("hidden")
}

// Hamburger Menu
function setupHamburgerMenu() {
  const hamburger = document.getElementById("hamburger")
  const navMenu = document.getElementById("navMenu")

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      hamburger.classList.toggle("active")
    })
  }

  // Close menu when clicking on a link
  document.querySelectorAll(".nav-links").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
}
