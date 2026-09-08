# Security Policy

## Supported Versions

We release patches for security vulnerabilities. The following versions are currently supported:

| Version | Supported          |
| ------- | ------------------ |
| 0.x     | :white_check_mark: |

## Reporting a Vulnerability

We take the security of this project seriously. If you discover a security vulnerability, please follow these steps:

1. **Do not open a public issue** — instead, report it privately via [GitHub Security Advisories](https://github.com/anomalyco/nextjs-template/security/advisories/new).
2. Provide a detailed description of the vulnerability and steps to reproduce.
3. Include the version(s) affected and any potential impact.

We will acknowledge your report within 48 hours and work with you to understand and address the issue promptly. You can expect an initial assessment within 5 business days.

## Disclosure Policy

When we receive a security report, we will:

- Confirm receipt within 48 hours
- Assess the issue and severity within 5 business days
- Develop and release a fix as soon as possible
- Publicly disclose the issue after the fix is released

## Best Practices

When using these templates in your projects:

- Keep all dependencies updated
- Review and rotate secret keys regularly
- Use environment variables for all sensitive configuration
- Enable Clerk rate limiting for authentication routes
- Set up proper database access controls for MongoDB
