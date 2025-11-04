# Netlify Deployment Instructions

Your Luma Engine Website is now ready to deploy on Netlify! Follow these steps:

## Step 1: Verify GitHub Repository

✅ Your code has been pushed to: https://github.com/NexelGames71/Luma-Engine-Website

## Step 2: Deploy to Netlify

1. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign in with your GitHub account (or create a Netlify account)

2. **Import Your Project**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify to access your repositories
   - Select the repository: `NexelGames71/Luma-Engine-Website`

3. **Configure Build Settings**
   Netlify will auto-detect these settings from `netlify.toml`:
   - **Build command**: `npm run build` ✅
   - **Publish directory**: `.next` ✅
   - **Node version**: 18 ✅
   - **Framework**: Next.js (auto-detected) ✅

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically install dependencies and build your site
   - The build process will take 2-5 minutes

## Step 3: Verify Deployment

Once deployed, Netlify will provide you with:
- A live URL (e.g., `https://luma-engine-website.netlify.app`)
- Deployment status and logs
- Site dashboard

## Step 4: Configure Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `lumaengine.dev` or `www.lumaengine.dev`)
4. Follow Netlify's DNS configuration instructions
5. Enable HTTPS (automatic with Netlify)

## Step 5: Environment Variables (If Needed)

If you need to add environment variables:
1. Go to **Site settings** → **Environment variables**
2. Add variables (e.g., `NEXT_PUBLIC_API_URL`)
3. Click **Redeploy** to apply changes

## Continuous Deployment

✅ **Automatic Deployments Enabled**
- Every push to `main` branch will trigger a new deployment
- Preview deployments are created for pull requests

## Troubleshooting

### Build Fails

**Check build logs:**
- Go to **Deploys** tab in Netlify dashboard
- Click on the failed deployment
- Review the build logs for errors

**Common issues:**
- Node version mismatch → Verify Node 18 in `netlify.toml`
- Missing dependencies → Check `package.json`
- Build errors → Check TypeScript/Next.js errors

### Site Not Loading

**Check publish directory:**
- Verify publish directory is `.next` (not `.next/out` or `out`)
- Check build command completed successfully

**Check routing:**
- Next.js App Router should work automatically with `@netlify/plugin-nextjs`
- Verify `netlify.toml` is in the root directory

### Performance Issues

**Optimize images:**
- Use Next.js Image component (already implemented)
- Ensure images are optimized and compressed

**Check bundle size:**
- Review build logs for bundle size warnings
- Consider code splitting if needed

## Build Configuration

Your `netlify.toml` includes:
- ✅ Next.js plugin (`@netlify/plugin-nextjs`)
- ✅ Node.js 18
- ✅ Build command: `npm run build`
- ✅ Publish directory: `.next`
- ✅ Automatic redirects for Next.js routing

## Next Steps

1. ✅ Deploy to Netlify (follow steps above)
2. ✅ Verify site is live
3. ✅ Configure custom domain (optional)
4. ✅ Set up analytics (optional)
5. ✅ Monitor performance and updates

## Support

If you encounter issues:
- Check [Netlify Documentation](https://docs.netlify.com/)
- Review [Next.js on Netlify Guide](https://docs.netlify.com/integrations/frameworks/nextjs/)
- Check build logs in Netlify dashboard

---

**Your site is ready! 🚀**

Repository: https://github.com/NexelGames71/Luma-Engine-Website

