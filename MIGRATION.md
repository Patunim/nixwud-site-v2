# Nixwud v2 recovery migration

This package is designed to replace the tracked files on the `refactor/nixwud-v2` branch. It does not contain `.git`, `.env`, `node_modules` or build output.

## Install on the refactor branch

1. Confirm the branch and clean state.

   ```powershell
   git branch --show-current
   git status
   ```

2. Remove the old tracked files from the branch.

   ```powershell
   git rm -r .
   ```

3. Copy the extracted contents of this package into the repository root. Do not copy the package folder itself and do not modify `.git`.

4. Recreate `.env` from `.env.example` and verify that `git status --short .env` returns no output.

5. Install and validate.

   ```powershell
   npm ci
   npm run check
   npm run build
   npm run dev
   ```

6. Review the website locally, then commit and push.

   ```powershell
   git add -A
   git commit -m "Rebuild Nixwud Consultancy v2"
   git push origin refactor/nixwud-v2
   ```

## Routes to review

- `/`
- `/about`
- `/contact`
- `/services`
- `/services/strategy-business-analysis`
- `/services/digital-platforms`
- `/services/ai-automation`
- `/services/growth-discoverability`
- `/insights`
- `/industries`
- `/case-studies`
- `/resources`
- `/resources/decision-readiness-scorecard`
- `/accessibility`
- `/privacy-policy`
- `/terms`
- `/404`

Also test mobile navigation, search, the audit PDF download and all redirects in `public/_redirects`.

## Production blockers

- Legal review of Privacy Policy and Terms
- Confirmation of the contact mailbox
- Approval of the final logo, palette and typography
- At least one genuine published Insight
- Review legacy Insight documents in Sanity and explicitly set approved items to `Published`
- Evidence and permission for any case study or testimonial
- Brevo and Cloudflare configuration before enabling the planned email gate
