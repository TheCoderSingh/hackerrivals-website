# 🎯 Simple Event State Management

A clean, file-based system to toggle between active event and "coming soon" states for your GitHub Pages website.

## 🚀 Quick Toggle

### Method 1: Edit the File Directly (Easiest)

1. Open `src/constants/eventConfig.ts`
2. Find line 9: `export const HAS_ACTIVE_EVENT = true;`
3. Change `true` to `false` (or vice versa)
4. Save the file
5. Rebuild and deploy: `npm run build`

### Method 2: Use the Toggle Script

```bash
# Set to inactive (coming soon mode)
./toggle-event.sh inactive

# Set to active (event mode)
./toggle-event.sh active

# Check current status
./toggle-event.sh status
```

## 📋 What Changes When You Toggle

### Active Event (`HAS_ACTIVE_EVENT = true`)

- ✅ Shows event countdown timer
- ✅ Displays event date, location, and details
- ✅ Shows registration form
- ✅ "Join the Battle" messaging

### Inactive Event (`HAS_ACTIVE_EVENT = false`)

- 📧 Shows "Next Event Coming Soon"
- 📧 Displays email newsletter signup
- 📧 Shows "Get Notified" forms
- 📧 "Stay tuned for our next event" messaging

## 📁 Files Involved

- **`src/constants/eventConfig.ts`** - Main toggle (line 9)
- **`src/components/Hero/index.tsx`** - Hero section
- **`src/components/Countdown/index.tsx`** - Countdown vs email signup
- **`src/components/Register/index.tsx`** - Registration vs notification signup

## 🔄 For Production Deployment

1. Set the desired state in `eventConfig.ts`
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages
4. No localStorage, no admin panels, no complexity!

## 💡 Benefits of This Approach

- ✅ **Simple**: Just edit one line in one file
- ✅ **Clean**: No hidden admin panels or secret keys
- ✅ **Reliable**: State is built into the code, no runtime dependencies
- ✅ **Version Controlled**: Event state changes are tracked in git
- ✅ **GitHub Pages Ready**: Works perfectly with static hosting

Perfect for static sites that don't need complex admin interfaces!
