import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        health: {
          DEFAULT: "hsl(var(--health))",
          light: "hsl(var(--health-light))",
          dark: "hsl(var(--health-dark))",
        },
        enjoy: {
          DEFAULT: "hsl(var(--enjoy))",
          light: "hsl(var(--enjoy-light))",
          dark: "hsl(var(--enjoy-dark))",
        },
        mind: {
          DEFAULT: "hsl(var(--mind))",
          light: "hsl(var(--mind-light))",
          dark: "hsl(var(--mind-dark))",
        },
        work: {
          DEFAULT: "hsl(var(--work))",
          light: "hsl(var(--work-light))",
          dark: "hsl(var(--work-dark))",
        },
        growth: {
          DEFAULT: "hsl(var(--growth))",
          light: "hsl(var(--growth-light))",
          dark: "hsl(var(--growth-dark))",
        },
        home: {
          DEFAULT: "hsl(var(--home))",
          light: "hsl(var(--home-light))",
          dark: "hsl(var(--home-dark))",
        },
        time: {
          DEFAULT: "hsl(var(--time))",
          light: "hsl(var(--time-light))",
          dark: "hsl(var(--time-dark))",
        },
        settings: {
          DEFAULT: "hsl(var(--settings))",
          light: "hsl(var(--settings-light))",
          dark: "hsl(var(--settings-dark))",
        },
      },
      backgroundImage: {
        'gradient-health': 'var(--gradient-health)',
        'gradient-enjoy': 'var(--gradient-enjoy)',
        'gradient-mind': 'var(--gradient-mind)',
        'gradient-work': 'var(--gradient-work)',
        'gradient-growth': 'var(--gradient-growth)',
        'gradient-home': 'var(--gradient-home)',
        'gradient-time': 'var(--gradient-time)',
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
      },
      transitionProperty: {
        'smooth': 'var(--transition-smooth)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
