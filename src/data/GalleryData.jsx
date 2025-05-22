import CurrentPage from "../../src/components/CurrentPage";

// import { useLocation } from "react-router-dom";

//Need to find a way to conditionally render one of these depending on what page is loaded.

// const GalleryData = [
// 	{
// 		name: "Art 1",
// 		description: "Blah blah blah",
// 		imagePath: "/fineArt1.JPG",
// 	},
// 	{
// 		name: "Art 2",
// 		description: "Blah blah bla",
// 		imagePath: "/fineArt2.JPG",
// 	},
// 	{
// 		name: "Art 3",
// 		description: "Blah bah blah",
// 		imagePath: "/fineArt3.JPG",
// 	},
// 	{
// 		name: "Art 4",
// 		description: "Blah bah blah",
// 		imagePath: "/fineArt4.JPG",
// 	},
// 	{
// 		name: "Art 5",
// 		description: "Blah blah blah",
// 		imagePath: "/fineArt5.JPG",
// 	},
// 	{
// 		name: "Art 6",
// 		description: "Blah blah bla",
// 		imagePath: "/fineArt6.JPG",
// 	},
// 	{
// 		name: "Art 7",
// 		description: "Blah bah blah",
// 		imagePath: "/fineArt7.JPG",
// 	},
// 	{
// 		name: "Art 8",
// 		description: "Blah bah blah",
// 		imagePath: "/fineArt8.JPG",
// 	},
// 	{
// 		name: "Art 9",
// 		description: "Blah bah blah",
// 		imagePath: "/fineArt9.JPG",
// 	},
// ];

// const GalleryData = [
// 	{
// 		name: "Dev 1",
// 		description: "Blah blah blah",
// 		imagePath: "/dev-banner-background.JPG",
// 	},
// 	{
// 		name: "Dev 2",
// 		description: "Blah blah bla",
// 		imagePath: "/dev-banner-background.JPG",
// 	},
// ];
<CurrentPage />;
let GalleryData = null;
if (window.location.pathname === "/pixelArt") {
	GalleryData = [
		{
			name: "Spaceship Crew",
			description: "Digital illustration created with wacom tablet.",
			imagePath: "/illustration1.JPG",
		},
		{
			name: "Colectivo Coffee Shop, Shorewood Location",
			description:
				"Digital illustration created with wacom tablet of colectivo's shorewood location coffeeshop.",
			imagePath: "/illustration5.JPG",
		},
		{
			name: "Spaceship Member",
			description: "Digital illustration created with wacom tablet.",
			imagePath: "/illustration2.JPG",
		},
		{
			name: "Airplane in Space",
			description: "Digital illustration created with wacom tablet.",
			imagePath: "/illustration4.JPG",
		},
		{
			name: "Aircraft Illustrations",
			description: "Digital illustrations created with wacom tablet.",
			imagePath: "/illustration3.JPG",
		},
		{
			name: "Swamp Environment Concept",
			description: "Swamp landscape for a themed level. Made in aseprite.",
			imagePath: "/pixel1.JPG",
		},
		{
			name: "Koi Fish",
			description: "A koi fish swimming looped in a circle. Made in aseprite.",
			imagePath: "/pixel2.gif",
		},
		{
			name: "Moss Tree",
			description:
				"One of the moss trees used in the swamp environment landscape. Made in aseprite.",
			imagePath: "/pixel3.png",
		},
		{
			name: "Rafflesia flower",
			description: "Animated rafflesia flower. Made in aseprite.",
			imagePath: "/pixel4.gif",
		},
		{
			name: "Swamp Tree",
			description:
				"One of the trees used in the swamp environment landscape. Made in aseprite.",
			imagePath: "/pixel5.png",
		},
		{
			name: "Venus Fly Trap",
			description:
				"Animated venus fly trap, concept made for the swamp environment. Made in aseprite.",
			imagePath: "/pixel6.gif",
		},
		{
			name: "Cemetery",
			description: "Pixel cemetery concept.",
			imagePath: "/pixel7.jpg",
		},
	];
} else if (window.location.pathname === "/fineArts") {
	GalleryData = [
				{
			name: "Attraction",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/attraction.JPG",
		},
				{
			name: "Endless Times",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/endless-times.JPG",
		},
				{
			name: "Natures Warmth",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/NaturesWarmth.JPG",
		},
				{
			name: "Steps",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/steps.JPG",
		},
				{
			name: "Melancholy Eyes",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/MelancholyEyes.JPG",
		},
				{
			name: "Alone",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/Alone.JPG",
		},
				{
			name: "Moment",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/Moment.JPG",
		},
				{
			name: "Ordinary",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/Ordinary.JPG",
		},
		{
			name: "North Idlewild Ave",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/Illustration6.JPG",
		},
				{
			name: "Visual Ghostwriting",
			description:
				"Sketch of North Idlewild Ave done with Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/VisualGhostwriting.JPG",
		},
		{
			name: "Puzzle Pieces",
			description: "Acrylic on canvas",
			imagePath: "/fineArt1.JPG",
		},
		{
			name: "Winding Path",
			description: "Acrylic on canvas",
			imagePath: "/fineArt2.JPG",
		},
		{
			name: "The Path of Resilience",
			description: "Acrylic on canvas",
			imagePath: "/fineArt3.JPG",
		},
		{
			name: "The Balance in Nature",
			description: "Acrylic on canvas",
			imagePath: "/fineArt4.JPG",
		},
		{
			name: "N. Astor Street, Milwaukee",
			description: "Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/fineArt5.JPG",
		},
		{
			name: "Firemen's Park, Delafield",
			description: "Uniball signo 207 0.77mm blue gel pen on paper",
			imagePath: "/fineArt6.JPG",
		},
		{
			name: "Lost in a Dream",
			description: "Acrylic on canvas",
			imagePath: "/fineArt8.JPG",
		},
		{
			name: "Morning Reflections",
			description: "Acrylic on canvas",
			imagePath: "/fineArt9.JPG",
		},
	];
} else {
	GalleryData = [
		{
			name: "Custom Wordpress Template",
			description: "Developed using vanilla javaScript and PHP with Wordpress as the CSM.",
			imagePath: "/dev-banner-background.JPG",
		},
		{
			name: "WristbandsOnline - Homepage Redevelopment",
			description:
				"This was written in javaScript and ruby with Shopify as the CSM.",
			imagePath: "/portfolio-website-1.JPG",
		},
				{
			name: "WristbandsOnline - Custom Image Slider",
			description:
				"This was written in javaScript and ruby with Shopify as the CSM.",
			imagePath: "/portfolio-website-3.JPG",
		},
						{
			name: "Portfolio Site",
			description:
				"This was written in react.js with vite as the data management tool.",
			imagePath: "/portfolio-website-2.JPG",
		},

	];
}

export default GalleryData;
