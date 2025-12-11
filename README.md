# Ant Recruit - Complete Design Implementation

This project contains a complete HTML/CSS/Tailwind implementation of the Ant Recruit website and mobile app design.

## Project Structure

### Website Files (Root Directory)
- `index.html` - Landing page with hero, job previews, how it works, app promotion
- `jobs.html` - Job listings page with search and filters
- `job-detail.html` - Individual job detail page (read-only, with app download CTA)
- `employers.html` - Employer services page
- `contact.html` - Contact form and book a call page
- `about.html` - About us page
- `design-system.html` - Complete design system showcase

### Mobile App Files (`/app` directory)
- `onboarding.html` - 3-slide onboarding flow
- `login.html` - Login screen with social options
- `signup.html` - Sign up screen
- `home.html` - Job feed with filters and search
- `job-detail.html` - Mobile job details view
- `apply.html` - Application flow step 1 (CV review)
- `apply-review.html` - Application flow step 2 (Review & submit)
- `apply-success.html` - Application confirmation screen
- `profile.html` - User profile with stats and settings
- `saved.html` - Saved jobs list
- `applications.html` - Application tracking with status filters
- `application-detail.html` - Individual application details
- `search.html` - Advanced search with filters

## Design System

### Colors
- **Primary Blue**: #0ea5e9 (blue-600)
- **Accent Orange**: #f97316 (orange-500)
- **Accent Green**: #10b981 (green-500)
- **Accent Purple**: #8b5cf6 (purple-500)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold 700, Semibold 600
- **Body**: Regular 400

### Components
- Buttons: Primary, Secondary, CTA variants
- Inputs: Text, email, textarea, select with focus states
- Job Cards: Consistent design with company logo, title, tags, salary
- Navigation: Sticky headers, bottom tab bars (mobile)

## Features Implemented

### Website
✅ Responsive design (mobile, tablet, desktop)
✅ Landing page with all required sections
✅ Job listings with search and filters
✅ Job details (read-only) with app download CTA
✅ Employer services page
✅ Contact forms (Book a call + General inquiry)
✅ App promotion sections
✅ Footer with links and app store badges

### Mobile App
✅ Onboarding flow (3 slides)
✅ Authentication (Email, Google, LinkedIn)
✅ Job feed with filters
✅ Job details with save/apply
✅ Multi-step apply flow
✅ Application success confirmation
✅ Profile management
✅ Saved jobs
✅ Application tracking with status
✅ Search functionality

## How to Use

1. **View Website**: Open any HTML file in the root directory in a browser
2. **View Mobile App**: Open files in `/app` directory. For best experience:
   - Use browser dev tools (F12)
   - Set device to mobile (375px or 414px width)
   - Or view on actual mobile device

3. **Design System**: Open `design-system.html` to see all components, colors, and typography

## Technologies Used

- **HTML5** - Structure
- **Tailwind CSS** (via CDN) - Styling and layout
- **Bootstrap 5** (via CDN) - Additional components
- **Font Awesome 6** - Icons
- **Google Fonts (Inter)** - Typography

## Design Principles

1. **Mobile-First**: All designs prioritize mobile experience
2. **Consistency**: Shared design system across website and app
3. **Accessibility**: Proper contrast, touch targets, semantic HTML
4. **User Flow**: Clear navigation and progression
5. **Trust Building**: Professional design, testimonials, transparency

## Next Steps for Figma Conversion

1. Use the design system colors and typography
2. Reference component styles from `design-system.html`
3. Follow spacing patterns (4px, 8px, 16px, 24px, 32px)
4. Maintain consistent border radius (8px, 12px, 16px)
5. Use the same icon library (Font Awesome equivalents)

## Notes

- All forms are front-end only (no backend integration)
- Links between pages are functional for navigation
- Mobile app screens are optimized for 375px-414px width
- All images use placeholder icons (replace with actual images in Figma)
- Color scheme uses Tailwind's default palette for easy customization

