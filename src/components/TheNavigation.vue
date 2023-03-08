<template>
	<header class="sticky top-0 shadow-lg">
		<nav class="container flex flex-row items-center justify-between max-w-7xl py-4">
			<router-link to="/" class="border-solid border-2 border-green rounded-lg text-2xl py-2 px-2"
				>WeatherApp</router-link
			>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="{1.5}"
				stroke="currentColor"
				class="w-10 h-10 hover:opacity-60 duration-150 cursor-pointer"
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>
		</nav>
	</header>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
