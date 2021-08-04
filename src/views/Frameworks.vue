<template>
  <div class="home">
    <h1>{{ heading }}</h1>
    <p>
      This app provides detail on which JS frameworks are most popular.
      Popularity is determined based on the number of Stars, Watches and Forks
      for each frameworks' GitHub repo.
    </p>
    <h3>{{ vueData.name }}</h3>
    <p>
      {{ vueData.description }} <br />
      Watchers: {{ vueData.subscribers_count }} <br />
      Stars: {{ vueData.watchers_count }} <br />
      Forks: {{ vueData.forks }}
    </p>
    <h3>{{ angularData.name }}</h3>
    <p>
      {{ angularData.description }} <br />
      Watchers: {{ angularData.subscribers_count }} <br />
      Stars: {{ angularData.watchers_count }} <br />
      Forks: {{ angularData.forks }}
    </p>
    <h3>{{ emberData.name }}</h3>
    <p>
      {{ emberData.description }} <br />
      Watchers: {{ emberData.subscribers_count }} <br />
      Stars: {{ emberData.watchers_count }} <br />
      Forks: {{ emberData.forks }}
    </p>
    <h3>{{ svelteData.name }}</h3>
    <p>
      {{ svelteData.description }} <br />
      Watchers: {{ svelteData.subscribers_count }} <br />
      Stars: {{ svelteData.watchers_count }} <br />
      Forks: {{ svelteData.forks }}
    </p>
    <h3>{{ reactData.name }}</h3>
    <p>
      {{ reactData.description }} <br />
      Watchers: {{ reactData.subscribers_count }} <br />
      Stars: {{ reactData.watchers_count }} <br />
      Forks: {{ reactData.forks }}
    </p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      heading: "JavaScript Framework Popularity",
      vueData: {},
      angularData: {},
      emberData: {},
      svelteData: {},
      reactData: {},
    };
  },
  created: function () {
    axios.get("/repos/vuejs/vue").then((response) => {
      console.log(response.data);
      this.vueData = response.data;
    });
    axios.get("/repos/angular/angular.js").then((response) => {
      console.log(response.data);
      this.angularData = response.data;
    });
    axios.get("/repos/emberjs/ember.js").then((response) => {
      console.log(response.data);
      this.emberData = response.data;
    });
    axios.get("/repos/sveltejs/svelte").then((response) => {
      console.log(response.data);
      this.svelteData = response.data;
    });
    axios.get("/repos/facebook/react").then((response) => {
      console.log(response.data);
      this.reactData = response.data;
    });
    // fetch("https://api.github.com/repos/vuejs/vue")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //     this.vueData = data;
    //   });
  },
  methods: {},
};
</script>
