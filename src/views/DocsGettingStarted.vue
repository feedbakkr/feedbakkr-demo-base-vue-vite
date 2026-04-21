<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

const { gettingStarted } = site.docs;

function sectionCode(s: { code?: string }): string | undefined {
	return "code" in s ? s.code : undefined;
}
</script>

<template>
	<Section variant="hero">
		<div :class="styles.docPage">
			<article>
				<p :class="styles.breadcrumb">
					<RouterLink to="/docs">Docs</RouterLink> / {{ gettingStarted.title }}
				</p>
				<h1>{{ gettingStarted.title }}</h1>
				<p :class="ui.lede">{{ gettingStarted.intro }}</p>

				<div v-for="s in gettingStarted.sections" :key="s.title" :class="styles.docSection">
					<h2>{{ s.title }}</h2>
					<p>{{ s.body }}</p>
					<pre v-if="sectionCode(s)"><code>{{ sectionCode(s) }}</code></pre>
				</div>

				<div :class="ui.callout" style="margin-top: 1.5rem">
					{{ gettingStarted.callout }}
				</div>

				<div :class="styles.docFeedback">
					<span>{{ gettingStarted.feedback }}</span>
					<div :class="styles.docFeedbackActions">
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>Yes</button>
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>No</button>
					</div>
				</div>
			</article>

			<aside :class="styles.sidebar" aria-label="Related">
				<h4>Related</h4>
				<ul>
					<li><RouterLink to="/docs/sdk-setup">SDK Setup</RouterLink></li>
					<li><RouterLink to="/docs/troubleshooting">Troubleshooting</RouterLink></li>
					<li><RouterLink to="/contact">Contact support</RouterLink></li>
				</ul>
			</aside>
		</div>
	</Section>
</template>
