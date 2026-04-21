<script setup lang="ts">
import { RouterLink } from "vue-router";
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

const { troubleshooting } = site.docs;
</script>

<template>
	<Section variant="hero">
		<div :class="styles.docPage">
			<article>
				<p :class="styles.breadcrumb">
					<RouterLink to="/docs">Docs</RouterLink> / {{ troubleshooting.title }}
				</p>
				<h1>{{ troubleshooting.title }}</h1>
				<p :class="ui.lede">{{ troubleshooting.intro }}</p>

				<ul :class="styles.issueList">
					<li v-for="issue in troubleshooting.issues" :key="issue.title">
						<p :class="styles.issueTitle">{{ issue.title }}</p>
						<p :class="styles.issueBody">{{ issue.resolution }}</p>
					</li>
				</ul>

				<p style="margin-top: 1.5rem; color: var(--text-muted)">
					{{ troubleshooting.cta }} <RouterLink to="/contact">Contact us</RouterLink>.
				</p>

				<div :class="styles.docFeedback">
					<span>{{ troubleshooting.feedback }}</span>
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
					<li><RouterLink to="/docs/sdk-setup">SDK Setup</RouterLink></li>
					<li><RouterLink to="/contact">Contact support</RouterLink></li>
				</ul>
			</aside>
		</div>
	</Section>
</template>
