<template>
  <div>
      <TheSidenav :show="displaySidenav" @close="displaySidenav=false"/>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav"/>

    <nuxt/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";
import TheSidenav from "@/components/TheSidenav"

export default {
    components: {
        TheHeader,
        TheSidenav
    },
    data(){
        return{
            displaySidenav: false
        }
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: "Lato", sans-serif;
}
.margin-content {
  margin-top: 4.5rem;
}

</style>
