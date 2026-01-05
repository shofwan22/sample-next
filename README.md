## SystemEarth Frontend Sample

This project is a simplified frontend sample inspired by SystemEarth’s public product.

### Goals
- Demonstrate frontend architecture and decision-making
- Keep scope intentionally limited for focused code review
- Prioritize clarity over feature completeness

### Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

### Key Decisions
- Feature-based folder structure
- No global state (scope does not justify it)
- Derived state via memoized hooks
- Pure utility functions for business logic

### Trade-offs
- No backend or authentication
- No persistence
- Minimal UI polish

These decisions were made intentionally to keep the discussion focused on core frontend reasoning.

### What I Would Improve in Production
- Server-side data fetching
- Accessibility enhancements
- Automated testing
- Performance profiling for large datasets
