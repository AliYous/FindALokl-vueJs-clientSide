<template>
    <div class="review row">
        <div class="reviewer-info">
            <img src="../../assets/avatar.png" class="user-avatar" alt="Avatar">
            <div class="name-date-col">
                <h6>{{review.reviewerName}}</h6>
                <p>5 dec 2019</p>
            </div>
        </div>

        <div class="review-content">
            <p>{{review.reviewText}}</p>
            <star-rating 
                v-model="reviewRating"
                :read-only="true"
                :show-rating="false"
                :increment="0.5"
                :star-size="18"
                active-color="#F38633"
                :rounded-corners="true"
            ></star-rating>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'ReviewItem',
    props: ['review'],
    components: {
        StarRating
    },
    data() {
        return {
            reviewRating: 0,
        }
    },
    created() {
        this.reviewRating = this.$props.review.rating
    }
}
</script>

<style>
    .review {
        display: flex;
        flex-direction: row;
        justify-content: left;
        margin-bottom: 3rem;
    }
    .reviewer-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .user-avatar {
        border-radius: 50%;
        height: 70px;
        width: 70px;
    }
    .name-date-col {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
    }
    .review-content {
        display: flex;
        flex-direction: column;
        align-content: left;
        margin-left: 5rem;
    }
</style>