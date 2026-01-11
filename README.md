# Pilled - Documentation & Landing Page

Official website and documentation for Pilled, a privacy-focused iOS medication tracker.

🌐 **Live Site:** https://mattkwiecien.github.io/pilled-docs/

---

## 📁 Repository Contents

### Landing Page
- `index.html` - Main landing page with sleek, pill-inspired design
- `privacy.html` - Privacy policy (web version)
- `disclaimer.html` - Medical disclaimer (web version)
- `styles.css` - Complete stylesheet with organic minimalist aesthetic
- `script.js` - Interactive animations and form handling
- `.nojekyll` - GitHub Pages configuration

### Documentation (Markdown)
- `PRIVACY_POLICY.md` - Privacy policy for App Store submission
- `DISCLAIMER.md` - Medical disclaimer for App Store submission

---

## 🎨 Landing Page Design

The landing page features an **organic minimalist aesthetic** with:

- Pill-inspired visual elements and color palette
- Floating gradient backgrounds with smooth animations
- Distinctive typography (Bricolage Grotesque)
- Animated phone mockup showcasing the app
- Privacy-first messaging throughout
- Fully responsive mobile design
- Smooth scroll animations and micro-interactions

**Color Palette:**
- Coral: `#FF6B9D` (primary)
- Mint: `#4ECDC4` (accent)
- Sage: `#A8E6CF` (support)
- Lavender: `#B8A4E8` (support)

---

## 🚀 Deployment

This site is deployed via **GitHub Pages** from this public repository.

### Current Setup
- **Source:** `main` branch, root directory
- **URL:** https://mattkwiecien.github.io/pilled-docs/

### To Deploy Updates
```bash
git add .
git commit -m "Update landing page"
git push origin main
```

Changes will be live in 2-5 minutes.

---

## 📱 About Pilled

Pilled is a simple, privacy-focused iOS app for tracking medications with ease.

### Free Features
- ✅ One-tap medication logging
- ✅ Customizable medication tiles (colors & icons)
- ✅ Complete dose history timeline
- ✅ Batch logging for multiple doses
- ✅ Export data as CSV
- ✅ Full dark mode support
- ✅ **100% private** - All data stored locally

### Premium Features (One-Time Purchase $3.99)
- 👑 Visual analytics and adherence charts
- 👑 Recurring medications with auto-logging
- 👑 Dosage limit safety warnings
- 👑 All future premium updates included
- 👑 No subscriptions - pay once, own forever

---

## 🔒 Privacy Commitment

Unlike other health apps, Pilled stores everything locally on your iPhone using Apple's SwiftData framework.

**We do NOT:**
- Collect any personal information
- Require user accounts
- Track your usage
- Send data to servers
- Use analytics tools
- Share your information with anyone

Your health data is yours. Period.

---

## 📥 Download

**Coming Soon to the App Store**

Requirements: iPhone or iPad with iOS 17.0 or later

---

## 🛠️ Local Development

To test the landing page locally:

```bash
cd ~/repos/pilled-docs
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## 📝 Customization

### Update Content
Edit HTML files directly for text changes.

### Modify Styles
Edit `styles.css` - all colors are defined as CSS variables:
```css
:root {
    --color-coral: #FF6B9D;
    --color-mint: #4ECDC4;
    /* ... */
}
```

### Email Notifications
The "Notify Me" form currently simulates submission. To make it functional, update the form handler in `script.js` to connect to:
- Formspree (https://formspree.io)
- EmailJS (https://www.emailjs.com)
- Your own backend API

---

## 📋 Legal Pages for App Store

Use these URLs in your App Store Connect submission:

- **Privacy Policy:** `https://mattkwiecien.github.io/pilled-docs/privacy.html`
- **Medical Disclaimer:** `https://mattkwiecien.github.io/pilled-docs/disclaimer.html`

---

## 💬 Contact

- **Email:** matthew.april@pm.me
- **Support:** [Buy Me a Coffee](https://www.buymeacoffee.com/mattapril)
- **GitHub:** [mattkwiecien/pilled](https://github.com/mattkwiecien/pilled) (private)

---

## 📄 License

© 2025 Matthew April. All rights reserved.

---

**Important:** Pilled is a tracking tool, not medical advice. Always follow your doctor's instructions. In case of emergency, call 911.
