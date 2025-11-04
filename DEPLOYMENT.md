# Deployment Guide

This guide will help you deploy the Luma Engine Website to Netlify.

## Prerequisites

1. GitHub account
2. Netlify account (free tier is sufficient)
3. Git installed on your machine

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Luma Engine Website"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Repository name: `Luma-Engine-Website`
   - Owner: `NexelGames71`
   - Make it public (or private if preferred)

3. Push your code:
```bash
git remote add origin https://github.com/NexelGames71/Luma-Engine-Website.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify

1. Go to [Netlify](https://app.netlify.com)

2. Click "Add new site" → "Import an existing project"

3. Choose "GitHub" and authorize Netlify

4. Select the repository: `NexelGames71/Luma-Engine-Website`

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18 (or latest LTS)

6. Click "Deploy site"

## Step 3: Configure Custom Domain (Optional)

1. In Netlify dashboard, go to Site settings → Domain management

2. Click "Add custom domain"

3. Enter your domain (e.g., `lumaengine.dev`)

4. Follow Netlify's DNS configuration instructions

5. Enable HTTPS (automatic with Netlify)

## Step 4: Environment Variables (If Needed)

If you need to add any environment variables:
1. Go to Site settings → Environment variables
2. Add your variables (e.g., `NEXT_PUBLIC_API_URL`)

## Continuous Deployment

Netlify will automatically deploy when you push to the `main` branch. 

To deploy manually:
1. Go to Deploys tab
2. Click "Trigger deploy" → "Deploy site"

## Build Optimization

The site is already optimized for production:
- Next.js automatic optimization
- Image optimization
- Code splitting
- Static generation where possible

## Monitoring

- **Analytics**: Enable Netlify Analytics in Site settings
- **Performance**: Monitor in Netlify dashboard
- **Forms**: Netlify Forms can be used for newsletter signup

## Troubleshooting

### Build fails
- Check Node.js version (should be 18+)
- Ensure all dependencies are in `package.json`
- Check build logs in Netlify dashboard

### Site not loading
- Check publish directory is `.next`
- Verify build command is correct
- Check for runtime errors in Netlify logs

### Environment variables not working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding new variables

---

For more information, visit [Netlify Documentation](https://docs.netlify.com/)

