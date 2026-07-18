/**
 * ==========================================================================
 * HE & SHE UNISEX SALON - MAIN JAVASCRIPT
 * Professional, Vanilla JS Application Logic & Interactive Features
 * ==========================================================================
 */

/* ==========================================================================
   1. CENTRAL BUSINESS CONFIGURATION
   ========================================================================== */
const businessConfig = {
    businessName: "He & She Unisex Salon",
    phone: "+919030784479",
    whatsappNumber: "919030784479",
    secondaryPhone: "+919032416755",
    secondaryPhoneVerified: false,
    googleRating: "4.2",
    googleReviewCount: "397",
    closingTimeText: "10:00 PM",
    completeHoursVerified: false,
    whatsappVerified: false,
    pricesVerified: false,
    offersVerified: false,
    bridalServicesVerified: true,
    appointmentRequired: false
};

/* ==========================================================================
   2. VERIFIED SERVICE PRICES & DATA ARRAYS
   ========================================================================== */
const verifiedServicePrices = [
    {
        category: "Hair",
        service: "Men's Basic Haircut",
        price: "Contact salon",
        note: "Price subject to verification by salon owner"
    },
    {
        category: "Hair",
        service: "Women's Advanced Haircut",
        price: "Contact salon",
        note: "Includes hair wash and blow-dry finish"
    }
];

/* Complete Service Menu Explorer Catalogue */
const serviceMenuCatalogue = [
    {
        id: "hair-1",
        category: "Hair",
        name: "Women's Haircut & Consultation",
        description: "Personalised styling consultation, precision haircut according to facial shape and hair texture, followed by finishing blow-dry.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "hair-2",
        category: "Hair",
        name: "Men's Haircut & Styling",
        description: "Modern scissor or clipper cut, textured layering, neckline cleanup and professional styling advice.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "hair-3",
        category: "Hair",
        name: "Kid's Haircut (Under 12)",
        description: "Comfortable, patient and neat haircut for children in a clean salon environment.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "hair-4",
        category: "Hair",
        name: "Event Blow-Dry & Styling",
        description: "Voluminous blow-dry, sleek straightening, soft curls or tong finish for special occasions and daily confidence.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "col-1",
        category: "Colour",
        name: "Root Touch-Up Colour",
        description: "Precision application of professional hair colour to cover grey roots and blend seamlessly with lengths.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "col-2",
        category: "Colour",
        name: "Global Hair Colouring",
        description: "Rich, uniform hair colour applied from roots to ends based on thorough shade consultation and skin tone match.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "col-3",
        category: "Colour",
        name: "Balayage & Highlights",
        description: "Hand-painted dimensional colour, foil highlights or baby-lights designed to create natural multi-tone depth and shine.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "col-4",
        category: "Colour",
        name: "Creative & Fashion Highlights",
        description: "Bold fashion shades, streak highlights or peekaboo colour placements tailored to personal style.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "groom-1",
        category: "Grooming",
        name: "Beard Trimming & Shaping",
        description: "Precision line-up, length trimming, and symmetrical shaping tailored to jawline structure.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "groom-2",
        category: "Grooming",
        name: "Luxury Clean Shave",
        description: "Traditional hot towel preparation, smooth razor shave, soothing after-shave balm and facial massage.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "groom-3",
        category: "Grooming",
        name: "Men's De-Tan & Scalp Massage",
        description: "Refreshing facial de-tan cleanup paired with a relaxing head massage to relieve urban stress.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "care-1",
        category: "Hair Care",
        name: "Deep Nourishing Hair Spa",
        description: "Intensive conditioning cream bath, steam treatment, and relaxing scalp massage to restore hydration and shine.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "care-2",
        category: "Hair Care",
        name: "Dandruff & Scalp Care Enquiry",
        description: "Targeted cleansing and purifying ritual designed to balance scalp moisture and soothe irritation.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "care-3",
        category: "Hair Care",
        name: "Hair Smoothing & Straightening",
        description: "Professional chemical service for frizz control and straight look. Requires thorough consultation on hair health.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "care-4",
        category: "Hair Care",
        name: "Keratin Protein Treatment Enquiry",
        description: "Protein infusion process designed to smooth cuticles and manage frizz. Suitability confirmed upon inspection.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "skin-1",
        category: "Skin and Beauty",
        name: "Express Facial Cleanup",
        description: "Deep cleansing, gentle exfoliation, blackhead removal and hydrating face mask suitable for busy schedules.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "skin-2",
        category: "Skin and Beauty",
        name: "Radiance & Glow Facial",
        description: "Multi-step facial care using skin-nourishing creams and gentle massage techniques to brighten complexion.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "skin-3",
        category: "Skin and Beauty",
        name: "Sun De-Tan Facial Care",
        description: "Soothing care designed to gently remove sun tan and restore even skin tone.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "skin-4",
        category: "Skin and Beauty",
        name: "Eyebrow Threading & Shaping",
        description: "Precise shaping of eyebrows to complement eye symmetry and facial contours.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "skin-5",
        category: "Skin and Beauty",
        name: "Facial Hair Threading (Upper Lip / Forehead)",
        description: "Gentle thread removal of fine unwanted facial hair with soothing post-care application.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "wax-1",
        category: "Waxing",
        name: "Full Arms & Underarms Waxing",
        description: "Hygienic hair removal using skin-friendly wax formulated for smooth, clean results.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "wax-2",
        category: "Waxing",
        name: "Full Legs Waxing",
        description: "Complete leg hair removal with soothing post-wax lotion application to calm skin.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "wax-3",
        category: "Waxing",
        name: "Full Body Waxing Enquiry",
        description: "Comprehensive body waxing package available upon advance booking and consultation.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "hands-1",
        category: "Hands and Feet",
        name: "Classic Manicure",
        description: "Nail shaping, cuticle trimming, gentle hand exfoliation, relaxing hand massage and optional nail polish.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "hands-2",
        category: "Hands and Feet",
        name: "Relaxing Spa Pedicure",
        description: "Foot soak, heel scrubbing, cuticle cleanup, calf massage and nail conditioning for tired feet.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "bridal-1",
        category: "Bridal and Occasion",
        name: "Bridal Makeup & Hairstyling Enquiry",
        description: "Complete bridal beauty packages including saree draping, intricate hair updos and long-lasting makeup consultation.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "bridal-2",
        category: "Bridal and Occasion",
        name: "Groom's Event Styling & Facial Package",
        description: "Pre-wedding facial glow cleanup, haircut styling, beard design and soothing massage for the groom.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    },
    {
        id: "bridal-3",
        category: "Bridal and Occasion",
        name: "Party & Guest Occasion Styling",
        description: "Elegant hairstyling and party makeup for family members and wedding guests.",
        estimatedDuration: "Duration confirmed during booking",
        basePrice: "Contact for current price"
    }
];

/* Gallery Items Catalogue */
const galleryCatalogue = [
    {
        id: "gal-1",
        category: "Exterior",
        title: "Salon Storefront (Evening View)",
        image: "assets/images/storefront-evening.webp",
        alt: "He and She Unisex Salon Evening Storefront with Blue and White Illumination in Gachibowli"
    },
    {
        id: "gal-2",
        category: "Exterior",
        title: "Salon Entrance (Daytime View)",
        image: "assets/images/storefront-day.webp",
        alt: "Clear Daytime View of He and She Unisex Salon Storefront near Reliance Super Market"
    },
    {
        id: "gal-3",
        category: "Interior",
        title: "Salon Styling Stations & Seating",
        image: "assets/images/salon-interior.webp",
        alt: "Modern Salon Interior Seating, Mirrors and Professional Equipment at He & She Salon"
    },
    {
        id: "gal-4",
        category: "Brand",
        title: "Salon Signboard Identity",
        image: "assets/images/salon-signboard.webp",
        alt: "Clean Signboard Photograph of He & She Unisex Salon in Indra Nagar Gachibowli"
    },
    {
        id: "gal-5",
        category: "Hair Services",
        title: "Precision Hair styling & Cuts",
        image: "assets/images/haircut-service.webp",
        alt: "Representative Photograph showing Professional Unisex Haircut and Styling Service"
    },
    {
        id: "gal-6",
        category: "Hair Services",
        title: "Professional Hair Colouring",
        image: "assets/images/hair-colouring.webp",
        alt: "Representative Photograph of Hair Colour Application and Highlighting Techniques"
    },
    {
        id: "gal-7",
        category: "Hair Services",
        title: "Nourishing Hair Spa Rituals",
        image: "assets/images/hair-spa.webp",
        alt: "Representative Photograph of Deep Conditioning Hair Spa and Scalp Care"
    },
    {
        id: "gal-8",
        category: "Grooming",
        title: "Men's Beard Grooming & Shaving",
        image: "assets/images/grooming-service.webp",
        alt: "Representative Photograph of Men's Beard Trimming, Shaping and Luxury Shaving"
    },
    {
        id: "gal-9",
        category: "Beauty Services",
        title: "Skin Facial & De-Tan Cleanup",
        image: "assets/images/facial-service.webp",
        alt: "Representative Photograph of Facial Cleanup and Skin Care Treatment"
    },
    {
        id: "gal-10",
        category: "Beauty Services",
        title: "Professional Waxing & Threading",
        image: "assets/images/waxing-service.webp",
        alt: "Representative Photograph showing Hygienic Body Waxing and Eyebrow Threading"
    },
    {
        id: "gal-11",
        category: "Beauty Services",
        title: "Manicure & Pedicure Care",
        image: "assets/images/manicure-pedicure.webp",
        alt: "Representative Photograph of Relaxing Hand and Foot Care Manicure Pedicure"
    },
    {
        id: "gal-12",
        category: "Beauty Services",
        title: "Bridal & Special Occasion Styling",
        image: "assets/images/bridal-service.webp",
        alt: "Representative Photograph showing Bridal Makeup and Occasion Hairstyling"
    }
];


/* ==========================================================================
   3. INITIALISATION & DOM CONTENT LOADED
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Apply central configuration across UI
    applyBusinessConfiguration();

    // Initialize interactive modules
    initStickyHeader();
    initMobileNavigation();
    initSmoothScrolling();
    initSectionAnimations();
    initServiceMenuExplorer();
    initGalleryAndLightbox();
    initFAQAccordion();
    initServiceActions();
    initAppointmentForm();
    initCopyAddressButton();
    initBackToTop();
    initCurrentYear();

    console.info(`[He & She Salon] Website initialized successfully. Business Config loaded:`, businessConfig);
});


/* ==========================================================================
   4. APPLY CENTRAL BUSINESS CONFIGURATION
   ========================================================================== */
function applyBusinessConfiguration() {
    // 4.1 Check WhatsApp Verification status
    if (!businessConfig.whatsappVerified) {
        console.warn(`[DEV NOTICE] WhatsApp number (${businessConfig.whatsappNumber}) is currently unverified by owner. Remember to verify active status before final publication.`);
    }

    // 4.2 Check Prices Verification status
    if (!businessConfig.pricesVerified) {
        console.info(`[DEV NOTICE] Fixed service prices are set to unverified. All dynamic prices will display "Contact for current price" or "Ask current price".`);
    }

    // 4.3 Check Complete Hours Verification status
    if (!businessConfig.completeHoursVerified) {
        const topHoursEl = document.getElementById('top-bar-hours');
        if (topHoursEl) {
            topHoursEl.textContent = "Call to confirm today’s hours";
        }
    }

    // 4.4 Check Secondary Phone Verification
    const secondaryPhoneWrapper = document.getElementById('secondary-phone-wrapper');
    if (secondaryPhoneWrapper) {
        if (businessConfig.secondaryPhoneVerified) {
            secondaryPhoneWrapper.classList.remove('hidden');
        } else {
            secondaryPhoneWrapper.classList.add('hidden');
        }
    }
}


/* ==========================================================================
   5. STICKY HEADER & ACTIVE NAV HIGHLIGHTING
   ========================================================================== */
function initStickyHeader() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }, { passive: true });

    // Active Navigation Link Highlighting via IntersectionObserver
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-list .mobile-nav-link');

    if ('IntersectionObserver' in window && sections.length > 0) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href === `#${currentId}`) {
                            link.classList.add('active');
                        } else {
                            link.classList.remove('active');
                        }
                    });
                }
            });
        }, {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        });

        sections.forEach(section => navObserver.observe(section));
    }
}


/* ==========================================================================
   6. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNavigation() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const closeBtn = document.getElementById('mobile-close-btn');
    const navDrawer = document.getElementById('mobile-nav');
    const backdrop = document.getElementById('mobile-backdrop');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');

    if (!menuBtn || !navDrawer || !backdrop) return;

    function openMenu() {
        navDrawer.classList.add('open');
        navDrawer.setAttribute('aria-hidden', 'false');
        backdrop.classList.add('open');
        backdrop.setAttribute('aria-hidden', 'false');
        menuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        if (closeBtn) closeBtn.focus();
    }

    function closeMenu() {
        navDrawer.classList.remove('open');
        navDrawer.setAttribute('aria-hidden', 'true');
        backdrop.classList.remove('open');
        backdrop.setAttribute('aria-hidden', 'true');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        menuBtn.focus();
    }

    menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    backdrop.addEventListener('click', closeMenu);

    // Close when selecting any link inside drawer
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navDrawer.classList.contains('open')) {
            closeMenu();
        }
    });
}


/* ==========================================================================
   7. SMOOTH SCROLLING FOR INTERNAL LINKS
   ========================================================================== */
function initSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    const header = document.getElementById('main-header');

    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = header ? header.offsetHeight - 12 : 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


/* ==========================================================================
   8. SECTION REVEAL ANIMATIONS (INTERSECTION OBSERVER)
   ========================================================================== */
function initSectionAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.section-header, .service-card, .value-card, .why-card, .review-summary-card, .process-step-card');

    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        });

        revealElements.forEach(el => {
            el.classList.add('reveal-on-scroll');
            revealObserver.observe(el);
        });
    }
}


/* ==========================================================================
   9. INTERACTIVE SERVICE MENU EXPLORER
   ========================================================================== */
function initServiceMenuExplorer() {
    const container = document.getElementById('menu-list-container');
    const searchInput = document.getElementById('service-search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');
    const filterTabs = document.querySelectorAll('.menu-filter-tabs .filter-tab');
    const noResultsBox = document.getElementById('menu-no-results');
    const resetFiltersBtn = document.getElementById('reset-filters-btn');

    if (!container) return;

    let currentFilter = 'All';
    let searchQuery = '';

    // Render cards based on current state
    function renderMenuItems() {
        const filtered = serviceMenuCatalogue.filter(item => {
            const matchesCategory = (currentFilter === 'All' || item.category === currentFilter);
            const matchesSearch = !searchQuery || 
                item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.category.toLowerCase().includes(searchQuery.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = '';
            if (noResultsBox) noResultsBox.classList.remove('hidden');
            return;
        }

        if (noResultsBox) noResultsBox.classList.add('hidden');

        // Generate HTML
        container.innerHTML = filtered.map(item => {
            // Determine price string based on verification state
            const priceText = businessConfig.pricesVerified ? item.basePrice : "Contact for current price";
            
            const waText = encodeURIComponent(`Hello He & She Unisex Salon, I would like to enquire about ${item.name} (${item.category}). Please confirm the current price and available appointment times.`);
            const waUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${waText}`;

            return `
                <div class="menu-item-card" data-category="${item.category}">
                    <div>
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <span class="menu-item-category">${item.category}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                    </div>
                    <div>
                        <div class="menu-item-meta">
                            <span class="meta-duration">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7z"/></svg>
                                ${item.estimatedDuration}
                            </span>
                            <span class="meta-price">
                                <strong>₹</strong> ${priceText}
                            </span>
                        </div>
                        <div class="menu-item-actions">
                            <a href="#appointment" class="btn btn-outline btn-sm ask-price-action flex-grow-1" data-service="${item.name}">Ask Price / Details</a>
                            <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm flex-grow-1">WhatsApp Book</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        // Re-attach listeners to dynamically created ask price links
        attachAskPriceListeners();
    }

    // Attach search input listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (clearSearchBtn) {
                if (searchQuery.length > 0) {
                    clearSearchBtn.classList.remove('hidden');
                } else {
                    clearSearchBtn.classList.add('hidden');
                }
            }
            renderMenuItems();
        });
    }

    // Attach clear search button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchInput.focus();
            }
            searchQuery = '';
            clearSearchBtn.classList.add('hidden');
            renderMenuItems();
        });
    }

    // Attach tab click listeners
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            filterTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            currentFilter = this.getAttribute('data-filter');
            renderMenuItems();
        });
    });

    // Reset filters button
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            searchQuery = '';
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
            currentFilter = 'All';
            filterTabs.forEach(t => {
                const f = t.getAttribute('data-filter');
                if (f === 'All') {
                    t.classList.add('active');
                    t.setAttribute('aria-selected', 'true');
                } else {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                }
            });
            renderMenuItems();
        });
    }

    // Initial render
    renderMenuItems();
}


/* ==========================================================================
   10. GALLERY FILTERING & ACCESSIBLE LIGHTBOX
   ========================================================================== */
function initGalleryAndLightbox() {
    const grid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.gallery-filter-buttons .gallery-filter-btn');
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCategory = document.getElementById('lightbox-category');
    const closeBtn = document.getElementById('lightbox-close-btn');
    const prevBtn = document.getElementById('lightbox-prev-btn');
    const nextBtn = document.getElementById('lightbox-next-btn');
    const backdrop = document.getElementById('lightbox-backdrop');

    if (!grid || !lightbox) return;

    let currentCategoryFilter = 'All';
    let filteredGalleryItems = [...galleryCatalogue];
    let currentLightboxIndex = 0;

    // Render Gallery Items
    function renderGallery() {
        filteredGalleryItems = galleryCatalogue.filter(item => {
            return currentCategoryFilter === 'All' || item.category === currentCategoryFilter;
        });

        grid.innerHTML = filteredGalleryItems.map((item, idx) => `
            <div class="gallery-item" role="button" tabindex="0" aria-label="View ${item.title} photograph in lightbox" data-idx="${idx}">
                <img src="${item.image}" alt="${item.alt}" width="380" height="285" onerror="this.onerror=null; this.classList.add('image-fallback-active');">
                <div class="gallery-overlay">
                    <span class="gallery-badge">${item.category}</span>
                    <h3 class="gallery-item-title">${item.title}</h3>
                </div>
            </div>
        `).join('');

        // Attach click & keyboard listeners to each gallery card
        const cards = grid.querySelectorAll('.gallery-item');
        cards.forEach((card, idx) => {
            card.addEventListener('click', () => openLightbox(idx));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(idx);
                }
            });
        });
    }

    // Filter Button Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            currentCategoryFilter = this.getAttribute('data-gallery-filter');
            renderGallery();
        });
    });

    // Lightbox Controls
    function openLightbox(index) {
        if (index < 0 || index >= filteredGalleryItems.length) return;
        currentLightboxIndex = index;
        const item = filteredGalleryItems[currentLightboxIndex];

        if (lightboxImg) {
            lightboxImg.src = item.image;
            lightboxImg.alt = item.alt;
        }
        if (lightboxTitle) lightboxTitle.textContent = item.title;
        if (lightboxCategory) lightboxCategory.textContent = item.category;

        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        if (closeBtn) closeBtn.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lightboxImg) lightboxImg.src = '';
    }

    function showPrev() {
        if (filteredGalleryItems.length === 0) return;
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredGalleryItems.length) % filteredGalleryItems.length;
        openLightbox(currentLightboxIndex);
    }

    function showNext() {
        if (filteredGalleryItems.length === 0) return;
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredGalleryItems.length;
        openLightbox(currentLightboxIndex);
    }

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (backdrop) backdrop.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);
    if (nextBtn) nextBtn.addEventListener('click', showNext);

    // Keyboard navigation inside lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // Touch swipe support for mobile lightbox
    let touchStartX = 0;
    let touchEndX = 0;
    if (lightboxImg) {
        lightboxImg.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightboxImg.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) showNext(); // Swipe left -> next
                else showPrev(); // Swipe right -> prev
            }
        }, { passive: true });
    }

    // Initial render
    renderGallery();
}


/* ==========================================================================
   11. FREQUENTLY ASKED QUESTIONS ACCORDION
   ========================================================================== */
function initFAQAccordion() {
    const toggles = document.querySelectorAll('.faq-toggle');
    if (toggles.length === 0) return;

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const targetId = this.getAttribute('aria-controls');
            const answer = document.getElementById(targetId);

            // Close all other open items for clean accordion UX
            toggles.forEach(t => {
                if (t !== this) {
                    t.setAttribute('aria-expanded', 'false');
                    const oId = t.getAttribute('aria-controls');
                    const oAns = document.getElementById(oId);
                    if (oAns) oAns.classList.add('hidden');
                }
            });

            // Toggle current item
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                if (answer) answer.classList.add('hidden');
            } else {
                this.setAttribute('aria-expanded', 'true');
                if (answer) answer.classList.remove('hidden');
            }
        });
    });
}


/* ==========================================================================
   12. SERVICE ACTIONS (ASK PRICE & PREFILL FORM/WHATSAPP)
   ========================================================================== */
function attachAskPriceListeners() {
    const askButtons = document.querySelectorAll('.ask-price-action');
    const formServiceInput = document.getElementById('form-service');
    const formCategorySelect = document.getElementById('form-category');

    askButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const serviceName = this.getAttribute('data-service');
            if (!serviceName) return;

            // If scrolling to form, auto-fill the required service input
            if (formServiceInput) {
                formServiceInput.value = serviceName;
                formServiceInput.focus();
            }
        });
    });
}

function initServiceActions() {
    attachAskPriceListeners();
}


/* ==========================================================================
   13. APPOINTMENT-ENQUIRY FORM VALIDATION & WHATSAPP SUBMISSION
   ========================================================================== */
function initAppointmentForm() {
    const form = document.getElementById('appointment-form');
    if (!form) return;

    // Prevent past date selection on preferredDate input
    const dateInput = document.getElementById('form-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    const resetBtn = document.getElementById('form-reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            // Clear all inline error states on reset
            const errorInputs = form.querySelectorAll('.input-error');
            const errorMessages = form.querySelectorAll('.error-message');
            errorInputs.forEach(inp => inp.classList.remove('input-error'));
            errorMessages.forEach(msg => msg.textContent = '');
        });
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form fields
        let isValid = true;

        // 13.1 Full Name
        const nameInput = document.getElementById('form-name');
        const nameErr = document.getElementById('error-name');
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            nameInput.classList.add('input-error');
            if (nameErr) nameErr.textContent = 'Please enter your full name.';
            isValid = false;
        } else {
            nameInput.classList.remove('input-error');
            if (nameErr) nameErr.textContent = '';
        }

        // 13.2 Phone Number (Indian phone format check: 10 digits or country code)
        const phoneInput = document.getElementById('form-phone');
        const phoneErr = document.getElementById('error-phone');
        const phoneClean = phoneInput.value.replace(/[\s\-\(\)]/g, '');
        const phoneRegex = /^(\+91|0)?[6-9]\d{9}$/;
        if (!phoneRegex.test(phoneClean) && phoneClean.length < 10) {
            phoneInput.classList.add('input-error');
            if (phoneErr) phoneErr.textContent = 'Please enter a valid 10-digit Indian phone number.';
            isValid = false;
        } else {
            phoneInput.classList.remove('input-error');
            if (phoneErr) phoneErr.textContent = '';
        }

        // 13.3 Service Category
        const categoryInput = document.getElementById('form-category');
        const categoryErr = document.getElementById('error-category');
        if (!categoryInput.value) {
            categoryInput.classList.add('input-error');
            if (categoryErr) categoryErr.textContent = 'Please select a service category.';
            isValid = false;
        } else {
            categoryInput.classList.remove('input-error');
            if (categoryErr) categoryErr.textContent = '';
        }

        // 13.4 Service Required
        const serviceInput = document.getElementById('form-service');
        const serviceErr = document.getElementById('error-service');
        if (!serviceInput.value.trim()) {
            serviceInput.classList.add('input-error');
            if (serviceErr) serviceErr.textContent = 'Please specify the exact service needed.';
            isValid = false;
        } else {
            serviceInput.classList.remove('input-error');
            if (serviceErr) serviceErr.textContent = '';
        }

        // 13.5 Preferred Date
        const dateErr = document.getElementById('error-date');
        if (!dateInput.value) {
            dateInput.classList.add('input-error');
            if (dateErr) dateErr.textContent = 'Please choose a preferred appointment date.';
            isValid = false;
        } else {
            // Check if selected date is in the past
            const selectedDate = new Date(dateInput.value);
            const now = new Date();
            now.setHours(0, 0, 0, 0);
            if (selectedDate < now) {
                dateInput.classList.add('input-error');
                if (dateErr) dateErr.textContent = 'Preferred date cannot be in the past.';
                isValid = false;
            } else {
                dateInput.classList.remove('input-error');
                if (dateErr) dateErr.textContent = '';
            }
        }

        // 13.6 Preferred Time
        const timeInput = document.getElementById('form-time');
        const timeErr = document.getElementById('error-time');
        if (!timeInput.value) {
            timeInput.classList.add('input-error');
            if (timeErr) timeErr.textContent = 'Please select your timing preference.';
            isValid = false;
        } else {
            timeInput.classList.remove('input-error');
            if (timeErr) timeErr.textContent = '';
        }

        // If validation fails, focus first error input and halt
        if (!isValid) {
            const firstErr = form.querySelector('.input-error');
            if (firstErr) firstErr.focus();
            return;
        }

        // Optional fields
        const detailsInput = document.getElementById('form-details');
        const visitTypeInput = document.getElementById('form-visit-type');
        const requirementInput = document.getElementById('form-requirement');
        const careInput = document.getElementById('form-care');
        const messageInput = document.getElementById('form-message');
        const imageCheckInput = document.getElementById('form-image-check');

        // Build exact formatted WhatsApp message string required by specification
        let waText = `Hello He & She Unisex Salon,\n\nI would like to request an appointment.\n\n`;
        waText += `Name: ${nameInput.value.trim()}\n`;
        waText += `Phone: ${phoneInput.value.trim()}\n`;
        waText += `Service Category: ${categoryInput.value}\n`;
        waText += `Service Required: ${serviceInput.value.trim()}\n`;
        waText += `Preferred Date: ${dateInput.value}\n`;
        waText += `Preferred Time: ${timeInput.value}\n`;
        waText += `Hair Length or Service Area: ${detailsInput && detailsInput.value.trim() ? detailsInput.value.trim() : 'Not specified'}\n`;
        waText += `Customer Type: ${visitTypeInput ? visitTypeInput.value : 'Not specified'}\n`;
        waText += `Reference Style or Requirement: ${requirementInput && requirementInput.value.trim() ? requirementInput.value.trim() : 'None'}\n`;
        waText += `Special-Care Information: ${careInput && careInput.value.trim() ? careInput.value.trim() : 'None declared'}\n`;
        waText += `Additional Message: ${messageInput && messageInput.value.trim() ? messageInput.value.trim() : 'None'}\n\n`;

        if (imageCheckInput && imageCheckInput.checked) {
            waText += `I can also share a reference image through WhatsApp.\n\n`;
        }

        waText += `Please confirm the current price, expected duration and available appointment time.`;

        const encodedMessage = encodeURIComponent(waText);
        const targetUrl = `https://wa.me/${businessConfig.whatsappNumber}?text=${encodedMessage}`;

        // Prevent duplicate immediate submission while opening
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `Opening WhatsApp...`;
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 3000);
        }

        // Open WhatsApp in new tab
        window.open(targetUrl, '_blank', 'noopener,noreferrer');
    });
}


/* ==========================================================================
   14. COPY ADDRESS BUTTON
   ========================================================================== */
function initCopyAddressButton() {
    const copyBtn = document.getElementById('copy-address-btn');
    if (!copyBtn) return;

    const addressText = `He & She Unisex Salon, Beside Reliance Super Market, Indra Nagar, Rajiv Gandhi Nagar, Gachibowli, Hyderabad, Telangana 500032`;

    copyBtn.addEventListener('click', () => {
        function showSuccess() {
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✓ Address Copied';
            copyBtn.classList.add('btn-primary');
            copyBtn.classList.remove('btn-secondary');

            setTimeout(() => {
                copyBtn.textContent = originalText;
                copyBtn.classList.remove('btn-primary');
                copyBtn.classList.add('btn-secondary');
            }, 2200);
        }

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(addressText)
                .then(showSuccess)
                .catch(err => {
                    console.error('Clipboard write failed:', err);
                    fallbackCopyTextToClipboard(addressText, showSuccess);
                });
        } else {
            fallbackCopyTextToClipboard(addressText, showSuccess);
        }
    });

    function fallbackCopyTextToClipboard(text, callback) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful && callback) callback();
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        document.body.removeChild(textArea);
    }
}


/* ==========================================================================
   15. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
    const btn = document.getElementById('back-to-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


/* ==========================================================================
   16. DYNAMIC COPYRIGHT YEAR
   ========================================================================== */
function initCurrentYear() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}
