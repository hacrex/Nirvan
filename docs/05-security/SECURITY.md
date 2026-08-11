# REVIA — Security Architecture

## 1. Security Goals

Protect:

- Identity
- Health-related information
- Recovery history
- Medication information
- User content
- Uploaded media
- Authentication credentials
- Backend services

## 2. Security Layers

```text
Device
 ↓
App Security
 ↓
Firebase App Check
 ↓
Authentication
 ↓
Security Rules
 ↓
Backend Authorization
 ↓
Encryption
 ↓
Logging / Monitoring
```

## 3. Authentication

Use Firebase Authentication.

Providers:

- Google
- Email/password
- Phone OTP
- Sign in with Apple

Use Firebase UID as the application identity.

## 4. Authorization

Patient private data must be accessible only to the authenticated owner.

Future roles may include:

- patient
- caregiver
- clinician
- admin
- content_editor
- clinical_reviewer

Do not expose future roles prematurely.

## 5. Firestore

Use Security Rules to enforce:

- Authentication
- User ownership
- Field-level constraints where required
- Immutable fields
- Valid state transitions

## 6. Storage

Restrict:

- File path
- File size
- MIME type
- User ownership

Never expose private patient uploads through public paths.

## 7. Realtime Database

Apply dedicated Security Rules.

Do not assume Firestore Rules protect RTDB.

## 8. Secrets

Never commit:

- Service account keys
- LLM secrets
- OAuth client secrets
- Signing credentials

Use Google Cloud Secret Manager and CI/CD secret stores.

## 9. App Check

Enable Firebase App Check for supported services after testing.

## 10. Logging

Do not log:

- Passwords
- Authentication tokens
- Full health records
- Medication details
- Raw AI prompts containing unnecessary health information

## 11. Encryption

Use TLS for transport and provider-managed encryption at rest.

## 12. Dependency Security

Run:

- Dependency audit
- SAST
- Secret scanning
- Container scanning where applicable
- Dependency updates

## 13. Account Security

Support:

- Session management
- Logout
- Account deletion
- Credential recovery
- Provider unlinking where supported

## 14. Security Testing

Before launch:

- Rules tests
- API tests
- Authentication tests
- Storage tests
- Penetration testing
- Dependency review
- Mobile security testing

