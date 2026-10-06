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

// Background concept: ?bg=linen or ?bg=frame on the URL; ink-wash otherwise
const bgParam = new URLSearchParams(window.location.search).get("bg");
const concept = ["linen", "frame"].includes(bgParam) ? bgParam : "ink";
document.documentElement.dataset.bg = concept;

const width = window.innerWidth;
const height = Math.max(400, window.innerHeight - document.querySelector("header").offsetHeight);

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

const fullRect = (parent = svg) => parent.append("rect")
    .attr("width", width)
    .attr("height", height)
    .attr("pointer-events", "none");

function radialGradient(id, stops, r = "70%", cx = "50%", cy = "50%") {
    const g = defs.append("radialGradient")
        .attr("id", id)
        .attr("cx", cx)
        .attr("cy", cy)
        .attr("r", r);
    stops.forEach(([offset, color, opacity = 1]) => {
        g.append("stop")
            .attr("offset", offset)
            .attr("stop-color", color)
            .attr("stop-opacity", opacity);
    });
    return `url(#${id})`;
}

function noiseFilter(id, frequency, octaves, seed, matrix) {
    const filter = defs.append("filter")
        .attr("id", id)
        .attr("x", 0).attr("y", 0).attr("width", "100%").attr("height", "100%");
    filter.append("feTurbulence")
        .attr("type", "fractalNoise")
        .attr("baseFrequency", frequency)
        .attr("numOctaves", octaves)
        .attr("seed", seed)
        .attr("result", "noise");
    if (matrix) filter.append("feColorMatrix").attr("values", matrix);
    return filter;
}

// Faint earthy undertones pooling at the edges of the night sky
function drawEarthyTints(forestOpacity, leatherOpacity) {
    fullRect().attr("fill", radialGradient("forest-tint",
        [["0%", "#1d3324", forestOpacity], ["100%", "#1d3324", 0]], "55%", "15%", "85%"));
    fullRect().attr("fill", radialGradient("leather-tint",
        [["0%", "#3b2818", leatherOpacity], ["100%", "#3b2818", 0]], "55%", "88%", "18%"));
}

// Fine speckle reads as paper fibre
function drawPaperGrain(opacity, parent = svg) {
    if (defs.select("#paper-grain").empty()) {
        noiseFilter("paper-grain", 0.85, 2, 3,
            "0 0 0 0 0.85  0 0 0 0 0.82  0 0 0 0 0.74  0 0 0 0.7 0");
    }
    fullRect(parent).attr("filter", "url(#paper-grain)").attr("opacity", opacity);
}

// Flat, uneven indigo pools with a darker "tide line" where the pigment dried at the edge
function inkWashFilter(id, frequency, seed, color, threshold) {
    const rgb = `0 0 0 0 ${color[0]}  0 0 0 0 ${color[1]}  0 0 0 0 ${color[2]}`;
    const filter = noiseFilter(id, frequency, 3, seed);
    filter.append("feColorMatrix")
        .attr("in", "noise")
        .attr("values", `${rgb}  6 0 0 0 ${-6 * threshold + 0.45}`)
        .attr("result", "wash");
    filter.append("feColorMatrix")
        .attr("in", "noise")
        .attr("values", `${rgb}  40 0 0 0 ${-40 * threshold}`)
        .attr("result", "mask");
    filter.append("feMorphology")
        .attr("in", "mask")
        .attr("operator", "erode")
        .attr("radius", 1.4)
        .attr("result", "inner");
    filter.append("feComposite")
        .attr("in", "mask")
        .attr("in2", "inner")
        .attr("operator", "out")
        .attr("result", "ring");
    filter.append("feGaussianBlur")
        .attr("in", "ring")
        .attr("stdDeviation", 0.7)
        .attr("result", "tideLine");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "wash");
    merge.append("feMergeNode").attr("in", "tideLine");
}

function drawInkWashSky() {
    fullRect().attr("fill", radialGradient("bg-gradient", [["0%", "#11162a"], ["100%", "#080a12"]]));

    inkWashFilter("ink-wash-light", 0.0028, 21, [0.17, 0.21, 0.38], 0.5);
    inkWashFilter("ink-wash-dark", 0.0045, 5, [0.02, 0.025, 0.05], 0.53);
    fullRect().attr("filter", "url(#ink-wash-light)").attr("opacity", 0.2);
    fullRect().attr("filter", "url(#ink-wash-dark)").attr("opacity", 0.45);

    drawEarthyTints(0.18, 0.2);

    // Ink pools darker toward the edges, the way a wash settles on paper
    fullRect().attr("fill", radialGradient("ink-pool",
        [["45%", "#04050a", 0], ["100%", "#04050a", 0.7]], "75%"));

    // Raised cold-press paper tooth, lit from the top left
    const tooth = noiseFilter("paper-tooth", 0.045, 5, 8);
    tooth.append("feDiffuseLighting")
        .attr("in", "noise")
        .attr("surfaceScale", 2.2)
        .attr("lighting-color", "#e9e2d0")
        .append("feDistantLight")
        .attr("azimuth", 225)
        .attr("elevation", 55);
    fullRect().attr("filter", "url(#paper-tooth)").attr("opacity", 0.06);

    drawPaperGrain(0.05);
}

function drawLinenSky() {
    fullRect().attr("fill", radialGradient("bg-gradient", [["0%", "#17161d"], ["100%", "#0a0a0d"]]));

    // Uneven dye, darker and lighter patches across the cloth
    noiseFilter("dye-mottle", 0.004, 3, 14,
        "0 0 0 0 0.02  0 0 0 0 0.02  0 0 0 0 0.04  2.4 0 0 0 -1.05");
    fullRect().attr("filter", "url(#dye-mottle)").attr("opacity", 0.5);

    drawEarthyTints(0.14, 0.16);

    // Plain weave: each thread passes over one crossing thread, then under the next
    const weave = defs.append("pattern")
        .attr("id", "linen-weave")
        .attr("width", 6)
        .attr("height", 6)
        .attr("patternUnits", "userSpaceOnUse");
    [[0, 0.6, 3, 1.8], [3, 3.6, 3, 1.8]].forEach(([x, y, w, h]) => {
        weave.append("rect").attr("x", x).attr("y", y).attr("width", w).attr("height", h)
            .attr("fill", "#d8ccb4").attr("rx", 0.8);
    });
    [[3.6, 0, 1.8, 3], [0.6, 3, 1.8, 3]].forEach(([x, y, w, h]) => {
        weave.append("rect").attr("x", x).attr("y", y).attr("width", w).attr("height", h)
            .attr("fill", "#b9ae98").attr("rx", 0.8);
    });
    fullRect().attr("fill", "url(#linen-weave)").attr("opacity", 0.045);

    // Slubs: thicker and thinner stretches along the warp and weft threads
    noiseFilter("weft-slubs", "0.006 0.55", 2, 2,
        "0 0 0 0 0.85  0 0 0 0 0.8  0 0 0 0 0.7  2.2 0 0 0 -1.15");
    noiseFilter("warp-slubs", "0.55 0.006", 2, 9,
        "0 0 0 0 0.85  0 0 0 0 0.8  0 0 0 0 0.7  2.2 0 0 0 -1.15");
    fullRect().attr("filter", "url(#weft-slubs)").attr("opacity", 0.07);
    fullRect().attr("filter", "url(#warp-slubs)").attr("opacity", 0.05);

    fullRect().attr("fill", radialGradient("cloth-shadow",
        [["50%", "#040405", 0], ["100%", "#040405", 0.6]], "75%"));
}

function drawClearNightSky() {
    fullRect().attr("fill", radialGradient("bg-gradient", [["0%", "#0f1424"], ["100%", "#070910"]]));
    drawEarthyTints(0.12, 0.12);
}

// A sheet of dark aged paper with a torn window in it, the sky showing through
function drawPaperFrame(layer) {
    const rand = seededRandom("paper-frame");
    const margin = Math.min(36, width * 0.04);
    const corners = [[margin, margin], [width - margin, margin], [width - margin, height - margin], [margin, height - margin]];
    const waves = [0, 1].map(() => ({freq: 0.004 + rand() * 0.006, phase: rand() * Math.PI * 2}));

    let travelled = 0;
    const points = [];
    corners.forEach((start, i) => {
        const end = corners[(i + 1) % 4];
        const length = Math.hypot(end[0] - start[0], end[1] - start[1]);
        const nx = -(end[1] - start[1]) / length;
        const ny = (end[0] - start[0]) / length;
        for (let t = 0; t < length; t += 4 + rand() * 4) {
            const along = travelled + t;
            const smooth = waves.reduce((sum, w) => sum + Math.sin(along * w.freq + w.phase) * 7, 0);
            const jag = (rand() - 0.5) * 5;
            const inset = smooth + jag + 4;
            const f = t / length;
            points.push([
                start[0] + (end[0] - start[0]) * f + nx * inset,
                start[1] + (end[1] - start[1]) * f + ny * inset,
            ]);
        }
        travelled += length;
    });
    const tear = "M" + points.map(p => p.join(",")).join("L") + "Z";
    const sheet = `M0,0H${width}V${height}H0Z` + tear;

    defs.append("clipPath").attr("id", "frame-clip")
        .append("path").attr("d", sheet).attr("clip-rule", "evenodd");

    const shadow = defs.append("filter")
        .attr("id", "frame-shadow")
        .attr("x", "-5%").attr("y", "-5%").attr("width", "110%").attr("height", "110%");
    shadow.append("feDropShadow")
        .attr("dx", 0).attr("dy", 2)
        .attr("stdDeviation", 6)
        .attr("flood-color", "#000")
        .attr("flood-opacity", 0.75);

    const frame = layer.append("g").attr("filter", "url(#frame-shadow)");
    frame.append("path")
        .attr("d", sheet)
        .attr("fill-rule", "evenodd")
        .attr("fill", "#251d15");

    const texture = frame.append("g").attr("clip-path", "url(#frame-clip)");
    noiseFilter("frame-mottle", 0.008, 4, 31,
        "0 0 0 0 0.45  0 0 0 0 0.33  0 0 0 0 0.2  1.8 0 0 0 -0.8");
    fullRect(texture).attr("filter", "url(#frame-mottle)").attr("opacity", 0.25);
    drawPaperGrain(0.1, texture);

    // Torn paper shows a lighter, fibrous edge
    frame.append("path")
        .attr("d", tear)
        .attr("fill", "none")
        .attr("stroke", "#b39c78")
        .attr("stroke-width", 3)
        .attr("opacity", 0.12);
    frame.append("path")
        .attr("d", tear)
        .attr("fill", "none")
        .attr("stroke", "#cdb994")
        .attr("stroke-width", 0.9)
        .attr("stroke-linejoin", "round")
        .attr("opacity", 0.45);
}

if (concept === "linen") drawLinenSky();
else if (concept === "frame") drawClearNightSky();
else drawInkWashSky();

const starsGroup = svg.append("g");
for (let i = 0; i < 120; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const opacity = Math.random() * 0.5 + 0.2;
    if (concept === "linen") {
        // Cross-stitched stars in gold and cream thread
        const size = 0.8 + Math.random() * Math.random() * 2.6;
        starsGroup.append("path")
            .attr("d", `M${-size},${-size}L${size},${size}M${-size},${size}L${size},${-size}`)
            .attr("transform", `translate(${x},${y}) rotate(${(Math.random() - 0.5) * 16})`)
            .attr("stroke", Math.random() < 0.55 ? "#d9b46a" : "#e6dcc4")
            .attr("stroke-width", 0.9)
            .attr("stroke-linecap", "round")
            .attr("opacity", opacity + 0.15)
            .attr("class", "star");
    } else {
        const gold = concept === "ink" ? 0.6 : 0.2;
        starsGroup.append("circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", Math.random() * 1.2)
            .attr("fill", Math.random() < gold ? "#d9b46a" : "#ecdcb4")
            .attr("opacity", opacity)
            .attr("class", "star");
    }
}

starsGroup.selectAll(".star")
    .style("animation-duration", () => (Math.random() * 3 + 2) +"s")
    .style("animation-delay", () => (Math.random() * 3) + "s");

if (concept === "frame") drawPaperFrame(svg.append("g"));

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
    .attr("stroke", concept === "linen" ? "#8a7a5c" : "#4a4433")
    .attr("stroke-width", concept === "linen" ? 1.4 : 1.2)
    .attr("stroke-dasharray", concept === "linen" ? "7 5" : null)
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
// (on linen it becomes a running stitch around the node)
nodeEnter.append("path")
    .attr("d", d => wobblyCircle(nodeRadius(d) + (concept === "linen" ? 5 : 1.5), d.id + "-sketch", 1.6))
    .attr("fill", "none")
    .attr("stroke", d => colorsFor(d).stroke)
    .attr("stroke-width", concept === "linen" ? 1.2 : 0.7)
    .attr("stroke-dasharray", concept === "linen" ? "4 3" : null)
    .attr("stroke-linecap", "round")
    .attr("opacity", concept === "linen" ? 0.8 : 0.45)
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
