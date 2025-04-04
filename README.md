# CMS Complaint Form Application

A modern, responsive web application built with React and Vite for submitting and managing complaints in compliance with CMS guidelines.

## Features

- **Multi-step Complaint Form**
  - User-friendly interface for complaint submission
  - Progress tracking across form steps
  - Support for anonymous complaints
  - Comprehensive complainant details collection

- **Responsive Design**
  - Fully responsive layout that works on desktop, tablet, and mobile devices
  - Adaptive components that adjust to different screen sizes
  - Mobile-first approach ensuring accessibility across devices

- **Modular Components**
  - Reusable Header component with CMS branding
  - Dynamic Progress Bar for multi-step navigation
  - Footer with essential links
  - Complainant Details form with organized sections

## Screenshots

### Complaint Type Selection
<img width="1425" alt="Screenshot 2025-04-04 at 5 27 38 PM" src="https://github.com/user-attachments/assets/d0180d41-0920-4f63-9785-55dd6abd2946" />
<img width="1429" alt="Screenshot 2025-04-04 at 5 27 59 PM" src="https://github.com/user-attachments/assets/ea094a43-aeb8-4b1f-a8dd-4a768b000901" />
*
<img width="1436" alt="Screenshot 2025-04-04 at 5 28 22 PM" src="https://github.com/user-attachments/assets/476dbb96-44c7-4b76-8207-35fd6cde9181" />
*Screenshot showing the complaint type selection interface with validation.*

### Complainant Details Form
<img width="1430" alt="Screenshot 2025-04-04 at 5 28 34 PM" src="https://github.com/user-attachments/assets/ad7ed7de-b45c-4e8d-aa05-d3ab4b6a556b" />
<img width="1435" alt="Screenshot 2025-04-04 at 5 37 16 PM" src="https://github.com/user-attachments/assets/d63da09f-c7f8-4552-8281-ea5a7eb47efc" />

*Screenshot showing the complainant information form.*

## Technology Stack

- **Frontend Framework:** React
- **Build Tool:** Vite
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **Package Manager:** npm/yarn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd cms-app
```

3. Install dependencies:
```bash
npm install
# or
yarn install
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open your browser and visit `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── ProgressBar/
│   │   ├── ProgressBar.jsx
│   │   └── ProgressBar.css
│   ├── ComplainantDetails/
│   │   ├── ComplainantDetails.jsx
│   │   └── ComplainantDetails.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   └── ComplaintForm/
│       ├── ComplaintForm.jsx
│       └── ComplaintForm.css
├── App.jsx
├── App.css
└── main.jsx
```

## Component Overview

- **Header:** Contains the CMS logo and branding elements
- **ProgressBar:** Shows the current step in the complaint submission process
- **ComplainantDetails:** Collects user information with support for anonymous submissions
- **ComplaintForm:** Main form component with multiple sections
- **Footer:** Contains navigation links and policy information

## Styling Guidelines

- Uses CSS variables for consistent theming
- Responsive breakpoints at:
  - Mobile: < 480px
  - Tablet: < 768px
  - Desktop: ≥ 768px
- Modular CSS approach for component-specific styling

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- CMS Design System guidelines
- React.js documentation
- Vite build tool documentation
