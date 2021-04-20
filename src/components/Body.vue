<style>
@import "./Estilos.css";
</style>

<template>
  <div class="row">
    <div class="col">
      <h1 class="title">Uso del *ngIf en Vue js</h1>
      
      <div class="card w-75" v-if="show">
        <div class="col1">
          <h2>{{course.professor}}</h2>
          <p>{{course.name}}</p>
        </div>
      </div>
      <button v-on:click="show = !show" href="#" class="btn btn-danger" id="boton">
        Clic mi So´
      </button>
    </div>
    <div class="col">
      <h1>Uso del *ngFor con Vue js</h1>
      <ul id="list ">
        <li v-for="(s, i) in students" :key="i">
          {{ i + 1 }}-{{ s.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    students: [
      { name: "Juana de Arco", id: 1 },
      { name: "Princesa Diana", id: 2 },
      { name: "Isabel II", id: 3 },
      { name: "Emmanuel Macron", id: 4 },
      { name: "Ivan Duque", id: 5 },
    ],
    course: {
      professor: "Profesor de fisica",
      name: "Yesid Madrid",
    },
    show: false,
  }),
};
</script>
