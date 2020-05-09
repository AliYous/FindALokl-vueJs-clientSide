<template>
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
                    <v-icon class="send-icon">mdi-send</v-icon>
                </div>
            </div>
</template>

<script>
export default {
    name: 'MessagesFeed'

}
</script>

<style scoped>
    .messages-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        /* background-color: red; */
        height: 100%;
        width: 49rem;
    }
    .messages-feed {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        /* background-color: greenyellow; */
        height: 85%;
        margin-bottom: 1rem;
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