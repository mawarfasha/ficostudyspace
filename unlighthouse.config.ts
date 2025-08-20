/// <reference types="unlighthouse" />
import { defineConfig } from "unlighthouse";

/*
 * https://unlighthouse.dev/api/config
 */
export default defineConfig({
	site: "https://ficostudyspace.vercel.app",
	scanner: {
		exclude: [/^\/cdn-cgi\//],
	},
	ci: {
		budget: 30, // Temporarily lowered for development - will improve performance later
		buildStatic: true,
		reporter: false,
	},
	debug: true,
	cache: false,
});
