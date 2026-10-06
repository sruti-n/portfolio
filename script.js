const nodes = [
    {id: "center", label: "Sruti Nallakukkala", type: "center"},
    {id: "research", label: "Research", type: "main"},
    {id: "engineering", label: "Engineering", type: "main"},
    {id: "craft", label: "Craft", type: "main"},
    {id: "writing", label: "Writing", type: "main"},
    {id: "photography", label: "Photography", type: "main"},
    {id: "kuchipudi", label: "Kuchipudi", type: "main"},
];

const links = nodes
    .filter(n => n.type === "main")
    .map(n => ({source: "center", target: n.id}));

const nodeColors = {
    center:      {fill: "#10150f", stroke: "#b5a584"},
    research:    {fill: "#0d1511", stroke: "#3f5c47"},
    engineering: {fill: "#15100b", stroke: "#6e5034"},
    craft:       {fill: "#13110a", stroke: "#5f5431"},
    writing:     {fill: "#0d1214", stroke: "#3d4c53"},
    photography: {fill: "#0c1311", stroke: "#2f5049"},
    kuchipudi:   {fill: "#150d0d", stroke: "#6b3b32"},
};

// Each item supports:
//   description: string (or array of paragraphs)
//   photos: [{src, caption}]
//   videos: [{src, caption, label?}]  -- a label like "Milestone 1" turns the list into a timeline
//   slides: Google Slides URL (share or embed link)
//   links:  [{label, url, external}]
// Entries with an empty src/url are skipped, so placeholders can stay until media is ready.
const panelContent = {
    "research": {
        title: "Research",
        items: [
            {
                id: "swarm-robotics",
                label: "Bridging the Quantum Gap: A Robotic Modeling System for Visualizing Decoherence and Qubit Behaviors",
                description: "Quantum computing is a rapidly evolving field, yet very few resources exist for quantum education because of existing barriers: advanced course pre-requisites and the slow pace of curriculum innovation, declining interest in STEM subjects. This project uses a physical, tangible robotic swarm simulation and model (modeled based on the Constructionism theory for learning) for students in elementary, middle, and high school to understand fundamental concepts in quantum computing.",
                photos: [
                    {
                        src: "media/pictures/arduino-servo-simulation-bridge.jpg",
                        caption: "My research project at its current stage: an Arduino Romeo connected to a servo, changing position based on the quantum state calculated in Qiskit"
                    }
                ],
                videos: [
                    { label: "Milestone 1", src: "", caption: "" },
                    { label: "Milestone 2", src: "", caption: "" },
                    { label: "Milestone 3", src: "", caption: "" },
                ],
                slides: "",
                links: [
                    { label: "Feel free to read my research paper :)", url: "media/documents/research-paper.pdf", external: false },
                    { label: "View the code on GitHub", url: "https://github.com/sruti-n/quantum_swarm_sim", external: true }
                ]
            },
            {
                id: "dni-internship",
                label: "Internship at the A.J. Drexel Nanomaterials Institute",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [],
                slides: "",
                links: []
            },
        ]
    },
    "engineering": {
        title: "Engineering",
        items: [
            {
                id: "sumo",
                label: "Sumo Robot",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [
                    { src: "", caption: "" },
                ],
                slides: "",
                links: []
            },
            {
                id: "windturbine",
                label: "Wind Turbine",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [],
                slides: "",
                links: []
            },
            {
                id: "eggdrop",
                label: "Egg Drop Capsule",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [],
                slides: "",
                links: []
            },
        ]
    },
    "craft": {
        title: "Craft",
        items: [
            {
                id: "puppetry",
                label: "Rod Puppet (in progress)",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [],
                slides: "",
                links: []
            },
        ]
    },
    "writing": {
        title: "Writing",
        items: [
            {
                id: "medium",
                label: "Medium",
                description: "My collection of self-reflections and personal essays",
                photos: [],
                videos: [],
                slides: "",
                links: [
                    { label: "Feel free to check out my Medium profile :)", url: "https://medium.com/@nallakukkalasruti", external: true }
                ]
            },
            {
                id: "writings",
                label: "Other Writings",
                description: "A few pieces I've written for academia, authentically, on topics that intrigued me.",
                photos: [],
                videos: [],
                slides: "",
                links: [
                    { label: "On Being Tired", url: "media/documents/on-being-tired.pdf", external: false },
                    { label: "Boldness: How sheer determination, grit, and solitude can help us fly miles into the sky?", url: "media/documents/boldness.pdf", external: false },
                    { label: "Wings on the Ground: How can we provide our abandoned airplanes a second chance at life?", url: "media/documents/wings-on-the-ground.pdf", external: false },
                ]
            },
        ]
    },
    "photography": {
        title: "Photography",
        items: [
            {
                id: "landscape-photography",
                label: "Landscape and Nature Photography",
                description: "",
                photos: [
                    { src: "", caption: "" },
                ],
                videos: [],
                slides: "",
                links: []
            },
        ]
    },
    "kuchipudi": {
        title: "Kuchipudi",
        items: [
            {
                id: "hindola-thillana",
                label: "Hindola Thillana",
                description: "",
                photos: [],
                videos: [
                    { src: "", caption: "" },
                ],
                slides: "",
                links: []
            },
            {
                id: "ramayana-sabdham",
                label: "Ramayana Sabdham",
                description: "",
                photos: [],
                videos: [
                    { src: "", caption: "" },
                ],
                slides: "",
                links: []
            },
            {
                id: "dasavatara-sabdham",
                label: "Dasavatara Sabdham",
                description: "",
                photos: [],
                videos: [
                    { src: "", caption: "" },
                ],
                slides: "",
                links: []
            },
        ]
    },
};

// Seeded randomness so each node keeps the same hand-drawn shape across reloads
function seededRandom(seedString) {
    let seed = 0;
    for (const ch of seedString) seed = (seed * 31 + ch.charCodeAt(0)) >>> 0;
    return function() {
        seed = (seed + 0x6D2B79F5) >>> 0;
        let t = seed;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function wobblyCircle(radius, seedString, roughness = 1) {
    const rand = seededRandom(seedString);
    const harmonics = [2, 3, 5].map(k => ({
        k,
        amp: (0.008 + rand() * 0.012) * roughness,
        phase: rand() * Math.PI * 2,
    }));
    const count = 32;
    const points = [];
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (rand() - 0.5) * 0.04;
        let r = radius * (1 + (rand() - 0.5) * 0.012 * roughness);
        harmonics.forEach(h => { r += radius * h.amp * Math.sin(h.k * angle + h.phase); });
        points.push([Math.cos(angle) * r, Math.sin(angle) * r]);
    }
    return d3.line().curve(d3.curveCatmullRomClosed.alpha(0.5))(points);
}

const width = window.innerWidth;
const height = window.innerHeight - 100;

const svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id( d=> d.id).distance(220))
    .force("charge", d3.forceManyBody().strength(-350))
    .force("collide", d3.forceCollide(d => d.type === "center" ? 95 : 68))
    .force("center", d3.forceCenter(width / 2, (height / 2) + 40));

const defs = svg.append("defs");
const bgGradient = defs.append("radialGradient")
    .attr("id", "bg-gradient")
    .attr("cx", "50%")
    .attr("cy", "50%")
    .attr("r", "70%");

bgGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#0e1311");
bgGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#070908");

// Faint earthy undertones pooling at the edges of the night sky
[
    {id: "forest-tint", cx: "15%", cy: "85%", color: "#1d3324"},
    {id: "leather-tint", cx: "88%", cy: "18%", color: "#3b2818"},
].forEach(t => {
    const g = defs.append("radialGradient")
        .attr("id", t.id)
        .attr("cx", t.cx)
        .attr("cy", t.cy)
        .attr("r", "55%");
    g.append("stop").attr("offset", "0%").attr("stop-color", t.color).attr("stop-opacity", 0.35);
    g.append("stop").attr("offset", "100%").attr("stop-color", t.color).attr("stop-opacity", 0);
});

// Long, stretched noise reads as dark wood grain
const woodFilter = defs.append("filter")
    .attr("id", "wood-grain")
    .attr("x", 0).attr("y", 0).attr("width", "100%").attr("height", "100%");
woodFilter.append("feTurbulence")
    .attr("type", "fractalNoise")
    .attr("baseFrequency", "0.004 0.09")
    .attr("numOctaves", 3)
    .attr("seed", 7);
woodFilter.append("feColorMatrix")
    .attr("values", "0 0 0 0 0.42  0 0 0 0 0.30  0 0 0 0 0.19  1.6 0 0 0 -0.55");

// Fine speckle reads as paper fibre
const paperFilter = defs.append("filter")
    .attr("id", "paper-grain")
    .attr("x", 0).attr("y", 0).attr("width", "100%").attr("height", "100%");
paperFilter.append("feTurbulence")
    .attr("type", "fractalNoise")
    .attr("baseFrequency", 0.85)
    .attr("numOctaves", 2)
    .attr("seed", 3);
paperFilter.append("feColorMatrix")
    .attr("values", "0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0 0.64  0 0 0 0.7 0");

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("fill", "url(#bg-gradient)");

["forest-tint", "leather-tint"].forEach(id => {
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", `url(#${id})`);
});

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("filter", "url(#wood-grain)")
    .attr("opacity", 0.07)
    .attr("pointer-events", "none");

svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("filter", "url(#paper-grain)")
    .attr("opacity", 0.06)
    .attr("pointer-events", "none");

const starsGroup = svg.append("g");
for (let i = 0; i < 120; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const r = Math.random() * 1.2;
    const opacity = Math.random() * 0.5 + 0.2;
    starsGroup.append("circle")
        .attr("cx", x)
        .attr("cy", y)
        .attr("r", r)
        .attr("fill", Math.random() < 0.25 ? "#e3cfa8" : "#d6cdbb")
        .attr("opacity", opacity)
        .attr("class", "star");
}

starsGroup.selectAll(".star")
    .style("animation-duration", () => (Math.random() * 3 + 2) +"s")
    .style("animation-delay", () => (Math.random() * 3) + "s");

const linkGroup = svg.append("g");
const nodeGroup = svg.append("g");

links.forEach((link, i) => {
    const rand = seededRandom(link.target + "-link");
    link.bend = (i % 2 === 0 ? 1 : -1) * (0.07 + rand() * 0.07);
});

linkGroup.selectAll("path")
    .data(links)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", "#4a4433")
    .attr("stroke-width", 1.2)
    .attr("stroke-linecap", "round")
    .attr("class", "connection-line")
    .style("--i", (d, i) => i);

function curvedLinkPath(d) {
    const sx = d.source.x, sy = d.source.y;
    const tx = d.target.x, ty = d.target.y;
    const dx = tx - sx, dy = ty - sy;
    const len = Math.hypot(dx, dy) || 1;
    const offset = d.bend * len;
    const cx = (sx + tx) / 2 - (dy / len) * offset;
    const cy = (sy + ty) / 2 + (dx / len) * offset;
    return `M${sx},${sy} Q${cx},${cy} ${tx},${ty}`;
}

const nodeEnter = nodeGroup.selectAll("g")
  .data(nodes)
  .join("g")
  .attr("cursor", "pointer")
  .call(d3.drag()
    .on("start", (event, d) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    })
    .on("drag", (event, d) => {
      d.fx = event.x;
      d.fy = event.y;
    })
    .on("end", (event, d) => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    })
  )
  .on("click", (event, d) => {
    if (d.type === "main" || d.type === "center") {
      openOverlay(d.id);
    }
  });

const nodeRadius = d => d.type === "center" ? 80 : 55;
const colorsFor = d => nodeColors[d.id] || {fill: "#0f1210", stroke: "#3d382c"};

nodeEnter.append("path")
    .attr("d", d => wobblyCircle(nodeRadius(d), d.id))
    .attr("fill", d => colorsFor(d).fill)
    .attr("stroke", d => colorsFor(d).stroke)
    .attr("stroke-width", d => d.type === "center" ? 1.5 : 1.1)
    .attr("stroke-linejoin", "round");

// A second, fainter pass of the outline, like a pencil going around twice
nodeEnter.append("path")
    .attr("d", d => wobblyCircle(nodeRadius(d) + 1.5, d.id + "-sketch", 1.6))
    .attr("fill", "none")
    .attr("stroke", d => colorsFor(d).stroke)
    .attr("stroke-width", 0.7)
    .attr("opacity", 0.45)
    .attr("pointer-events", "none");

nodeEnter.append("path")
    .attr("d", d => wobblyCircle(d.type === "center" ? 90 : 64, d.id + "-glow", 1.3))
    .attr("fill", "none")
    .attr("stroke", d => d.type === "center" ? "#8a7d62" : colorsFor(d).stroke)
    .attr("stroke-width", 1)
    .attr("opacity", 0)
    .attr("class", "node-glow");

nodeEnter
    .on("mouseenter", function() {
        d3.select(this).select(".node-glow")
            .attr("opacity", 0.75);
    })
    .on("mouseleave", function() {
        d3.select(this).select(".node-glow")
            .attr("opacity", 0);
    });

nodeEnter.append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("fill", d => d.type === "center" ? "#d6cdbb" : "#b3a68d")
    .attr("font-size", d => d.type === "center" ? "14px" : "13.5px")
    .attr("font-family", "Lora, Georgia, serif")
    .attr("font-style", d => d.type === "center" ? "normal" : "italic")
    .attr("pointer-events", "none")
    .text(d => d.label);

simulation.on("tick", () => {
  linkGroup.selectAll("path")
    .attr("d", curvedLinkPath);

  nodeGroup.selectAll("g")
    .attr("transform", d => `translate(${d.x}, ${d.y})`);
});

// Accepts share/watch links and converts them to embeddable URLs
function toEmbedUrl(url) {
    let m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/))) {
        return `https://www.youtube.com/embed/${m[1]}`;
    }
    if ((m = url.match(/docs\.google\.com\/presentation\/d\/(?:e\/)?([\w-]+)/)) && !url.includes("/embed")) {
        const published = url.includes("/d/e/");
        return `https://docs.google.com/presentation/d/${published ? "e/" : ""}${m[1]}/embed?start=false&loop=false`;
    }
    if ((m = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/))) {
        return `https://drive.google.com/file/d/${m[1]}/preview`;
    }
    return url;
}

function renderVideo(video) {
    const src = toEmbedUrl(video.src);
    const player = /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src)
        ? `<video class="video-embed" src="${src}" controls preload="metadata"></video>`
        : `<iframe class="video-embed" src="${src}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    const caption = video.caption ? `<p class="video-caption">${video.caption}</p>` : "";
    return player + caption;
}

function renderItemBody(item) {
    let bodyHtml = "";

    if (item.description) {
        const paragraphs = Array.isArray(item.description) ? item.description : [item.description];
        paragraphs.forEach(para => {
            bodyHtml += `<p class="project-description">${para}</p>`;
        });
    }

    if (item.slides) {
        bodyHtml += `
            <div class="slides-embed">
                <iframe src="${toEmbedUrl(item.slides)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;
    }

    const videos = (item.videos || []).filter(v => v.src);
    if (videos.length > 0) {
        if (videos.some(v => v.label)) {
            bodyHtml += `<div class="timeline">`;
            videos.forEach(video => {
                bodyHtml += `
                    <div class="timeline-item">
                        ${video.label ? `<p class="timeline-label">${video.label}</p>` : ""}
                        ${renderVideo(video)}
                    </div>`;
            });
            bodyHtml += `</div>`;
        } else {
            videos.forEach(video => {
                bodyHtml += `<div class="video-block">${renderVideo(video)}</div>`;
            });
        }
    }

    const photos = (item.photos || []).filter(p => p.src);
    if (photos.length > 0) {
        bodyHtml += `<div class="photo-grid">`;
        photos.forEach(photo => {
            bodyHtml += `
                <figure class="photo-figure">
                    <img src="${photo.src}" alt="${photo.caption || ''}" loading="lazy">
                    ${photo.caption ? `<figcaption class="photo-caption">${photo.caption}</figcaption>` : ''}
                </figure>`;
        });
        bodyHtml += `</div>`;
    }

    const itemLinks = (item.links || []).filter(l => l.url);
    if (itemLinks.length > 0) {
        bodyHtml += `<div class="project-links">`;
        itemLinks.forEach(link => {
            const target = link.external ? 'target="_blank" rel="noopener"' : '';
            const download = !link.external ? 'download' : '';
            bodyHtml += `<a href="${link.url}" class="project-link" ${target} ${download}>${link.label}</a>`;
        });
        bodyHtml += `</div>`;
    }

    return bodyHtml;
}

function openOverlay(nodeId) {
    const content = panelContent[nodeId];
    if  (!content) return;

    const overlay = document.getElementById("overlay");
    const overlayTitle = document.getElementById("overlay-title");
    const overlayContent = document.getElementById("overlay-content");

    overlayTitle.textContent = content.title;

    let html = "";

    content.items.forEach(item => {
        const bodyHtml = renderItemBody(item);
        html += `
            <div class="project-card">
                <button class="project-card-header" onclick="toggleCard(this)">
                    ${item.label}
                    <span class="arrow">▶</span>
                </button>
                <div class="project-card-body">
                    ${bodyHtml || '<p class="project-description">Coming soon.</p>'}
                </div>
            </div>`;
    });

    overlayContent.innerHTML = html;
    overlay.scrollTop = 0;
    overlay.classList.add("open");
}

function toggleCard(button) {
    button.classList.toggle("open");
    button.nextElementSibling.classList.toggle("open");
}

document.getElementById("overlay-back").addEventListener("click", () => {
    const overlay = document.getElementById("overlay");
    overlay.classList.remove("open");
    // Clear embeds once the slide-out finishes so videos stop playing
    setTimeout(() => {
        if (!overlay.classList.contains("open")) {
            document.getElementById("overlay-content").innerHTML = "";
        }
    }, 400);
});
