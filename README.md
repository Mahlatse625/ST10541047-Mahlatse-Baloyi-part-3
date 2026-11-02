# Student Stay SA

## Student Information

- **Student Name:** ______________________________
- **Student Number:** ____________________________
- **Module:** Web Development (Introduction)
- **Module Code:** WEDE5020
- **Project:** Student Stay SA
- **Parts Covered:** Part 1 and Part 2

## 1. Project Overview

Student Stay SA is a proposed student accommodation information website designed to help university and college students find accommodation information near their campuses. The website focuses on presenting accommodation options in a clear and organised way.

The project was developed in stages. **Part 1** established the foundation of the website using HTML, while **Part 2** added CSS styling and responsive design so that the website can adapt to different screen sizes.

The website contains five connected pages: Home, Listings, About Us, Enquiry and Contact.

## 2. Website Goals and Objectives

The main goals of Student Stay SA are to:

- Provide students with easy-to-understand accommodation information.
- Present accommodation options according to location and estimated monthly price.
- Make it easy for students to submit accommodation enquiries.
- Provide clear contact information.
- Create a professional, organised and easy-to-navigate website.
- Make the website usable on desktop, tablet and mobile screen sizes.

## 3. Target Audience

- University students.
- College students.
- New students searching for accommodation.
- Returning students looking for alternative accommodation.
- Parents or guardians assisting students with accommodation decisions.
- Students looking for accommodation close to campus.

## 4. Key Features

- Homepage introducing Student Stay SA.
- Accommodation listing cards.
- Accommodation locations and illustrative monthly prices.
- Realistic accommodation photographs.
- About Us information.
- Enquiry form.
- Contact information and contact form.
- Navigation between all five pages.
- External CSS styling.
- Responsive layouts for desktop, tablet and mobile.
- Responsive images using `srcset` and `sizes`.
- Hover and focus styling.

The accommodation names, descriptions and prices are illustrative project content and are not presented as verified live rental advertisements.

## 5. Website Pages / Sitemap

```text
Student Stay SA
├── Home
│   └── index.html
├── Listings
│   └── listings.html
├── About Us
│   └── about.html
├── Enquiry
│   └── enquiry.html
└── Contact
    └── contact.html
```

# PART 1 – BUILDING THE FOUNDATION

## 6. Part 1 – HTML Development

Part 1 focused on creating the basic structure and content of the Student Stay SA website.

The website was developed using HTML5 to create the structure of each page. The pages use headings, paragraphs, lists, images, links, navigation, sections, articles, forms and footer content.

The five HTML pages were connected using navigation links so users can move between the different sections of the website.

Part 1 was initially developed strictly using HTML before CSS styling was introduced in Part 2.

### Part 1 Work Completed

- Planned the website and target audience.
- Created the Student Stay SA project concept.
- Researched website content and images.
- Created five HTML pages.
- Added headings, paragraphs, lists and accommodation information.
- Added accommodation photographs.
- Created enquiry and contact forms using HTML.
- Added navigation links between all pages.
- Organised the project into a clear file and folder structure.
- Tested the website pages and navigation.

## 7. Part 1 File and Folder Structure

```text
Student Stay SA
├── index.html
├── listings.html
├── about.html
├── enquiry.html
├── contact.html
├── README.md
└── assets
    └── css
        └── style.css
```

The `style.css` file was introduced and used as part of Part 2.

# PART 2 – CSS STYLING AND RESPONSIVE DESIGN

## 8. Part 2 – CSS Development

Part 2 focused on improving the visual appearance of the website and making the website responsive.

An external CSS stylesheet was created at:

```text
assets/css/style.css
```

The stylesheet is linked to all five HTML pages using:

```html
<link rel="stylesheet" href="assets/css/style.css">
```

## 9. CSS Styling Completed

### Base Styling

- CSS reset.
- Box sizing.
- Default font styling.
- Consistent colours.
- Margins and padding.
- General page styling.

### Typography

CSS was used to control:

- Font family.
- Font size.
- Font weight.
- Line height.
- Heading hierarchy.
- Text spacing.

### Layout

The website uses:

- Flexbox.
- CSS Grid.
- Flexible containers.
- Multi-column accommodation cards.
- Responsive sections.
- Structured header and footer layouts.

### Visual Styling

The website includes:

- Background colours.
- Text colours.
- Borders.
- Rounded corners.
- Box shadows.
- Styled buttons.
- Navigation effects.
- Hover states.
- Focus states.

## 10. Responsive Design

The website was designed to adjust to different screen sizes.

### Desktop

On larger screens:

- Navigation is displayed horizontally.
- Accommodation cards are displayed in multiple columns.
- Sections have more available space.
- Images scale to fit their containers.

### Tablet

At medium screen sizes:

- The layout changes to fewer columns.
- Content remains readable.
- Images resize to fit the available space.
- Navigation and sections adjust to the smaller screen.

### Mobile

At smaller screen sizes:

- Navigation items are stacked.
- Accommodation cards use a single-column layout.
- Content uses the available screen width.
- Images scale down correctly.
- Forms become easier to use on smaller screens.

Media queries are used in the stylesheet to make these adjustments.

## 11. Responsive Images

The website uses responsive image techniques such as `srcset` and `sizes`. Images are also styled so that they fit within their containers without overflowing the page.

## 12. Browser Testing and Screenshot Evidence

The website should be tested using browser developer tools at different screen sizes. The required evidence includes:

- Desktop view.
- Tablet view.
- Mobile view.

The screenshots should be placed in the `screenshots` folder.

Recommended structure:

```text
Student Stay SA
├── screenshots
│   ├── desktop.png
│   ├── tablet.png
│   └── mobile.png
├── assets
│   └── css
│       └── style.css
├── index.html
├── listings.html
├── about.html
├── enquiry.html
├── contact.html
└── README.md
```

### Desktop View

**Insert the actual desktop screenshot here:**

`![Desktop View](screenshots/desktop.png)`

### Tablet View

**Insert the actual tablet screenshot here:**

`![Tablet View](screenshots/tablet.png)`

### Mobile View

**Insert the actual mobile screenshot here:**

`![Mobile View](screenshots/mobile.png)`

The screenshots must be taken from the actual Student Stay SA website. They should not be replaced with made-up images.

## 13. Testing and Debugging

The website was checked for:

- Working navigation links.
- Correct page names.
- Correct CSS file path.
- Images displaying correctly.
- Readable text.
- Responsive layout.
- Form fields displaying correctly.
- Desktop, tablet and mobile layouts.

Any corrections made after testing should be recorded in the changelog.

## 14. GitHub Repository

The project should be maintained in the GitHub repository provided for the module.

Suggested descriptive commit messages include:

```text
Initial Student Stay SA HTML website
Added accommodation listings and images
Added enquiry and contact pages
Created external CSS stylesheet
Added desktop CSS styling
Added responsive tablet and mobile layouts
Added responsive image attributes
Updated README for Part 2
Added responsive design screenshots
```

## 15. Changelog

### Part 1

- Created the Student Stay SA website concept.
- Created the five required HTML pages.
- Added navigation between all pages.
- Added accommodation information and images.
- Added enquiry and contact forms.
- Created the initial project folder structure.
- Tested page links and basic HTML structure.

### Part 2 – CSS Styling

- Created the external `assets/css/style.css` stylesheet.
- Linked the stylesheet to all HTML pages.
- Added a consistent colour scheme and typography.
- Added Flexbox and CSS Grid layouts.
- Styled navigation, buttons, cards, forms and footer.
- Added hover and focus states.

### Part 2 – Responsive Design

- Added tablet and mobile media queries.
- Changed accommodation cards to fewer columns on smaller screens.
- Added a single-column layout for mobile screens.
- Adjusted navigation for smaller screens.
- Added responsive image styling.
- Added `srcset` and `sizes` attributes to images.

### Part 2 – Testing

- Tested the website at desktop, tablet and mobile screen sizes.
- Prepared screenshot evidence for the README.
- Checked navigation, images and page layouts.

## 16. Part 2 Limitations

The current version is a front-end student project.

The enquiry and contact forms do not have a server-side system connected to them yet. The accommodation listings and prices are illustrative rather than verified live rental listings.

More advanced functionality such as JavaScript interactivity, JavaScript form validation, SEO work and deployment will be addressed in later stages of the project where required by the PoE.

## 17. Future Development

Possible future improvements include:

- JavaScript functionality.
- Form validation.
- Interactive maps.
- Search and filtering.
- Dynamic accommodation listings.
- Improved enquiry processing.
- Website deployment.
- SEO improvements.

These features are outside the main CSS and responsive-design focus of Part 2.

## 18. References

MDN Web Docs (2025a) ‘HTML: HyperText Markup Language’. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/ (Accessed: 16 September 2026).

MDN Web Docs (2025b) ‘Basic HTML syntax’. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax (Accessed: 16 September 2026).

Pexels (n.d.) ‘Pexels licence’. Available at: https://www.pexels.com/license/ (Accessed: 16 September 2026).

The Independent Institute of Education (IIE) (n.d.) ‘Referencing and plagiarism: IIE Reference Guide’. Available at: https://iielibraryconnect.iie.ac.za/e-shelf/referencing-and-plagiarism (Accessed: 16 September 2026).

The Independent Institute of Education (Pty) Ltd (2026) ‘WEDE5020 Website Project PoE’. Supplied course document.

## 19. Image Sources

The accommodation photographs used in the project were sourced from Pexels:

- Home / About: https://www.pexels.com/photo/bedroom-with-desk-20725941/
- Rosebank listing: https://www.pexels.com/photo/bed-room-with-single-bed-19814644/
- UJ listing: https://www.pexels.com/photo/room-with-a-bed-and-a-desk-in-an-apartment-20725943/
- Wits listing: https://www.pexels.com/photo/a-bedroom-with-a-bed-desk-and-television-25568746/
- Contact: https://www.pexels.com/photo/a-bedroom-with-a-bed-dresser-and-mirror-22809410/

Pexels (n.d.) states that its licence permits use of its photos subject to the licence terms.

## 20. Project Status

**Part 1:** HTML foundation completed.

**Part 2:** CSS styling and responsive design added.

**Next stage:** Part 3 functionality and SEO requirements will be addressed when required by the module PoE.
## Part 3 – Functionality and SEO

Part 3 builds on the HTML structure from Part 1 and the responsive CSS design from Part 2. JavaScript and additional website features were added to make Student Stay SA more interactive and functional.

### JavaScript Features

The website uses an external JavaScript file located at:

`assets/js/script.js`

JavaScript was used to add the following functionality:

- Accommodation search functionality.
- Filtering accommodation by location.
- Sorting accommodation by monthly price.
- Displaying the number of accommodation options found.
- An image lightbox that allows accommodation images to be enlarged.
- Enquiry form validation.
- Contact form validation.
- Interactive FAQ functionality where applicable.

### Accommodation Search and Filtering

The Listings page allows users to search through available accommodation options.

Users can:

- Search for accommodation by name or location.
- Filter accommodation by location.
- Sort accommodation from lowest to highest price.
- Sort accommodation from highest to lowest price.

The results update dynamically using JavaScript.

### Image Lightbox

Accommodation images on the Listings page can be clicked to display a larger version.

The lightbox can be closed using the close button or the Escape key.

### Form Validation

JavaScript and HTML validation were added to improve the Enquiry and Contact forms.

The Enquiry form collects information such as:

- Full name.
- Email address.
- Campus or institution.
- Monthly budget.

Required fields must be completed before the form can be processed.

The Contact form also checks that users provide valid information before their message is processed.

### Interactive Map

An interactive map was added to help users explore student accommodation areas around Johannesburg.

The map includes areas such as:

- Rosebank.
- Auckland Park.
- Braamfontein.

Users can zoom, move around the map and select markers to view location information.

The map is intended to show general accommodation areas and does not represent exact property addresses.

### Search Engine Optimisation (SEO)

SEO improvements were added across the website.

These include:

- Unique page titles.
- Meta descriptions.
- Relevant keywords.
- Descriptive image alternative text.
- Robots meta information.
- A `robots.txt` file.
- A `sitemap.xml` file.

The `robots.txt` and `sitemap.xml` files will be updated with the final live website address after deployment.

### Responsive Design and Testing

The website continues to use the responsive design developed in Part 2.

Testing includes:

- Desktop display.
- Tablet display.
- Mobile display.
- Navigation links.
- Accommodation search.
- Location filtering.
- Price sorting.
- Image lightbox.
- Form validation.
- Interactive map.

### Technologies Used

- HTML5
- CSS3
- JavaScript
- Leaflet
- OpenStreetMap
- Git and GitHub

### Project Structure

Student Stay SA uses the following main structure:

- `index.html` – Home page
- `listings.html` – Accommodation listings
- `about.html` – Information about Student Stay SA
- `enquiry.html` – Accommodation enquiry form
- `contact.html` – Contact form
- `assets/css/style.css` – Website styling
- `assets/js/script.js` – JavaScript functionality
- `assets/images/` – Website images
- `robots.txt` – Search engine crawler instructions
- `sitemap.xml` – Website page structure
- `README.md` – Project documentation
- `CHANGELOG.md` – Record of project changes

### Deployment

The completed website will be published online after final testing.

The final live website URL will be added here after deployment.

**Live Website:** To be added after deployment.

**GitHub Repository:** Add final repository URL here.