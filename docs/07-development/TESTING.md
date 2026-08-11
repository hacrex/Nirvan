# REVIA — Testing Strategy

## 1. Testing Pyramid

```text
          E2E
        /     \
   Integration
      /       \
    Unit / Widget
```

## 2. Unit Tests

Test:

- Goal calculations
- Progress calculations
- Validation
- Data normalization
- Sync logic
- Notification logic
- Repository behavior

## 3. Widget Tests

Test:

- Navigation
- Forms
- Cards
- Exercise screen
- Progress screen
- Accessibility labels
- Loading/error states

## 4. Integration Tests

Test:

- Authentication
- Firestore
- Storage
- Functions
- Notifications
- Health integrations
- Offline sync

## 5. Security Tests

Test:

- Unauthorized Firestore access
- Cross-user access
- Storage access
- Invalid writes
- Authentication failures
- App Check behavior
- API token verification

## 6. Firebase Emulator

All Firestore/RTDB/Storage/Functions Rules tests should run against emulators where practical.

## 7. Offline Testing

Test:

- No connection
- Intermittent connection
- App restart while offline
- Sync after reconnect
- Duplicate sync
- Conflicting updates

## 8. Health Integration Testing

Use synthetic/test data.

Verify:

- Permission denied
- Partial permission
- Disconnect
- Duplicate records
- Missing timestamps
- Unit conversion
- Device/source identification

## 9. Device Matrix

Test representative:

### iOS

- Current supported iOS versions
- Small screen
- Large screen

### Android

- Current supported Android versions
- Low-end device
- Mid-range device
- High-end device
- Different screen sizes

## 10. Accessibility Testing

Verify:

- VoiceOver
- TalkBack
- Dynamic text
- Contrast
- Touch targets
- Reduced motion
- Captions

## 11. Performance

Measure:

- Startup
- Screen load
- Firestore queries
- Media loading
- Sync duration
- Battery impact

## 12. Release Gates

No production release if:

- Critical security issue exists
- Critical crash exists
- Clinical content lacks required review
- Privacy flow is broken
- Authentication is broken
- Data synchronization causes loss
- Accessibility has blocking defects

