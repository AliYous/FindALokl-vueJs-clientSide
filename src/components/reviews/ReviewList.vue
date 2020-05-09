<template>
   <div class="reviews-section container">
            <h3 class="explore-city-title">{{ local.numberOfReviews }} Reviews</h3>
            <div class="reviews-container container">
                <div v-for="review in local.reviews" :key="review._id">
                   <ReviewItem :review="review" />
                </div>
            </div>
      </div>
</template>

<script>
import ReviewItem from './ReviewItem'
export default {
    name: 'ReviewList',
    props: ['local'],
    components: {
        ReviewItem
    }
}
</script>

<style>
    .reviews-section {
        margin-top: 1rem;
        background-color: #F0F2E9;
    }
    .reviews-container {
        display: flex;
        flex-direction: column;
    }
</style>