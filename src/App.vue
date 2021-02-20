<template>
  <div id="app">
    <Header></Header>
    <div class="container">
      <Write></Write>
      <AllList></AllList>
      <TotalPrice></TotalPrice>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
import Write from './components/Write'
import AllList from './components/AllList'
import TotalPrice from './components/TotalPrice'
export default {
  name: "App",
  components : {
    Header,Write,AllList,TotalPrice
  },
};
</script>

<style>

</style>
