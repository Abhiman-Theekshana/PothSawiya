// Sri Lanka Districts and Towns
const districtsData = {
  // Western Province
  Colombo: ["Colombo", "Dehiwala-Mount Lavinia", "Moratuwa", "Sri Jayawardenepura Kotte", "Kolonnawa", "Kesbewa", "Maharagama", "Homagama", "Kaduwela", "Boralesgamuwa", "Piliyandala", "Nugegoda", "Kotte", "Hanwella", "Padukka", "Horana", "Ratmalana"],
  
  Gampaha: ["Gampaha", "Negombo", "Ja-Ela", "Kelaniya", "Peliyagoda", "Wattala", "Minuwangoda", "Katunayake", "Kadawatha", "Ragama", "Divulapitiya", "Nittambuwa", "Veyangoda", "Mirigama", "Ganemulla", "Kandana", "Kiribathgoda"],
  
  Kalutara: ["Kalutara", "Panadura", "Beruwala", "Aluthgama", "Matugama", "Horana", "Wadduwa", "Bandaragama", "Ingiriya", "Bulathsinhala", "Dodangoda", "Agalawatta"],

  // Central Province
  Kandy: ["Kandy", "Peradeniya", "Gampola", "Nawalapitiya", "Katugastota", "Akurana", "Kadugannawa", "Pilimatalawa", "Wattegama", "Gelioya", "Daulagala", "Kundasale"],
  
  Matale: ["Matale", "Dambulla", "Sigiriya", "Galewela", "Ukuwela", "Rattota", "Naula", "Pallepola", "Yatawatta"],
  
  "Nuwara Eliya": ["Nuwara Eliya", "Hatton", "Nuwara Eliya Town", "Talawakelle", "Ambewela", "Pussellawa", "Ginigathena", "Walapane", "Kotmale", "Rikillagaskada"],

  // Southern Province
  Galle: ["Galle", "Hikkaduwa", "Ambalangoda", "Elpitiya", "Bentota", "Balapitiya", "Koggala", "Ahangama", "Unawatuna", "Baddegama", "Habaraduwa", "Karapitiya", "Imaduwa", "Yakkalamulla"],
  
  Matara: ["Matara", "Weligama", "Mirissa", "Dikwella", "Hakmana", "Akuressa", "Devinuwara", "Deniyaya", "Kekanadura", "Kamburugamuwa", "Athuraliya"],
  
  Hambantota: ["Hambantota", "Tangalle", "Tissamaharama", "Ambalantota", "Beliatta", "Weeraketiya", "Suriyawewa", "Middeniya", "Walasmulla", "Angunakolapelessa", "Katuwana", "Lunugamvehera", "Hambantota Town"],

  // Northern Province
  Jaffna: ["Jaffna", "Nallur", "Chavakachcheri", "Point Pedro", "Chankanai", "Karainagar", "Valvettithurai", "Velanai", "Kayts", "Kopay", "Uduvil", "Tellippalai", "Sandilipay"],
  
  Kilinochchi: ["Kilinochchi", "Paranthan", "Poonakary", "Pallai", "Karachchi"],
  
  Mannar: ["Mannar", "Nanattan", "Madhu", "Pesalai", "Thalaimannar", "Murunkan"],
  
  Vavuniya: ["Vavuniya", "Nedunkerni", "Omanthai", "Chettikulam", "Vavuniya South"],
  
  Mullaitivu: ["Mullaitivu", "Oddusuddan", "Puthukkudiyiruppu", "Mankulam", "Maritimepattu", "Thunukkai", "Welioya"],

  // Eastern Province
  Trincomalee: ["Trincomalee", "Kinniya", "Kuchchaveli", "Mutur", "Nilaveli", "Kantale", "Seruvila", "Gomarankadawala", "China Bay", "Tampalakamam"],
  
  Batticaloa: ["Batticaloa", "Kalkudah", "Valachchenai", "Eravur", "Chenkaladi", "Kokkaddicholai", "Kattankudy", "Kaluwanchikudy", "Araipattai"],
  
  Ampara: ["Ampara", "Kalmunai", "Akkaraipattu", "Sammanthurai", "Pottuvil", "Sainthamaruthu", "Nintavur", "Addalachchenai", "Uhana", "Mahaoya", "Damana", "Padiyatalawa"],

  // North Central Province
  Anuradhapura: ["Anuradhapura", "Kekirawa", "Medawachchiya", "Tambuttegama", "Eppawala", "Galenbindunuwewa", "Mihintale", "Nochchiyagama", "Kahatagasdigiliya", "Thalawa", "Galnewa"],
  
  Polonnaruwa: ["Polonnaruwa", "Kaduruwela", "Hingurakgoda", "Medirigiriya", "Dimbulagala", "Bakamuna", "Jayanthipura", "Aralaganvila", "Welikanda"],

  // Uva Province
  Badulla: ["Badulla", "Bandarawela", "Haputale", "Welimada", "Mahiyanganaya", "Diyatalawa", "Ella", "Passara", "Hali Ela", "Kandaketiya", "Girandurukotte", "Meegahakivula"],
  
  Monaragala: ["Monaragala", "Bibile", "Wellawaya", "Buttala", "Katharagama", "Siyambalanduwa", "Medagama", "Thanamalvila", "Madulla", "Okkampitiya"],

  // Sabaragamuwa Province
  Ratnapura: ["Ratnapura", "Embilipitiya", "Balangoda", "Pelmadulla", "Eheliyagoda", "Kuruwita", "Kahawatta", "Rakwana", "Godakawela", "Kalawana", "Opanayaka", "Nivithigala"],
  
  Kegalle: ["Kegalle", "Mawanella", "Rambukkana", "Warakapola", "Dehiowita", "Galigamuwa", "Ruwanwella", "Yatiyantota", "Bulathkohupitiya", "Aranayaka", "Deraniyagala"],

  // North Western Province
  Kurunegala: ["Kurunegala", "Kuliyapitiya", "Polgahawela", "Pannala", "Narammala", "Wariyapola", "Mawathagama", "Nikaweratiya", "Giriulla", "Alawwa", "Bingiriya", "Ibbagamuwa", "Dodangaslanda", "Galgamuwa"],
  
  Puttalam: ["Puttalam", "Chilaw", "Nattandiya", "Wennappuwa", "Anamaduwa", "Marawila", "Dankotuwa", "Pallama", "Mundel", "Madampe", "Kalpitiya", "Lunuwila"]
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

// Update Subjects and Grade based on Category
function updateSubjects() {
  const categoryRadios = document.querySelectorAll('input[name="category"]')
  const subjectSelect = document.getElementById("subject")
  const gradeGroup = document.getElementById("gradeGroup")
  let selectedCategory = null

  categoryRadios.forEach((radio) => {
    if (radio.checked) {
      selectedCategory = radio.value
    }
  })

  subjectSelect.innerHTML = '<option value="">Select Subject</option>'

  if (selectedCategory === "ol") {
    // Show grade selection for O/L
    if (gradeGroup) {
      gradeGroup.style.display = "block"
    }
    
    olSubjects.forEach((subject) => {
      const option = document.createElement("option")
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  } else if (selectedCategory === "al") {
    // Hide grade selection for A/L
    if (gradeGroup) {
      gradeGroup.style.display = "none"
      // Clear grade selection
      document.querySelectorAll('input[name="grade"]').forEach(radio => {
        radio.checked = false
      })
    }
    
    alSubjects.forEach((subject) => {
      const option = document.createElement("option")
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  } else {
    // Hide grade selection if no category selected
    if (gradeGroup) {
      gradeGroup.style.display = "none"
    }
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

    // Validate grade only if O/L is selected
    if (category && category.value === "ol") {
      const grade = document.querySelector('input[name="grade"]:checked')
      if (!grade) {
        showError("gradeError", "Please select a grade")
        isValid = false
      }
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
        const category = document.querySelector('input[name="category"]:checked').value
        const formData = {
          name: document.getElementById("name").value,
          whatsapp: document.getElementById("whatsapp").value,
          district: document.getElementById("district").value,
          town: document.getElementById("town").value,
          category: category,
          subject: document.getElementById("subject").value,
          language: document.querySelector('input[name="language"]:checked').value,
          title: document.getElementById("title").value,
          description: document.getElementById("description").value,
        }

        // Add grade only if O/L is selected
        if (category === "ol") {
          const gradeRadio = document.querySelector('input[name="grade"]:checked')
          if (gradeRadio) {
            formData.grade = gradeRadio.value
          }
        }

        // Show success message
        showSuccessMessage(formData.whatsapp)

        // Reset form
        form.reset()
        
        // Hide grade group after reset
        const gradeGroup = document.getElementById("gradeGroup")
        if (gradeGroup) {
          gradeGroup.style.display = "none"
        }
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