import { describe, it, expect } from 'vitest';
import { isEventActive, getCurrentEventContent, HAS_ACTIVE_EVENT } from '../constants/eventConfig';

describe('eventConfig', () => {
  describe('isEventActive', () => {
    it('should return boolean value based on HAS_ACTIVE_EVENT', () => {
      const result = isEventActive();
      expect(typeof result).toBe('boolean');
      expect(result).toBe(HAS_ACTIVE_EVENT);
    });
  });

  describe('getCurrentEventContent', () => {
    it('should return active event content when event is active', () => {
      if (HAS_ACTIVE_EVENT) {
        const content = getCurrentEventContent();
        expect(content).toHaveProperty('title');
        expect(content).toHaveProperty('tagline');
        expect(content).toHaveProperty('event');
        expect(content).toHaveProperty('countdown');
        expect(content).toHaveProperty('registration');
        expect(content.registration.isOpen).toBe(true);
      }
    });

    it('should return inactive event content when event is inactive', () => {
      if (!HAS_ACTIVE_EVENT) {
        const content = getCurrentEventContent();
        expect(content).toHaveProperty('title');
        expect(content).toHaveProperty('tagline');
        expect(content).toHaveProperty('event');
        expect(content).toHaveProperty('countdown');
        expect(content).toHaveProperty('registration');
        expect(content.registration.isOpen).toBe(false);
      }
    });

    it('should always return an object with required properties', () => {
      const content = getCurrentEventContent();

      // Title structure
      expect(content.title).toHaveProperty('main');
      expect(content.title).toHaveProperty('highlight');

      // Tagline structure
      expect(content.tagline).toHaveProperty('prefix');
      expect(content.tagline).toHaveProperty('highlight');
      expect(content.tagline).toHaveProperty('suffix');
      expect(content.tagline).toHaveProperty('emphasis');

      // Event structure
      expect(content.event).toHaveProperty('date');
      expect(content.event).toHaveProperty('location');
      expect(content.event).toHaveProperty('afterParty');
      expect(content.event).toHaveProperty('prize');

      // Registration structure
      expect(content.registration).toHaveProperty('isOpen');
      expect(content.registration).toHaveProperty('title');
      expect(content.registration).toHaveProperty('subtitle');
      expect(content.registration).toHaveProperty('buttonText');
    });
  });
});
