# Ant Recruit - Wireframes (Low-Fidelity + Annotations)

## Website Wireframes

### 1. Landing Page (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Ant Recruit Logo]  Home | Jobs | Employers | About | Contact  │
│                                    [Hire Talent] [Download App] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Find Your Dream Job Faster                         │
│    Connect with top employers and discover opportunities        │
│                                                                 │
│    [Download App]  [Hire Talent]                               │
│                                                                 │
│    [App Mockup Image]                                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    Featured Jobs                                │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ [Logo]    │  │ [Logo]    │  │ [Logo]    │                    │
│  │ Job Title │  │ Job Title │  │ Job Title │                    │
│  │ Company   │  │ Company   │  │ Company   │                    │
│  │ Tags      │  │ Tags      │  │ Tags      │                    │
│  │ Salary    │  │ Salary    │  │ Salary    │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
│                                                                 │
│              [View All Jobs →]                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              How Ant Recruit Works                              │
│                                                                 │
│  [1. Download]  [2. Profile]  [3. Apply]                      │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              For Employers                                      │
│                                                                 │
│  [1. Submit]  [2. Receive]  [3. Hire]                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Get the Ant Recruit App                            │
│    [App Store] [Google Play]                                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Ant Recruit | Links | Contact | Socials | App Badges          │
│  © 2024 Ant Recruit. All rights reserved.                     │
└─────────────────────────────────────────────────────────────────┘
```

**Annotations:**
- **Hero Section**: Large headline with clear value proposition. Two primary CTAs (Download App for job seekers, Hire Talent for employers)
- **Job Preview**: Shows 3 featured jobs to create interest. "View All Jobs" CTA drives to listings page
- **How It Works**: Two separate flows (Job Seekers vs Employers) with numbered steps
- **App Promotion**: Prominent section with app store badges
- **Footer**: Comprehensive links, contact info, social media, app badges

---

### 2. Landing Page (Mobile Web)

```
┌─────────────────────┐
│ [☰] Ant Recruit     │
├─────────────────────┤
│                     │
│  Find Your Dream    │
│  Job Faster         │
│                     │
│  [Download App]     │
│  [Hire Talent]      │
│                     │
│  [App Image]        │
│                     │
├─────────────────────┤
│  Featured Jobs      │
│                     │
│  ┌───────────────┐  │
│  │ [Logo]        │  │
│  │ Job Title     │  │
│  │ Company       │  │
│  │ Tags | Salary │  │
│  └───────────────┘  │
│                     │
│  [View All Jobs]    │
│                     │
├─────────────────────┤
│  How It Works       │
│  [1] [2] [3]        │
│                     │
├─────────────────────┤
│  Download App       │
│  [App Store]        │
│  [Google Play]      │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Mobile Navigation**: Hamburger menu for space efficiency
- **Stacked Layout**: Single column layout, vertical stacking
- **Touch Targets**: All buttons minimum 44px height
- **Simplified Content**: Reduced text, focus on key actions

---

### 3. Job Listings Page (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Ant Recruit]  Home | Jobs | Employers | About | Contact        │
├─────────────────────────────────────────────────────────────────┤
│  Browse Jobs                                                    │
│  Discover opportunities from top companies                       │
├─────────────────────────────────────────────────────────────────┤
│  [Search bar...]  [Location ▼]  [Type ▼]                       │
├─────────────────────────────────────────────────────────────────┤
│  Showing 24 jobs                    [Sort: Most Recent ▼]        │
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────┐        │
│  │ [Logo]  Job Title        │  │  Download App         │        │
│  │         Company         │  │                       │        │
│  │         [Tags]          │  │  Apply on Mobile      │        │
│  │         Description...  │  │                       │        │
│  │         $80k - $120k    │  │  [App Store]          │        │
│  │         [View Details →]│  │  [Google Play]        │        │
│  └──────────────────────────┘  └──────────────────────┘        │
│                                                                 │
│  ┌──────────────────────────┐                                  │
│  │ [Logo]  Job Title        │                                  │
│  │         Company         │                                  │
│  │         [Tags]          │                                  │
│  │         [View Details →]│                                  │
│  └──────────────────────────┘                                  │
│                                                                 │
│  [Load More Jobs]                                              │
└─────────────────────────────────────────────────────────────────┘
```

**Annotations:**
- **Search & Filters**: Top bar with search, location, and job type filters
- **Results Count**: Shows number of jobs found
- **Sort Option**: Dropdown for sorting (Most Recent, Salary, etc.)
- **Job Cards**: Left column shows job listings with key info
- **App Download Sidebar**: Right column promotes app download (sticky)
- **Pagination**: "Load More" button for infinite scroll or pagination

---

### 4. Job Details Page (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│ [← Back]  Ant Recruit                                           │
├─────────────────────────────────────────────────────────────────┤
│  [Logo]  Senior Product Designer                                │
│         TechCorp Inc.                                           │
│         [Remote] [Full-time]                                    │
│                                                                 │
│  [Save]  [Apply on App]                                        │
├─────────────────────────────────────────────────────────────────┤
│  Job Description                                                │
│  ┌──────────────────────────┐  ┌──────────────────────┐        │
│  │ We're looking for...     │  │  Job Details         │        │
│  │                          │  │  $ Salary            │        │
│  │ What You'll Do:          │  │  📍 Location        │        │
│  │ • Item 1                 │  │  💼 Type            │        │
│  │ • Item 2                 │  │  ⏰ Posted          │        │
│  │                          │  │                     │        │
│  │ Requirements:            │  │  Apply on Mobile    │        │
│  │ • Item 1                 │  │  [App Store]        │        │
│  │ • Item 2                 │  │  [Google Play]      │        │
│  │                          │  │                     │        │
│  │ Benefits:                │  │  ✓ Quick apply      │        │
│  │ • Item 1                 │  │  ✓ Track status    │        │
│  │                          │  └──────────────────────┘        │
│  │ About Company:           │                                  │
│  │ Company description...   │                                  │
│  └──────────────────────────┘                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Annotations:**
- **Breadcrumb**: "Back" link to return to listings
- **Job Header**: Logo, title, company, tags prominently displayed
- **Action Buttons**: Save (heart icon) and Apply on App (primary CTA)
- **Content Layout**: Two-column layout (main content + sidebar)
- **Sidebar**: Quick job details and app download CTA (sticky)
- **Read-Only**: All content is viewable but application requires app download

---

### 5. Employers / Services Page (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Ant Recruit]  Home | Jobs | Employers | About | Contact        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Find the Right Talent, Fast                        │
│    Connect with qualified candidates who are ready to make      │
│    an impact.                                                    │
│                                                                 │
│    [Book a Call]  [Submit Inquiry]                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    Our Services                                 │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │ [Icon]   │  │ [Icon]   │  │ [Icon]   │                    │
│  │ Sourcing │  │ Matching │  │ Process  │                    │
│  │          │  │          │  │          │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    How It Works                                 │
│                                                                 │
│  [1. Submit]  [2. Receive]  [3. Hire]                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Stats: 500+ Companies | 10K+ Placements | 48hrs Avg | 95%    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              Ready to Find Your Next Hire?                     │
│    [Get Started Today]                                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Annotations:**
- **Hero Section**: Employer-focused value proposition
- **Dual CTAs**: Book a Call (primary) and Submit Inquiry (secondary)
- **Services Grid**: Three key service offerings with icons
- **Process Flow**: Visual representation of 3-step process
- **Trust Metrics**: Statistics to build credibility
- **Final CTA**: Strong call-to-action at bottom

---

### 6. Contact / Book a Call Page (Desktop)

```
┌─────────────────────────────────────────────────────────────────┐
│ [Ant Recruit]  Home | Jobs | Employers | About | Contact        │
├─────────────────────────────────────────────────────────────────┤
│  Get in Touch                                                   │
│  Have questions? We're here to help.                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐   │
│  │ 📅 Book a Call            │  │ ✉️ General Inquiry       │   │
│  │                          │  │                          │   │
│  │ Full Name:               │  │ Name:                    │   │
│  │ [_____________]          │  │ [_____________]          │   │
│  │                          │  │                          │   │
│  │ Email:                   │  │ Email:                   │   │
│  │ [_____________]          │  │ [_____________]          │   │
│  │                          │  │                          │   │
│  │ Company:                 │  │ Subject:                 │   │
│  │ [_____________]          │  │ [Dropdown ▼]             │   │
│  │                          │  │                          │   │
│  │ Phone:                   │  │ Message:                 │   │
│  │ [_____________]          │  │ [_____________]           │   │
│  │                          │  │ [_____________]           │   │
│  │ Date & Time:             │  │                          │   │
│  │ [_____________] 📅       │  │                          │   │
│  │                          │  │                          │   │
│  │ Message:                 │  │ [Send Message]          │   │
│  │ [_____________]           │  │                          │   │
│  │                          │  │                          │   │
│  │ [Schedule Call]          │  │                          │   │
│  └──────────────────────────┘  └──────────────────────────┘   │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                     │
│  │ ✉️ Email │  │ 📞 Phone │  │ ⏰ Hours  │                     │
│  │ hello@   │  │ +1 555   │  │ Mon-Fri  │                     │
│  └──────────┘  └──────────┘  └──────────┘                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Annotations:**
- **Two Forms Side-by-Side**: Book a Call (left) and General Inquiry (right)
- **Book a Call Form**: Includes date/time picker for scheduling
- **General Inquiry Form**: Simpler form with subject dropdown
- **Contact Info Cards**: Three cards below forms (Email, Phone, Hours)
- **Form Validation**: Clear labels, placeholders, required fields indicated

---

## Mobile App Wireframes

### 1. Onboarding (Slide 1)

```
┌─────────────────────┐
│                     │
│                     │
│      [Icon]         │
│                     │
│                     │
│  Find Your Dream    │
│  Job                │
│                     │
│  Discover opportu-  │
│  nities from top    │
│  companies          │
│                     │
│                     │
│  ● ○ ○              │
│                     │
│  [Next]             │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Full Screen**: Immersive experience, no navigation
- **Large Icon**: Visual representation of benefit
- **Headline**: Bold, clear value proposition
- **Description**: Short, scannable text
- **Progress Dots**: Show current slide (1 of 3)
- **CTA Button**: "Next" to advance, "Skip" option on last slide

---

### 2. Login / Sign-up Screen

```
┌─────────────────────┐
│                     │
│  Welcome Back       │
│  Sign in to continue│
│                     │
│  Email:             │
│  [_____________]    │
│                     │
│  Password:          │
│  [_____________]    │
│                     │
│  ☐ Remember me      │
│  Forgot password?   │
│                     │
│  [Sign In]          │
│                     │
│  ─── Or ───         │
│                     │
│  [Google]           │
│  [LinkedIn]         │
│                     │
│  Don't have account?│
│  Sign Up            │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Header**: Welcome message, clear purpose
- **Form Fields**: Email and password with labels
- **Remember Me**: Checkbox for convenience
- **Forgot Password**: Link for account recovery
- **Social Login**: Google and LinkedIn options below form
- **Sign Up Link**: Bottom link to registration

---

### 3. Home Feed (Job Listings)

```
┌─────────────────────┐
│ Ant Recruit    🔔3  │
│ [Search jobs...]    │
├─────────────────────┤
│ All | Remote | FT   │
│ [Filters]           │
├─────────────────────┤
│                     │
│  ┌───────────────┐   │
│  │ [Logo]  ❤️   │   │
│  │ Job Title    │   │
│  │ Company      │   │
│  │ [Tags]       │   │
│  │ Description..│   │
│  │ $80k - $120k│   │
│  │ 2 days ago   │   │
│  │ [View Details]│ │
│  └───────────────┘   │
│                     │
│  ┌───────────────┐   │
│  │ [Logo]  ❤️   │   │
│  │ Job Title    │   │
│  │ ...          │   │
│  └───────────────┘   │
│                     │
├─────────────────────┤
│ 🏠 🔍 ❤️ 💼 👤     │
└─────────────────────┘
```

**Annotations:**
- **Header**: Logo, notification badge, search bar
- **Quick Filters**: Horizontal scrollable chips
- **Job Cards**: Consistent design with logo, title, company, tags
- **Save Button**: Heart icon in top-right of each card
- **Bottom Navigation**: 5 tabs (Home, Search, Saved, Applications, Profile)
- **Pull to Refresh**: Swipe down to refresh feed

---

### 4. Job Details Screen

```
┌─────────────────────┐
│ ← Job Details       │
├─────────────────────┤
│ [Logo]              │
│ Job Title           │
│ Company             │
│ [Tags]              │
│ $80k - $120k       │
│ Posted 2 days ago   │
├─────────────────────┤
│                     │
│ Job Description      │
│                     │
│ What You'll Do:     │
│ • Item 1            │
│ • Item 2            │
│                     │
│ Requirements:       │
│ • Item 1            │
│ • Item 2            │
│                     │
│ Benefits:           │
│ • Item 1            │
│                     │
│ About Company:      │
│ ...                 │
│                     │
├─────────────────────┤
│ [Save] [Apply Now]  │
└─────────────────────┘
```

**Annotations:**
- **Back Button**: Top-left navigation
- **Job Header**: Logo, title, company, tags, salary, date
- **Full Description**: Scrollable content with sections
- **Fixed Bottom Actions**: Save and Apply buttons (sticky)
- **Save State**: Heart icon changes when saved
- **Apply CTA**: Primary action button

---

### 5. Apply Flow (Step 1: CV Review)

```
┌─────────────────────┐
│ ← Apply for Job      │
├─────────────────────┤
│ Step 1 of 3         │
│ ████░░░░░░░░         │
│ CV Review            │
├─────────────────────┤
│                     │
│ Senior Product       │
│ Designer             │
│ TechCorp Inc.        │
├─────────────────────┤
│                     │
│ Review Your CV      │
│                     │
│ ┌─────────────────┐ │
│ │ [PDF Icon] ✓    │ │
│ │ John_Doe_CV.pdf │ │
│ │ Uploaded 2 days │ │
│ │ [Change CV]     │ │
│ └─────────────────┘ │
│                     │
│ Cover Note (Optional)│
│ [_____________]     │
│ [_____________]     │
│                     │
│ [Continue]          │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Progress Indicator**: Shows step 1 of 3 with progress bar
- **Job Summary**: Reminder of position being applied to
- **CV Display**: Current CV with option to change
- **Cover Note**: Optional textarea for personalized message
- **Continue Button**: Advances to review step

---

### 6. Apply Flow (Step 2: Review)

```
┌─────────────────────┐
│ ← Review Application │
├─────────────────────┤
│ Step 2 of 3         │
│ ████████░░░░         │
│ Review & Submit      │
├─────────────────────┤
│                     │
│ Review Your         │
│ Application         │
│                     │
│ Job Application:     │
│ [Job Card]          │
│                     │
│ Your CV:            │
│ [CV Card] [Change]  │
│                     │
│ Cover Note:         │
│ [Preview text...]   │
│ [Edit]              │
│                     │
│ [Submit Application]│
│ [Cancel]            │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Progress**: Step 2 of 3, 66% complete
- **Review Sections**: Job, CV, Cover Note all displayed
- **Edit Options**: Each section has "Change" or "Edit" link
- **Submit Button**: Primary action, final step
- **Cancel**: Option to go back

---

### 7. Application Success

```
┌─────────────────────┐
│                     │
│                     │
│      [✓ Icon]       │
│                     │
│  Application         │
│  Submitted!         │
│                     │
│  Your application    │
│  has been sent...   │
│                     │
│  ┌───────────────┐   │
│  │ Application ID │   │
│  │ #AR-2024-... │   │
│  │               │   │
│  │ Position: ... │   │
│  │ Company: ... │   │
│  │ Submitted: ..│   │
│  └───────────────┘   │
│                     │
│  [Track Application]│
│  [Browse More Jobs] │
│                     │
└─────────────────────┘
```

**Annotations:**
- **Success Icon**: Large checkmark or success symbol
- **Confirmation Message**: Clear success state
- **Application Details**: Card showing key information
- **Next Actions**: Track application or browse more jobs
- **No Navigation**: Full-screen success state

---

### 8. Profile Screen

```
┌─────────────────────┐
│ Profile        ⚙️    │
├─────────────────────┤
│ [Avatar]            │
│ John Doe            │
│ john.doe@email.com  │
│ Member since 2024   │
│                     │
│ [Edit Profile]      │
├─────────────────────┤
│ 12    5     3       │
│ Apps  Saved Interviews│
├─────────────────────┤
│                     │
│ My CV               │
│ [CV Card] [Change]  │
│                     │
│ ┌───────────────┐   │
│ │ 💼 Applications│   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ ❤️ Saved Jobs │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ 🔔 Notifications│ │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ ⚙️ Settings   │   │
│ └───────────────┘   │
│                     │
│ ┌───────────────┐   │
│ │ 🚪 Sign Out   │   │
│ └───────────────┘   │
│                     │
├─────────────────────┤
│ 🏠 🔍 ❤️ 💼 👤     │
└─────────────────────┘
```

**Annotations:**
- **Profile Header**: Avatar, name, email, member since date
- **Edit Button**: Quick access to edit profile
- **Stats Row**: Key metrics (Applications, Saved, Interviews)
- **CV Section**: Current CV with change option
- **Menu Items**: List of profile-related actions
- **Icons**: Each menu item has distinct icon for quick recognition

---

### 9. Saved Jobs Screen

```
┌─────────────────────┐
│ Saved Jobs          │
│ 5 saved positions  │
├─────────────────────┤
│                     │
│  ┌───────────────┐   │
│  │ [Logo]  ❤️   │   │
│  │ Job Title    │   │
│  │ Company      │   │
│  │ [Tags]       │   │
│  │ $80k - $120k│   │
│  │ Saved 2 days │   │
│  │ [View] [Apply]│ │
│  └───────────────┘   │
│                     │
│  ┌───────────────┐   │
│  │ [Logo]  ❤️   │   │
│  │ Job Title    │   │
│  │ ...          │   │
│  └───────────────┘   │
│                     │
├─────────────────────┤
│ 🏠 🔍 ❤️ 💼 👤     │
└─────────────────────┘
```

**Annotations:**
- **Header**: Title and count of saved jobs
- **Job Cards**: Similar to home feed but with "Saved" timestamp
- **Actions**: View and Apply buttons on each card
- **Empty State**: (Not shown) Message when no saved jobs
- **Unsave**: Tap heart icon to remove from saved

---

### 10. Applications Screen

```
┌─────────────────────┐
│ My Applications     │
│ 12 total            │
├─────────────────────┤
│ All | Pending |     │
│ Review | Interview  │
├─────────────────────┤
│                     │
│  ┌───────────────┐   │
│  │ [Logo]        │   │
│  │ Job Title     │   │
│  │ Company       │   │
│  │ [Under Review]│   │
│  │               │   │
│  │ Applied: 2d  │   │
│  │ ID: #AR-...  │   │
│  │ [View Details]│ │
│  └───────────────┘   │
│                     │
│  ┌───────────────┐   │
│  │ [Logo]        │   │
│  │ Job Title     │   │
│  │ [Interview]   │   │
│  │ Interview: Jan15│ │
│  └───────────────┘   │
│                     │
├─────────────────────┤
│ 🏠 🔍 ❤️ 💼 👤     │
└─────────────────────┘
```

**Annotations:**
- **Status Filters**: Filter by application status (All, Pending, Review, Interview)
- **Status Badges**: Color-coded status indicators
- **Application Info**: Date applied, application ID
- **Interview Details**: Shows interview date/time when scheduled
- **View Details**: Link to full application details

---

## Wireframe Annotations Key

### Layout Patterns
- **Desktop**: Multi-column layouts, sidebars, wide content areas
- **Mobile**: Single column, stacked content, bottom navigation

### Interaction Elements
- **[Button]**: Clickable button
- **[Input]**: Text input field
- **[Dropdown ▼]**: Select dropdown
- **[Icon]**: Iconographic element
- **→**: Link or navigation

### Visual Hierarchy
- **Bold Text**: Headlines and important labels
- **Regular Text**: Body content
- **Brackets []**: Interactive elements
- **Lines**: Dividers and borders

### States to Consider
- **Hover**: Button color changes, link underlines
- **Active**: Selected filters, current page indicators
- **Disabled**: Grayed out, non-interactive
- **Loading**: Skeleton screens, spinners
- **Empty**: Placeholder messages, illustrations
- **Error**: Error messages, validation states

---

## Next Steps for High-Fidelity Design

1. **Convert to Figma**: Use these wireframes as base structure
2. **Apply Design System**: Colors, typography, spacing from design system
3. **Add Visual Details**: Icons, images, shadows, gradients
4. **Define Interactions**: Hover states, transitions, animations
5. **Create Variants**: Different states for each component
6. **Test Responsiveness**: Ensure all breakpoints work correctly

