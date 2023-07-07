<template>
  <!-- <template v-slot:activator="{ props }">
          <v-btn
            color="rgb(47, 194, 252)"
            height="30px"
            rounded=""
            v-bind="props"
          >
            <span
              class="mdi mdi-pencil"
              style="color: black; font-size: large"
            ></span>
          </v-btn>
        </template> -->
  <!-- <v-card style="padding: 14px">
    <v-toolbar color="primary" title="Cập nhật người dùng"></v-toolbar> -->
  <!-- <v-card style="padding: 14px"> -->
  <div id="A">
    <!-- <h1>Cập nhật người dùng</h1> -->
    <!-- <img
      style="border-radius: 50%; height: 90px; padding-top: 14px"
      src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg"
      alt="avatar"
    /> -->
    <v-avatar style="height: 90px; width: 90px; margin-top: 14px">
      <v-img
        src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg"
      ></v-img>
    </v-avatar>
    <p style="color: grey">Ảnh đại diện người dùng</p>
    <v-btn color="blue" class="text-none">Chọn ảnh</v-btn>
  </div>
  <div id="NhapThongTin">
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Học viên"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Khóa học"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        type="date"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Lớp học"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Đã làm"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="LinkedIn"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        label="Tên tài khoản"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="outlined"
        label="Email"
        type="mail"
      ></v-text-field>
    </div>
    <div>
      <v-text-field
        class="text-field"
        :loading="loading"
        density="compact"
        variant="solo"
        disabled="true"
        label="Mật khẩu"
      ></v-text-field>
    </div>
  </div>
  <div>
    <v-textarea
      label="Địa chỉ hiện tại"
      variant="outlined"
      style="width: 100%"
    ></v-textarea>
  </div>
  <div id="chonDiaChi">
    <div class="selectAdd">
      <v-select
        label="Tỉnh/thành"
        :items="['California']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
    <div class="selectAdd">
      <v-select
        label="Quận/huyện"
        :items="['California']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
    <div class="selectAdd">
      <v-select
        label="Xã/phường"
        :items="['California']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
    <div class="selectAdd">
      <v-select
        label="Giới tính"
        :items="['Nam', 'Nữ', 'Khác']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
    <div class="selectAdd">
      <v-select
        label="Công việc hiện tại"
        :items="['California']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
    <div class="selectAdd">
      <v-select
        label="Thành viên"
        :items="['California']"
        variant="outlined"
        density="compact"
      ></v-select>
    </div>
  </div>
  <!-- </v-card> -->
  <!-- </v-card> -->
  <!-- <v-card style="padding: 14px">
    <div id="A">
      <h1>Cập nhật người dùng</h1>
      <img
        style="border-radius: 50%; height: 90px"
        src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg"
        alt="avatar"
      />
      <p style="color: grey">Ảnh đại diện người dùng</p>
      <v-btn color="blue" class="text-none">Chọn ảnh</v-btn>
    </div>
    <div id="NhapThongTin">
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Học viên"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Khóa học"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          type="date"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Lớp học"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Đã làm"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="LinkedIn"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Tên tài khoản"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Email"
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          class="text-field"
          :loading="loading"
          density="compact"
          variant="solo"
          disabled="true"
          label="Mật khẩu"
        ></v-text-field>
      </div>
    </div>
    <div>
      <v-textarea
        label="Địa chỉ hiện tại"
        variant="outlined"
        style="width: 100%"
      ></v-textarea>
    </div>
    <div id="chonDiaChi">
      <div class="selectAdd">
        <v-select
          label="Tỉnh/thành"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectAdd">
        <v-select
          label="Quận/huyện"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectAdd">
        <v-select
          label="Xã/phường"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectAdd">
        <v-select
          label="Giới tính"
          :items="['Nam', 'Nữ', 'Khác']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectAdd">
        <v-select
          label="Công việc hiện tại"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectAdd">
        <v-select
          label="Thành viên"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
    </div>
  </v-card> -->
</template>

<script>
export default {
  props: ["childDialog"],
  data() {
    return {
      dialog: this.childDialog,
    };
  },
  methods: {
    handleClick: function () {
      this.$emit("clicked-something");
    },
  },
};
</script>

<style scoped>
#A {
  padding: 0px;
}
#NhapThongTin {
  display: flex;
  flex-wrap: wrap;
}
#NhapThongTin div {
  padding-right: 40px;
}
.text-field {
  width: 350px;
  float: left;
  margin-top: 10px;
}
#chonDiaChi {
  display: flex;
  flex-wrap: wrap;
}
.selectAdd {
  width: 320px;
  margin-right: 70px;
}
</style>
