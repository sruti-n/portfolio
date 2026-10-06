# Sruti Nallakukkala — Portfolio

**Live site:** https://sruti-n.github.io/portfolio/

A personal portfolio built as an interactive node graph. Each node is one area of my work (Research, Engineering, Craft, Writing, Photography and Kuchipudi), set against a night sky embroidered on dark linen. Clicking a node opens a full-screen panel of project cards with descriptions, photos, videos, slides and links.

The stars are cross-stitches in gold and cream thread, the lines between nodes are a running stitch, and each node has a stitched ring around it. The nodes can be dragged around, and they glow softly on hover.

On small screens the graph is replaced by a simple list of buttons.

## Sections

| Node | What's inside |
| --- | --- |
| Research | Bridging the Quantum Gap (robotic swarm project, with paper and code); internship at the A.J. Drexel Nanomaterials Institute |
| Engineering | Sumo Robot, Wind Turbine, Egg Drop Capsule and End Effector |
| Craft | Rod Puppet (in progress) |
| Writing | Medium essays and other writings (PDFs) |
| Photography | Places: Manchester-by-the-Sea, Stanford, Titusville, Princeton, Ithaca and Taughannock Falls |
| Kuchipudi | Hindola Thillana, Ramayana Sabdham and Dasavatara Sabdham |

## Built with

- Plain HTML, CSS and JavaScript (no build step)
- [D3.js](https://d3js.org/) for the force-directed graph and drag behavior
- [Lora](https://fonts.google.com/specimen/Lora) from Google Fonts
- SVG patterns and `feTurbulence` filters for the embroidered linen texture

## Files

| Path | What it holds |
| --- | --- |
| `index.html` | Page structure, header, mobile navigation, the design credit and the overlay panel |
| `style.css` | Colors, typography, cards, photo grid, video timeline and slide embeds |
| `script.js` | Graph nodes, all project content (`panelContent`) and the overlay rendering |
| `media/` | Photos (`media/pictures/`) and PDFs (`media/documents/`) |
| `resume.pdf` | Linked from the Resume button |

## Adding content

All project content lives in the `panelContent` object in `script.js`. Each project card supports:

```js
{
    id: "sumo",
    label: "Sumo Robot",
    description: "",                                 // a string
    photos: [{ src: "media/pictures/...", caption: "" }],
    videos: [{ src: "", caption: "", label: "Milestone 1" }],  // label is optional
    slides: "",                                      // Google Slides link
    links:  [{ label: "", url: "", external: true }]
}
```

- Entries with an empty `src` or `url` are skipped, so placeholders can stay until the media is ready. A card with nothing filled in shows "Coming soon."
- If any video has a `label`, the videos are shown as a milestone timeline.
- YouTube, Google Slides and Google Drive share links can be pasted as-is; they are converted to embed links automatically.
- Links with `external: false` download the file (used for the PDFs).
- Each Photography card is a place: the place name as the `label`, a short note about it as the `description`, and its photos with captions.

## Running locally

Open `index.html` in a browser. YouTube embeds may show an error when the page is opened as a local file; they work on the live site.

## Deploying

The site is served by GitHub Pages from the `main` branch. Every push to `main` updates the live site within about a minute.
