/* ==========================================================================
   PORTFOLIO CASE STUDY DATA (Matches Youssef Hessen's Resume & Image Assets)
   ========================================================================== */
const projectData = {
    apex: {
        title: "AD APEX Services Promo",
        category: "Brand Identity & Social Ad",
        imgSrc: "assets/project-apex.jpg",
        role: "Lead Graphic Designer",
        client: "AD Apex Agency",
        timeline: "2 Weeks",
        challenge: "Organizing agency services (social media management, print media, ad marketing, copywriting, brand building) in a single high-impact social media banner without cluttering the canvas.",
        outcome: "Created a 3D-style Instagram frame backdrop with floating heart and comment notifications. A central human element holding a laptop represents the agency's modern approach, while clear Arabic lettering and custom minimalist icons outline services clearly, driving record lead inquiries.",
        tools: ["Adobe Photoshop", "Adobe Illustrator", "Ad Strategy Layouts"]
    },
    "apex-soon": {
        title: "AD APEX 'Coming Soon' Teaser",
        category: "Teaser Campaign / Retouching",
        imgSrc: "assets/project-apex-soon.jpg",
        role: "Lead Graphic Designer",
        client: "AD Apex Agency",
        timeline: "3 Days",
        challenge: "Design an intriguing, luxurious teaser banner for the launch of the agency's rebrand campaign, generating excitement and curiosity on social media channels.",
        outcome: "Developed a photorealistic composite of rich, red velvet stage curtains parting to reveal the sleek white AD Apex logo. Using high-end shadow detailing and modern serif typography, the design established a sense of mystery and drama, resulting in massive engagement ahead of the launch.",
        tools: ["Adobe Photoshop Composite", "Shadow Rendering", "Teaser Typography"]
    },
    "husein-freezer": {
        title: "ElHusien Store: Freezer Eid Ad",
        category: "Product Promo & Humorous Graphic",
        imgSrc: "assets/project-husein-freezer.jpg",
        role: "Graphic Designer",
        client: "ElHusien Store – Home Appliances",
        timeline: "4 Days",
        challenge: "Create a humorous, scroll-stopping graphic for a home appliance store during the Eid Al-Adha season, promoting chest freezers while sharing festive blessings.",
        outcome: "Designed a clever composite featuring a fluffy white sheep popping its head out of a cold, smoking chest freezer, set against a calm blue background with elegant Arabic calligraphy ('عيد أضحى سعيد'). This humorous concept stood out on social media feeds and contributed to a 15% increase in seasonal store engagement.",
        tools: ["Adobe Photoshop", "Canva Layouts", "Calligraphy Integration"]
    },
    coffee: {
        title: "Coffee Shop: The Lightning Brew",
        category: "Creative Compositing / Metaphor",
        imgSrc: "assets/project-coffee.jpg",
        role: "Creative Director & Compositor",
        client: "Local Craft Coffee Shop",
        timeline: "1 Week",
        challenge: "To design a social media promo graphic that visually represents the core value proposition of premium energy and high-grade focus ('كوباية تفوقك' - a cup to wake you up) in a clean, scroll-stopping way that doesn't rely on boring stock photography.",
        outcome: "I combined photo manipulation with typography to create an espresso cup where the crema naturally forms a clean lightning bolt shape. The design uses a radial brown-orange color gradient to center the viewer's eye on the coffee cup. Combined with bold, playful Arabic title typography, this campaign achieved high engagement and recall rates across social channels.",
        tools: ["Adobe Photoshop", "Creative Lighting Manipulation", "Typography Design"]
    },
    cocoa: {
        title: "Cocoa & Co. Iced Chocolate",
        category: "Product Poster / Mockup Layout",
        imgSrc: "assets/project-cocoa.jpg",
        role: "Advertising & Packaging Designer",
        client: "Cocoa & Co.",
        timeline: "4 Days",
        challenge: "Promote a new seasonal menu item (handcrafted Iced Chocolate Latte) with a 20% discount offer. The poster needed to look premium, delicious, and clean, steering away from generic messy fast-food branding styles.",
        outcome: "Designed a balanced split-screen layout: a clean vertical white column showing the product container details and brand logo, contrasted against a warm chocolate-brown background. High-resolution imagery of the cold cup mockup with ice cubes, chocolate drippings, and cocoa truffles on top made the drink look irresistible, while bold, clean modern typography emphasized the 20% discount clearly.",
        tools: ["Adobe Photoshop Mockups", "Product Graphic Composition", "Typography"]
    },
    pulse: {
        title: "Pulse Gym: Dumbbell Lift",
        category: "Commercial Banner & Composite Art",
        imgSrc: "assets/project-pulse.jpg",
        role: "Graphic Designer & Retoucher",
        client: "Pulse Fitness Center",
        timeline: "5 Days",
        challenge: "Create a motivational commercial poster that captures the premium, modern atmosphere of Pulse Gym and inspires viewers to take action ('إصنع قوتك' - build your strength).",
        outcome: "Built a high-contrast composite of a fitness athlete inside a dark gym environment. I implemented dynamic chiaroscuro lighting using glowing emerald green neon accents that reflect off the machinery and highlight the athlete's muscle definition. For the branding, I designed custom Arabic typography that embeds a bicep flex icon directly into the text, aligning perfectly with the gym's energetic identity.",
        tools: ["Adobe Photoshop Retouching", "Custom Neon Lighting Manipulation", "Typography & Logo Layout"]
    },
    "pulse-treadmill": {
        title: "Pulse Gym: Treadmill Goal UI",
        category: "Digital Art & UI Composite",
        imgSrc: "assets/project-pulse-treadmill.jpg",
        role: "Graphic Designer & Retoucher",
        client: "Pulse Fitness Center (Client Account)",
        timeline: "3 Days",
        challenge: "Create an active, motivational perspective shot highlighting treadmill workouts and cardio achievements ('إنزل و حقق سكورك') for social media.",
        outcome: "Crafted a first-person treadmill visual looking at a custom pixel art monitor displaying 'NEW ACHIEVEMENT!' and a glowing green trophy. I retouched the hands on the handle bars to display high-resolution skin details, adding a sleek smartwatch mockup, and set the scene in a premium dark gym interior with neon green backlighting to reflect Pulse's visual style.",
        tools: ["Adobe Photoshop Compositing", "UI Element Design", "Retouching"]
    },
    "pulse-discount": {
        title: "Pulse Gym: 50% Discount Campaign",
        category: "Ad Campaign Layout & Neon Art",
        imgSrc: "assets/project-pulse-discount.jpg",
        role: "Graphic Designer & Retoucher",
        client: "Pulse Fitness Center (Client Account)",
        timeline: "5 Days",
        challenge: "Design an high-impact social media promotional graphic advertising a 50% discount membership offer, ensuring the gym feels premium and motivatonal.",
        outcome: "Created a premium composite featuring a gym athlete leaning against a giant, 3D glowing green neon '50%' symbol. Structured clean, custom Arabic heading font ('خصم') and integrated modern fitness center guidelines with high-contrast chiaroscuro lighting to draw the eye to the offer.",
        tools: ["Adobe Photoshop", "Chiaroscuro Retouching", "Typography Layout"]
    }
};

/* ==========================================================================
   NAVIGATION & MOBILE MENU
   ========================================================================== */
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    
    // Animate hamburger menu bars
    const bars = menuToggle.querySelectorAll('.bar');
    if (navMenu.classList.contains('active')) {
        bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// Close mobile menu on clicking any navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            
            const bars = menuToggle.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
});

/* ==========================================================================
   CASE STUDY MODAL CONTROL
   ========================================================================== */
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalContent = document.getElementById('modal-body-content');
const projectCards = document.querySelectorAll('.project-card');

function openModal(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    // Render case study layout
    modalContent.innerHTML = `
        <div class="modal-detail-grid">
            <div class="modal-visual-column">
                <img src="${data.imgSrc}" alt="${data.title}" class="modal-img">
            </div>
            <div class="modal-info-column">
                <span class="modal-tag">${data.category}</span>
                <h3 class="modal-title">${data.title}</h3>
                
                <div class="modal-meta-grid">
                    <div class="modal-meta-item">
                        <h5>Role</h5>
                        <p>${data.role}</p>
                    </div>
                    <div class="modal-meta-item">
                        <h5>Client</h5>
                        <p>${data.client}</p>
                    </div>
                    <div class="modal-meta-item">
                        <h5>Timeline</h5>
                        <p>${data.timeline}</p>
                    </div>
                    <div class="modal-meta-item">
                        <h5>Category</h5>
                        <p>${data.category}</p>
                    </div>
                </div>

                <div class="modal-section">
                    <h4>The Challenge</h4>
                    <p>${data.challenge}</p>
                </div>

                <div class="modal-section">
                    <h4>The Outcome</h4>
                    <p>${data.outcome}</p>
                </div>

                <div class="modal-section">
                    <h4>Tools & Toolkit</h4>
                    <div class="skills-tags" style="margin-top: 0.5rem;">
                        ${data.tools.map(tool => `<span class="skill-tag">${tool}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Unlock background scroll
}

// Add click listeners to project cards
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        openModal(projectId);
    });
});

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

// Close modal on clicking backdrop overlay
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

/* ==========================================================================
   CONTACT FORM SUBMIT & TOAST
   ========================================================================== */
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent standard page reload

    // Simulate messaging submission success
    showToast();
    contactForm.reset();
});

function showToast() {
    toast.classList.add('show');
    
    // Hide toast after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

/* ==========================================================================
   SCROLL EFFECTS / NAVBAR SHRINK
   ========================================================================== */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.75rem 2rem';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.padding = '1.25rem 2rem';
        navbar.style.boxShadow = 'none';
    }
});
