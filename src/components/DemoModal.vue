<script lang="ts">
/**
 * Demo-project modal. Controlled from the outside so the top bar can re-open
 * it after the first-run dismissal. Writing the ack is still the modal's
 * concern — the first dismissal persists so subsequent visits don't auto-open.
 * Shared local-storage key across every feedbakkr-demo-base-* repo.
 */
export const DEMO_MODAL_ACK_KEY = "feedbakkr-demo-ack";
</script>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from "vue";

const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{ (e: "close"): void }>();

const buttonRef = ref<HTMLButtonElement | null>(null);

function dismiss() {
	try {
		localStorage.setItem(DEMO_MODAL_ACK_KEY, "1");
	} catch {
		// ignore — best effort
	}
	emit("close");
}

function onKey(e: KeyboardEvent) {
	if (e.key === "Escape") dismiss();
}

watch(
	() => props.open,
	(open) => {
		if (open) {
			document.addEventListener("keydown", onKey);
			nextTick(() => {
				buttonRef.value?.focus();
			});
		} else {
			document.removeEventListener("keydown", onKey);
		}
	},
	{ immediate: true },
);

onBeforeUnmount(() => {
	document.removeEventListener("keydown", onKey);
});

function onBackdropClick(e: MouseEvent) {
	if (e.target === e.currentTarget) dismiss();
}
</script>

<template>
	<div v-if="open" :class="$style.backdrop" @click="onBackdropClick">
		<div
			role="dialog"
			aria-modal="true"
			aria-labelledby="demo-modal-title"
			aria-describedby="demo-modal-body"
			:class="$style.dialog"
		>
			<span :class="$style.eyebrow">Demo project</span>
			<h2 id="demo-modal-title" :class="$style.title">About this demo</h2>
			<p id="demo-modal-body" :class="$style.body">
				This is a demo application created to support the Feedbakkr integration guides. It's
				intentionally small and simple so the walkthrough steps stay easy to follow.
			</p>
			<p :class="$style.body">
				It is <strong>not</strong> a production-ready solution — there's no backend, no
				authentication, and no real data. Treat the structure as a starting point to explore
				alongside the Feedbakkr documentation.
			</p>
			<div :class="$style.actions">
				<button ref="buttonRef" type="button" :class="$style.button" @click="dismiss">
					Got it
				</button>
			</div>
		</div>
	</div>
</template>

<style module>
.backdrop {
	position: fixed;
	inset: 0;
	background: rgba(15, 23, 42, 0.55);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	z-index: 40;
}

.dialog {
	background: var(--surface-raised);
	border: 1px solid var(--border);
	border-radius: var(--radius);
	width: 100%;
	max-width: 440px;
	padding: 1.5rem 1.5rem 1.25rem;
	box-shadow: var(--shadow-md);
	color: var(--text);
}

.eyebrow {
	display: inline-block;
	font-size: 0.72rem;
	font-weight: 600;
	letter-spacing: 0.09em;
	text-transform: uppercase;
	color: var(--accent);
	margin-bottom: 0.5rem;
}

.title {
	font-size: 1.15rem;
	font-weight: 600;
	margin: 0 0 0.6rem;
}

.body {
	color: var(--text-muted);
	font-size: 0.9rem;
	margin: 0 0 0.9rem;
}

.actions {
	display: flex;
	justify-content: flex-end;
	margin-top: 1rem;
}

.button {
	background: var(--accent);
	color: var(--accent-contrast);
	border: 1px solid var(--accent);
	border-radius: var(--radius-sm);
	padding: 0.55rem 1rem;
	font-size: 0.925rem;
	font-weight: 500;
	font-family: inherit;
	cursor: pointer;
	transition: background-color 120ms;
}

.button:hover {
	background: var(--accent-hover);
	border-color: var(--accent-hover);
}
</style>
