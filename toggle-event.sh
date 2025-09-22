#!/bin/bash

# Event State Toggle Script
# This script toggles the HAS_ACTIVE_EVENT value in eventConfig.ts

EVENT_CONFIG_FILE="src/constants/eventConfig.ts"

case "$1" in
  "active")
    echo "Setting event state to ACTIVE..."
    sed -i '' 's/export const HAS_ACTIVE_EVENT = false/export const HAS_ACTIVE_EVENT = true/' $EVENT_CONFIG_FILE
    echo "✅ Event is now ACTIVE"
    echo "📅 Shows: Event countdown, registration form, active event details"
    ;;
  "inactive")
    echo "Setting event state to INACTIVE..."
    sed -i '' 's/export const HAS_ACTIVE_EVENT = true/export const HAS_ACTIVE_EVENT = false/' $EVENT_CONFIG_FILE
    echo "✅ Event is now INACTIVE"
    echo "📧 Shows: Coming soon message, email signup, notification forms"
    ;;
  "status")
    if grep -q "export const HAS_ACTIVE_EVENT = true" $EVENT_CONFIG_FILE; then
      echo "🟢 Event state: ACTIVE"
      echo "📅 Showing: Event countdown, registration form, active event details"
    else
      echo "🔴 Event state: INACTIVE"
      echo "📧 Showing: Coming soon message, email signup, notification forms"
    fi
    ;;
  *)
    echo "🎯 Event State Manager"
    echo ""
    echo "Usage: ./toggle-event.sh [command]"
    echo ""
    echo "Commands:"
    echo "  active    - Set event state to active (show countdown, registration)"
    echo "  inactive  - Set event state to inactive (show coming soon, email signup)"
    echo "  status    - Check current event state"
    echo ""
    echo "Current state:"
    if grep -q "export const HAS_ACTIVE_EVENT = true" $EVENT_CONFIG_FILE; then
      echo "🟢 ACTIVE - Event is scheduled and visible"
    else
      echo "🔴 INACTIVE - No event scheduled, showing coming soon"
    fi
    echo ""
    echo "💡 You can also manually edit: $EVENT_CONFIG_FILE"
    echo "💡 Look for: export const HAS_ACTIVE_EVENT = true/false"
    ;;
esac