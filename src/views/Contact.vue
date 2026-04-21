<script setup lang="ts">
import Section from "../components/Section.vue";
import ui from "../components/ui.module.css";
import { site } from "../content";

const { title, intro, form, notes } = site.contact;

function onSubmit(e: Event) {
	e.preventDefault();
	// Demo only — no submission logic.
}
</script>

<template>
	<Section variant="hero">
		<h1>{{ title }}</h1>
		<p :class="ui.lede">{{ intro }}</p>

		<form :class="$style.formCard" style="margin-top: 1.5rem" @submit="onSubmit">
			<div :class="$style.formGrid">
				<div :class="$style.row2">
					<div :class="$style.field">
						<label for="name">Name</label>
						<input
							id="name"
							name="name"
							type="text"
							:placeholder="form.fields.name"
							required
						/>
					</div>
					<div :class="$style.field">
						<label for="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							:placeholder="form.fields.email"
							required
						/>
					</div>
				</div>

				<div :class="$style.field">
					<label for="topic">Topic</label>
					<select id="topic" name="topic">
						<option value="" disabled selected>Select a topic</option>
						<option v-for="t in form.fields.topic" :key="t" :value="t">{{ t }}</option>
					</select>
				</div>

				<div :class="$style.field">
					<label for="message">Message</label>
					<textarea
						id="message"
						name="message"
						:placeholder="form.fields.message"
						:rows="6"
						required
					/>
				</div>

				<div>
					<button type="submit" :class="[ui.button, ui.buttonPrimary]">Send message</button>
				</div>
			</div>

			<div :class="$style.notes">
				<p style="margin: 0">{{ notes.response }}</p>
				<p style="margin: 0">{{ notes.tip }}</p>
			</div>
		</form>
	</Section>
</template>

<style module>
.formCard {
	background: var(--surface-raised);
	border: 1px solid var(--border);
	border-radius: var(--radius);
	padding: 1.5rem;
	box-shadow: var(--shadow-sm);
}

.formGrid {
	display: grid;
	gap: 0.85rem;
}

.row2 {
	display: grid;
	gap: 0.85rem;
	grid-template-columns: 1fr;
}

@media (min-width: 560px) {
	.row2 {
		grid-template-columns: 1fr 1fr;
	}
}

.field {
	display: flex;
	flex-direction: column;
	gap: 0.35rem;
}

.field label {
	font-size: 0.85rem;
	color: var(--text-muted);
}

.field input,
.field select,
.field textarea {
	width: 100%;
	background: var(--surface);
	border: 1px solid var(--border-strong);
	border-radius: var(--radius-sm);
	padding: 0.55rem 0.7rem;
	font: inherit;
	color: var(--text);
	transition: border-color 120ms, box-shadow 120ms;
}

.field input:hover,
.field select:hover,
.field textarea:hover {
	border-color: var(--accent);
}

.field textarea {
	resize: vertical;
	min-height: 7rem;
}

.notes {
	display: grid;
	gap: 0.5rem;
	color: var(--text-muted);
	font-size: 0.875rem;
	margin-top: 1rem;
}
</style>
