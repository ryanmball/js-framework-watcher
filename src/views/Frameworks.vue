<template>
  <div class="home">
    <h1>{{ heading }}</h1>
    <p>
      This app provides detail on which JS frameworks are most popular.
      Popularity is determined based on the number of Stars, Watches and Forks
      for each frameworks' GitHub repo.
    </p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: () => {
    return {
      heading: "JavaScript Framework Popularity",
    };
  },
  created: () => {
    axios.get("/repos/vuejs/vue").then((response) => {
      console.log(response.data);
    });
    fetch("https://api.github.com/repos/vuejs/vue")
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
  methods: {},
};
</script>
