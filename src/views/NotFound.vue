<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import { site } from "../content";

const { title, body, cta } = site.error404;
</script>

<template>
	<Section variant="hero">
		<div style="text-align: center">
			<p style="color: var(--accent); letter-spacing: 0.09em; font-weight: 600">404</p>
			<h1>{{ title }}</h1>
			<p :class="ui.lede" style="margin: 0 auto 1.25rem">{{ body }}</p>
			<RouterLink to="/" :class="[ui.button, ui.buttonPrimary]">
				{{ cta }}
			</RouterLink>
		</div>
	</Section>
</template>
