# Event State Management

A simple, file-based system to toggle between active event and "coming soon" states for your static website.

## 🎯 Quick Start

### Method 1: Edit the File (Recommended)

1. Open `src/constants/eventConfig.ts`
2. Find line 9: `export const HAS_ACTIVE_EVENT = true;`
3. Change `true` to `false` (or vice versa)
4. Save the file and rebuild: `npm run build`

### Method 2: Use the Toggle Script

```bash
# Set to inactive (coming soon mode)
./toggle-event.sh inactive

# Set to active (event mode)
./toggle-event.sh active

# Check current status
./toggle-event.sh status
```

## How It Works

### Event Configuration (`/src/constants/eventConfig.ts`)

The system uses a simple boolean constant at the top of the file:

```typescript
// 🎯 CHANGE THIS VALUE TO TOGGLE EVENT STATE 🎯
export const HAS_ACTIVE_EVENT = true;
```

- **`true`**: Shows active event (countdown, registration, event details)
- **`false`**: Shows coming soon mode (email signup, notification forms)

### No Runtime Dependencies

- No localStorage complexity
- No admin panels or secret keys
- No browser-specific behavior
- State is built into the compiled code
- **Default**: `true` if no value is set

### Affected Components

When `HAS_ACTIVE_EVENT` is set to `false`, the following changes occur:

#### Hero Section

- Event date changes to "Next Event Coming Soon"
- Location becomes "Location TBA"
- Tagline updates to emphasize "next event"

#### Countdown Component

- Replaces countdown timer with email newsletter signup
- Shows "Stay Connected" title instead of "Next Event Starts In"
- Provides form to collect emails for notifications

#### Registration Section

- Changes from active registration to notification signup
- Updates title to "Next Event Registration"
- Shows email collection form instead of registration form
- Button text changes to "Get Notified"

## Configuration Details

### Active Event State (`HAS_ACTIVE_EVENT = true`)

- Full event details are displayed
- Countdown timer is active
- Registration form is available
- All event-specific information is shown

### Inactive Event State (`HAS_ACTIVE_EVENT = false`)

- "Coming soon" messaging
- Email collection forms
- Newsletter signup functionality
- Generic placeholder information

## Customization

### Adding New Content

You can customize the content for both states by editing the `activeEvent` and `noEventState` objects in `eventConfig.ts`.

### Adding New Components

To make other components respond to event state:

1. Import the helper functions:

```typescript
import { isEventActive, getCurrentEventContent } from '../../constants/eventConfig';
```

2. Use conditional rendering:

```typescript
const eventActive = isEventActive();
const currentContent = getCurrentEventContent();

if (!eventActive) {
  // Render inactive state
  return <div>No event scheduled</div>;
}

// Render active state
return <div>Event is active!</div>;
```

## Production Deployment

### For GitHub Pages:

1. Set the desired event state in `eventConfig.ts`
2. Run `npm run build`
3. Deploy the `dist/` folder to GitHub Pages
4. No additional configuration needed!

### Benefits of This Approach:

- ✅ **Simple**: One line change in one file
- ✅ **Reliable**: No runtime dependencies or browser-specific behavior
- ✅ **Version Controlled**: Event state changes are tracked in git
- ✅ **Static-Friendly**: Perfect for GitHub Pages and other static hosts
- ✅ **Clean**: No hidden admin panels or complex state management

## Future Enhancements

For a more dynamic system, consider:

- Database-driven event management
- CMS integration
- Automated event scheduling
- Email collection backend
- Multi-event support
