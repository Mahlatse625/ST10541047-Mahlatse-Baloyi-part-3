
document.addEventListener("DOMContentLoaded", function () {

    // 1. Search and filter accommodation listings
    const search = document.querySelector("#listingSearch");
    const locationFilter = document.querySelector("#locationFilter");
    const priceSort = document.querySelector("#priceSort");
    const listingContainer = document.querySelector("#listingContainer");

    if (listingContainer) {
        function updateListings() {
            const cards = Array.from(
                listingContainer.querySelectorAll("[data-listing]")
            );

            const searchText = (search?.value || "").toLowerCase();
            const location = (locationFilter?.value || "all").toLowerCase();

            cards.forEach(function (card) {
                const text = card.textContent.toLowerCase();
                const cardLocation =
                    (card.dataset.location || "").toLowerCase();

                const matchesSearch = text.includes(searchText);
                const matchesLocation =
                    location === "all" || location === cardLocation;

                card.hidden = !(matchesSearch && matchesLocation);
            });

            if (priceSort && priceSort.value !== "default") {
                cards.sort(function (a, b) {
                    const priceA = Number(a.dataset.price || 0);
                    const priceB = Number(b.dataset.price || 0);

                    return priceSort.value === "low-high"
                        ? priceA - priceB
                        : priceB - priceA;
                });

                cards.forEach(function (card) {
                    listingContainer.appendChild(card);
                });
            }

            const results = document.querySelector("#listingResults");

            if (results) {
                const count = cards.filter(card => !card.hidden).length;
                results.textContent =
                    count + " accommodation option(s) found.";
            }
        }

        search?.addEventListener("input", updateListings);
        locationFilter?.addEventListener("change", updateListings);
        priceSort?.addEventListener("change", updateListings);

        updateListings();
    }

    // 2. Enlarge pictures in a lightbox
    const lightbox = document.querySelector("#imageLightbox");
    const largeImage = document.querySelector("#lightboxImage");
    const caption = document.querySelector("#lightboxCaption");
    const closeButton =
        document.querySelector("[data-lightbox-close]");

    function closeLightbox() {
        if (lightbox) {
            lightbox.hidden = true;
            document.body.classList.remove("lightbox-open");
        }
    }

    document.querySelectorAll("[data-lightbox]").forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            if (!lightbox || !largeImage) return;

            const image = item.querySelector("img") || item;

            largeImage.src =
                item.dataset.fullImage || image.dataset.fullImage || image.src;

            largeImage.alt = image.alt || "Accommodation photograph";

            if (caption) {
                caption.textContent = image.alt || "";
            }

            lightbox.hidden = false;
            document.body.classList.add("lightbox-open");
        });
    });

    closeButton?.addEventListener("click", closeLightbox);

    lightbox?.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });

    // 3. Open and close FAQ answers
    document.querySelectorAll("[data-accordion-button]").forEach(
        function (button) {
            button.addEventListener("click", function () {
                const panelId = button.getAttribute("aria-controls");
                const panel = document.getElementById(panelId);

                if (!panel) return;

                const isOpen =
                    button.getAttribute("aria-expanded") === "true";

                button.setAttribute("aria-expanded", String(!isOpen));
                panel.hidden = isOpen;
            });
        }
    );

    // 4. Validate the accommodation enquiry form
    const enquiryForm = document.querySelector("#enquiryForm");

    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!enquiryForm.reportValidity()) return;

            const data = new FormData(enquiryForm);
            const name = String(data.get("name") || "").trim();
            const email = String(data.get("email") || "").trim();
            const location = String(data.get("location") || "").trim();
            const budget = Number(data.get("budget") || 0);

            const feedback =
                enquiryForm.querySelector("#enquiryFeedback");

            if (!name || !email || !location || budget <= 0) {
                if (feedback) {
                    feedback.textContent =
                        "Please enter your name, email, location and a valid budget.";
                }
                return;
            }

            if (feedback) {
                feedback.textContent =
                    "Thank you, " + name +
                    "! Your enquiry details have been checked. " +
                    "Location: " + location +
                    ". Monthly budget: R" + budget +
                    ". This demonstration has not sent or saved your enquiry.";
            }

            enquiryForm.reset();
        });
    }

    // 5. Validate the contact form
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!contactForm.reportValidity()) return;

            const data = new FormData(contactForm);
            const name = String(data.get("name") || "").trim();
            const email = String(data.get("email") || "").trim();
            const message = String(data.get("message") || "").trim();
            const feedback =
                contactForm.querySelector("#contactFeedback");

            if (!name || !email || message.length < 10) {
                if (feedback) {
                    feedback.textContent =
                        "Please complete all fields and enter a message of at least 10 characters.";
                }
                return;
            }

            if (feedback) {
                feedback.textContent =
                    "Your contact details are valid. " +
                    "The message has not been sent automatically.";
            }
        });
    }
// =====================================
// PART 3 - INTERACTIVE MAP
// =====================================

const mapElement = document.querySelector("#accommodationMap");

if (mapElement && window.L) {

    const map = L.map("accommodationMap").setView(
        [-26.19, 28.03],
        12
    );

    
    L.tileLayer(
    "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
    {
        maxZoom: 18,
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);


    // Rosebank
    L.marker([-26.145, 28.041])
        .addTo(map)
        .bindPopup(
            "<strong>Rosebank</strong><br>Student accommodation area"
        );


    // Auckland Park
    L.marker([-26.183, 28.005])
        .addTo(map)
        .bindPopup(
            "<strong>Auckland Park</strong><br>Near the University of Johannesburg"
        );


    // Braamfontein
    L.marker([-26.192, 28.031])
        .addTo(map)
        .bindPopup(
            "<strong>Braamfontein</strong><br>Near Wits University"
        );
}
});
