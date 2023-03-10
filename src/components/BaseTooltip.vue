<template>
	<Transition name="tooltip">
		<div
			v-if="modalActive"
			class="absolute max-w-xs rounded-md border border-solid border-green bg-darkGray py-3 px-3"
		>
			<slot />
		</div>
	</Transition>
</template>

<script setup>
defineProps({
	modalActive: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped>
.tooltip-enter-from {
	opacity: 0%;
	transform: rotate(-90deg);
}
.tooltip-leave-to {
	opacity: 0%;
	transform: rotate(90deg);
}
.tooltip-enter-to,
.tooltip-leave-from {
	opacity: 100%;
	transform: rotate(0deg);
}
.tooltip-enter-active,
.tooltip-leave-active {
	transition: 0.4s cubic-bezier(0.1, 0.26, 0.7, 1);
}
</style>
