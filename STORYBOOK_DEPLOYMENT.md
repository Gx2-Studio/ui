# Storybook Deployment to GitHub Pages

This repository is configured to automatically build and deploy Storybook to GitHub Pages.

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/Gx2-Studio/ui`
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Save the settings

### 2. Enable Required Permissions

The GitHub Actions workflow needs permission to deploy to GitHub Pages:

1. Go to **Settings** → **Actions** → **General**
2. Scroll to "Workflow permissions"
3. Select **Read and write permissions**
4. Check **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### 3. Trigger Deployment

The Storybook will be automatically deployed when:
- You push to the `main` branch
- A pull request is merged to `main`

You can also manually trigger the workflow:
1. Go to the **Actions** tab
2. Click on "Build and Deploy Storybook" workflow
3. Click **Run workflow** → **Run workflow**

## Accessing Your Storybook

Once deployed, your Storybook will be available at:

```
https://gx2-studio.github.io/ui/
```

## Local Development

To run Storybook locally:

```bash
# Install dependencies
npm install

# Start Storybook dev server
npm run storybook
```

To build Storybook locally (simulating production build):

```bash
# Build Storybook
npm run build-storybook

# The output will be in the storybook-static directory
```

## How It Works

### GitHub Actions Workflow

The workflow (`.github/workflows/storybook.yml`) does the following:

1. **On Push/PR to main**:
   - Checks out the code
   - Installs dependencies
   - Builds Storybook
   - Uploads the build artifact

2. **On Push to main only**:
   - Deploys the built Storybook to GitHub Pages

### Base Path Configuration

The Storybook is configured to work with GitHub Pages' subdirectory structure (`/ui/`):

- In `.storybook/main.ts`, the `viteFinal` function sets the base path to `/ui/` in production
- This ensures all assets load correctly when deployed to `https://gx2-studio.github.io/ui/`

## Troubleshooting

### Build Fails in GitHub Actions

1. Check the Actions tab for error logs
2. Ensure all dependencies are in `package.json`
3. Try running `npm run build-storybook` locally to reproduce the error

### Storybook Not Loading After Deployment

1. Verify the base path in `.storybook/main.ts` matches your repository name
2. Check that GitHub Pages is enabled and set to "GitHub Actions"
3. Look for 404 errors in the browser console

### Assets Not Loading

1. Ensure the `.nojekyll` file exists in the root directory
2. Verify the `staticDirs` configuration in `.storybook/main.ts`
3. Check that the base path is correctly set

## Customization

### Change Base Path

If you rename the repository or want to deploy to a custom domain:

1. Update the `base` path in `.storybook/main.ts`:
   ```typescript
   config.base = '/your-repo-name/';
   ```

2. If using a custom domain, set it to `'/'`:
   ```typescript
   config.base = '/';
   ```

### Add Custom Domain

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your DNS settings to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings
