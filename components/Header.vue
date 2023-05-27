<template>
	<header
		class="flex items-center sticky justify-between h-fit py-4 lg:max-w-6xl mx-auto px-5 lg:px-0"
	>
		<!-- Logo -->
		<NuxtLink to="/">
			<IconLogo class="w-60 h-fit" />
		</NuxtLink>
		<!-- Nav -->
		<ul class="md:flex items-center space-x-3 hidden">
			<template :key="`Navitem${i}`" v-for="(n, i) in nav">
				<li>
					<NuxtLink
						class="inline-block px-3 py-2 hover:bg-slate-200 transition-all duration-300 bg-gray-50 rounded-full text-sm"
						:to="n.link"
						>{{ n.text }}</NuxtLink
					>
				</li>
			</template>
		</ul>
		<a
			href="#"
			class="px-5 py-2 text-sm bg-blue-700 text-white rounded-full hover:bg-violet-900 transition-all duration-300"
			>Register</a
		>
	</header>
</template>
<script setup>
	const nav = [
		{
			text: "Home",
			link: "/",
		},
		{
			text: "About",
			link: "/about",
		},
		{
			text: "Contact",
			link: "/contact",
		},
		{
			text: "Research",
			link: "/research",
		},
		{
			text: "Events",
			link: "/events",
		},
	];
</script>
<style>
.router-link-active{
	background-color: rgb(29 78 216 / var(--tw-bg-opacity));
	color: #ffff;

}
.router-link-active:hover{
	background-color: rgb(29 78 216 );

}
</style>