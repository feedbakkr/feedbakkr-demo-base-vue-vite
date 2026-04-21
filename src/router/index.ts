import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Features from "../views/Features.vue";
import DocsIndex from "../views/DocsIndex.vue";
import DocsGettingStarted from "../views/DocsGettingStarted.vue";
import DocsSdkSetup from "../views/DocsSdkSetup.vue";
import DocsTroubleshooting from "../views/DocsTroubleshooting.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About.vue";
import NotFound from "../views/NotFound.vue";

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: "/", name: "home", component: Home },
		{ path: "/features", name: "features", component: Features },
		{ path: "/docs", name: "docs", component: DocsIndex },
		{
			path: "/docs/getting-started",
			name: "docs-getting-started",
			component: DocsGettingStarted,
		},
		{ path: "/docs/sdk-setup", name: "docs-sdk-setup", component: DocsSdkSetup },
		{
			path: "/docs/troubleshooting",
			name: "docs-troubleshooting",
			component: DocsTroubleshooting,
		},
		{ path: "/contact", name: "contact", component: Contact },
		{ path: "/about", name: "about", component: About },
		{ path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
	],
});
