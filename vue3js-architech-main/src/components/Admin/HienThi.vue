<template>
  <v-card id="HienThi">
    <div>
      <!-- <div id="PhanTrang"> -->
      <!-- <div style="padding: 5px 12px">
          Hiển thị 1 - {{ itemsPerPage }} of {{ totalItem }}
        </div> -->
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ props }">
          <v-btn
            class="text-none"
            v-bind="props"
            variant="outlined"
            rounded=""
            size="default"
            color="grey"
            height="40px"
            border="gray"
            style="margin-top: 15px"
          >
            <span
              >Hiển thị 1 - {{ currentValue }} of {{ desserts.length }}</span
            >
            <span style="font-size: large" class="mdi mdi-menu-down"></span
          ></v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(number, i) in itemsPerPage" :key="i">
            <v-list-item-title @Click="chooseItemsPerPage(number)">{{
              number
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- </div> -->
      <div style="width: 320px; float: right">
        <!-- <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> -->
        <v-text-field
          style="width: 200px; float: left; margin-top: 10px"
          :loading="loading"
          density="compact"
          variant="solo"
          label="Tìm kiếm"
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
          @click:append-inner="onClick"
        ></v-text-field>
        <!-- <v-select
        style="float: right; width: 120px; color: red"
        label="Sắp xếp"
        :items="['California', 'aabavava']"
        variant="filled"
      ></v-select> -->
        <v-menu transition="scale-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              class="text-none"
              color="red"
              v-bind="props"
              variant="text"
              size="small"
              style="margin-top: 15px"
              >Sắp xếp<span
                style="font-size: large"
                class="mdi mdi-menu-down"
              ></span
            ></v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in SapXep" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
    <div style="padding: 20px 12px 20px 0px">
      <!-- <v-table>
        <thead>
          <tr>
            <th>Thứ tự</th>
            <th>Phật tử</th>
            <th>Ngày xuất gia</th>
            <th>Số điện thoại</th>
            <th>Số buổi đạo tràng đã tham gia</th>
            <th>Thông tin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Thao tác</th>
            <th>Phật tử</th>
            <th>Ngày xuất gia</th>
            <th>Số điện thoại</th>
            <th>Số buổi đạo tràng đã tham gia</th>
            <th>
              <v-btn
                variant="text"
                density="compact"
                color="gray"
                style="background-color: red"
                ><span class="mdi mdi-pencil"></span>
              </v-btn>
            </th>
          </tr>
          <tr>
            <th>Thao tác</th>
            <th>Phật tử</th>
            <th>Ngày xuất gia</th>
            <th>Số điện thoại</th>
            <th>Số buổi đạo tràng đã tham gia</th>
            <th>
              <v-btn icon="mdi mdi-pencil" variant="text"></v-btn>
            </th>
          </tr>
          <tr>
            <th>Thao tác</th>
            <th>Phật tử</th>
            <th>Ngày xuất gia</th>
            <th>Số điện thoại</th>
            <th>Số buổi đạo tràng đã tham gia</th>
            <th>
              <v-btn icon="mdi mdi-pencil" variant="text"></v-btn>
            </th>
          </tr>
        </tbody>
      </v-table> -->
      <!-- <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="desserts"
        item-value="name"
        class="elevation-1"
      ></v-data-table> -->
      <!-- <v-app>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Calories</th>
              <th class="text-left">Fat</th>
              <th class="text-left">Carbs</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.fat }}</td>
              <td>{{ item.carbs }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-app> -->
      <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="desserts"
        item-value="stt"
        class="elevation-1"
      >
        <!-- <div>
          <img
            style="border-radius: 50%; height: 40px"
            src="https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg"
            alt="avatar"
          />
          <h3>pappapapapa</h3>
        </div> -->
        <!-- <template v-slot:item.actions="{ item }">
          <v-icon size="small" class="me-2" @click="editItem(item.raw)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" @click="deleteItem(item.raw)">
            mdi-delete
          </v-icon>
        </template> -->
        <!-- <template v-slot:no-data>
          <v-btn color="primary" @click="initialize"> Reset </v-btn>
        </template> -->
        <thead>
          <tr>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              STT
            </th>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              Phật tử
            </th>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              Ngày xuất gia
            </th>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              SĐT
            </th>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              Buổi đạo tràng đã tham dự
            </th>
            <th
              class="text-center"
              style="background-color: rgb(240, 240, 240)"
            >
              Thông tin
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in desserts" :key="index">
            {{
              console.log(item)
            }}
            <!-- STT -->
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              {{ item.stt }}
            </td>
            <!-- Phật tử -->
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              <div
                class="box-info-hocvien my-2 d-flex align-center"
                @click="dialog = true"
              >
                <div style="width: 30px; margin-right: 12px">
                  <!-- <CapNhatUser v-bind:image1="item.Avt" /> -->
                  <v-avatar>
                    <v-img :src="item.Avt"></v-img>
                  </v-avatar>
                </div>
                <div class="inner-box-info ml-2">
                  <!-- <router-link
                      :to="`/giamsat/hocvien/${item.hocVienId}/khoahoc/${item.id}`"
                      class="mb-0 inner-box-info__name text-decoration--none"
                      >{{ item.ten ? item.ten : "Lotusian" }}</router-link
                    > -->
                  <p style="float: left">{{ item.PhatTu }}</p>
                  <br />
                  <p class="mb-0 inner-box-info__account">
                    {{ item.email ? item.email : "" }}
                  </p>
                </div>
              </div>
            </td>
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              {{ item.NgayXuatGia }}
            </td>
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              {{ item.SDT }}
            </td>
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              {{ item.SoBuoiThamGia }}
            </td>
            <!-- Sửa -->
            <td :class="isEven(index) ? 'text-center even' : 'text-center'">
              <!-- <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip
                        dark
                        class="mx-1"
                        v-bind="attrs"
                        v-on="on"
                        color="#FFBA68"
                      >
                        <v-icon left>mdi-spin mdi-loading</v-icon>
                        <b>{{ item.soBaiDoi }}</b>
                      </v-chip>
                    </template>
                    <span>Bài đợi</span>
                  </v-tooltip> -->
              <!-- <router-link to="/user"> -->
              <!-- </router-link> -->
              <!-- <CapNhatUser /> -->
              <!-- <template v-slot:activator="{ props }"> -->
              <!-- <v-btn
                color="rgb(47, 194, 252)"
                height="30px"
                rounded=""
                @click="dialog = true"
              >
                <span
                  class="mdi mdi-pencil"
                  style="color: black; font-size: x-large"
                ></span>
              </v-btn> -->
              <v-btn
                color="rgb(47, 194, 252)"
                density="comfortable"
                icon="mdi-pencil"
                @click="dialog = true"
              ></v-btn>
              <!-- <CapNhatUser :childDialog="dialog" /> -->
              <!-- </template> -->
            </td>
          </tr>
        </tbody>
      </v-data-table>
      <v-dialog
        transition="dialog-bottom-transition"
        width="1240"
        scrollable="true"
        v-model="dialog"
      >
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

        <v-card style="padding: 14px">
          <v-toolbar color="primary" title="Cập nhật người dùng"></v-toolbar>
          <!-- <v-card style="padding: 14px"> -->
          <CapNhatUser />
          <!-- </v-card> -->
          <v-card-actions class="justify-end">
            <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
              Save
            </v-btn>
            <v-btn variant="text" @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</template>

<script>
// import Auth from "../../api/AuthAPI/Auth";
// import axios from "axios";
import CapNhatUser from "../CapNhatUser/CapNhatUser.vue";
export default {
  name: "HienThi",
  components: { CapNhatUser },
  methods: {
    isEven(num) {
      return (num + 1) % 2 == 0; // num +1 vì index bắt đầu từ 0
    },
    // updateDialog() {
    //   this.dialog = !this.dialog;
    // },
    chooseItemsPerPage(val) {
      this.currentValue = val;
    },
    async getData() {
      // const data = await Auth.getPhatTu();
      // console.log(data);
      // this.desserts = data.contents;
    },
  },
  created() {
    // console.log("banj cos ");
    // this.getData();
  },
  data() {
    return {
      // desserts: [],
      dialog: false,
      SapXep: [
        { title: "Tào lao" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      currentValue: 5,
      itemsPerPage: 5,
      totalItem: 200,
      headers: [
        {
          title: "STT",
          align: "start",
          sortable: false,
          key: "stt",
        },
        { title: "Phật tử", align: "center", key: "PhatTu" },
        { title: "Avatar", align: "center", key: "avt" },
        { title: "Email", align: "center", key: "email" },
        { title: "Ngày xuất gia", align: "center", key: "NgayXuatGia" },
        { title: "Số điện thoại", align: "center", key: "SDT" },
        {
          title: "Số buổi đạo tràng tham gia",
          align: "center",
          key: "SoBuoiThamGia",
        },
        { title: "Thông tin", align: "center", key: "ThongTin" },
      ],
      desserts: [
        {
          stt: 1,
          PhatTu: "John",
          Avt: "https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg",
          email: "john@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 123456789,
          SoBuoiThamGia: 12,
        },
        {
          stt: 2,
          PhatTu: "Jhin",
          Avt: "https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg",
          email: "jhin@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 22556582,
          SoBuoiThamGia: 12,
        },
        {
          stt: 3,
          PhatTu: "Joan",
          Avt: "https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg",
          email: "joan@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 123456789,
          SoBuoiThamGia: 12,
        },
        {
          stt: 4,
          PhatTu: "Jack",
          Avt: "https://i.bloganchoi.com/bloganchoi.com/wp-content/uploads/2022/09/avatar-tet-2023-quy-mao-64-696x697.jpg?fit=700%2C20000&quality=95&ssl=1",
          email: "jack@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 22556582,
          SoBuoiThamGia: 12,
        },
        {
          stt: 5,
          PhatTu: "Jonna",
          Avt: "https://o.vdoc.vn/data/image/2022/08/25/avatar-cute-meo-con-than-chet.jpg",
          email: "jonna@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 123456789,
          SoBuoiThamGia: 12,
        },
        {
          stt: 6,
          PhatTu: "Jinx",
          Avt: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkQHHtRFqn5Y9LI78mUoWgJhfXyICV6MM8Dg&usqp=CAU",
          email: "jinx@gmail.com",
          NgayXuatGia: "2021 / 2 / 12",
          SDT: 22556582,
          SoBuoiThamGia: 12,
        },
      ],
      // desserts: [
      //   {
      //     stt: this.contents.id,
      //     PhatTu: this.contents.ten,
      //     NgayXuatGia: this.contents.ngayXuatGia,
      //     SDT: this.contents.soDienThoai,
      //     SoBuoiThamGia: this.contents.soBuoiThamGia,
      //   },
      // ],
      // headers: [
      //   { title: "#", align: "start", key: "stt", sortable: false },
      //   { title: "Tên bài học", align: "start", key: "lessonName" },
      //   { title: "Ngày tạo", align: "start", key: "createDateTime" },
      //   { title: "Cập nhật", align: "start", key: "updateDateTime" },
      //   { title: "Loại bài học", align: "start", key: "lessonType" },
      //   { title: "Thời lượng", align: "start", key: "videoTime" },
      //   { title: "Action", align: "start", key: "actions" },
      // ],
      // desserts: [
      //   {
      //     stt: 1,
      //     lessonName: "abb",
      //     createDateTime: "fnq",
      //     updateDateTime: "wfwnw",
      //     lessonType: "12312",
      //     videoTime: "egg3",
      //     actions: "yy6y6",
      //   },
      // ],
    };
  },
};
// SapXep: [
//       { title: "Tào lao" },
//       { title: "Click Me" },
//       { title: "Click Me" },
//       { title: "Click Me 2" },
//     ],
</script>

<style scoped>
#HienThi {
  background-color: white;
  height: fit-content;
  width: 100%;
  padding-left: 12px;
  margin-top: 10px;
}
h3 {
  font-weight: 400;
  padding-top: 10px;
  /* color: rgb(47, 194, 252); */
}
#PhanTrang {
  border-radius: 18px;
  border: 1px solid gray;
  height: 35px;
  width: fit-content;
  margin-top: 15px;
  float: left;
}
#PhanTrang div {
  text-align: center;
  padding-top: 0px;
}
th,
td {
  border: 1px rgb(165, 163, 163) solid;
  border-left: none;
  /* (ko ăn thuộc tính collapse) */
  /* border-collapse: collapse;
  border-spacing: 0; */
}
td:first-child {
  border: 1px rgb(165, 163, 163) solid;
}
th:first-child {
  border: 1px rgb(165, 163, 163) solid;
}
.even {
  background-color: rgb(240, 240, 240) !important;
}
.box-info-hocvien:hover {
  color: rgb(0, 140, 255);
  cursor: pointer;
  width: 60%;
}
.box-info-hocvien {
  width: fit-content;
}
/* tbody tr:nth-of-type(even) {
  background-color: #a72828 !important;
} */
</style>
