<template>
  <div>
    <v-row justify="center">
      <v-btn
        color="#F38633"
        dark
        :block="btnBlock"
        style="margin-left: 2rem; margin-bottom:1rem"
        @click.stop="dialog = true"
      >
        Contact {{localName}}
      </v-btn>

      <v-dialog
        v-model="dialog"
        max-width="800"
      >
        <v-card>
          <v-card-title>Send a message to {{localName}} </v-card-title>
          <v-card-subtitle>Tell him/her when you plan on visiting the city, what are some of the activities you want to do and ask any question you want ! </v-card-subtitle>


          <v-textarea
            class="mx-2"
            label="Your Message"
            rows="6"
            prepend-icon="mdi-comment"
          ></v-textarea>



          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              text
              @click.prevent="sendMessage()"
            >
              Send
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <!-- Message sent confirmation -->
    <v-snackbar
        v-model="snackbar"
      >
        Message was successfully sent to {{localName}}!
        <v-btn
          color="pink"
          text
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>
    </div>
</template>


<script>

export default {
    name: 'MessageCreateDialog',
    props: ['localName', 'btnBlock'],
    data() {
        return {
            dialog: false,
            local_id: '',
            message: '',
            loading: false,
            error: null,
            snackbar: false
        }
    },
    methods: {
        closeDialog() {
            this.dialog = false;
        },
        sendMessage() {
          this.loading = true;
          this.dialog = false;
          this.snackbar = true;
          this.loading = false;
        }
    }

}
</script>

<style>
	.close-cross {
		top: 0;
		margin-left: 95%;
		font-size: 25px;
	}
	.close-cross:hover {
		cursor: pointer;
	}
</style>