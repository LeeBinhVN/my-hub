<template>
  <LoginHeader />
  <div id="Log">
    <h2 id="DangNhap">ĐĂNG NHẬP</h2>
    <v-btn
      class="btn text-none"
      style="background-color: rgb(25, 87, 210); color: white"
      >FaceBook</v-btn
    ><br />
    <v-btn
      class="btn text-none"
      style="background-color: rgb(220, 38, 38); color: white"
      >Google</v-btn
    >
    <v-card style="margin-top: 20px" elevation="3">
      <p style="margin: 15px 0 20px 0">Khác</p>
      <div>
        <p class="p1">Email</p>
        <input placeholder="" type="email" name="email" id="" /><br />
        <p class="p1">Mật khẩu</p>
        <input placeholder="" type="password" />
      </div>
      <div style="height: 50px">
        <v-checkbox
          label="Lưu mật khẩu"
          style="margin-left: 16px; width: 50%; float: left"
        ></v-checkbox>
        <a href="#" style="width: 40%; float: right; margin: 14px 3px 0 0"
          >Quên mật khẩu?</a
        >
      </div>
      <v-btn
        class="btn text-none"
        style="
          background-color: rgb(18, 111, 197);
          color: white;
          margin-top: -20px;
          width: 350px;
        "
        >Đăng nhập</v-btn
      >
      <a href="#" style="float: left; margin: 10px 3px 30px 26px"
        >Gửi lại Email xác nhận</a
      >
    </v-card>
  </div>
</template>
<script>
import LoginHeader from "./LoginHeader.vue";

export default {
  components: { LoginHeader },
};
</script>
<style scoped>
#Log {
  width: 400px;
  height: fit-content;
  text-align: center;
  margin: auto;
  margin-top: 30px;
}
.btn {
  width: 400px;
  margin-top: 15px;
  font-weight: 400;
}
#DangNhap {
  border-bottom: 1px solid rgb(228, 219, 219);
  padding-bottom: 10px;
  font-weight: 500;
}
input {
  width: 350px;
  height: 40px;
  /* padding: 15px; */
  border: 1px solid lightgray;
  border-radius: 5px;
  /* margin-bottom: 10px;
  margin-top: 8px; */
}
.p1 {
  display: flex;
  margin-left: 26px;
  margin-top: 15px;
  margin-bottom: 7px;
}
a {
  text-decoration: none;
  color: rgb(18, 111, 197);
}
</style>
