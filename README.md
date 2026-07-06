# ricco-homez — MOVED

> ⚠️ **This repository has been migrated.**

The code from this repository is now part of the `experience` monorepo:

**New location**: https://github.com/grootme/experience/tree/main/apps/realestate

## What happened

- The `ricco-homez` project (Real Estate Platform (Next.js 16 + Prisma + next-intl)) was migrated to `experience/apps/realestate/` using `git filter-repo`, preserving the full git history.
- The `package.json` name was changed to `@experience/realestate`.
- Large binary files were stripped from the history to reduce repo size.

## Fusion notes

ricco-homez was the base for the fusion. homez-dev was nearly identical and its unique files were not merged.

## Why

Per the Repository Governance Standard (RGS) and ADR-0001 (one monorepo per platform repo), all Next.js apps belong in the `experience` monorepo.

## How to use the migrated code

```bash
git clone https://github.com/grootme/experience.git
cd experience
pnpm install
pnpm dev --filter=@experience/realestate
```

## This repository

This repository is kept for historical reference. No new commits will be made here. To contribute, open a PR against `experience/apps/realestate/`.

## Related

- [experience monorepo](https://github.com/grootme/experience)
- [GOVERNANCE.md](https://github.com/grootme/experience/blob/main/GOVERNANCE.md)
- [architecture repo](https://github.com/grootme/architecture) — ADR-0006, ADR-0007
