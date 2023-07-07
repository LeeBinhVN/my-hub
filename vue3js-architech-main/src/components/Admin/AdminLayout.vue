<template>
  <NavsBar />
  <HeaderAdmin />
  <div id="admin-body">
    <router-view />
    <GiamSat />
    <TimKiemNangCao />
    <HienThi />
  </div>
</template>

<script>
import NavsBar from "./NavsBar.vue";
import HeaderAdmin from "./HeaderAdmin.vue";
import GiamSat from "./GiamSat.vue";
import HienThi from "./HienThi.vue";
import TimKiemNangCao from "./TimKiemNangCao.vue";
export default {
  name: "AdminLayout",
  components: { NavsBar, HeaderAdmin, GiamSat, HienThi, TimKiemNangCao },
};
</script>

<style lang="css" scoped>
#admin-body {
  /* margin-left: 18.75%; */
  width: 82.5%;
  margin-top: 64px;
  padding-left: 12px;
  padding-top: 10px;
  padding-right: 12px;
  /* min-height: 100vh; */
  height: 100%;
  background-color: bisque;
  float: right;
}
* {
  box-sizing: border-box;
}
</style>
