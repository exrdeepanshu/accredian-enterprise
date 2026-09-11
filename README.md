# Accredian Enterprise — Next.js Clone

A high-fidelity, full-stack clone of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 14 App Router**, **Tailwind CSS**, and **Framer Motion**.

---

## 🔗 Live Demo

> **Vercel Deployment:** [your-deployment-url.vercel.app](https://vercel.com/exrdeepanshus-projects/accredian-enterprise)  
> *(Replace with your URL after deploying)*

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- npm 9+

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/accredian-enterprise.git
cd accredian-enterprise

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser
open http://localhost:3000
```

---

## 🏗️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Forms | React Hook Form |
| Mock API | Next.js Route Handlers |
| Deployment | Vercel |

---

## 📁 Project Structure

```
accredian-enterprise/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Home page (assembles sections)
│   ├── globals.css             # Design system: dark theme, animations
│   └── api/
│       ├── stats/route.ts      # GET /api/stats
│       ├── testimonials/route.ts  # GET /api/testimonials
│       └── enquiry/route.ts    # POST /api/enquiry
├── components/
│   ├── Navbar.tsx              # Fixed navbar, mobile menu
│   ├── Hero.tsx                # Hero section with glowing orbs
│   ├── TrustedBy.tsx           # Infinite marquee of logos
│   ├── ImpactMetrics.tsx       # Animated count-up stats
│   ├── HowItWorks.tsx          # 3-step CAT framework
│   ├── DomainExpertise.tsx     # 5 domain cards
│   ├── WhoWeServe.tsx          # Tabbed role-based content
│   ├── Testimonials.tsx        # Testimonial carousel
│   ├── EnterpriseFeatures.tsx  # Feature grid
│   ├── CTABanner.tsx           # CTA section
│   ├── Footer.tsx              # Multi-column footer
│   └── EnquiryModal.tsx        # Modal with form + API submit
└── lib/
    └── data.ts                 # Centralized mock data
```

---

## 🌐 API Routes

| Route | Method | Description |
|---|---|---|
| `/api/stats` | `GET` | Returns platform impact metrics |
| `/api/testimonials` | `GET` | Returns testimonials array |
| `/api/enquiry` | `POST` | Accepts enquiry form data, validates, and returns reference ID |

### Example: POST `/api/enquiry`

**Request body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@company.com",
  "company": "Acme Corp",
  "teamSize": "201–1000",
  "message": "Looking to upskill our engineers in Gen-AI"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! Our enterprise team will reach out within 24 hours.",
  "referenceId": "ENQ-1706525400000"
}
```

---

## 🎨 Design Approach

### Theme
Premium **dark mode** design inspired by modern enterprise SaaS platforms. Key decisions:

- **Background**: Deep navy/slate (`#050816`) instead of plain black — reduces eye strain while feeling premium
- **Accent gradient**: Indigo → Purple → Cyan (`#6366f1 → #8b5cf6 → #06b6d4`) across all primary elements
- **Glassmorphism**: Semi-transparent cards with `backdrop-filter: blur(20px)` for depth
- **Grid overlay**: Subtle dot grid adds structure without distraction
- **Typography**: Inter font for a clean, modern enterprise feel

### Animations
- **Framer Motion**: scroll-triggered fade-ups, tab transitions, modal spring animation
- **Count-up counters**: `useInView` hook triggers animated number counts
- **CSS marquee**: Pure CSS animation for the trusted-by logo strip
- **Micro-interactions**: Hover lifts, color transitions, glow effects

### Responsiveness
All components use CSS Grid with `auto-fit, minmax()` for natural breakpoints. Mobile-specific overrides applied for nav, tabs, and cards.

---

## 🤖 AI Usage Explanation

**Antigravity AI (Google DeepMind)** was used throughout this project:

1. **Reference Analysis**: The AI fetched and analyzed the Accredian Enterprise website to extract the content structure, section types, and value propositions
2. **Architecture Planning**: Generated the component hierarchy, file structure, and API route design
3. **Code Generation**: Wrote all TypeScript/React components, API routes, CSS design system, and README — following best practices for Next.js App Router
4. **Design System**: The dark mode color palette, glassmorphism patterns, and animation configurations were designed by the AI based on modern enterprise SaaS aesthetics
5. **Data Modeling**: Created realistic mock data for testimonials, stats, domains, and company logos that closely mirrors the real site

**Human involvement**: Direction on style preferences (dark mode, premium aesthetic), deployment choice (Vercel + Git), and final review/approval.

---

## 📦 Deployment on Vercel

### Method 1: Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project root
vercel

# Follow the prompts:
#  - Set up and deploy: Y
#  - Which scope: (select your account)
#  - Link to existing project: N
#  - Project name: accredian-enterprise
#  - In which directory: ./
#  - Override settings: N

# 4. For production deployment
vercel --prod
```

### Method 2: GitHub Integration

1. Push to GitHub:
   ```bash
   git remote add origin https://github.com/your-username/accredian-enterprise.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Click **Deploy** — Vercel auto-detects Next.js config

### Environment Variables
No environment variables required for the current mock API setup.

---

## 🔧 Available Scripts

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build production bundle
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## 📋 Sections Implemented

| Section | Description |
|---|---|
| ✅ Navbar | Fixed, scroll-aware glassmorphism, mobile hamburger |
| ✅ Hero | Animated headline, glowing orbs, dual CTAs, social proof |
| ✅ Trusted By | Infinite scrolling logo marquee with fade masks |
| ✅ Impact Metrics | Animated count-up counters from API data |
| ✅ How It Works | 3-step CAT framework with connected cards |
| ✅ Domain Expertise | 5 domain cards with tags and hover effects |
| ✅ Who We Serve | 4-tab interface with animated content switching |
| ✅ Testimonials | Carousel with dots, prev/next navigation |
| ✅ Enterprise Features | 4-feature grid with color-coded cards |
| ✅ CTA Banner | Glassmorphism card with trust badges |
| ✅ Footer | Multi-column responsive footer |
| ✅ Enquiry Modal | Form with validation + POST to API + success state |

---

## 🚀 Improvements with More Time

1. **Real CRM Integration**: Connect the enquiry form to HubSpot, Salesforce, or Pipedrive via their APIs
2. **Database**: Add PostgreSQL + Prisma for persisting enquiries and tracking leads
3. **Email Notifications**: SendGrid/Resend integration to send confirmation emails to both the user and sales team
4. **Authentication**: Add enterprise SSO demo with NextAuth.js (Okta, Google Workspace)
5. **CMS Integration**: Replace static data with Contentful or Sanity CMS for content management
6. **Advanced Analytics**: Integrate PostHog for session recording and funnel analysis
7. **A/B Testing**: Implement Vercel Edge Config for CTA copy experiments
8. **Internationalization**: Add i18n support for global enterprise markets
9. **Video Background**: Hero section video with auto-play and reduced-motion fallback
10. **Chat Widget**: Integrate Intercom or Crisp for live enterprise support chat
11. **Search**: Add Algolia-powered search for programs and content
12. **Progressive Enhancement**: Add skeleton loading states and error boundaries

---

## 📄 License

MIT © 2025 — Built as a demonstration project.
