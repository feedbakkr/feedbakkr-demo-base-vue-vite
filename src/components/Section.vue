<script setup lang="ts">
import { computed, useCssModule } from "vue";

type Variant = "default" | "tight" | "hero";
type Tag = "section" | "div" | "main" | "header" | "footer";

const props = withDefaults(
	defineProps<{
		variant?: Variant;
		as?: Tag;
	}>(),
	{
		variant: "default",
		as: "section",
	},
);

const style = useCssModule();

const classes = computed(() => {
	const cls = [style.section];
	if (props.variant === "tight") cls.push(style.sectionTight);
	if (props.variant === "hero") cls.push(style.hero);
	return cls;
});
</script>

<template>
	<component :is="as" :class="classes">
		<slot />
	</component>
</template>

<style module>
.section {
	max-width: var(--max-w);
	margin: 0 auto;
	padding: 2.5rem 1.25rem;
}

@media (min-width: 640px) {
	.section {
		padding: 3.5rem 1.5rem;
	}
}

.sectionTight {
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
}

.hero {
	padding-top: 3rem;
	padding-bottom: 2.5rem;
}

@media (min-width: 640px) {
	.hero {
		padding-top: 5rem;
		padding-bottom: 3.5rem;
	}
}
</style>
