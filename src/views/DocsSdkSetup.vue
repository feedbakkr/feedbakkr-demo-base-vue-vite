<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

const { sdkSetup } = site.docs;

function sectionCode(s: { code?: string }): string | undefined {
	return "code" in s ? s.code : undefined;
}
</script>

<template>
	<Section variant="hero">
		<div :class="styles.docPage">
			<article>
				<p :class="styles.breadcrumb">
					<RouterLink to="/docs">Docs</RouterLink> / {{ sdkSetup.title }}
				</p>
				<h1>{{ sdkSetup.title }}</h1>
				<p :class="ui.lede">{{ sdkSetup.intro }}</p>

				<div v-for="s in sdkSetup.sections" :key="s.title" :class="styles.docSection">
					<h2>{{ s.title }}</h2>
					<p>{{ s.body }}</p>
					<pre v-if="sectionCode(s)"><code>{{ sectionCode(s) }}</code></pre>
				</div>

				<div :class="ui.callout" style="margin-top: 1.5rem">
					{{ sdkSetup.callout }}
				</div>

				<div :class="styles.docFeedback">
					<span>{{ sdkSetup.feedback }}</span>
					<div :class="styles.docFeedbackActions">
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>Yes</button>
						<button type="button" :class="[ui.button, ui.buttonSecondary]" disabled>No</button>
					</div>
				</div>
			</article>

			<aside :class="styles.sidebar" aria-label="Related">
				<h4>Related</h4>
				<ul>
					<li><RouterLink to="/docs/getting-started">Getting Started</RouterLink></li>
					<li><RouterLink to="/docs/troubleshooting">Troubleshooting</RouterLink></li>
					<li><RouterLink to="/contact">Contact support</RouterLink></li>
				</ul>
			</aside>
		</div>
	</Section>
</template>
