<template>
  <v-container>
    <h2>게시물 작성</h2>
    <jpa-board-register-form @submit="onSubmit"/>
  </v-container>
</template>

<script>
import JpaBoardRegisterForm from '@/components/lecture/board/JpaBoardRegisterForm.vue'
import { mapActions } from 'vuex'
export default {
    components: { JpaBoardRegisterForm },
    name: "JpaBoardRegisterPage",
    methods: {
        ...mapActions ([
            'requestCreateBoardToSpring'
        ]),
        async onSubmit (payload) {
          //await는 하나하나차례대로 기다렸다가 동작 .  이게없으면 비동기로 됨.
            await this.requestCreateBoardToSpring(payload)
            await this.$router.push({//리다이렉트역할을함
                name: 'JpaBoardListPage'
            })
        }
    }
}
</script>

<style>

</style>