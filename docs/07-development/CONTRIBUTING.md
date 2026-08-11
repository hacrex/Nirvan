# REVIA — Contributing Guide

## 1. Principles

- Keep changes focused.
- Protect patient privacy.
- Prefer simple architecture.
- Do not bypass security rules.
- Do not introduce clinical claims without review.
- Add tests for important behavior.

## 2. Branches

Recommended:

```text
main
develop
feature/*
fix/*
chore/*
docs/*
```

Production releases should originate from controlled release branches/tags.

## 3. Commit Format

Recommended:

```text
feat: add recovery goal flow
fix: handle offline exercise sync
docs: update health integration
refactor: simplify recovery repository
test: add firestore rules tests
chore: update dependencies
```

## 4. Pull Requests

PRs should contain:

- Summary
- Reason
- Screenshots for UI changes
- Testing performed
- Security considerations
- Privacy considerations
- Clinical impact if applicable

## 5. Clinical Changes

Changes to:

- Exercise instructions
- Safety text
- Condition guidance
- Medical content
- AI clinical prompts

require appropriate clinical review.

## 6. Security

Never commit:

- Secrets
- Tokens
- Service-account credentials
- Production exports
- Patient data

## 7. Code Quality

Required before merge:

- Formatter
- Linter
- Static analysis
- Tests

## 8. Dependency Changes

For new dependencies, document:

- Why needed
- License
- Maintenance status
- Security implications
- Bundle/performance impact

## 9. Sensitive Data

Never use real patient data in:

- Development
- Testing
- Screenshots
- Pull requests
- Demo environments

Use synthetic data.

