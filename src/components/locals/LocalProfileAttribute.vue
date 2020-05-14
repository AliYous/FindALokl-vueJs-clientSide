<template>
    <div class="attribute-row container">
			<div class="attribute-name">
					<h5>{{attributeName}}</h5>
			</div>
			<!-- Regular attribute -->
			<div v-if="!isLanguages" class="attribute-value">
					<p style="width: 95%;">
						{{attributeContent}}. . . . 
					</p>
			</div>

			<!-- if attribute is languages array -->
			<div v-if="isLanguages" class="attribute-value languages-container">
				<div v-for="(lang,index) in attributeContent" :key="index">
					<v-btn class="single-lang" disabled> {{lang}} </v-btn>
				</div>
			</div>

    </div>
</template>

<script>
export default {
	name: 'LocalProfileAttribute',
	props: ['attributeName', 'attributeContent', 'isLanguages'],
}
</script>

<style>
	.attribute-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.attribute-name {
		width: 15rem;
	}
	.attribute-value {
		width: 65%;
	}
	.languages-container {
		display: flex;
		flex-direction: row;
		width: 25%;
		justify-content: space-between;
		margin-right: 40%;
	}


	@media screen and (max-width: 768px) {

		.attribute-row {
		display: flex;
		flex-direction: column;
		}
		.languages-container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 5rem;
	}
	}
</style>