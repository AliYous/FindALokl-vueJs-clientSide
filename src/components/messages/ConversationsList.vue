<template>
    <div class="conversations-list">
        <v-card outlined class="conversation-item">
            <v-card-title>Adrien Herry</v-card-title>
            <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
        </v-card>
        <v-card outlined  class="conversation-item">
            <v-card-title>Adrien Herry</v-card-title>
            <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
        </v-card>
        <v-card outlined  class="conversation-item">
            <v-card-title>Adrien Herry</v-card-title>
            <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ConversationsList'

}
</script>

<style scoped>
 .conversations-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        /* background: #F8F8F8 none repeat scroll 0 0; */
        width: 27rem;
        overflow-y: scroll;
    }
    .conversation-item {
        background: #F8F8F8 none repeat scroll 0 0;
    }
    .conversation-item:hover {
        background: #EBEBEB none repeat scroll 0 0;
        cursor: pointer;
    }

</style>