# Ant Recruit - UX Flows & Information Architecture

## Information Architecture

### Website Structure

```
Ant Recruit Website
├── Home (Landing Page)
├── Jobs
│   ├── Job Listings (Read-only)
│   └── Job Details (Read-only + App Download CTA)
├── For Employers
│   ├── Services Overview
│   ├── How It Works
│   └── Case Studies / Testimonials
├── About
├── Contact
│   ├── Book a Call (Employers)
│   └── General Inquiry
└── App Download
    ├── iOS
    ├── Android
    └── QR Code
```

### Mobile App Structure

```
Ant Recruit Mobile App
├── Onboarding (First-time users)
├── Authentication
│   ├── Login
│   ├── Sign Up
│   └── Social Login (Google, LinkedIn)
├── Main Navigation (Bottom Tab Bar)
│   ├── Home (Job Feed)
│   ├── Search & Filters
│   ├── Saved Jobs
│   ├── Applications
│   └── Profile
├── Job Details
├── Apply Flow
│   ├── CV Review
│   ├── Cover Note (Optional)
│   └── Confirmation
└── Profile Management
    ├── Personal Info
    ├── CV Upload/Edit
    └── Settings
```

---

## User Flows

### Flow 1: Job Seeker - Website to App Download

```
1. Landing Page
   ↓
2. Browse Jobs Section (Preview)
   ↓
3. Click "View All Jobs"
   ↓
4. Job Listings Page
   ↓
5. Click Job Card
   ↓
6. Job Details Page
   ↓
7. Click "Apply on App" CTA
   ↓
8. App Download Section
   ↓
9. Download App (iOS/Android)
   ↓
10. Open App → Continue in App
```

**Key Decision Points:**
- Landing page must show job previews to create interest
- Job details must be compelling enough to drive download
- Clear messaging: "Apply on our mobile app"
- Seamless transition with QR code option

---

### Flow 2: Employer - Services Exploration

```
1. Landing Page
   ↓
2. Click "For Employers" or "Hire Talent" CTA
   ↓
3. Employers Landing / Services Page
   ↓
4. Browse Services
   ├── Option A: Book a Call
   │   ↓
   │   5a. Book a Call Form
   │   ↓
   │   6a. Confirmation Page
   │
   └── Option B: Submit Inquiry
       ↓
       5b. Contact Form
       ↓
       6b. Confirmation Page
```

**Key Decision Points:**
- Clear value proposition for employers
- Multiple entry points (CTA, navigation)
- Low-friction contact options
- Immediate confirmation to build trust

---

### Flow 3: Mobile App - Onboarding & Sign Up

```
1. App Launch (First Time)
   ↓
2. Onboarding Slide 1: "Find Your Dream Job"
   ↓
3. Onboarding Slide 2: "Apply in Seconds"
   ↓
4. Onboarding Slide 3: "Track Your Progress"
   ↓
5. Sign Up Screen
   ├── Option A: Email Sign Up
   │   ↓
   │   6a. Email + Password
   │   ↓
   │   7a. Verify Email (if required)
   │
   ├── Option B: Google Sign In
   │   ↓
   │   6b. Google OAuth
   │
   └── Option C: LinkedIn Sign In
       ↓
       6c. LinkedIn OAuth
   ↓
7. Profile Setup (Optional)
   ├── Upload CV
   ├── Add Basic Info
   └── Skip for Now
   ↓
8. Home Feed (Job Listings)
```

**Key Decision Points:**
- Onboarding should be quick (2-3 slides max)
- Social login reduces friction
- Profile setup can be deferred
- Get users to job feed quickly

---

### Flow 4: Mobile App - Job Discovery

```
1. Home Feed
   ↓
2. Browse Job Cards
   ├── Option A: View Details
   │   ↓
   │   3a. Job Details Screen
   │   ↓
   │   4a. Save Job / Apply
   │
   ├── Option B: Use Filters
   │   ↓
   │   3b. Filter Sheet
   │   ↓
   │   4b. Apply Filters
   │   ↓
   │   5b. Filtered Results
   │
   └── Option C: Search
       ↓
       3c. Search Screen
       ↓
       4c. Search Results
   ↓
5. Job Details Screen
```

**Key Decision Points:**
- Default feed shows recent/relevant jobs
- Filters accessible but not intrusive
- Search with autocomplete
- Quick actions on job cards (save, quick view)

---

### Flow 5: Mobile App - Apply Flow

```
1. Job Details Screen
   ↓
2. Click "Apply" Button
   ↓
3. Apply Flow Start
   ├── Check: CV Uploaded?
   │   ├── Yes → Step 4
   │   └── No → Upload CV First
   ↓
4. CV Review Screen
   ├── Current CV Display
   ├── Option to Change CV
   └── Continue
   ↓
5. Cover Note Screen (Optional)
   ├── Add Cover Note
   ├── Skip (Optional)
   └── Continue
   ↓
6. Review & Submit
   ├── Job Summary
   ├── CV Preview
   ├── Cover Note (if added)
   └── Submit Application
   ↓
7. Application Confirmation
   ├── Success Message
   ├── Application ID
   └── Track Status CTA
   ↓
8. Return to Job Details / Home
```

**Key Decision Points:**
- CV should be reusable (upload once)
- Cover note optional to reduce friction
- Clear progress indicators
- Immediate confirmation builds trust

---

### Flow 6: Mobile App - Save Job

```
1. Job Details Screen
   ↓
2. Click "Save" Icon/Button
   ↓
3. Job Saved (Toast/Confirmation)
   ↓
4. Access Saved Jobs
   ├── From Job Details: "View Saved"
   └── From Tab Bar: "Saved" Tab
   ↓
5. Saved Jobs List
   ↓
6. Click Saved Job
   ↓
7. Job Details (with "Already Saved" indicator)
   ↓
8. Apply or Remove from Saved
```

**Key Decision Points:**
- Save should be one-tap
- Visual confirmation
- Easy access to saved jobs
- Can apply from saved list

---

### Flow 7: Mobile App - Track Application Status

```
1. Applications Tab (Bottom Nav)
   ↓
2. Applications List
   ├── Status Filters:
   │   ├── All
   │   ├── Pending
   │   ├── Under Review
   │   ├── Interview Scheduled
   │   └── Rejected / Closed
   ↓
3. Click Application
   ↓
4. Application Details
   ├── Job Info
   ├── Application Date
   ├── Current Status
   ├── Status Timeline
   └── Contact Info (if applicable)
   ↓
5. Option to Withdraw Application
```

**Key Decision Points:**
- Clear status labels
- Visual timeline/progress
- Easy filtering
- Withdrawal option for user control

---

### Flow 8: Mobile App - Profile Management

```
1. Profile Tab (Bottom Nav)
   ↓
2. Profile Overview
   ├── Personal Info
   ├── Current CV
   ├── Application Stats
   └── Settings
   ↓
3. Edit Profile
   ├── Update Personal Info
   ├── Upload/Change CV
   ├── Change Password
   └── Notification Preferences
   ↓
4. Save Changes
   ↓
5. Return to Profile
```

**Key Decision Points:**
- Profile should show key stats (applications, saved jobs)
- Easy CV management
- Settings accessible from profile
- Changes saved automatically or with clear save button

---

## Navigation Patterns

### Website Navigation
- **Desktop:** Top horizontal nav with logo, primary links, CTAs
- **Mobile:** Hamburger menu with full navigation
- **Sticky:** Navigation stays visible on scroll
- **Footer:** Secondary links, contact, social, app badges

### Mobile App Navigation
- **Bottom Tab Bar:** 5 main sections
  - Home (Job Feed)
  - Search
  - Saved
  - Applications
  - Profile
- **Top Bar:** Contextual actions (filters, sort, etc.)
- **Back Navigation:** Native back button + breadcrumbs where needed

---

## Content Strategy

### Website Content Hierarchy
1. **Hero:** Clear value prop + primary CTAs
2. **Job Preview:** Show 3-6 featured jobs
3. **How It Works:** Process explanation
4. **App Promotion:** Download CTAs
5. **Employer Services:** For B2B audience
6. **Trust Builders:** Testimonials, stats, about
7. **Footer:** Links, contact, legal

### Mobile App Content Hierarchy
1. **Home Feed:** Job cards (most important content)
2. **Job Details:** Full information, clear CTAs
3. **Profile:** User-centric information
4. **Applications:** Status-focused content
5. **Saved:** Quick access to bookmarked jobs

---

## Interaction Patterns

### Website
- **Hover States:** Buttons, links, job cards
- **Scroll Animations:** Subtle fade-ins for sections
- **Sticky Elements:** Navigation, download CTA
- **Modal Overlays:** Contact forms, booking calendar

### Mobile App
- **Pull to Refresh:** Job feed
- **Swipe Actions:** Swipe to save on job cards
- **Bottom Sheets:** Filters, job details (optional)
- **Toast Notifications:** Save confirmations, errors
- **Loading States:** Skeleton screens for job cards

---

## Error States & Edge Cases

### Website
- No jobs found → "Check back soon" message
- Form errors → Inline validation
- 404 → Helpful navigation back
- Slow connection → Loading indicators

### Mobile App
- No internet → Offline message + retry
- Empty states → Helpful illustrations + CTAs
- Application failed → Clear error + retry option
- CV upload failed → Error message + alternative upload method

---

## Accessibility Considerations

- **Color Contrast:** WCAG AA minimum
- **Touch Targets:** Minimum 44x44px on mobile
- **Keyboard Navigation:** Full keyboard support on web
- **Screen Readers:** Proper ARIA labels
- **Text Size:** Scalable text, minimum 16px body
- **Focus States:** Clear focus indicators

---

## Next Steps
1. Create wireframes based on these flows
2. Define component specifications
3. Design high-fidelity mockups
4. Build design system

