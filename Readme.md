# Clack - Online Chat Application

Elevate your communication with Clack, a sleek and secure online chat application tailored for seamless collaboration and real-time engagement. Whether for personal chats, team discussions, or external integrations, Clack brings conversations to life, ensuring that connectivity and productivity are always at your fingertips.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Bootstrap Components Used](#bootstrap-components-used)
- [How to Run](#how-to-run)
- [Contribution](#contribution)
- [License](#license)

## Introduction

**Clack** is a modern and secure online chat application designed to enhance communication and collaboration in today’s digital era. With Clack, users can enjoy seamless real-time chats, easy file sharing, and efficient team collaboration all in one intuitive platform.

Whether it’s one-on-one conversations, lively group discussions, or focused channels for specific topics, Clack ensures that staying connected is easier than ever. Prioritizing user security, all communications on Clack are protected with top-notch encryption, ensuring your data’s safety and confidentiality.

Beyond messaging, Clack integrates smoothly with various external tools and services, establishing itself as a central hub for all your communication needs. Experience the future of online messaging with Clack, where building connections, enhancing teamwork, and boosting productivity come naturally.


## Features

### Home/Landing Page

- **Responsive Navigation Bar**: A navbar that adjusts to screen size, providing easy navigation through the site.
- **Sign-Up Form**: A user-friendly form for new users to sign up.
- **Interactive Icon**: A clickable icon that toggles its image on interaction.
- **Informative Content**: Sections that provide information about Clack and its services.
- **Footer**: A footer section with copyright information, trademarks, and useful links.

### Login Page

- **Form Validation**: The login form includes validation for email and password fields, ensuring data integrity.
- **Responsive Design**: Ensures that the login page is accessible and user-friendly on all devices.

## Technologies Used

- **HTML5**: For structuring the content of the pages.
- **CSS3**: For styling, along with Bootstrap to ensure a responsive design.
- **Bootstrap 5**: Utilized for various components and grid system to enhance the user interface and experience.
- **JavaScript**: For handling form validation and interactive elements.
- **jQuery**: As a dependency for Bootstrap's JavaScript components.

## Bootstrap Components Used

### index.html

1. **Navbar**: Line 10-31
   - Component: `.navbar`, `.navbar-expand-lg`, `.navbar-dark`
   - Container: `.container-fluid`
   - Navigation Brand: `.navbar-brand`
   - Toggler: `.navbar-toggler`, `.navbar-toggler-icon`
   - Navigation Items: `.navbar-nav`, `.nav-item`, `.nav-link`

2. **Button** (used inside Navbar): Line 26-27
   - Component: `.btn`, `.btn-primary`, `.btn-rounded`

3. **Container**: Line 33
   - Component: `.container`, `.mt-5`

4. **Forms**: Line 42-51
   - Form: `<form>`
   - Form Groups: `.mb-3`
   - Labels: `<label>`, `.form-label`
   - Input: `<input>`, `.form-control`

5. **Buttons** (used inside Form): Line 50
   - Component: `.btn`, `.btn-success`

6. **Image** (used for Icon): Line 57
   - Component: `<img>`, `.img-responsive`, `.img-fluid`

7. **Footer**: Line 59-77
   - Component: `.footer`, `.footer-container`, `.footer-content`, `.footer-text`, `.footer-links`

8. **Link** (used inside Footer): Line 72-74
   - Component: `<a>`

### login.html

1. **NavBar** (Line 7)
   - `.navbar` - Base class for the navbar
   - `.navbar-expand-lg` - Responsive navbar that collapses in mobile view
   - `.navbar-dark` - Light text for dark backgrounds
   - `.p-3` - Padding utility

2. **Container Fluid** (Line 8)
   - `.container-fluid` - Responsive, full width container

3. **NavBar Brand** (Line 9)
   - `.navbar-brand` - Brand/logo

4. **Image** (Line 9)
   - `.img-responsive`, `.img-fluid` - Responsive image (`.img-responsive` might be a class from a previous Bootstrap version or a custom class)

5. **Navbar Toggler** (Line 10)
   - `.navbar-toggler` - Toggler button for collapsed navbar content

6. **Navbar Toggler Icon** (Line 12)
   - `.navbar-toggler-icon` - Icon inside the toggler button

7. **Navbar Collapse** (Line 13)
   - `.collapse`, `.navbar-collapse` - Collapsible container for navbar items

8. **Navbar Nav** (Line 14)
   - `.navbar-nav` - Container for navbar items

9. **Nav Item** (Line 15)
   - `.nav-item` - Individual item in the navbar

10. **Nav Link and Button** (Line 16)
    - `.nav-link` - Styled link
    - `.btn`, `.btn-primary`, `.btn-rounded` - Button styles

11. **Active** (Line 16)
    - `.active` - Active state styling

12. **Margin Utilities** (Line 16)
    - `.mx-2` - Horizontal margin utility

13. **Card** (Line 19)
    - `.card` - Base class for cards

14. **Text Center** (Line 21)
    - `.text-center` - Center aligned text

15. **Margin Utilities** (Line 29, 36, 47)
    - `.mt-4`, `.mt-3`, `.mt-2` - Top margin utilities

16. **Form Control** (Line 36, 41)
    - `.form-control` - Base class for form control styling

17. **Form Check** (Line 52)
    - `.form-check` - Base class for checkboxes and radio buttons

18. **Form Check Input** (Line 53)
    - `.form-check-input` - Checkbox input

19. **Form Check Label** (Line 54)
    - `.form-check-label` - Label for form check

20. **Footer** (Line 57)
    - `.footer` - Base class for footer (This seems to be a custom class)

21. **Footer Container** (Line 58)
    - `.footer-container` - Container inside the footer (This seems to be a custom class)

22. **Footer Content** (Line 59)
    - `.footer-content` - Content inside the footer (This seems to be a custom class)

23. **Footer Text** (Line 62)
    - `.footer-text` - Text inside the footer (This seems to be a custom class)

24. **Footer Links** (Line 65)
    - `.footer-links` - Links inside the footer (This seems to be a custom class)

25. **Link** (Line 66, 67, 68)
    - `<a>` - Anchor/link element

## How to Run

1. **Clone the Repository**: `https://github.com/Nike1090/Web-Design---final`
2. **Navigate to the Project Directory**: `cd path/to/folder`
3. **Open `index.html` in a Browser**: This can be done by double-clicking on the file or using a live server extension in your code editor.

## Contribution
- Mamatha Shree: Worked on front-end development, implementing interactive elements using JavaScript 21%
- Aashay Pawar: Dedicated efforts to backend development, documenting and reporting 16%
- Anusree Myneni: Worked on front-end development, focusing on creating responsive design layouts 21%
- Nikil Kumar Bavandla: front-end development, focusing on creating responsive design layouts and implementing interactive elements using JavaScript 21%
- Sri Krishna Karumanchi: crafting a user-friendly interface and providing engaging visual elements to enhance user experience 21%

## License
https://github.com/Nike1090/Web-Design---final/blob/main/LICENSE
