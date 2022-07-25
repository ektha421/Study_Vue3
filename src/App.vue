<template>
<div>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/databinding">DataBinding</router-link>
    <router-link to="/serverdata">serverdata</router-link>
    <router-link to="/ref-test">RefTest</router-link>
    <router-link to="/emit-test">EmitTest</router-link>
    <router-link to="/slot-modal">SlotUseModalLayout</router-link>
  </nav>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  margin-right: 10px;
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
