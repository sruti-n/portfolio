# Sruti Nallakukkala — Portfolio

A node-graph portfolio built with HTML, CSS and D3.js.

**Live site:** https://sruti-n.github.io/portfolio/

## Features

- **Interactive node graph:** each area of work is a hand-drawn node on an embroidered night sky. Nodes can be dragged and glow on hover.
- **Full-screen overlays:** clicking a node slides in a panel of expandable project cards. The About page uses a split layout with the photo on the left.
- **Gallery and lightbox:** photos and videos share one thumbnail grid. Thumbnails open a lightbox with arrow-key, swipe and prev/next navigation.
- **Embedded slides and videos:** Google Slides and YouTube links are converted to embeds automatically.
- **Mobile-friendly navigation:** on small screens the graph is replaced by a list of buttons.

## Project structure

```
.
├── index.html          Page structure, mobile nav, overlay and lightbox markup
├── style.css           Styles for the graph, overlays, gallery and lightbox
├── script.js           Graph setup, all content (panelContent) and rendering
├── resume.pdf          Linked from the Resume button
├── README.md
└── media/
    ├── documents/      PDFs (paper, poster, write-ups, essays)
    ├── pictures/       Photos and CAD renders
    └── videos/         Local video files
```

## Adding or editing content

All content lives in the `panelContent` object in `script.js`. Each top-level key matches a node `id`, and each section has a `title` and a list of `items` (one card per item):

```js
"engineering": {
    title: "Engineering",
    items: [
        {
            id: "sumo",
            label: "Sumo Robot",
            description: "First paragraph.\nSecond line.",   // \n becomes a line break
            photos: [
                { src: "media/pictures/sumo_robot_concept_1.1.png", caption: "Isometric CAD view." },
                { src: "media/documents/write-up.pdf", caption: "Project write-up" }  // PDFs show as links
            ],
            videos: [
                { src: "https://youtu.be/VIDEO_ID", caption: "Test run.", label: "Milestone 1" }  // label is optional
            ],
            slides: "https://docs.google.com/presentation/d/.../edit",  // a string or an array of URLs
            links: [
                { label: "Code on GitHub", url: "https://github.com/...", external: true }
            ]
        }
    ]
}
```

- Photos appear first in the gallery, then videos. A video's `label` shows as a badge on its thumbnail.
- Entries with an empty `src` or `url` are skipped, so placeholders can stay until the media is ready. A card with no content shows "Coming soon."
- Links with `external: true` open in a new tab. Other local links download the file.
- Adding `layout: "split"` to a section (used by About Me) shows its first photo full height beside the text.

## Media guidelines

- Use JPG, PNG or WebP. Browsers can't display HEIC.
- Resize photos to about 1800px on the long side to keep pages fast.
- File names are case-sensitive on GitHub Pages: `photo.JPG` and `photo.jpg` are different files. Match the path in `script.js` exactly.
- Host videos as unlisted YouTube links rather than committing large files. GitHub warns at 50 MB and rejects files over 100 MB.
- Set Google Slides sharing to "Anyone with the link can view", or the embed shows a sign-in page.

## Running locally

Open `index.html` in a browser, or serve the folder with a simple local server:

```sh
python3 -m http.server
```

Then visit http://localhost:8000. YouTube embeds can fail when the page is opened as a local file, so the server is the better option.

## Deploying

The site is served by GitHub Pages from the `main` branch. Each push to `main` updates the live site within a minute or two.

## Tech and credits

- [D3.js v7](https://d3js.org/) for the force-directed graph and dragging
- [Lora](https://fonts.google.com/specimen/Lora) via Google Fonts
- Plain HTML, CSS and JavaScript, with no build step
