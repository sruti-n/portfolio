// Bump this whenever an image is replaced under the same filename, so browsers fetch the new copy
const MEDIA_VERSION = "2";

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
//   description: string, or an array of paragraph strings and {list: [...], ordered: true} lists
//   photos: [{src, caption}]  -- a src ending in .pdf is shown as a document link instead
//   videos: [{src, caption, label?}]  -- url works in place of src; label shows as a badge
//   slides: Google Slides URL, or an array of them (share or embed links);
//           an entry can also be {title, description, url} (src works in place of url)
//   links:  [{label, url, external}]
// Photos and videos share one thumbnail gallery that opens in the lightbox.
// Entries with an empty src/url are skipped, so placeholders can stay until media is ready.
// A section with layout: "split" shows its first photo full height on the left and the rest beside it.
const panelContent = {
    "center": {
        title: "About Me",
        layout: "split",
        items: [
            {
                id: "about-me",
                label: "About Me",
                description: "Hi! My name is Sruti Nallakukkala. I am a current senior at the Princeton International School of Mathematics and Science (PRISMS). As an aspiring human-centered engineer, I like making things while considering my audience. Currently, I am working on modeling and simulating qubit behaviors using swarm robotics and finishing up a rod puppet. And yes, I am an overthinker, the kind who would be thinking about something philosophical or far-fetched while standing and drinking lemonade. Feel free to say hi through my email or LinkedIn, and maybe even take a gander at my GitHub! Have fun exploring :)",
                photos: [
                    {src: "media/pictures/sruti_with_camera.JPG", caption: "Me with my camera :--)" }
                ],
                videos: [],
                slides: "",
                links: [
                    { label: "GitHub", url: "https://github.com/sruti-n", external: true },
                    { label: "LinkedIn", url: "https://www.linkedin.com/in/srutinallakukkala/", external: true },
                    { label: "Email", url: "mailto:srutinallakukkala@gmail.com", external: false },
                ]
            },
        ]
    },
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
                    },
                    {
                        src: "media/documents/research_poster.pdf",
                        caption: "My research poster, presented during the Summer Research Symposium at the Princeton International School of Mathematics and Science"
                    }
                ],
                videos: [
                    { label: "Milestone 1", url: "https://youtu.be/cT6hQU2sdXk", external: true, caption: "Initial version of the simulation stage of the project. Successfully was able to show that we can create a basic simulation of qubit behaviors using the same logic from the servo-Arduino concept. However, the simulated qubits moved too fast for users to understand the behavior being shown. Entanglement involved rotating around an axis, which was not too accurate." },
                    { label: "Milestone 2", url: "https://youtu.be/sCDE6C86zSA", external: true, caption: "Second version expanded on the initial version by fixing the Measure option on the simulation. In the first version, regardless of the parameter values (e.g., noise rate), the measurement results were the same, even while changing from simulating superposition to entanglement." },
                    { label: "Milestone 3", url: "https://youtu.be/jwUfKTx83E4", external: true, caption: "Third version further refined the simulation by changing the robots from dots to vehicles with two sensors on the back, mimicking the style of Braitenberg Vehicles. Users were able to simulate with one robot and the robot design panel (where the robot's shape can be changed by manually altering the JSON for it) was deployed as a new feature. A design credit line was added to the bottom left side of the simulation." },
                    { label: "Milestone 4", url: "https://youtu.be/1HR20APCuLE", external: true, caption: "Fourth version added robot separation so that robots would not overlap on each other. Worked on improving the probabilistic nature of the simulation by showing the measurement outcome, instead of the probability of getting a 0 or 1 as the result (which is also why in the previous stages, the result after hitting Measure was very similar)." },
                    { label: "Milestone 5", url: "https://youtu.be/oOMwcShijrQ", external: true, caption: "Fifth version now includes a tour mode and a dashed line between the pairs of robots, to show that they are entangled. Included a 'Running Quantum Circuit' panel to show users that the simulation is actively running. Tested the idea of including wheels for the robots in the simulation, in order to make their shape, and the simulation, more intuitive." },
                ],
                slides: "",
                links: [
                    { label: "Feel free to read my research paper :)", url: "media/documents/research-paper.pdf", external: false },
                    { label: "Feel free to view the code on GitHub :)", url: "https://github.com/sruti-n/quantum_swarm_sim", external: true }
                ]
            },
            {
                id: "dni-internship",
                label: "Internship at the A.J. Drexel Nanomaterials Institute",
                description: "At my internship at the A.J. Drexel Nanomaterials Institute, I was part of a self-healing wound patch project. There, I created interdigitated electrodes to stimulate the skin for healing. Band-aids can treat minor wounds. But with this patch, we can go directly into the wounded area, instead of staying on its surface. The electrodes’ conductivity leverages the skin’s electric field to accelerate healing while the collagen nanofibers help the patch to stick onto users’ skin. Analyzing the properties of the materials used in the patch helped us understand how well the patch could stick to the skin, without causing side effects. Feel free to check out my presentations below :)",
                photos: [
                    { src: "media/pictures/drexel_one.jpeg", caption: "A smiley face I made while painting MXene ink onto paper." },
                    { src: "media/pictures/drexel_two.jpeg", caption: "Curing the mask to screen paint the AgCl (Silver chloride) and MXene ink onto the collagen nanofibers to make the interdigitated electrodes." },
                    { src: "media/pictures/drexel_three.jpeg", caption: "Screen painting the AgCl (Silver chloride) and MXene ink onto the collagen nanofibers to make the interdigitated electrodes." },
                    { src: "media/pictures/drexel_four.jpeg", caption: "My last day donning the lab coat, glasses, and gloves as a summer lab intern at DNI. " }
                ],
                videos: [],
                slides: [
                    {
                        title: "Introduction Presentation",
                        description: "This is my introduction presentation from my internship at the A.J. Drexel Nanomaterials Institute, which talks about my hobbies and interests in Materials Science and Engineering.", 
                        url: "https://docs.google.com/presentation/d/1a9DsQiINpQZEikiHRV9YscrlV6G-BKkvOGpGjKRs6Mg/edit?usp=sharing"
                    },
                    {
                        title: "Exit Presentation",
                        description: "This is my exit presentation from my internship at the A.J. Drexel Nanomaterials Institute, which provides the context, experimental procedure, and conclusions from my research work here.", 
                        url: "https://docs.google.com/presentation/d/1gxgaGWeh1prvgFTY0hpXbbOTOVOzr-lNIrVQSm5O_-g/edit?usp=sharing"
                    }
                ],
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
                description: [
                    "Following the Unified Sumo Robot Rules, you will be designing and constructing a Sumo robot. This competition consists of two robots fighting face to face in the sumo ring (Dohyo). The goal is to push your opponent out of the ring via remote control. Each match consists of 3 rounds lasting no more than 3 minutes each. Points are given to each robot for successfully pushing their opponent to touch the outside of the dohyo. The robot with the most points by the end of the match wins. If no points are awarded by the end, an additional round may be added.",
                    "Because the first prototype of my sumo robot wasn't successful through how the spur gear (the gear connected to the motor) was designed to be on the rack, I redesigned the sumo robot with my friend to create my second prototype to address this issue.",
                    "The robot must fit within a 15cm x 15cm square at the start of the contest and weigh no more than 500g.",
                    "The materials we were given are 1 12” x 12” x ⅛” Plywood sheet, 3D printed PLA plastic, 1 ESP8266 with motor shield, 2 DC gear motors, 2 micro servos, 3mm hardware (nuts, bolts, washers, etc.), wood glue, super glue, hot glue, rubber bands, and rubber o-rings.",
                    "The requirements for the robot are as follows:",
                    {
                        ordered: true,
                        list: [
                            "Weapons, projectiles, and jamming devices are not allowed.",
                            "Parts that can damage or alter the dohyo are not allowed.",
                            "Vacuum or suction devices designed to increase downforce are not allowed.",
                            "Sharp edges or blades are not allowed.",
                            "Robots can only be driven by the supplied motors and powered by the supplied battery. No external electronic components are permitted.",
                            "No flipping devices. This is a pushing competition. Seriously.",
                            "The robot must use gears to connect the motor to the wheels.",
                            "The robot must use at least one (maximum 2) micro servos and some mechanism beyond direct drive or a spur gear to achieve an additional range of motion.",
                            "The round will be forfeited if your robot does not move for more than 15 seconds."
                        ]
                    }
                ],
                photos: [
                    { src: "media/pictures/sumo_robot_prelim_drawings_page-0001.jpg", caption: "This is the first design concept I had for my sumo robot." },
                    { src: "media/pictures/sumo_robot_prelim_drawings_page-0002.jpg", caption: "This is the second part of the first design concept I had for my sumo robot." },
                    { src: "media/pictures/sumo_robot_prelim_drawings_page-0003.jpg", caption: "This is the second design concept I had for my sumo robot." },
                    { src: "media/pictures/sumo_robot_prelim_drawings_page-0004.jpg", caption: "This is the third design concept I had for my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_1.1.png", caption: "This is an isometric 3D CAD view from the first prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_1.2.png", caption: "This is a top 3D CAD view from the first prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.1.png", caption: "This is an isometric 3D CAD view from the second prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.2.png", caption: "This is a top 3D CAD view from the second prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.3.png", caption: "This is an isometric real-world view from the second prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.4.png", caption: "This is an top-down real-world view from the second prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.5.png", caption: "This is a side view of the second prototype of my sumo robot." },
                    { src: "media/pictures/sumo_robot_concept_2.6.png", caption: "This is a rear view of the second prototype of my sumo robot." }

                ],
                videos: [
                    { src: "", caption: "" },
                ],
                slides: "https://docs.google.com/presentation/d/1fmc2LF-j0oeb23ohEClU67sUlkmneHOrZKKcGZx6P4M/edit?usp=sharing",
                links: []
            },
            {
                id: "windturbine",
                label: "Wind Turbine",
                description: [
                    "Wind power is widely believed to be one of the best alternative energy sources due to its low relative cost, low impact on the surrounding environment, and high energy potential. This lab will focus on the design and construction of an efficient wind turbine capable of generating usable electricity from a low-speed wind source. During this design project you will produce a series of preliminary designs, a 3D CAD model of your final design, blueprints and a functional prototype.",
                    "For this project, I was able to use 1 DC Motor, 1 12” x 12” Plywood sheet, 1 12” x 3/16” (5mm) Bamboo rod, 1 18” x 24” sheet of tissue paper, 4 ¼” x ⅛” x 36” Balsa strips, and 1 Arduino with necessary power measurement electronics.",
                    "The restrictions for this project are that the total blade diameter must not exceed 400mm (15.75”) and I may use 3D printed parts, but I cannot 3D print my blades."
                ],
                photos: [
                    { src: "media/documents/wind_turbine_analysis.pdf", caption: "My Wind Turbine Project Analysis Write-Up, detailing the design, testing, and results of my wind turbine project." },
                    { src: "media/pictures/wind_turbine_1.1.png", caption: "This is a 3D CAD view of my wind turbine's airfoils." },
                    { src: "media/pictures/wind_turbine_1.2.jpg", caption: "This is a real-world view of my wind turbine outside." },
                    { src: "media/pictures/wind_turbine_1.4.png", caption: "This is a 2D CAD model of my wind turbine's airfoils." },
                    { src: "media/pictures/wind_turbine_1.5.png", caption: "This is a 2D CAD model of the airfoils tested in the wind tunnel." },

                ],
                videos: [
                    { src: "https://youtube.com/shorts/B11hwwM0SpU", caption: "A video of my wind turbine in action outside." }
                ],
                slides: "",
                links: []
            },
            {
                id: "eggdrop",
                label: "Egg Drop Capsule",
                description: [
                    "Entry, descent, and landing is one of the most difficult challenges to overcome in the space industry. To be able to survive entering a planet’s atmosphere and not burn up, decelerate to a safe velocity and not break apart, and safely impact the surface is an immense challenge. In order to replicate some of this challenge in the classroom, you will be designing a capsule that can free-fall 5m while not damaging the payload. You will also be collecting performance data including attitude during descent and stress distribution during impact.",
                    "The materials I was able to use are 1 12” x 12” x ⅛” Plywood sheet, 3D printed plastic, cardstock/chipboard, 3mm nuts, bolts and washers, and glue (wood, super, hot).",
                    "The restrictions for this project are as follows:",
                    {
                        ordered: true,
                        list: [
                            "You may only use the materials provided by the instructor.",
                            "Your design must be made out of no more than 50% 3D printed parts.",
                            "Your capsule must free-fall and cannot be attached to any other structure.",
                            "You cannot use a parachute.",
                            "The entire capsule must fit in a 10cm (D) x 25cm (H) cylinder.",
                            "The total weight of the capsule and payload must not exceed 500 grams.",
                            "Your capsule must be able to have the payload removed without damage to the structure.",
                            "Your capsule must land in the designated landing zone.",
                            "Materials cannot be used in excess to provide protection to the egg."
                        ]
                    }
                ],
                photos: [
                    { src: "media/pictures/descent_and_landing_prelim_drawings_page-0001.jpg", caption: "This is the first design concept I had for my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_prelim_drawings_page-0002.jpg", caption: "This is the second design concept I had for my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_prelim_drawings_page-0003.jpg", caption: "This is the third design concept I had for my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_1.1.png", caption: "This is a 3D CAD view of the first prototype of my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_1.2.png", caption: "This is a 3D CAD view of the second prototype of my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_1.3.png", caption: "This is a real-world view of the first prototype of my egg drop capsule." },
                    { src: "media/pictures/descent_and_landing_1.4.png", caption: "This is a real-world view of the second prototype of my egg drop capsule." }
                ],
                videos: [
                    {url: "https://youtube.com/shorts/xs8jW51UU94?feature=share", caption: "First drop test of my egg drop capsule."},
                    {url: "https://youtube.com/shorts/9DhAQEcl5OI?feature=share", caption: "Final drop test of my egg drop capsule."}
                ],
                slides: "https://docs.google.com/presentation/d/1gfxvp4P1fmlbsQfAYwIWnPrs3ASfYwcVd79QPH0wILQ/edit?usp=sharing",
                links: []
            },
            {
                id: "end-effector",
                label: "End Effector",
                description: [
                    "Robotic systems play an integral role in modern manufacturing. From human-assisted procedures to fully autonomous operations, industrial robotics rely on one or more controllers, sensors, actuators, and mechanisms to accurately complete work. Your task for this design project is to design a unique end effector for a small 3 degree-of-freedom (DOF) robotic arm that can complete a single task on an assembly line. To accomplish this, you will need to consider the input and output requirements, size constraints, power, control, and error handling.",
                    "The materials used for the end effector include a 3-DOF robotic arm, standard and continuous rotation servos, limit sensors, and unrestricted PiLab (school makerspace) resources.",
                    "The restrictions are that my mechanism should operate continuously without human intervention and I must use a programmed controller to conduct my operation. This includes the implementation of a closed-loop control."
                ],
                photos: [
                    { src: "media/pictures/end_effector_1.1.png", caption: "This is a 3D CAD view of the first prototype of my end effector." },
                    { src: "media/pictures/end_effector_2.1.png", caption: "This is a 3D CAD view of the second prototype of my end effector." },
                    { src: "media/pictures/end_effector_3.1.png", caption: "This is a 3D CAD view of the third prototype of my end effector." },
                    { src: "media/pictures/end_effector_4.1.png", caption: "This is a 3D CAD view of the fourth prototype of my end effector." }
                ],
                videos: [
                    { src: "", caption: "" },
                ],
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
                label: "Rod Puppet",
                description: "A rod puppet I am creating for one of my best friends as part of his birthday and graduation :)",
                photos: [
                    { src: "media/pictures/rod_puppet_1.1.png", caption: "A picture of the unpainted rod puppet's head." },
                    { src: "media/pictures/rod_puppet_2.1.jpeg", caption: "A picture of the rod puppet's uncut torso piece." },
                    { src: "media/pictures/rod_puppet%202.2.jpeg", caption: "A picture of the rod puppet's cut torso piece." }
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
                id: "manchester-by-the-sea",
                label: "Manchester-by-the-Sea, Massachusetts",
                description: "A few pictures from my trip to the Singing Beach in Manchester-by-the-Sea, Massachusetts. One of the best beaches I've been to in the Northeast region of the US.",
                photos: [
                    { src: "media/pictures/manchester-by-the-sea-four.JPG", caption: "A rock in the middle of the ocean, with birds resting and perching on it. And the calm waves around it. Serene and picturesque." },
                    { src: "media/pictures/manchester-by-the-sea-three.JPG", caption: "A cliff, on the side of the Singing Beach. Just felt nice to photograph."},
                    { src: "media/pictures/manchester-by-the-sea-two.JPG", caption: "Another cliff with the ocean calmly crashing its waves against it. A bird flying away from the cliff."},
                    { src: "media/pictures/manchester-by-the-sea-one.JPG", caption: "A small island, with a lobster boat travelling across the coast."},
                    {src: "media/pictures/manchester-by-the-sea-five.JPG", caption: "Another cliff. The waves are crashing onto the shore."},
                    {src: "media/pictures/manchester-by-the-sea-six.JPG", caption: "Two lobster boats, with the small island in the distance."}
                ]
            },
            {
                id: "stanford",
                label: "Stanford, California",
                description: "A few pictures from my time at Stanford University for Stanford Summer Session.",
                photos: [
                    { src: "media/pictures/stanford_one.jpg", caption: "A fountain at Stanford University. Found it interesting because of the geometry and relaxing ambience near the fountain. And the color contrast between the fountain and the surrounding buildings." },
                    { src: "media/pictures/stanford_two.jpeg", caption: "The purple flowers, against the backdrop of the Stanford campus brick walls. Eye-catching." },
                    { src: "media/pictures/stanford_six.jpeg", caption: "On the trail around Lake Lagunita. The sun was beginning to set, and the way the light reflected on the trees and the ground was awe-striking." },
                    { src: "media/pictures/stanford_nine.jpeg", caption: "A view of the hill overlooking the trail around Lake Lagunita. The sunlight made everything look golden and bright, and made me feel warm and happy."},
                    { src: "media/pictures/stanford_eight.jpeg", caption: "Stanford Theatre, on the inside. I went there with my PWR1D professors and classmates to watch Casablanca (1942). It was the Film Noir Festival. Never saw a theatre like this before, with intricately painted interiors. And the acoustics were amazing." },
                    { src: "media/pictures/stanford_seven.jpeg", caption: "Near the Stanford Dorr School of Sustainability. There was a small hill nearby. Perfect for a quiet read :)"}
                ]
            },
            {
                id: "titusville/lambertville/hopewell-township",
                label: "Titusville/Lambertville/Hopewell Township, New Jersey",
                description: "A few pictures from my hike to the Baldplate Mountain and Strawberry Hill, as well as a tiny trek-and-lunch, with my best friends",
                photos: [
                    { src: "media/pictures/hike_one.JPG", caption: "The trees as we began our hike onto Baldplate Mountain. Just liked how they were almost bunched together." },
                    { src: "media/pictures/hike_two.JPG", caption: "A close-up of flowers! They looked so delicate and their color contrasted nicely with the nearby grass." },
                    { src: "media/pictures/hike_three.JPG", caption: "A scenic pond along the trail. Peaceful, uninterrupted. And it was raining while I was there, so made the hike feel like an adventure." },
                    { src: "media/pictures/hike_four.JPG", caption: "A view of the bridge, Delaware and Raritan Canal, and the nearby Lambertville/New Hope area." },
                    { src: "media/pictures/hike_five.JPG", caption: "Another flower! The color popped against the green of the leaves underneath :)" },
                    { src: "media/pictures/hike_six.JPG", caption: "On the bridge between Lambertville, NJ and New Hope, PA. I liked how the canal felt soothing, in contrast to the nearby hustle from the cars and tourists." },
                ]
            },
            {
                id: "massachusetts",
                label: "Massachusetts",
                description: "A few pictures from my trip to Cambridge/Boston/Medford, Massachusetts",
                photos: [
                    { src: "media/pictures/mass_1.jpeg", caption: "Fall colors in North Salem!" },
                    { src: "media/pictures/mass_2.jpeg", caption: "An overlook of the Charles River, from the Harvard Bridge." },
                    { src: "media/pictures/mass_3.jpeg", caption: "A panoramic view of the skyline of Boston." },
                    { src: "media/pictures/mass_4.jpeg", caption: "A tree branching outwards in Medford, Massachusetts. Found it interesting how wide it spanned." }
                ]
            },
            {
                id: "atlanta",
                label: "Atlanta, Georgia",
                description: "A few pictures from my trip to Atlanta, Georgia",
                photos: [
                    { src: "media/pictures/atlanta_one.jpeg", caption: "A view of the trees surrounding the Chattahoochee River." },
                    { src: "media/pictures/atlanta_two.jpeg", caption: "A view of the calmly roaring waters of the Chattahoochee River. The sound of the water flow made me feel relaxed." },
                    { src: "media/pictures/atlanta_three.jpeg", caption: "On a trail around Sumner Lake, enjoying the sunset." },
                    { src: "media/pictures/atlanta_four.jpeg", caption: "A view of the sunset over Sumner Lake. I liked the gradient of colors in the sky, as well as the reflection on the water." }
                ]
            },
            {
                id: "seattle",
                label: "Seattle, Washington",
                description: "A few pictures from my trip to Seattle, Washington",
                photos: [
                    { src: "media/pictures/seattle_one.jpeg", caption: "A view of a waterfall in Orcas Island." },
                    { src: "media/pictures/seattle_two.jpeg", caption: "A canopy of trees during my hike on Mount Constitution." },
                    { src: "media/pictures/seattle_three.jpeg", caption: "A view of a waterfall and the surrounding trees and logs in Orcas Island." },
                    { src: "media/pictures/seattle_four.jpeg", caption: "A view of moss growing on a tree on Mount Constitution." }
                ]
            },

        ]
    },
    "kuchipudi": {
        title: "Kuchipudi",
        items: [
            {
                id: "ramayana-sabdham",
                label: "Ramayana Sabdham",
                description: "Ramayana Sabdham is the story of the Ramayana in a dance format set to ragam Mohana and talam Chaturasra Jaathi Triputa Talam (Adi). The lyrics are composed by Kasinatha Kavi and the item is choreographed by Padma Bhushan Dr. Vempati Chinna Satyam. ",
                photos: [],
                videos: [
                    { url: "https://youtu.be/19LzYMAjszs", caption: "A video of Ramayana Sabdham I performed at the Austin Hindu Temple (AHT)." },
                ],
                slides: "",
                links: []
            },
            {
                id: "dasavatara-sabdham",
                label: "Dasavatara Sabdham",
                description: "Dasavatara Sabdham is the story of the ten avataras of Lord Vishnu and their significance, according to Hindu mythology, set to ragam Kalyani and talam Tisra Jaathi Triputa Talam (Adi). The Veda Nuddarathe Slokam is composed by the poet Sri. Jayadeva while the rest is composed by Siddhabattula Rangadasu. The item is choreographed by Padma Bhushan Dr. Vempati Chinna Satyam. ",
                photos: [],
                videos: [
                    {url: "https://youtu.be/QZ8zpla0UxM", caption: "A video of a shortened version of Dasavatara Sabdham I performed at the Austin Hindu Temple (AHT)."}
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

drawLinenSky();

const starsGroup = svg.append("g");
for (let i = 0; i < 120; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const opacity = Math.random() * 0.5 + 0.2;
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
}

starsGroup.selectAll(".star")
    .style("animation-duration", () => (Math.random() * 3 + 2) +"s")
    .style("animation-delay", () => (Math.random() * 3) + "s");

const linkGroup = svg.append("g");
const nodeGroup = svg.append("g");

links.forEach((link, i) => {
    const rand = seededRandom(link.target.id + "-link");
    link.bend = (i % 2 === 0 ? 1 : -1) * (0.07 + rand() * 0.07);
});

linkGroup.selectAll("path")
    .data(links)
    .join("path")
    .attr("fill", "none")
    .attr("stroke", "#8a7a5c")
    .attr("stroke-width", 1.4)
    .attr("stroke-dasharray", "7 5")
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

// A running stitch around each node
nodeEnter.append("path")
    .attr("d", d => wobblyCircle(nodeRadius(d) + 5, d.id + "-stitch", 1.6))
    .attr("fill", "none")
    .attr("stroke", d => colorsFor(d).stroke)
    .attr("stroke-width", 1.2)
    .attr("stroke-dasharray", "4 3")
    .attr("stroke-linecap", "round")
    .attr("opacity", 0.8)
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

const escapeAttr = s => String(s || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function youTubeId(url) {
    const m = url.match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/);
    return m ? m[1] : null;
}

const isLocalVideo = src => /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(src);
const isPdf = src => /\.pdf([?#].*)?$/i.test(src);

// Adds ?v=MEDIA_VERSION to local image paths only; external URLs and PDFs are left alone
function versioned(src) {
    if (!src || /^([a-z][\w+.-]*:|\/\/)/i.test(src) || isPdf(src)) return src;
    const [path, hash] = src.split("#");
    return `${path}${path.includes("?") ? "&" : "?"}v=${MEDIA_VERSION}${hash !== undefined ? "#" + hash : ""}`;
}

// Accepts share/watch links and converts them to embeddable URLs
function toEmbedUrl(url) {
    let m;
    const ytId = youTubeId(url);
    if (ytId) {
        return `https://www.youtube.com/embed/${ytId}`;
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

// Media lists for the galleries in the open overlay, indexed by data-media-set
let mediaSets = [];

function renderThumb(media, index) {
    const label = media.label ? `<span class="media-badge">${media.label}</span>` : "";
    const name = escapeAttr([media.label, media.caption].filter(Boolean).join(": ") || (media.type === "video" ? "Play video" : "View photo"));
    let preview;
    if (media.type === "image") {
        preview = `<img src="${escapeAttr(versioned(media.src))}" alt="" loading="lazy">`;
    } else if (youTubeId(media.src)) {
        preview = `<img src="https://img.youtube.com/vi/${youTubeId(media.src)}/hqdefault.jpg" alt="" loading="lazy">`;
    } else if (isLocalVideo(media.src)) {
        preview = `<video src="${escapeAttr(media.src)}#t=0.1" preload="metadata" muted playsinline></video>`;
    } else {
        preview = `<span class="thumb-placeholder"></span>`;
    }
    const play = media.type === "video" ? `<span class="play-icon"></span>` : "";
    return `<button class="media-thumb ${media.type === "video" ? "is-video" : ""}" data-media-index="${index}" aria-label="${name}">${preview}${play}${label}</button>`;
}

function renderItemBody(item) {
    let bodyHtml = "";

    if (item.description) {
        const paragraphs = Array.isArray(item.description) ? item.description : [item.description];
        paragraphs.forEach(para => {
            if (para && Array.isArray(para.list)) {
                const tag = para.ordered ? "ol" : "ul";
                bodyHtml += `<${tag} class="project-list">${para.list.map(li => `<li>${li}</li>`).join("")}</${tag}>`;
            } else {
                bodyHtml += `<p class="project-description">${para}</p>`;
            }
        });
    }

    // Each entry is a URL string or {title, description, url} (src works in place of url)
    [].concat(item.slides || []).forEach(entry => {
        const deck = typeof entry === "string" ? {url: entry} : (entry || {});
        const url = deck.url || deck.src;
        if (!url) return;
        const embed = `
            <div class="slides-embed">
                <iframe src="${toEmbedUrl(url)}" title="${escapeAttr(deck.title || "Presentation")}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>`;
        if (!deck.title && !deck.description) {
            bodyHtml += embed;
            return;
        }
        bodyHtml += `
            <figure class="slides-block">
                ${deck.title ? `<h4 class="slides-title">${deck.title}</h4>` : ""}
                ${deck.description ? `<p class="slides-description">${deck.description}</p>` : ""}
                ${embed}
            </figure>`;
    });

    const photos = (item.photos || []).filter(p => p.src);
    const media = [
        ...photos.filter(p => !isPdf(p.src)).map(p => ({type: "image", src: p.src, caption: p.caption})),
        ...(item.videos || []).filter(v => v.src || v.url)
            .map(v => ({type: "video", src: v.src || v.url, caption: v.caption, label: v.label})),
    ];
    if (media.length > 0) {
        // Keep the media list in JS; the grid only stores which set it belongs to
        const setIndex = mediaSets.push(media) - 1;
        bodyHtml += `<div class="media-grid" data-media-set="${setIndex}">${media.map(renderThumb).join("")}</div>`;
    }

    // PDFs listed among the photos open as documents in a new tab
    const documents = photos.filter(p => isPdf(p.src))
        .map(p => ({label: p.caption || p.src, url: p.src, external: true}));
    const itemLinks = [...documents, ...(item.links || []).filter(l => l.url)];
    if (itemLinks.length > 0) {
        bodyHtml += `<div class="project-links">`;
        itemLinks.forEach(link => {
            const target = link.external ? 'target="_blank" rel="noopener"' : '';
            const download = !link.external && !link.url.startsWith("mailto:") ? 'download' : '';
            bodyHtml += `<a href="${escapeAttr(link.url)}" class="project-link" ${target} ${download}>${link.label || link.url}</a>`;
        });
        bodyHtml += `</div>`;
    }

    return bodyHtml;
}

// First photo goes full height on the left; everything else sits in the column beside it
function renderSplit(items) {
    const [first, ...rest] = items;
    const photos = (first.photos || []).filter(p => p.src);
    const hero = photos.find(p => !isPdf(p.src));
    const body = [
        renderItemBody({...first, photos: photos.filter(p => p !== hero)}),
        ...rest.map(renderItemBody),
    ].join("");
    const figure = hero ? `
        <figure class="split-photo">
            <img src="${escapeAttr(versioned(hero.src))}" alt="${escapeAttr(hero.caption)}">
            ${hero.caption ? `<figcaption>${hero.caption}</figcaption>` : ""}
        </figure>` : "";
    return `<div class="split-layout">${figure}<div class="split-body">${body || '<p class="project-description">Coming soon.</p>'}</div></div>`;
}

const overlay = document.getElementById("overlay");

// Lets the split photo stick right below the sticky header
function updateOverlayHeaderHeight() {
    const header = overlay.querySelector(".overlay-header");
    overlay.style.setProperty("--overlay-header-h", header.offsetHeight + "px");
}
window.addEventListener("resize", updateOverlayHeaderHeight);

function openOverlay(nodeId) {
    const content = panelContent[nodeId];
    if  (!content) return;

    const overlayTitle = document.getElementById("overlay-title");
    const overlayContent = document.getElementById("overlay-content");

    overlayTitle.textContent = content.title;

    mediaSets = [];
    let html = "";

    const split = content.layout === "split";
    overlay.classList.toggle("layout-split", split);

    if (split) {
        html = renderSplit(content.items);
    } else {
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
    }

    overlayContent.innerHTML = html;
    overlay.scrollTop = 0;
    overlay.classList.add("open");
    updateOverlayHeaderHeight();
}

function toggleCard(button) {
    button.classList.toggle("open");
    button.nextElementSibling.classList.toggle("open");
}

document.getElementById("overlay-back").addEventListener("click", () => {
    overlay.classList.remove("open");
    // Clear embeds once the slide-out finishes so videos stop playing
    setTimeout(() => {
        if (!overlay.classList.contains("open")) {
            document.getElementById("overlay-content").innerHTML = "";
        }
    }, 400);
});

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

// Holds the YouTube iframe or <video> when the current item is a video
const lightboxVideo = document.createElement("div");
lightboxVideo.className = "lightbox-video";
lightboxVideo.hidden = true;
lightboxImg.after(lightboxVideo);

let currentMedia = [];
let currentMediaIndex = 0;

function openLightbox(media, index) {
    currentMedia = media;
    currentMediaIndex = index;
    showLightboxMedia();
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    // Removing the player stops playback
    lightboxVideo.innerHTML = "";
    lightboxImg.removeAttribute("src");
}

// Next viewable index in the given direction, skipping images that failed to load
function neighborIndex(delta) {
    for (let i = currentMediaIndex + delta; i >= 0 && i < currentMedia.length; i += delta) {
        if (!currentMedia[i].broken) return i;
    }
    return -1;
}

function showLightboxMedia() {
    const media = currentMedia[currentMediaIndex];
    lightboxVideo.innerHTML = "";

    if (media.type === "image") {
        lightboxImg.src = versioned(media.src);
        lightboxImg.alt = media.caption || "";
        lightboxImg.hidden = false;
        lightboxVideo.hidden = true;
    } else {
        lightboxImg.removeAttribute("src");
        lightboxImg.hidden = true;
        lightboxVideo.hidden = false;
        lightboxVideo.classList.toggle("is-vertical", /youtube\.com\/shorts\//.test(media.src));
        if (isLocalVideo(media.src)) {
            const video = document.createElement("video");
            video.src = media.src;
            video.controls = true;
            video.autoplay = true;
            video.playsInline = true;
            lightboxVideo.append(video);
        } else {
            const iframe = document.createElement("iframe");
            const embed = toEmbedUrl(media.src);
            iframe.src = youTubeId(media.src) ? embed + "?autoplay=1&rel=0" : embed;
            iframe.title = media.label || media.caption || "Video";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.referrerPolicy = "strict-origin-when-cross-origin";
            iframe.allowFullscreen = true;
            lightboxVideo.append(iframe);
        }
    }

    lightboxCaption.textContent = "";
    if (media.label) {
        const label = document.createElement("strong");
        label.className = "lightbox-label";
        label.textContent = media.label;
        lightboxCaption.append(label, media.caption ? " " : "");
    }
    if (media.caption) lightboxCaption.append(media.caption);
    lightboxCaption.style.display = media.label || media.caption ? "" : "none";
    lightboxCaption.scrollTop = 0;

    document.getElementById("lightbox-prev").style.visibility = neighborIndex(-1) >= 0 ? "visible" : "hidden";
    document.getElementById("lightbox-next").style.visibility = neighborIndex(1) >= 0 ? "visible" : "hidden";
}

function stepLightbox(delta) {
    const next = neighborIndex(delta);
    if (next < 0) return;
    currentMediaIndex = next;
    showLightboxMedia();
}

const overlayContent = document.getElementById("overlay-content");

// One delegated listener covers every gallery the overlay renders
overlayContent.addEventListener("click", (e) => {
    const thumb = e.target.closest(".media-thumb");
    if (!thumb) return;
    const set = mediaSets[thumb.closest(".media-grid").dataset.mediaSet];
    if (set) openLightbox(set, Number(thumb.dataset.mediaIndex));
});

// Hide photos whose file is missing so visitors never see a broken image
overlayContent.addEventListener("error", (e) => {
    const thumb = e.target.closest && e.target.closest(".media-thumb:not(.is-video)");
    if (!thumb) return;
    const set = mediaSets[thumb.closest(".media-grid").dataset.mediaSet];
    const media = set && set[Number(thumb.dataset.mediaIndex)];
    if (media) {
        media.broken = true;
        console.warn("Image not found:", media.src);
    }
    thumb.hidden = true;
}, true);

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", () => stepLightbox(-1));
document.getElementById("lightbox-next").addEventListener("click", () => stepLightbox(1));

// Clicking the dark backdrop (not the media, caption or buttons) closes it
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Swipe left/right to navigate on touch screens
let touchStartX = null;
let touchStartY = null;
lightbox.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
}, {passive: true});
lightbox.addEventListener("touchend", (e) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    touchStartX = null;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
        stepLightbox(dx < 0 ? 1 : -1);
    }
});

document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "ArrowLeft") stepLightbox(-1);
    if (e.key === "ArrowRight") stepLightbox(1);
    if (e.key === "Escape") closeLightbox();
});
