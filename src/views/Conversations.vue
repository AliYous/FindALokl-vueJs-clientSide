<template>
    <div class="main container">
        <v-card raised max-width="100%" class="full-chat">

            <div class="conversations-list">
                <v-card outlined>
                    <v-card-title>Adrien Herry</v-card-title>
                    <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
                </v-card>
                <v-card outlined>
                    <v-card-title>Adrien Herry</v-card-title>
                    <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
                </v-card>
                <v-card outlined>
                    <v-card-title>Adrien Herry</v-card-title>
                    <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
                </v-card>
                <v-card outlined>
                    <v-card-title>Adrien Herry</v-card-title>
                    <v-card-subtitle>Dernier message de la conversation</v-card-subtitle>
                </v-card>
            </div>
            <div class="messages-container container">
                <div class="messages-feed container">

                    <div class="user-sent-message message-row">
                        <v-card class="message sent">
                            <p>this is a message that is supeeer long Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam blanditiis at voluptatum ipsam qui voluptates iste rerum accusamus iure recusandae.</p>
                        </v-card>
                    </div>
                    <div class="user-received-message message-row">
                        <v-card class="message received">
                            <p>this is a message</p>
                        </v-card>
                    </div>
                    <div class="user-sent-message message-row">
                        <v-card class="message sent">
                            <p>this is a message</p>
                        </v-card>
                    </div>   
                </div>

                <div class="send-message-field">
                    <v-text-field
                    class="text-field"
                    label="Message ..."
                    auto-grow
                    ></v-text-field>
                    <!-- <v-btn raised>Send</v-btn> -->
                    <v-icon class="send-icon">mdi-send</v-icon>
                </div>
            </div>

        </v-card>

    </div>
</template>

<script>
export default {
    name: 'Conversations'

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
    .conversations-list {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        height: 100%;
        /* background-color: rebeccapurple; */
        width: 27rem;
        overflow-y: scroll;
    }
    .messages-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* background-color: red; */
        height: 100%;
        width: 50rem;
    }
    .messages-feed {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        /* background-color: greenyellow; */
        height: 85%;
        overflow-y: scroll;
    }
    .message-row {
        width: 100%;
    }
    .message {
        width: 70%;
        margin-top: 0.5rem;
        padding-right: 0.6rem;
        padding-left: 0.6rem;
        padding-top: 0.3rem;
    }
    .user-sent-message {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .sent {
        background: #05728f none repeat scroll 0 0;
        color: white;
    }
    .user-received-message {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .received {
        background: #ebebeb none repeat scroll 0 0;
    }
    .send-message-field {
        /* background-color: green; */
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        height: 15%
    }
    .text-field {
        margin-right: 1rem;
    }
    .send-icon:hover {
        color: #F38633;
        cursor: pointer;
    }
</style>