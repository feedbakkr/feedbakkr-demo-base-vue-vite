<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import { site } from "../content";

const { title, intro, items, cta } = site.featuresPage;
</script>

<template>
	<Section variant="hero">
		<h1>{{ title }}</h1>
		<p :class="ui.lede">{{ intro }}</p>
	</Section>

	<Section>
		<div :class="ui.grid3">
			<div v-for="item in items" :key="item.title" :class="ui.card">
				<h3 :class="ui.cardTitle">{{ item.title }}</h3>
				<p :class="ui.cardBody">{{ item.body }}</p>
			</div>
		</div>
	</Section>

	<Section>
		<div :class="ui.ctaBlock">
			<h2>{{ cta.title }}</h2>
			<div :class="ui.ctaBlockActions">
				<RouterLink to="/docs" :class="[ui.button, ui.buttonPrimary]">
					{{ cta.action }}
				</RouterLink>
			</div>
		</div>
	</Section>
</template>
