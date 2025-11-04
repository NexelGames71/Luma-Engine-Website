# GitHub Setup Guide

This guide will help you push the Luma Engine Website to GitHub and deploy it on Netlify.

## Step 1: Initialize Git Repository

If you haven't already initialized git, run these commands:

```bash
git init
git add .
git commit -m "Initial commit: Luma Engine Website"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository name: `Luma-Engine-Website`
5. Owner: `NexelGames71` (or your GitHub username)
6. Description: "Official website for Luma Engine - Next-generation game engine"
7. Choose **Public** (or Private if preferred)
8. **DO NOT** initialize with README, .gitignore, or license (we already have these)
9. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/NexelGames71/Luma-Engine-Website.git
git branch -M main
git push -u origin main
```

If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or use SSH: `git@github.com:NexelGames71/Luma-Engine-Website.git`

## Step 4: Verify Push

Check your GitHub repository to ensure all files were pushed:
- https://github.com/NexelGames71/Luma-Engine-Website

## Step 5: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify to access your repositories
4. Select the repository: `NexelGames71/Luma-Engine-Website`
5. Netlify will auto-detect the build settings:
   - **Build command**: `npm run build` (already configured)
   - **Publish directory**: `.next` (already configured)
   - **Node version**: 18 (already configured)
6. Click "Deploy site"

## Step 6: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain (e.g., `lumaengine.dev`)
4. Follow Netlify's DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

## Troubleshooting

### Build Fails
- Check Netlify build logs for errors
- Ensure Node.js version is 18+
- Verify all dependencies are in `package.json`
- Check that `netlify.toml` is in the root directory

### Site Not Loading
- Verify publish directory is `.next`
- Check build command is correct
- Review build logs in Netlify dashboard

### Environment Variables
If you need environment variables:
1. Go to Site settings → Environment variables
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Redeploy the site

## Continuous Deployment

Netlify will automatically deploy when you push to the `main` branch:
```bash
git add .
git commit -m "Update: your changes"
git push origin main
```

The site will automatically rebuild and deploy!

---

For more information, see [DEPLOYMENT.md](./DEPLOYMENT.md)

