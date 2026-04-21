<script setup lang="ts">
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import { site } from "../content";

const { title, intro, sections, closing } = site.about;
</script>

<template>
	<Section variant="hero">
		<h1>{{ title }}</h1>
		<p :class="ui.lede">{{ intro }}</p>
	</Section>

	<Section>
		<div :class="ui.grid3">
			<div v-for="s in sections" :key="s.title" :class="ui.card">
				<h3 :class="ui.cardTitle">{{ s.title }}</h3>
				<p :class="ui.cardBody">{{ s.body }}</p>
			</div>
		</div>
	</Section>

	<Section>
		<div :class="ui.ctaBlock">
			<h2>{{ closing }}</h2>
		</div>
	</Section>
</template>
