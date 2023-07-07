<template>
  <v-card id="card">
    <h3>Tìm kiếm phật tử</h3>
    <!-- <v-table>
      <thead>
        <tr>
          <th>
            <div class="selectSearch">
              <p>Pháp danh</p>
              <v-select
                label="Chọn khóa học"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </th>
          <th>
            <div class="selectSearch">
              <p>Pháp danh</p>
              <v-select
                label="Chọn khóa học"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </th>
          <th>
            <div class="selectSearch">
              <p>Pháp danh</p>
              <v-select
                label="Chọn khóa học"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="outlined"
              ></v-select>
            </div>
          </th>
        </tr>
      </thead>
    </v-table> -->
    <div id="MucTimKiem">
      <div class="selectSearch">
        <p>Pháp danh</p>
        <v-select
          label="Chọn pháp danh"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectSearch">
        <p>Giới tính</p>
        <v-select
          label="Chọn giới tính"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectSearch">
        <p>Trạng thái phật tử</p>
        <v-select
          label="Chọn trạng thái"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
      <div class="selectSearch">
        <p>Trạng thái phật tử</p>
        <v-select
          label="Chọn trạng thái"
          :items="['California']"
          variant="outlined"
          density="compact"
        ></v-select>
      </div>
    </div>
  </v-card>
</template>

<script></script>

<style scoped>
#card {
  background-color: white;
  height: fit-content;
  width: 100%;
  padding-left: 10px;
}
h3 {
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
}
.selectSearch {
  width: 250px;
  margin-right: 50px;
}
.selectSearch p {
  padding-bottom: 8px;
}
#MucTimKiem {
  /* display: inline; */
  display: flex;
  /* justify-content: flex-start; */
  flex-wrap: wrap;
}
</style>
