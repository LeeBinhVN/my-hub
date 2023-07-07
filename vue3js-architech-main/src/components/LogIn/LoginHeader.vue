<template>
  <div id="head">
    <v-img
      src="https://yp.vn/wp-content/uploads/2022/04/Untitled.png"
      width="200px"
      style="float: left"
    ></v-img>
    <div>
      <span>Xin chào {{ Email }}</span>
      <a href="#"
        >Đăng xuất <span style="font-size: large" class="mdi mdi-logout"></span
      ></a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Email: "email123@gmail.com",
    };
  },
};
</script>
<style scoped>
#head {
  height: 60px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  text-align: center;
  display: block;
}
#head > div {
  float: right;
  height: 60px;
  display: flex;
  line-height: 60px;
  padding: 0 50px;
}
#head > div > span {
  padding: 2px 20px;
}

#head > div > a {
  text-decoration: none;
  color: rgb(33, 33, 33);
}
#head > div > a:hover {
  color: rgb(39, 76, 197);
}
</style>
