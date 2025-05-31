import CurrentPage from "../../src/components/CurrentPage";
<CurrentPage />;
let GalleryData = null;
if (window.location.pathname === "/digitalIllustration") {
	GalleryData = [
		{
			name: "Spaceship Crew",
			description: "Digital illustration created with wacom tablet.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Photoshop",
			imagePath: "/illustration1.JPG",
		},
		{
			name: "Colectivo Coffee Shop, Shorewood Location",
			description:
				"Digital illustration created with wacom tablet of colectivo's shorewood location coffeeshop.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Photoshop",
			imagePath: "/illustration5.JPG",
		},
		{
			name: "Spaceship Member",
			description: "Digital illustration created with wacom tablet.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Photoshop",
			imagePath: "/illustration2.JPG",
		},
		{
			name: "Airplane in Space",
			description: "Digital illustration created with wacom tablet.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Photoshop",
			imagePath: "/illustration4.JPG",
		},
		{
			name: "Aircraft Illustrations",
			description: "Digital illustrations created with wacom tablet.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Photoshop",
			imagePath: "/illustration3.JPG",
		},
		{
			name: "Swamp Environment Concept",
			description: "Swamp landscape for a themed level. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel1.JPG",
		},
		{
			name: "Koi Fish",
			description: "A koi fish swimming looped in a circle. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel2.gif",
		},
		{
			name: "Moss Tree",
			description:
				"One of the moss trees used in the swamp environment landscape. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel3.png",
		},
		{
			name: "Rafflesia flower",
			description: "Animated rafflesia flower. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel4.gif",
		},
		{
			name: "Swamp Tree",
			description:
				"One of the trees used in the swamp environment landscape. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel5.png",
		},
		{
			name: "Venus Fly Trap",
			description:
				"Animated venus fly trap, concept made for the swamp environment. Made in aseprite.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel6.gif",
		},
		{
			name: "Cemetery",
			description: "Pixel cemetery concept.",
			bulletName: "Created with:",
			bulletPoints: "Wacom tablet",
			bulletPoints2: "Aseprite",
			imagePath: "/pixel7.jpg",
		},
	];
} else if (window.location.pathname === "/fineArts") {
	GalleryData = [
						{
			name: "Air in my atmosphere",
			description:
				"Sketch of area in New Berlin.",
			bulletName: "Created with:",
			bulletPoints: "Uniball Signo UM-151 Gel Pen 0.38mm Bordeaux Black pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/Air_web.JPG",
		},
				{
			name: "Attraction",
			description:
				"Sketch of area in Pewaukee.",
			bulletName: "Created with:",
			bulletPoints: "Uniball Signo UM-151 Gel Pen 0.38mm Bordeaux Black pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/attraction.JPG",
		},
				{
			name: "Endless Times",
			description:
				"Sketch of Port Washington area.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/endless-times.JPG",
		},
				{
			name: "Natures Warmth",
			description:
				"Sketch of Doctor's Park.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/NaturesWarmth.JPG",
		},
				{
			name: "Steps",
			description:
				"Sketch of Doctor's Park",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/steps.JPG",
		},
				{
			name: "Melancholy Eyes",
			description:
				"Sketch of area in New Berlin.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/MelancholyEyes.JPG",
		},
				{
			name: "Alone",
			description:
				"Sketch of park in Glendale.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/Alone.JPG",
		},
				{
			name: "Moment",
			description:
				"Sketch of Mequon Nature Preserve",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/Moment.JPG",
		},
				{
			name: "Ordinary",
			description:
				"Sketch of Mequon Nature Preserve",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/Ordinary.JPG",
		},
		{
			name: "North Idlewild Ave",
			description:
				"Sketch of Shorewood neighborhood",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/Illustration6.JPG",
		},
				{
			name: "Visual Ghostwriting",
			description:
				"Sketch of Wisconsin neighorhood",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/VisualGhostwriting.JPG",
		},
		{
			name: "Puzzle Pieces",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt1.JPG",
		},
		{
			name: "Winding Path",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt2.JPG",
		},
		{
			name: "The Path of Resilience",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt3.JPG",
		},
		{
			name: "The Balance in Nature",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt4.JPG",
		},
		{
			name: "N. Astor Street, Milwaukee",
			description: "Sketch of a street in Milwaukee.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/fineArt5.JPG",
		},
		{
			name: "Firemen's Park, Delafield",
			description: "Sketch of a tree in Firemen's Park.",
			bulletName: "Created with:",
			bulletPoints: "Uniball signo 207 0.77mm blue gel pen",
			bulletPoints2: "Moleskin sketchbook",
			imagePath: "/fineArt6.JPG",
		},
		{
			name: "Lost in a Dream",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt8.JPG",
		},
		{
			name: "Morning Reflections",
			description: "Acrylic on canvas",
			bulletName: "Created with:",
			bulletPoints: "Acrylic paint",
			bulletPoints2: "Canvas",
			imagePath: "/fineArt9.JPG",
		},
	];
} else {
	GalleryData = [
		{
			name: "Custom Wordpress Template",
			description: "A custom wordpress template I developed from scratch.",
			bulletName: "Languages used:",
			bulletPoints: "javaScript",
			bulletPoints2: "PHP",
			imagePath: "/dev-banner-background.JPG",
		},
		{
			name: "WristbandsOnline - Homepage Redevelopment",
			description:
				"This was written in javaScript and ruby with Shopify as the CSM.",
			bulletName: "Languages used:",
			bulletPoints: "javaScript",
			bulletPoints2: "Ruby",
			imagePath: "/portfolio-website-1.JPG",
		},
				{
			name: "WristbandsOnline - Custom Image Slider",
			description:
				"This was written in javaScript and ruby with Shopify as the CSM.",
			bulletName: "Languages used:",
			bulletPoints: "javaScript",
			bulletPoints2: "Ruby",
			imagePath: "/portfolio-website-3.JPG",
		},
						{
			name: "Portfolio Site",
			description:
				"This was written in react.js with vite as the data management tool, deployed with netlify.",
			bulletName: "Languages used:",
			bulletPoints: "javaScript/react",
			bulletPoints2: "html/CSS",
			imagePath: "/portfolio-website-2.JPG",
		},

	];
}

export default GalleryData;
