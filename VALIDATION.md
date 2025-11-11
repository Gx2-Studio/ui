# Validation Guide

This document provides step-by-step commands to validate all improvements made to the @gx2-studio/ui component library.

## Prerequisites

Ensure you have the following installed:
- **Node.js**: >= 18.0.0
- **npm**: Latest version

## Installation

```bash
npm install
```

Expected output: All dependencies install without errors.

---

## Validation Commands

### 1. Code Formatting

**Check formatting:**
```bash
npm run format:check
```

**Expected output:** All files pass Prettier checks (exit code 0)

**Fix formatting:**
```bash
npm run format
```

---

### 2. Linting

**Check for linting errors:**
```bash
npm run lint
```

**Expected output:**
- ✓ 0 errors
- ✓ 0 warnings (max-warnings=0 enforced)

**Auto-fix linting errors:**
```bash
npm run lint:fix
```

---

### 3. Type Checking

**Run TypeScript compiler:**
```bash
npm run type-check
```

**Expected output:**
- ✓ 0 type errors
- Compiler completes successfully

---

### 4. Unit Tests

**Run all tests:**
```bash
npm run test
```

**Run tests with coverage:**
```bash
npm run test:ci
```

**Expected output:**
- ✓ All tests pass
- ✓ Coverage >= 70% (lines, functions, branches, statements)
- Coverage report generated in `./coverage/`

**Run tests in watch mode (development):**
```bash
npm run test:watch
```

**Run tests with UI (development):**
```bash
npm run test:ui
```

---

### 5. Build Library

**Build the library:**
```bash
npm run build
```

**Expected output:**
- ✓ ESM build: `dist/index.mjs` + sourcemap
- ✓ CJS build: `dist/index.js` + sourcemap
- ✓ Type declarations: `dist/index.d.ts`, `dist/index.d.mts`
- ✓ No build errors
- ✓ "use client" directive warnings are expected (React Server Components)

**Verify build outputs:**
```bash
ls -lh dist/
```

Should show:
- `index.js` (CJS)
- `index.js.map`
- `index.mjs` (ESM)
- `index.mjs.map`
- `index.d.ts`
- `index.d.mts`

---

### 6. Storybook

**Start Storybook (development):**
```bash
npm run storybook
```

**Expected output:**
- ✓ Storybook starts on http://localhost:6006
- ✓ No runtime errors in browser console
- ✓ All stories render correctly
- ✓ Controls work properly
- ✓ Docs pages (Overview, Getting Started) are visible
- ✓ Sidebar is organized logically

**Build Storybook (production):**
```bash
npm run build-storybook
```

**Expected output:**
- ✓ Static build in `storybook-static/`
- ✓ No build errors
- ✓ Build completes in ~1-2 minutes

**Preview built Storybook:**
```bash
npx http-server storybook-static -p 6006
```

Visit http://localhost:6006 to verify the production build.

---

### 7. Storybook Interaction Tests

**Note:** Requires Playwright to be installed.

**Install Playwright (first time):**
```bash
npx playwright install --with-deps chromium
```

**Run Storybook test runner:**
```bash
# Terminal 1: Start Storybook
npm run storybook

# Terminal 2: Run tests
npm run test:storybook
```

**OR run against built Storybook:**
```bash
# Build Storybook first
npm run build-storybook

# Serve and test
npx http-server storybook-static -p 6006 &
npm run test:storybook -- --url http://localhost:6006
```

**Expected output:**
- ✓ All interaction tests pass
- ✓ Play functions execute successfully
- ✓ No accessibility violations

---

### 8. Git Hooks (Pre-commit)

**Test pre-commit hook:**
```bash
# Make a change to a file
echo "// test" >> elements/buttons/Button.tsx

# Stage the file
git add elements/buttons/Button.tsx

# Commit (hook will run automatically)
git commit -m "test: trigger pre-commit hook"
```

**Expected behavior:**
- ✓ Lint-staged runs automatically
- ✓ ESLint checks staged files
- ✓ Prettier formats staged files
- ✓ Commit succeeds if no errors
- ✓ Commit fails if linting errors exist

**Restore the test change:**
```bash
git restore elements/buttons/Button.tsx
```

---

## Validation Checklist

Use this checklist to verify all improvements:

- [ ] ✓ Formatting passes (`npm run format:check`)
- [ ] ✓ Linting passes with 0 warnings (`npm run lint`)
- [ ] ✓ Type checking passes (`npm run type-check`)
- [ ] ✓ All unit tests pass (`npm run test:ci`)
- [ ] ✓ Coverage >= 70% for all metrics
- [ ] ✓ Library builds successfully (`npm run build`)
- [ ] ✓ Build outputs are correct (ESM, CJS, types)
- [ ] ✓ Storybook starts without errors (`npm run storybook`)
- [ ] ✓ Storybook builds for production (`npm run build-storybook`)
- [ ] ✓ Storybook interaction tests pass (`npm run test:storybook`)
- [ ] ✓ Pre-commit hooks work correctly
- [ ] ✓ CI pipeline runs successfully (check GitHub Actions)

---

## CI/CD Validation

The CI pipeline automatically runs on every push and pull request.

**Check CI status:**
1. Visit: https://github.com/Gx2-Studio/ui/actions
2. Find your branch/PR
3. Verify all checks pass:
   - ✓ Code Quality Checks (Node 18.x, 20.x)
   - ✓ Unit Tests (Node 18.x, 20.x)
   - ✓ Build Library (Node 18.x, 20.x)
   - ✓ Build Storybook
   - ✓ Storybook Interaction Tests
   - ✓ All Checks Passed

---

## Troubleshooting

### Linting errors
```bash
npm run lint:fix
```

### Formatting errors
```bash
npm run format
```

### Type errors
Check `tsconfig.json` and fix reported errors manually.

### Test failures
```bash
# Run tests in watch mode to debug
npm run test:watch

# Run specific test file
npm run test -- Button.test.tsx
```

### Build failures
```bash
# Clean and rebuild
npm run clean
npm run build
```

### Storybook issues
```bash
# Clear Storybook cache
rm -rf node_modules/.cache/storybook

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## Summary

**Expected Outcome After Validation:**
- 0 type errors
- 0 lint errors
- 0 formatting issues
- All tests passing
- Coverage >= 70%
- Clean builds (library + Storybook)
- All Storybook tests passing
- CI pipeline green

**Any failures should be addressed before merging to main.**
