// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

// Toggle mobile menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when a link is clicked
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    }, 300)
  })
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  const navContainer = document.querySelector(".nav-container")
  if (navContainer && mobileMenu) {
    const isClickInsideNav = navContainer.contains(e.target)
    const isClickInsideMenu = mobileMenu.contains(e.target)
    const isHamburgerActive = hamburger.classList.contains("active")
    if (isHamburgerActive && !isClickInsideNav && !isClickInsideMenu) {
      hamburger.classList.remove("active")
      mobileMenu.classList.remove("active")
    }
  }
})

// Smooth scroll for navigation links
const allNavLinks = document.querySelectorAll('[href^="#"]')
allNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href")
    if (href && href !== "#") {
      e.preventDefault()
      const targetId = href.substring(1)
      const target = document.getElementById(targetId)
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  })
})

// Add scroll event for navbar background
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backdropFilter = "blur(15px)"
    navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.3)"
  } else {
    navbar.style.backdropFilter = "blur(10px)"
    navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.2)"
  }
})

// Only run this code if the element exists (for olfeed.html or alfeed.html pages)
const donationContainer = document.getElementById("olFeed")
if (donationContainer) {
  donationContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("donation-btn")) {
      const donationId = e.target.getAttribute("data-id")
      console.log("Viewing donation details:", donationId)
      // You can add modal or navigation logic here
    }
  })
}

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe donation cards as they load
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".donation-card")
  cards.forEach((card) => {
    observer.observe(card)
  })
})

const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1 && node.classList.contains("donation-card")) {
          observer.observe(node)
        }
      })
    }
  })
})

const feedContainer = document.getElementById("olFeed")
if (feedContainer) {
  mutationObserver.observe(feedContainer, { childList: true })
}