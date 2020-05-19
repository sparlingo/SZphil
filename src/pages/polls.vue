<template>
  <Layout :sidebar="false">
    <div class="content">
      <vue-poll v-bind="options" @addvote="addVote" />
    </div>
  </Layout>
</template>


<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

</style>

<script>
import VuePoll from 'vue-poll'

export default {        
  data() {
    return {
      options: {
        question: 'Who is your favourite philosopher?',
        answers: [
          { value: 1, text: 'Kant', votes: 53 },
          { value: 2, text: 'Aristotle', votes: 35 },
          { value: 3, text: 'Nietzsche', votes: 30 },
          { value: 4, text: 'Locke', votes: 10 },
          { value: 5, text: 'Other', votes: 10 } 
        ]
      }
    }
  },
  components: {
    VuePoll
  },
  methods: {
    addVote(obj){
      console.log('You voted ' + obj.value + '!');
    }
  }
}
</script>