const LAB1_DATA = [
    {
        id: 1,
        img: "/LabImages/labs1/hexwrenches-2048px-0323.webp",
        lab: 1,
        name: "Allen Wrench",
        description: "For driving hexagonal socket screws."
    },
    {
        id: 2,
        img: "/LabImages/labs1/dewalt-belt-sanders-dcw220b-64_1000.avif",
        lab: 1,
        name: "Belt Sander",
        description: "A tool with a continuous loop of sandpaper used for sanding and smoothing surfaces."
    },
    {
        id: 3,
        img: "/LabImages/labs1/Chisel.jpg",
        lab: 1,
        name: "Chisel",
        description: "For carving or cutting wood, stone, or metal."
    },
    {
        id: 4,
        img: "/LabImages/labs1/drills-2048px-8376.jpg",
        lab: 1,
        name: "Drill",
        description: "For making holes in materials using rotating drill bits."
    },
    {
        id: 5,
        img: "/LabImages/labs1/Hammer.jpg",
        lab: 1,
        name: "Hammer",
        description: "For driving nails into wood or other materials."
    },
    {
        id: 6,
        img: "/LabImages/labs1/handsaw-2048px-0104-3x2-1.webp",
        lab: 1,
        name: "Handsaw",
        description: "A manual tool for cutting wood or other materials."
    },
    {
        id: 7,
        img: "/LabImages/labs1/Mills.jpeg",
        lab: 1,
        name: "Mills",
        description: "A machine tool that removes material from a workpiece by rotating a cutting tool, used for precise machining."
    },
    {
        id: 8,
        img: "/LabImages/labs1/Oscillating Multi.jpg",
        lab: 1,
        name: "Oscillating Multi-Tool",
        description: "A versatile power tool with interchangeable accessories that vibrate in small, rapid arcs, used for sanding, cutting, scraping, and grinding in tight or awkward spaces."
    },
    {
        id: 9,
        img: "/LabImages/labs1/Resin 3D Printer.webp",
        lab: 1,
        name: "Resin 3D Printer",
        description: "A 3D printer that uses liquid resin cured by UV light to create detailed objects."
    },
    {
        id: 10,
        img: "/LabImages/labs1/Soldering Iron.jpg",
        lab: 1,
        name: "Soldering Iron",
        description: "For soldering electronic components."
    }
];

const LAB2_DATA = [
    {
        id: 2,
        img: "/LabImages/Lab1/Band.jpg",
        lab: 2,
        name: "Band Saw",
        description: "A saw with a long, continuous blade band that moves on wheels to cut materials, often used for irregular or curved shapes."
    },
    {
        id: 3,
        img: "/LabImages/Lab1/Clamp.webp",
        lab: 2,
        name: "Clamp",
        description: "For holding objects firmly in place."
    },
    {
        id: 4,
        img: "/LabImages/Lab1/FDM 3D Printer.jpg",
        lab: 2,
        name: "FDM 3D Printer",
        description: "A 3D printer that uses fused deposition modeling, extruding thermoplastic filament layer by layer to build objects."
    },
    {
        id: 5,
        img: "/LabImages/Lab1/Grinder.webp",
        lab: 2,
        name: "Grinder",
        description: "A tool with a rotating abrasive wheel used for grinding, cutting, or polishing materials."
    },
    {
        id: 6,
        img: "/LabImages/Lab1/Lathe.jpg",
        lab: 2,
        name: "Lathe",
        description: "A machine tool that rotates a workpiece about an axis to perform various operations such as cutting, sanding, and drilling."
    },
    {
        id: 7,
        img: "/LabImages/Lab1/Level.jpg",
        lab: 2,
        name: "Level",
        description: "For checking if surfaces are horizontal or vertical."
    },
    {
        id: 8,
        img: "/LabImages/Lab1/MIG Welder.jpg",
        lab: 2,
        name: "MIG Welder",
        description: "A welding machine that uses a continuous wire feed as an electrode and an inert gas to weld metals."
    },
    {
        id: 9,
        img: "/LabImages/Lab1/Miter Saw.jpg",
        lab: 2,
        name: "Miter Saw",
        description: "For making precise crosscuts and miters in wood."
    },
    {
        id: 10,
        img: "/LabImages/Lab1/Multimeter.JPG",
        lab: 2,
        name: "Multimeter",
        description: "For measuring electrical properties such as voltage, current, and resistance."
    },
    {
        id: 11,
        img: "/LabImages/Lab1/Pliers.jpg",
        lab: 2,
        name: "Pliers",
        description: "For gripping and bending objects."
    }
];
const LAB3_DATA = [
    {
        id: 2,
        img: "/LabImages/labs3/handsaw-2048px-0104-3x2-1.webp",
        lab: 3,
        name: "Handsaws",
        description: "A manual tool for cutting wood or other materials."
    },
    {
        id: 3,
        img: "/LabImages/labs3/Saw.jpg",
        lab: 3,
        name: "Saw",
        description: "For cutting wood or other materials."
    },
    {
        id: 4,
        img: "/LabImages/labs3/Screwdriver.jpg",
        lab: 3,
        name: "Screwdriver",
        description: "For turning screws."
    },
    {
        id: 5,
        img: "/LabImages/labs3/Stick Welder.jpg",
        lab: 3,
        name: "Stick Welder",
        description: "A welding machine that uses a consumable electrode coated in flux to weld metals."
    },
    {
        id: 6,
        img: "/LabImages/labs3/Stud Finder.jpeg",
        lab: 3,
        name: "Stud Finder",
        description: "For locating studs behind walls."
    },
    {
        id: 7,
        img: "/LabImages/labs3/Tape Measure.jpg",
        lab: 3,
        name: "Tape Measure",
        description: "For measuring distances."
    },
    {
        id: 8,
        img: "/LabImages/labs3/TIG Welder.jpg",
        lab: 3,
        name: "TIG Welder",
        description: "A welding machine that uses a non-consumable tungsten electrode and an inert gas to weld metals, often for precise and high-quality welds."
    },
    {
        id: 9,
        img: "/LabImages/labs3/Utility Knife.jpg",
        lab: 3,
        name: "Utility Knife",
        description: "For cutting various materials."
    },
    {
        id: 10,
        img: "/LabImages/labs3/Water Jet.avif",
        lab: 3,
        name: "Water Jet",
        description: "A tool that uses high-pressure water mixed with abrasive material."
    }
];


export {
    LAB1_DATA,
    LAB2_DATA,
    LAB3_DATA
}