<template>
  <form @submit.prevent="onSubmit">
    <table>
      <tr>
        <td>제목</td>
        <td>
          <input type="text" v-model="title"/>
        </td>
      </tr>
      <tr>
        <td>작성자</td>
        <td>
          <input type="text" v-model="writer"/>
        </td>
      </tr>
      <tr>
        <td>본문</td>
        <td>
          <textarea cols="50" rows="20" v-model="content"/>
        </td>
      </tr>
    </table>

    <div>
      <button type="submit">등록</button>
      <router-link to="{ name: 'JpaBoardListPage' }">
        취소
      </router-link>
    </div>
  </form>
</template>

<script>

export default {
    name: "JpaBoardRegisterForm",
    data () {
        return {
            title: '제목을 입력하세요.',
            writer: '누구세요 ?',
            content: '내용을 입력하세요.'
        }
    },
    methods: {
        onSubmit () {
            const { title, writer, content } = this

            //emit은 하위컴퍼넌트의 동작으로 상위컴퍼넌트의 메서드를 실행시킴
            this.$emit('submit', { title, writer, content })
                      //@submit이벤트명  
                      //-> { title, writer, content }가 함수매개변수로감
        }
    }
}

</script>

<style>

</style>