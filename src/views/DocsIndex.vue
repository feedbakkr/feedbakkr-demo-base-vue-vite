<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

const DOC_PATHS = [
	{ title: "Getting Started", path: "/docs/getting-started" },
	{ title: "SDK Setup", path: "/docs/sdk-setup" },
	{ title: "Troubleshooting", path: "/docs/troubleshooting" },
];

const { index } = site.docs;

function pathFor(title: string): string {
	return DOC_PATHS.find((d) => d.title === title)?.path ?? "/docs";
}
</script>

<template>
	<Section variant="hero">
		<h1>{{ index.title }}</h1>
		<p :class="ui.lede">{{ index.intro }}</p>

		<div :class="styles.docCardRow" style="margin-top: 1.75rem">
			<RouterLink
				v-for="p in index.pages"
				:key="p.title"
				:to="pathFor(p.title)"
				:class="[ui.card, ui.cardLink]"
			>
				<h3 :class="ui.cardTitle">{{ p.title }}</h3>
				<p :class="ui.cardBody">{{ p.description }}</p>
			</RouterLink>
		</div>

		<div :class="ui.callout" style="margin-top: 1.5rem">
			{{ index.note }}
		</div>
	</Section>
</template>
