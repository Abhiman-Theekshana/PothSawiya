// Sri Lanka Districts and Towns (same as donate-script.js)
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
};

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

// Initialize request popup functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeRequestPopup()
})

function initializeRequestPopup() {
  // Find the "Request Books" button
  const requestButtons = document.querySelectorAll('.donate-btn')
  
  requestButtons.forEach(button => {
    if (button.textContent.trim() === 'Request Books') {
      button.addEventListener('click', openRequestPopup)
    }
  })

  // Populate districts
  populateRequestDistricts()

  // Setup form handlers
  setupRequestFormHandlers()
}

function openRequestPopup() {
  const popup = document.getElementById('requestPopup')
  if (popup) {
    popup.style.display = 'flex'
    document.body.style.overflow = 'hidden'
  }
}

function closeRequestPopup() {
  const popup = document.getElementById('requestPopup')
  if (popup) {
    popup.style.display = 'none'
    document.body.style.overflow = 'auto'
    document.getElementById('requestForm').reset()
    clearRequestErrors()
  }
}

function populateRequestDistricts() {
  const districtSelect = document.getElementById('requestDistrict')
  if (!districtSelect) return

  const districts = Object.keys(districtsData).sort()
  districts.forEach(district => {
    const option = document.createElement('option')
    option.value = district
    option.textContent = district
    districtSelect.appendChild(option)
  })
}

function updateRequestTowns() {
  const districtSelect = document.getElementById('requestDistrict')
  const townSelect = document.getElementById('requestTown')
  const selectedDistrict = districtSelect.value

  townSelect.innerHTML = '<option value="">Select Town</option>'

  if (selectedDistrict && districtsData[selectedDistrict]) {
    districtsData[selectedDistrict].forEach(town => {
      const option = document.createElement('option')
      option.value = town
      option.textContent = town
      townSelect.appendChild(option)
    })
  }
}

function updateRequestSubjects() {
  const categoryRadios = document.querySelectorAll('input[name="requestCategory"]')
  const subjectSelect = document.getElementById('requestSubject')
  let selectedCategory = null

  categoryRadios.forEach(radio => {
    if (radio.checked) {
      selectedCategory = radio.value
    }
  })

  subjectSelect.innerHTML = '<option value="">Select Subject</option>'

  if (selectedCategory === 'ol') {
    olSubjects.forEach(subject => {
      const option = document.createElement('option')
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  } else if (selectedCategory === 'al') {
    alSubjects.forEach(subject => {
      const option = document.createElement('option')
      option.value = subject
      option.textContent = subject
      subjectSelect.appendChild(option)
    })
  }
}

function setupRequestFormHandlers() {
  // Close popup when clicking outside
  const popup = document.getElementById('requestPopup')
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        closeRequestPopup()
      }
    })
  }

  // Close button
  const closeBtn = document.getElementById('closeRequestPopup')
  if (closeBtn) {
    closeBtn.addEventListener('click', closeRequestPopup)
  }

  // District change handler
  const districtSelect = document.getElementById('requestDistrict')
  if (districtSelect) {
    districtSelect.addEventListener('change', updateRequestTowns)
  }

  // Category change handler
  const categoryRadios = document.querySelectorAll('input[name="requestCategory"]')
  categoryRadios.forEach(radio => {
    radio.addEventListener('change', updateRequestSubjects)
  })
}

function validateRequestForm() {
  clearRequestErrors()
  let isValid = true

  // Name validation
  const name = document.getElementById('requestName').value.trim()
  if (!name) {
    showRequestError('requestNameError', 'Name is required')
    isValid = false
  }

  // WhatsApp validation
  const whatsapp = document.getElementById('requestWhatsapp').value.trim()
  if (!whatsapp) {
    showRequestError('requestWhatsappError', 'WhatsApp number is required')
    isValid = false
  } else if (!/[0-9+\s-]{9,}/.test(whatsapp)) {
    showRequestError('requestWhatsappError', 'Please enter a valid phone number')
    isValid = false
  }

  // NIC validation
  const nic = document.getElementById('requestNic').value.trim()
  if (!nic) {
    showRequestError('requestNicError', 'NIC is required')
    isValid = false
  } else if (!/^([0-9]{9}[xXvV]|[0-9]{12})$/.test(nic)) {
    showRequestError('requestNicError', 'Please enter a valid NIC (9 digits + X/V or 12 digits)')
    isValid = false
  }

  // Category validation
  const category = document.querySelector('input[name="requestCategory"]:checked')
  if (!category) {
    showRequestError('requestCategoryError', 'Please select O/L or A/L')
    isValid = false
  }

  // Subject validation
  const subject = document.getElementById('requestSubject').value
  if (!subject) {
    showRequestError('requestSubjectError', 'Please select a subject')
    isValid = false
  }

  // Language validation
  const language = document.querySelector('input[name="requestLanguage"]:checked')
  if (!language) {
    showRequestError('requestLanguageError', 'Please select a language')
    isValid = false
  }

  // District validation
  const district = document.getElementById('requestDistrict').value
  if (!district) {
    showRequestError('requestDistrictError', 'Please select a district')
    isValid = false
  }

  // Town validation
  const town = document.getElementById('requestTown').value
  if (!town) {
    showRequestError('requestTownError', 'Please select a town')
    isValid = false
  }

  return isValid
}

function showRequestError(elementId, message) {
  const errorElement = document.getElementById(elementId)
  if (errorElement) {
    errorElement.textContent = message
  }
}

function clearRequestErrors() {
  const errorElements = document.querySelectorAll('.request-error')
  errorElements.forEach(error => {
    error.textContent = ''
  })
}

// Export function to be called from HTML
window.closeRequestPopup = closeRequestPopup
window.validateRequestForm = validateRequestForm