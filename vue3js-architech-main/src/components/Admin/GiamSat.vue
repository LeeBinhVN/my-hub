<template>
  <div id="a1">
    <div id="p1">
      <!-- <p style="width: 50px">Home</p>
      <p style="width: 150px">Giám sát phật tử</p> -->
      <a href="#">Home</a>
      <font-awesome-icon
        :icon="['fas', 'angle-right']"
        style="padding: 0px 12px; font-size: smaller"
      />
      <a href="#">Giám sát phật tử</a>
    </div>
    <h2>Giám sát phật tử</h2>
  </div>
  <!-- <template>
    <tbody>
      <tr v-for="(item, index) in dsGiamSat" :key="index">
        <td class="text-center" style="min-width: 110px; width: 110px">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
                @click="showModalThemSua(true, item.hocVienId)"
                class="mx-1 bg-button"
              >
                <v-icon size="22">mdi-account-box</v-icon>
              </v-btn>
            </template>
            <span>Xem thông tin cá nhân</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                icon
                v-bind="attrs"
                v-on="on"
                class="mx-1 bg-button"
                :to="`/giamsat/hocvien/${item.hocVienId}/khoahoc/${item.id}`"
              >
                <v-icon size="22">mdi-view-list</v-icon>
              </v-btn>
            </template>
            <span>Review</span>
          </v-tooltip>
        </td>
        <td style="width: 220px">
          <div class="box-info-hocvien my-2 d-flex align-center">
            <div class="avatar-border">
              <v-avatar size="42">
                <v-img
                  :src="
                    item.linkAnhCaNhan
                      ? HOST + '/api/fileupload/download/' + item.linkAnhCaNhan
                      : '/static/img/default-avatar.png'
                  "
                ></v-img>
              </v-avatar>
            </div>
            <div class="inner-box-info ml-2">
              <router-link
                :to="`/giamsat/hocvien/${item.hocVienId}/khoahoc/${item.id}`"
                class="mb-0 inner-box-info__name text-decoration--none"
                >{{
                  item.tenHocVien ? item.tenHocVien : "Lotusian"
                }}</router-link
              >
              <p class="mb-0 inner-box-info__account">
                {{ item.account ? item.account : "" }}
              </p>
            </div>
          </div>
        </td>
        <td class="text-center">{{ item.tenKhoaHoc }}</td>
        <td class="text-center">{{ item.tenLopHoc }}</td>
        <td class="text-center">{{ item.soBaiDaLam }}</td>
        <td style="width: 330px">
          <div class="d-flex justify-space-around">
            <v-tooltip top>
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
            </v-tooltip>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  dark
                  class="mx-1"
                  color="#FF9B8A"
                >
                  <v-icon left>mdi-close</v-icon>
                  <b>{{ item.soBaiSai }}</b>
                </v-chip>
              </template>
              <span>Bài sai</span> </v-tooltip
            ><v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  dark
                  class="mx-1"
                  color="#1ee58e"
                >
                  <v-icon left>mdi-check</v-icon>
                  <b>{{ item.soBaiDung }}</b>
                </v-chip>
              </template>
              <span>Bài đúng</span> </v-tooltip
            ><v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip v-bind="attrs" v-on="on" class="mx-1">
                  <v-icon left>mdi-circle-off-outline</v-icon>
                  <b>{{ item.soBaiChuaLam }}</b>
                </v-chip>
              </template>
              <span>Bài chưa làm</span>
            </v-tooltip>
          </div>
        </td>
      </tr>
    </tbody>
  </template> -->
</template>

<script></script>

<style scoped>
#a1 {
  /* background-color: aquamarine; */
  height: 70px;
  width: 100%;
  padding-left: 12px;
  /* float: right;
  margin-top: 100px; */
}
h2 {
  font-weight: 400;
}
a {
  text-decoration: none;
  color: black;
}
</style>
