<template>
    <div class="main container">
        <v-card raised max-width="100%" class="full-chat">

            <ConversationsList />
            
            <MessagesFeed />

        </v-card>

    </div>
</template>

<script>
import ConversationsList from '../components/messages/ConversationsList';
import MessagesFeed from '../components/messages/MessagesFeed';


export default {
    name: 'Conversations',
    components: {
        ConversationsList,
        MessagesFeed
    }

}
</script>

<style scoped>
    .main {
        display: flex;
        align-content: center;
        align-items: center;
    }
    .full-chat {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: left;
        align-items: top;
        /* background-color: yellow; */
        height: 40rem;
        width: 100%;
    }
   

</style>