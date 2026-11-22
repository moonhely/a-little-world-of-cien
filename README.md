# A Little World Called Cien

A responsive, single-page personal scrapbook website made with plain HTML and CSS. It does not require a build tool, paid hosting, or JavaScript framework.

## Files
- `index.html` — the complete website.
- `assets/` — place your own photos and images here when you customize the page.

## Preview on your phone or computer
Open `index.html` in a browser. For GitHub Pages, upload `index.html` to the root of a GitHub repository.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new **public** repository (for example, `cien-personal-website`).
2. Upload `index.html` and the `assets` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site. The URL will look like `https://YOUR-USERNAME.github.io/cien-personal-website/`.

## Add your own photos
The current photo areas are decorative placeholders. To add a photo:
1. Put the image in the `assets` folder, for example `assets/cien-photo.jpg`.
2. In `index.html`, find the placeholder you want to replace.
3. Replace its placeholder `<div>` with an image element, for example:
   `<img src="assets/cien-photo.jpg" alt="Cien outdoors" style="width:100%;height:270px;object-fit:cover;">`
4. Save and upload the updated file to GitHub.

You can also replace a gallery placeholder with an image using the same approach. Keep image files reasonably compressed so the site loads quickly on mobile.

## Edit the page
Open `index.html` in a text editor. Search for the section heading or placeholder text you want to change. The social links are in the section with `id="socials"`.

## Privacy reminder
GitHub Pages sites are public. Anyone with the URL may be able to view your name, photos, social profiles, and any gaming identifiers you publish. Only keep details you are comfortable sharing publicly. Consider using a nickname and leaving player IDs off the public site.
