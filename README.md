# Malviya Community Website

A comprehensive website for the Malviya community, showcasing their rich history, culture, and traditions with a special focus on Rajasthan.

## About

The Malviya (Malaviya) community traces its roots to the Malwa region of central India. This website serves as a digital hub for the community, providing information about:

- Historical origins and migration patterns
- Cultural traditions and festivals
- Different Malviya subgroups (Gaud Brahmins, Jats, Nai/Napit, Badhai/Balai)
- Community organizations and events
- Traditional and contemporary occupations

## Features

- **Bilingual Support**: Full content available in English and Hindi
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Rich Content**: Detailed information with proper citations and sources
- **Community Pages**: Information about sabhas, organizations, and events
- **Gallery**: Photo and video sections (to be populated)
- **Contact Form**: Easy way to connect with the community

## Technology Stack

- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and language toggle
- **Font Awesome**: Icon library for visual elements
- **GitHub Pages**: Free hosting solution

## Project Structure

```
malviya/
├── index.html              # Home page
├── history.html            # History & Origins
├── rajasthan.html          # Rajasthan Malviyas
├── culture.html            # Culture & Traditions
├── occupations.html        # Occupations & Social Status
├── community.html          # Community Organizations
├── gallery.html            # Photo & Video Gallery
├── contact.html            # Contact & Join
├── css/
│   ├── style.css          # Main stylesheet
│   └── pages.css          # Page-specific styles
├── js/
│   ├── main.js            # Core JavaScript
│   ├── gallery.js         # Gallery functionality
│   └── contact.js         # Contact form handling
├── images/                 # Image assets (to be added)
└── data/                   # Data files (optional)
```

## Deployment to GitHub Pages

### Option 1: Using GitHub Web Interface

1. **Create a GitHub repository**:
   - Go to GitHub and create a new repository named `malviya` (or any name you prefer)
   - Make it public

2. **Upload files**:
   - Click "Add file" → "Upload files"
   - Drag and drop all project files
   - Commit the changes

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at: `https://yourusername.github.io/malviya/`

### Option 2: Using Git Command Line

1. **Initialize Git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Malviya community website"
   ```

2. **Connect to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/malviya.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Follow step 3 from Option 1 above

### Custom Domain (Optional)

To use a custom domain like `malviya.org`:

1. Add a `CNAME` file to the repository root with your domain name
2. Configure DNS settings with your domain registrar:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub Pages IPs
3. Enable custom domain in GitHub Pages settings

## Local Development

To run the website locally:

1. **Simple HTTP Server** (Python):
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

2. **Using Node.js**:
   ```bash
   npx http-server
   ```

3. **Using VS Code**:
   - Install "Live Server" extension
   - Right-click on `index.html` and select "Open with Live Server"

## Content Management

### Adding Images

1. Place images in the `images/` directory
2. Update HTML files to reference the images:
   ```html
   <img src="images/your-image.jpg" alt="Description">
   ```

### Adding Gallery Photos

1. Replace placeholder divs in `gallery.html` with actual images:
   ```html
   <div class="gallery-item" data-category="events">
       <img src="images/event-photo.jpg" alt="Event description">
   </div>
   ```

### Updating Content

- All content is in HTML files with bilingual support
- Edit the `data-en` and `data-hi` attributes to update text
- Maintain the same structure for consistency

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

To contribute to this website:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## Sources & Citations

Content is based on research from:
- Wikipedia (en.wikipedia.org)
- Grokipedia (grokipedia.com)
- Forward Press (forwardpress.in)
- Ratna Moti News (ratnamotinews.com)
- KSSE League Blog (ksseleague.blogspot.com)

All factual claims are properly cited within the content.

## License

© 2025 Malviya Community. All rights reserved.

## Contact

For questions or suggestions about this website:
- Email: info@malviya.org
- Visit the Contact page on the website

---

**Note**: This is a community website built to preserve and share the heritage of the Malviya community. Contributions and feedback are welcome!

