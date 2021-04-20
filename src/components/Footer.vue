<script>
export default {
  data: () => ({
    AA: Number,
  }),
  methods: {
    ObtenerAA() {
      return (this.AA = new Date().getFullYear());
    },
  },
};
</script>
<template>
  <footer class="pie">
    <div>
      <p>Jaider Ivan Vera Jaimes ISER {{ ObtenerAA() }}-1</p>
    </div>
  </footer>
</template>

<style>
@import "./Estilos.css";
</style>
