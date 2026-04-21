<script setup lang="ts">
import { onMounted, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { site } from "../content";
import DemoModal, { DEMO_MODAL_ACK_KEY } from "./DemoModal.vue";

const NAV_ITEMS: { label: string; to: string }[] = [
	{ label: "Home", to: "/" },
	{ label: "Features", to: "/features" },
	{ label: "Docs", to: "/docs" },
	{ label: "Contact", to: "/contact" },
	{ label: "About", to: "/about" },
];

const FEEDBAKKR_SITE_URL = "https://feedbakkr.com";

const mobileOpen = ref(false);
const modalOpen = ref(false);

onMounted(() => {
	try {
		if (localStorage.getItem(DEMO_MODAL_ACK_KEY) !== "1") {
			modalOpen.value = true;
		}
	} catch {
		modalOpen.value = true;
	}
});

function closeMobile() {
	mobileOpen.value = false;
}

function toggleMobile() {
	mobileOpen.value = !mobileOpen.value;
}

function openModal() {
	modalOpen.value = true;
}

function closeModal() {
	modalOpen.value = false;
}
</script>

<template>
	<div :class="$style.shell">
		<div :class="$style.topStack">
			<div :class="$style.infoBar" role="region" aria-label="Demo information">
				<div :class="$style.infoBarInner">
					<span :class="$style.infoBarLabel">
						<span :class="$style.infoBarDot" aria-hidden="true" />
						Feedbakkr demo app
					</span>
					<div :class="$style.infoBarActions">
						<a
							:class="$style.infoBarLink"
							:href="FEEDBAKKR_SITE_URL"
							target="_blank"
							rel="noreferrer noopener"
						>
							Visit feedbakkr.com
						</a>
						<span :class="$style.infoBarDivider" aria-hidden="true">·</span>
						<button type="button" :class="$style.infoBarButton" @click="openModal">
							About this demo
						</button>
					</div>
				</div>
			</div>

			<header :class="$style.header">
				<div :class="$style.headerInner">
					<RouterLink to="/" :class="$style.brand" @click="closeMobile">
						<span :class="$style.brandMark" aria-hidden="true" />
						<span>{{ site.product.name }}</span>
					</RouterLink>

					<nav :class="$style.nav" aria-label="Primary">
						<RouterLink
							v-for="item in NAV_ITEMS"
							:key="item.to"
							:to="item.to"
							:class="$style.navLink"
							:active-class="$style.navLinkActive"
							:exact-active-class="item.to === '/' ? $style.navLinkActive : ''"
						>
							{{ item.label }}
						</RouterLink>
					</nav>

					<button
						type="button"
						:class="$style.menuButton"
						:aria-expanded="mobileOpen"
						aria-controls="mobile-nav"
						@click="toggleMobile"
					>
						{{ mobileOpen ? "Close" : "Menu" }}
					</button>
				</div>

				<div v-if="mobileOpen" id="mobile-nav" :class="$style.mobileNav">
					<RouterLink
						v-for="item in NAV_ITEMS"
						:key="item.to"
						:to="item.to"
						:class="$style.navLink"
						:active-class="$style.navLinkActive"
						:exact-active-class="item.to === '/' ? $style.navLinkActive : ''"
						@click="closeMobile"
					>
						{{ item.label }}
					</RouterLink>
				</div>
			</header>
		</div>

		<main :class="$style.main">
			<RouterView />
		</main>

		<footer :class="$style.footer">
			<div :class="$style.footerInner">
				<div>
					<p :class="$style.footerNote">{{ site.navigation.footerNote }}</p>
					<p :class="$style.footerMicro">{{ site.navigation.footerMicro }}</p>
				</div>
				<div :class="$style.footerLinks">
					<RouterLink to="/docs">Docs</RouterLink>
					<RouterLink to="/contact">Contact</RouterLink>
					<RouterLink to="/about">About</RouterLink>
				</div>
			</div>
		</footer>

		<DemoModal :open="modalOpen" @close="closeModal" />
	</div>
</template>

<style module>
.shell {
	min-height: 100dvh;
	display: flex;
	flex-direction: column;
	background: var(--surface);
}

.infoBar {
	background: #0d9488;
	border-bottom: 1px solid rgba(15, 23, 42, 0.12);
	font-size: 0.78rem;
	color: #f0fdfa;
}

.infoBarInner {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 0.4rem 1.25rem;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	flex-wrap: nowrap;
	white-space: nowrap;
}

@media (max-width: 640px) {
	.infoBarLink,
	.infoBarDivider {
		display: none;
	}
}

.infoBarLabel {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	font-weight: 500;
	color: #ffffff;
}

.infoBarDot {
	width: 7px;
	height: 7px;
	border-radius: 999px;
	background: #ffffff;
	box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}

.infoBarActions {
	display: inline-flex;
	align-items: center;
	gap: 0.6rem;
	margin-left: auto;
}

.infoBarLink {
	color: #f0fdfa;
	font-size: 0.78rem;
}

.infoBarLink:hover {
	color: #ffffff;
	text-decoration: underline;
}

.infoBarDivider {
	color: rgba(255, 255, 255, 0.4);
}

.infoBarButton {
	background: transparent;
	border: 0;
	padding: 0;
	color: #ffffff;
	font-size: 0.78rem;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	text-decoration: underline;
}

.infoBarButton:hover {
	color: #ffffff;
	text-decoration: none;
}

@media (max-width: 480px) {
	.infoBarActions {
		margin-left: 0;
		width: 100%;
	}
}

.main {
	flex: 1;
	width: 100%;
}

.container {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 2.5rem 1.25rem;
}

@media (min-width: 640px) {
	.container {
		padding: 3.5rem 1.5rem;
	}
}

.topStack {
	position: sticky;
	top: 0;
	z-index: 20;
}

.header {
	background: color-mix(in oklab, var(--surface) 92%, transparent);
	backdrop-filter: saturate(180%) blur(8px);
	-webkit-backdrop-filter: saturate(180%) blur(8px);
	border-bottom: 1px solid var(--border);
}

.headerInner {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 0.85rem 1.25rem;
	display: flex;
	align-items: center;
	gap: 1.25rem;
}

.brand {
	font-weight: 700;
	font-size: 0.95rem;
	letter-spacing: -0.01em;
	color: var(--text);
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
}

.brand:hover {
	text-decoration: none;
	color: var(--text);
}

.brandMark {
	width: 18px;
	height: 18px;
	border-radius: 5px;
	background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.25);
}

.nav {
	display: none;
	gap: 0.25rem;
	margin-left: auto;
}

@media (min-width: 720px) {
	.nav {
		display: flex;
	}
	.menuButton {
		display: none;
	}
}

.navLink {
	padding: 0.4rem 0.75rem;
	font-size: 0.9rem;
	color: var(--text-muted);
	border-radius: var(--radius-sm);
}

.navLink:hover {
	color: var(--text);
	text-decoration: none;
	background: var(--surface-muted);
}

.navLinkActive {
	color: var(--text);
	background: var(--surface-muted);
	font-weight: 500;
}

.menuButton {
	margin-left: auto;
	background: transparent;
	border: 1px solid var(--border);
	border-radius: var(--radius-sm);
	padding: 0.4rem 0.6rem;
	color: var(--text-muted);
	font-size: 0.85rem;
}

.mobileNav {
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1.25rem 1rem;
	max-width: var(--max-w);
	margin: 0 auto;
	border-top: 1px solid var(--border);
}

.mobileNav .navLink {
	padding: 0.65rem 0.75rem;
	font-size: 0.95rem;
}

@media (min-width: 720px) {
	.mobileNav {
		display: none;
	}
}

.footer {
	border-top: 1px solid var(--border);
	background: var(--surface-muted);
	padding: 2rem 0;
	margin-top: 3rem;
}

.footerInner {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 0 1.25rem;
	display: grid;
	gap: 1.25rem;
}

@media (min-width: 640px) {
	.footerInner {
		grid-template-columns: 2fr 1fr;
		align-items: start;
	}
}

.footerNote {
	color: var(--text-muted);
	font-size: 0.875rem;
	margin: 0 0 0.25rem;
}

.footerMicro {
	color: var(--text-subtle);
	font-size: 0.8rem;
	margin: 0;
	font-style: italic;
}

.footerLinks {
	display: flex;
	gap: 1.25rem;
	flex-wrap: wrap;
	justify-self: start;
}

@media (min-width: 640px) {
	.footerLinks {
		justify-self: end;
	}
}

.footerLinks a {
	font-size: 0.875rem;
	color: var(--text-muted);
}
</style>
