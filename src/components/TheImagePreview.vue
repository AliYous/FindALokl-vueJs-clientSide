<template>
    <div>
        <div
        class="imagePreviewWrapper"
        :style="{ 'background-image': `url(${previewImage})` }"
        @click="selectImage">
        </div>
        <!-- <img class="" src="http://via.placeholder.com/365x365" alt="Card image cap"> -->
        <input
          ref="fileInput"
          type="file"
          @input="pickFile">


        <!-- <v-file-input
            ref="fileInput"
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Pick an avatar"
            prepend-icon="mdi-camera"
            label="Avatar"
            @change="onFileSelected"
        ></v-file-input> -->
    </div>
</template>

<script>
export default {
  data() {
      return {
        // previewImage: 'http://via.placeholder.com/365x365'
        previewImage: this.$props.localImage

      };
    },
  props: ['localImage'],
  methods: {
      selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        console.log(file[0])
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('changeImage', file[0])
        }
      }
  }
}
</script>

<style>
 .imagePreviewWrapper {
    width: 365px;
    height: 365px;
    display: block;
    cursor: pointer;
    margin: 0 auto 10px;
    background-size: cover;
    background-position: center center;
 }
</style>