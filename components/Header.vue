<template>
	<header
		class="flex items-center sticky justify-between h-fit py-4 w-full  px-5 border border-b border-black "
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
						class="inline-block px-3 py-2  transition-all duration-300 text-sm"
						:to="n.link"
						>{{ n.text }}</NuxtLink
					>
				</li>
			</template>
		</ul>
	
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
			text: "Publications",
			link: "/publications",
		},
		{
			text: "Events",
			link: "/events",
		},
	];
</script>
<style>
.router-link-active{
	

}
.router-link-active:hover{

}
header{
	width: 100vw;
}
</style>