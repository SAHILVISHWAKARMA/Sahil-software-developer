# Requirements Document

## Introduction

A modern, minimal, and highly professional portfolio website for Sahil Vishwakarma, a Full Stack Software Developer with 3.5+ years of experience. The portfolio will be built with Next.js and Tailwind CSS, featuring a clean Apple/Linear/Vercel-inspired design with dark/light mode, smooth animations, and full SEO optimization. The site will showcase skills, projects, experience, and provide a contact channel for potential employers and collaborators.

## Glossary

- **Portfolio_Site**: The complete Next.js web application serving as the developer portfolio
- **Navbar**: The sticky top navigation bar present across all pages
- **Hero_Section**: The first visible section of the page containing name, title, tagline, and CTAs
- **About_Section**: The section describing the developer's background, experience, and strengths
- **Skills_Section**: The section displaying categorized technical skills
- **Experience_Section**: The section listing professional work history and achievements
- **Projects_Section**: The section showcasing featured development projects with details
- **Achievements_Section**: The section highlighting notable professional accomplishments
- **Contact_Section**: The section containing contact information and a contact form
- **Theme_Toggle**: The UI control that switches between dark and light color modes
- **Contact_Form**: The form component with Name, Email, and Message fields
- **Project_Card**: A UI card component representing a single project with description, tech stack, and achievements
- **Skill_Bar**: An animated visual indicator representing proficiency in a skill
- **Resume_Button**: A CTA button that triggers download of the developer's resume PDF
- **SEO_Meta**: HTML meta tags including title, description, Open Graph, and canonical URL

---

## Requirements

### Requirement 1: Site Structure and Navigation

**User Story:** As a visitor, I want a clear and persistent navigation bar, so that I can jump to any section of the portfolio without losing context.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the viewport during scroll on all screen sizes.
2. THE Navbar SHALL contain navigation links to Hero, About, Skills, Experience, Projects, Achievements, and Contact sections.
3. WHEN a navigation link is clicked, THE Portfolio_Site SHALL smooth-scroll to the corresponding section.
4. WHEN the user scrolls past the Hero_Section, THE Navbar SHALL display a subtle background blur or glassmorphism effect to remain readable.
5. THE Navbar SHALL include the Theme_Toggle control and the Resume_Button.
6. WHILE the viewport width is below 768px, THE Navbar SHALL collapse navigation links into a hamburger menu.
7. WHEN the hamburger menu is opened, THE Navbar SHALL display navigation links in a full-width dropdown overlay.

---

### Requirement 2: Hero Section

**User Story:** As a visitor, I want an impactful first impression with the developer's name, role, and a clear call to action, so that I immediately understand who this person is and what they do.

#### Acceptance Criteria

1. THE Hero_Section SHALL display the developer's full name "Sahil Vishwakarma" as the primary heading.
2. THE Hero_Section SHALL display the role "Full Stack Software Developer" as a subtitle.
3. THE Hero_Section SHALL display the tagline "Building scalable, high-performance web applications".
4. THE Hero_Section SHALL contain a "View Projects" CTA button that smooth-scrolls to the Projects_Section.
5. THE Hero_Section SHALL contain a "Contact Me" CTA button that smooth-scrolls to the Contact_Section.
6. WHEN the Hero_Section first renders, THE Portfolio_Site SHALL animate the heading, subtitle, tagline, and CTA buttons into view with a staggered fade-in effect.
7. THE Hero_Section SHALL be full viewport height on desktop and at minimum 80vh on mobile.

---

### Requirement 3: About Section

**User Story:** As a recruiter or collaborator, I want to read a concise professional summary, so that I can quickly assess the developer's background and strengths.

#### Acceptance Criteria

1. THE About_Section SHALL describe Sahil Vishwakarma as a Full Stack Developer with 3.5+ years of professional experience.
2. THE About_Section SHALL highlight expertise in the React and .NET ecosystem.
3. THE About_Section SHALL communicate a focus on scalable systems and clean architecture.
4. THE About_Section SHALL list the following strengths: Problem-solving, Debugging complex systems, Working with legacy code, and Writing maintainable code.
5. WHEN the About_Section enters the viewport, THE Portfolio_Site SHALL animate the content into view using a fade-up transition.

---

### Requirement 4: Skills Section

**User Story:** As a technical recruiter, I want to see the developer's skills organized by category, so that I can quickly evaluate technical fit for a role.

#### Acceptance Criteria

1. THE Skills_Section SHALL display skills grouped into the following categories: Frontend, Backend, Database, and Tools.
2. THE Skills_Section SHALL list the following Frontend skills: ReactJS, TypeScript, JavaScript, Bootstrap.
3. THE Skills_Section SHALL list the following Backend skills: .NET Core, ASP.NET Core, REST APIs, JWT Authentication.
4. THE Skills_Section SHALL list the following Database skills: SQL Server, Query Optimization, Indexing.
5. THE Skills_Section SHALL list the following Tools skills: Git, JIRA, Agile.
6. WHEN the Skills_Section enters the viewport, THE Skill_Bar for each skill SHALL animate from 0% to its target width.
7. THE Skills_Section SHALL display skill icons or badges alongside each skill name where icons are available.

---

### Requirement 5: Experience Section

**User Story:** As a hiring manager, I want to see the developer's work history with concrete achievements, so that I can evaluate real-world impact and growth.

#### Acceptance Criteria

1. THE Experience_Section SHALL display the employer name "Aloha Technology Pvt. Ltd." with the tenure "Sep 2022 – Present".
2. THE Experience_Section SHALL list the following achievements: built scalable frontend using React and TypeScript, developed 30+ REST APIs, improved application performance via SQL query optimization, and collaborated in Agile teams.
3. THE Experience_Section SHALL display the developer's role title for the listed position.
4. WHEN the Experience_Section enters the viewport, THE Portfolio_Site SHALL animate each experience entry into view with a slide-in transition.

---

### Requirement 6: Projects Section

**User Story:** As a technical evaluator, I want to browse featured projects with descriptions and tech details, so that I can assess the developer's hands-on capabilities.

#### Acceptance Criteria

1. THE Projects_Section SHALL display a Project_Card for each of the following projects: "Automotive CRM Platform", "Field Service Suite (FSS)", and "Payables Approval & Tracking (PAT)".
2. EACH Project_Card SHALL display a project title, description, tech stack badges, and key achievements.
3. THE Project_Card for "Automotive CRM Platform" SHALL describe it as a lead management system with 15+ APIs, a React frontend, and a .NET backend.
4. THE Project_Card for "Field Service Suite (FSS)" SHALL describe it as a dashboard for scheduling and reporting with real-time data sync and secure API integration.
5. THE Project_Card for "Payables Approval & Tracking (PAT)" SHALL describe it as a financial workflow system featuring backend modernization and SQL optimization.
6. WHERE a GitHub or demo URL is available, THE Project_Card SHALL display a corresponding action button.
7. WHEN a Project_Card is hovered, THE Portfolio_Site SHALL apply a subtle lift or border highlight animation.
8. WHEN the Projects_Section enters the viewport, THE Portfolio_Site SHALL animate each Project_Card into view with a staggered fade-in effect.

---

### Requirement 7: Achievements Section

**User Story:** As a recruiter, I want to see notable professional accomplishments, so that I can understand the developer's impact beyond day-to-day responsibilities.

#### Acceptance Criteria

1. THE Achievements_Section SHALL display the following accomplishments: improved system performance, resolved critical workflow issues, identified edge cases in production, and debugged complex multi-layer issues.
2. EACH achievement SHALL be presented with a concise title and a supporting description.
3. WHEN the Achievements_Section enters the viewport, THE Portfolio_Site SHALL animate each achievement item into view.

---

### Requirement 8: Contact Section

**User Story:** As a potential employer or collaborator, I want multiple ways to reach the developer, so that I can initiate a conversation through my preferred channel.

#### Acceptance Criteria

1. THE Contact_Section SHALL display the email address sahilvishwakarma6260@gmail.com as a clickable mailto link.
2. THE Contact_Section SHALL display a clickable link to the LinkedIn profile at https://www.linkedin.com/in/sahil-vishwakarma-12042221b/.
3. THE Contact_Section SHALL render the Contact_Form with Name, Email, and Message fields.
4. WHEN the Contact_Form is submitted with all fields populated and a valid email format, THE Contact_Form SHALL display a success confirmation message.
5. IF the Contact_Form is submitted with any required field empty, THEN THE Contact_Form SHALL display an inline validation error for each empty field without submitting the form.
6. IF the Contact_Form is submitted with an invalid email format, THEN THE Contact_Form SHALL display an inline validation error on the Email field without submitting the form.

---

### Requirement 9: Dark and Light Mode

**User Story:** As a visitor, I want to switch between dark and light themes, so that I can view the portfolio comfortably in any lighting environment.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL default to dark mode on first load.
2. WHEN the Theme_Toggle is activated, THE Portfolio_Site SHALL switch between dark and light color modes without a full page reload.
3. THE Portfolio_Site SHALL persist the user's theme preference in localStorage.
4. WHEN the Portfolio_Site loads on a subsequent visit, THE Portfolio_Site SHALL restore the previously saved theme preference from localStorage.
5. WHILE in dark mode, THE Portfolio_Site SHALL use a dark background with light text and appropriate contrast ratios.
6. WHILE in light mode, THE Portfolio_Site SHALL use a light background with dark text and appropriate contrast ratios.

---

### Requirement 10: Responsive Design

**User Story:** As a mobile visitor, I want the portfolio to be fully usable on any screen size, so that I can browse it on my phone or tablet without layout issues.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL follow a mobile-first design approach with breakpoints at 640px, 768px, 1024px, and 1280px.
2. THE Portfolio_Site SHALL render all sections without horizontal overflow on viewports as narrow as 320px.
3. THE Skills_Section SHALL reflow skill categories into a single column on viewports below 768px.
4. THE Projects_Section SHALL display Project_Cards in a single column on viewports below 768px and in a multi-column grid on viewports 768px and above.
5. THE Experience_Section SHALL display in a single-column timeline layout on viewports below 768px.

---

### Requirement 11: SEO and Performance

**User Story:** As a developer, I want the portfolio to be discoverable and fast, so that it ranks well in search results and loads quickly for all visitors.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL include SEO_Meta tags with a descriptive title, meta description, and Open Graph tags on every page.
2. THE Portfolio_Site SHALL set the page title to "Sahil Vishwakarma | Full Stack Software Developer".
3. THE Portfolio_Site SHALL use semantic HTML elements (header, main, section, article, footer) throughout the document structure.
4. THE Portfolio_Site SHALL lazy-load images and non-critical assets to minimize initial page load time.
5. THE Portfolio_Site SHALL achieve a Lighthouse performance score of 90 or above on desktop.
6. THE Portfolio_Site SHALL provide descriptive alt text for all images and icons.

---

### Requirement 12: Resume Download

**User Story:** As a recruiter, I want to download the developer's resume directly from the portfolio, so that I can review it offline or share it with my team.

#### Acceptance Criteria

1. THE Resume_Button SHALL be visible in the Navbar on all screen sizes.
2. WHEN the Resume_Button is clicked, THE Portfolio_Site SHALL initiate a download of the resume PDF file.
3. THE Resume_Button SHALL open the resume in a new browser tab as a fallback if the direct download is not supported by the browser.

---

### Requirement 13: Animations and Visual Polish

**User Story:** As a visitor, I want smooth, purposeful animations throughout the site, so that the experience feels polished and professional without being distracting.

#### Acceptance Criteria

1. THE Portfolio_Site SHALL use scroll-triggered animations for all major sections entering the viewport.
2. THE Portfolio_Site SHALL implement animations using Framer Motion or CSS transitions with durations between 200ms and 600ms.
3. WHEN any interactive element (button, link, card) is hovered, THE Portfolio_Site SHALL apply a smooth transition effect within 200ms.
4. THE Portfolio_Site SHALL use subtle gradients and glassmorphism effects on the Navbar and card components.
5. WHERE a user has enabled the "prefers-reduced-motion" OS setting, THE Portfolio_Site SHALL disable or minimize all animations.
