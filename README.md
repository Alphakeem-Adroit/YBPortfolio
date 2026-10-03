# Yusuf Busoyriy Graphix — Portfolio

A responsive portfolio website for Yusuf Busoyriy, a Brand Designer, Strategist, Visual Creative and Design Coach. The website showcases selected projects, design services, client testimonials and a clear path to starting a project.

Designed and developed by **[Adroit Tech Lab](https://wa.me/2349033023139)**.

## Features

- Responsive glass-style navigation with an animated mobile menu.
- Hero section with scrolling portfolio images, gradient overlays and a 3D graphic.
- Project accordion with AM Global open by default and one project open at a time.
- Individual project carousels alongside challenge, approach and solution details.
- Category-based gallery for branding, logos, marketing, flyers, social media, packaging and event design.
- About section with a profile image and WhatsApp contact link.
- Scroll-driven process cards and continuously moving service cards with pause controls.
- Client testimonial image gallery.
- Footer with project calls to action, navigation, social links and contact details.
- Reusable section headings with configurable colours and alignment.
- Responsive layouts and reduced-motion support in applicable animated sections.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based interface |
| Vite | Development server and production build |
| Tailwind CSS | Responsive styling through JSX utility classes |
| Motion | Interface and scroll animations |
| Lucide React | Icons |

## Getting Started

Install a Node.js version compatible with the Vite version in `package.json`, together with npm.

1. Clone this repository and open its directory.
2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

Open the local URL printed in your terminal.

## Production Build

```bash
npm run build
```

The production files are generated in `dist/`.

Preview the generated build locally:

```bash
npm run preview
```

Run the build command again after changing the source code. Preview serves the generated build; it does not publish the website.

## Customization

### Section headings

Use `SectionText` to set content, colours and alignment:

```jsx
<SectionText
  smallTitle="ABOUT ME"
  title="More than just design. I craft experiences."
  description="Your section description."
  smallTitleColor="text-black"
  titleColor="text-blue-600"
  descriptionColor="text-zinc-600"
  align="left"
/>
```

Set `align="center"` for centered sections. Pass complete Tailwind colour classes so they can be detected during the build. Custom classes such as `text-blue` and `text-yellow` require matching theme definitions.

### Selected projects

Update the `projects` array in the `Work` component. Each entry contains its ID, business name, category, image list and project details. Replace placeholder images and descriptions with the correct material for each business.

### Category gallery

Update the `categories` array in `MoreWork` to change category names or images. Selecting a category displays its corresponding gallery.

### Process and services

Update `processSteps` and `services` in `Process`. Keep ancestor containers of the sticky process section free of scrolling overflow rules that would interfere with the sticky layout.

### Testimonials

Replace testimonial images in `Testimonial`. Include the client name and testimonial text in accessible descriptions where appropriate.

### Contact details

Update WhatsApp numbers, email addresses and social URLs wherever they appear, including the About section and footer.

## Deployment (Namecheap or any hosting provider)

1. Run `npm run build`.
2. Test the production output with `npm run preview`.
3. Upload the **contents** of `dist/` to your hosting provider's public website directory.
4. Check the deployed website for missing assets, broken links and mobile layout issues.

For deployment under a subdirectory, configure the matching Vite `base` before building. If client-side routes are added, configure the host to serve `index.html` for application routes so direct visits and refreshes work.

## Deployment (Vercel)

Connect your repo to Vercel and go live with your project.

## Before Publishing

- Replace remaining placeholder project images and copy.
- Check mobile, tablet and desktop layouts.
- Test navigation, project accordions, carousels and gallery categories.
- Confirm process scrolling and service pause controls work.
- Verify WhatsApp, email and social links.
- Set the page title, favicon, meta description and social sharing image.
- Check keyboard navigation, text contrast and image descriptions.
- Resolve browser console errors and failed asset requests.

## Credits

**Portfolio:** Yusuf Busoyriy Graphix  
**Design and development:** [Adroit Tech Lab](https://wa.me/2349033023139).

## Usage Rights

Portfolio artwork, client branding and testimonial content are presented for showcase purposes. Their inclusion in this repository does not grant permission to reuse them.
