<template>
  <div class = "courses">
    <h1>수강 과목 목록</h1>
    <div v-for="course in courses" v-bind:key="course.id" class="course">
      <div>
        <strong>{{course.name}}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/course/${id}`)
      .then((response) => {
        this.courses = response.data
        console.log(response)
      })
  },
  data: function () {
    return {
       courses: []
    }
  }
}

</script>
