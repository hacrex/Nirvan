# NIRVAN — Firebase Security Rules Strategy

## 1. Rule Philosophy

Security must be enforced server-side.

Client-side checks are UX controls, not security controls.

## 2. Firestore Ownership

Conceptual rule:

```text
match /users/{userId} {
  allow read, write:
    if request.auth != null
    && request.auth.uid == userId;
}
```

Production rules must be more granular.

## 3. Public Content

Public content may be readable without authentication where intentionally published.

Example:

```text
/articles/{articleId}
```

Only published documents should be publicly readable.

## 4. User Data

Private collections:

```text
users/{uid}/...
```

Require:

```text
request.auth.uid == uid
```

## 5. Immutable Fields

Fields such as:

- uid
- createdAt
- ownerId

should not be changeable by clients after creation.

## 6. Validation

Validate:

- Required fields
- Data types
- String lengths
- Allowed enum values
- Timestamp ranges
- Ownership

## 7. Storage Rules

Protect:

```text
/users/{uid}/...
```

using authenticated ownership.

Public educational assets should be separated from private user assets.

## 8. RTDB Rules

Define independent rules for:

```text
/presence/{uid}
/liveSessions/{sessionId}
/syncState/{uid}
```

## 9. Admin Access

Administrative access should use privileged server-side tooling rather than granting broad client access.

## 10. Testing

Use Firebase Emulator Suite and automated Rules Unit Tests.

Test:

```text
anonymous → deny
user A → user A → allow
user A → user B → deny
invalid data → deny
unauthorized storage → deny
```

## 11. Deployment

Rules should be version-controlled and deployed through CI/CD.

Never make untracked production rule edits.

