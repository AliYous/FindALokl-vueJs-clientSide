<template>
  <v-row justify="center">
    <v-btn
      color="#F38633"
      dark
      :block="btnBlock"
      style="margin-left: 2rem"
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
            @click="dialog = false"
          >
            Send Message
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
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
            error: null
        }
    },
    methods: {
        closeDialog() {
            this.dialog = false;
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