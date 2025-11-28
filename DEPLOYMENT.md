# Quick Deployment Guide for GitHub Pages

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `malviya` (or `malviya.org` if you plan to use custom domain)
4. Description: "Malviya Community Website"
5. Make it **Public**
6. **Do NOT** initialize with README (we already have one)
7. Click "Create repository"

### 2. Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click "uploading an existing file"
2. Drag and drop ALL files and folders from your project
3. Add commit message: "Initial commit: Malviya community website"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
# Navigate to your project directory
cd /path/to/malviya

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Malviya community website"

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/malviya.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down and click "Pages" in the left sidebar
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click "Save"
6. Wait 1-2 minutes for deployment

### 4. Access Your Website

Your site will be available at:
```
https://YOUR_USERNAME.github.io/malviya/
```

For example, if your username is `johndoe`:
```
https://johndoe.github.io/malviya/
```

## Using Custom Domain (malviya.org)

If you own the domain `malviya.org`:

### 1. Add CNAME File

Create a file named `CNAME` (no extension) in your repository root with content:
```
malviya.org
```

### 2. Configure DNS Settings

In your domain registrar (GoDaddy, Namecheap, etc.):

**Option A: Using CNAME (Recommended)**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

**Option B: Using A Records**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### 3. Enable Custom Domain in GitHub

1. Go to repository Settings → Pages
2. Under "Custom domain", enter: `malviya.org`
3. Click "Save"
4. Check "Enforce HTTPS" (after DNS propagates)

DNS changes can take 24-48 hours to propagate.

## Testing Locally Before Deployment

### Using Python (Easiest)

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

### Using Node.js

```bash
npx http-server
```

### Using VS Code

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

## Updating Your Website

After making changes:

**Via GitHub Web Interface:**
1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make changes
4. Commit changes

**Via Git Command Line:**
```bash
git add .
git commit -m "Description of changes"
git push
```

Changes will be live in 1-2 minutes.

## Troubleshooting

### Site Not Loading
- Wait 2-3 minutes after enabling GitHub Pages
- Check that repository is public
- Verify branch is set to "main" in Pages settings

### CSS/JS Not Loading
- Check file paths are relative (no leading `/`)
- Verify all files were uploaded
- Check browser console for errors (F12)

### Custom Domain Not Working
- Verify DNS settings are correct
- Wait 24-48 hours for DNS propagation
- Check CNAME file exists and has correct content
- Ensure "Enforce HTTPS" is enabled after DNS propagates

### Images Not Showing
- Add images to `images/` folder
- Update HTML to reference correct paths
- Commit and push changes

## Next Steps After Deployment

1. **Add Content**:
   - Upload photos to `images/` folder
   - Update gallery.html with actual images
   - Add real contact information

2. **Social Media**:
   - Update social media links in footer
   - Share website URL with community

3. **SEO**:
   - Submit to Google Search Console
   - Create sitemap.xml
   - Add meta descriptions

4. **Analytics** (Optional):
   - Add Google Analytics
   - Track visitor statistics

## Support

If you encounter issues:
1. Check GitHub Pages documentation: https://pages.github.com/
2. Review GitHub repository settings
3. Check browser console for errors (F12)
4. Verify all files are uploaded correctly

---

**Congratulations!** Your Malviya community website is now live! 🎉

