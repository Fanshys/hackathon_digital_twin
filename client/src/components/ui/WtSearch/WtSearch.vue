<template>
	<form @submit.prevent="$emit('search', search)" class="search">
		<WtInput v-model="search" class="search__input" placeholder="Найти новости о себе"></WtInput>

		<WtButton class="search__button" type="submit">
			<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M7.67188 0C11.9102 0 15.3437 3.43359 15.3437 7.67188C15.3437 9.50391 14.7031 11.1836 13.6328 12.5039L18.9062 17.7773C19.2188 18.0898 19.2188 18.5938 18.9062 18.9062C18.5938 19.2188 18.0898 19.2188 17.7773 18.9062L12.5039 13.6328C11.1836 14.7031 9.50391 15.3438 7.67188 15.3438C3.43359 15.3438 0 11.9102 0 7.67188C0 3.43359 3.4375 0 7.67188 0ZM7.67188 13.75C11.0273 13.75 13.75 11.0273 13.75 7.67188C13.75 4.31641 11.0273 1.59375 7.67188 1.59375C4.31641 1.59375 1.59375 4.31641 1.59375 7.67188C1.59375 11.0273 4.31641 13.75 7.67188 13.75Z" fill="white"/>
			</svg>
		</WtButton>

		<button type="button" class="search__close" @click="$emit('close')">
			<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0.292893 0.292893C0.683418 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L8 6.585L14.2929 0.292893C14.6534 -0.0675905 15.2206 -0.0953204 15.6129 0.209704L15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.415 8L15.7071 14.2929C16.0676 14.6534 16.0953 15.2206 15.7903 15.6129L15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.415L1.70711 15.7071C1.34662 16.0676 0.779392 16.0953 0.387101 15.7903L0.292893 15.7071C-0.0976309 15.3166 -0.0976309 14.6834 0.292893 14.2929L6.585 8L0.292893 1.70711C-0.0675905 1.34662 -0.0953204 0.779392 0.209704 0.387101L0.292893 0.292893Z" fill="#0076F6"/>
			</svg>
		</button>
	</form>
</template>

<script>
import WtInput from "../WtInput/WtInput";
import WtButton from "../WtButton/WtButton";
export default {
	name: "WtSearch",
	components: {WtButton, WtInput},
	data() {
		return {
			search: ''
		}
	}
}
</script>

<style scoped lang="scss" src="./WtSearch.scss"></style>
