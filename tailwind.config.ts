import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/**/*.{js,ts,jsx,tsx,mdx}",
	"./src/styles/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
	screens: {
		'xs': '480px',
		'sm': '640px',
		'md': '768px',
		'lg': '1024px',
		'xl': '1280px',
		'2xl': '1536px',
		"3xl": "1600px"
	},
  	extend: {
		animation: {
			typing: "typing 3s steps(50, end), blink 0.5s step-end infinite",
			blink: 'blink 0.5s step-end infinite',
			glow: "glow 1.5s infinite",
			scrollFast: "scroll 50s linear infinite",
			scrollSlow: "scroll 35s linear infinite",
			none: "none",
		},
		keyframes: {
			typing: {
			  "0%": { width: "0%" },
			  "100%": { width: "100%" },
			},
			blink: {
			  "50%": { borderColor: "#00FF00" },
			  "100%": { borderColor: "transparent" },
			},
			glow: {
			  "0%": { boxShadow: "0 0 5px #32CD32" },
			  "50%": { boxShadow: "0 0 15px #32CD32" },
			  "100%": { boxShadow: "0 0 5px #32CD32" },
			},
			scroll: {
				"0%": { transform: "translateX(100%)" },
				"100%": { transform: "translateX(-100%)" },
			  },
		},
  		colors: {
			green: '#00FF00',
			dark: '#121212',
			black: '#000000',
			greenText: '#32CD32',
			pink: '#8A2BE2',
			pinkShade: '#FF1493',
			blueText: '#00FFFF',
			pinkShadeText: '#FF00FF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
