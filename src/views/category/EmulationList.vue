<template>
  <div class="m-outer-wrapper">
    <div class="row-table">
      <table class="m-table scroller">
        <thead>
          <tr>
            <th class="text-align-center multiple-cell">
              <m-check-box input-id="" textCheckBox=""/>
            </th>
            <th class="text-align-left multiple-cell" style="min-width: 310px; max-width: 310px;">Tên danh
              hiệu thi đua</th>
            <th class="text-align-left multiple-cell" style="width: 160px; min-width: 160px; max-width: 160px;">Mã danh
              hiệu</th>
            <th class="text-align-left multiple-cell" style="width: 180px; max-width: 180px; min-width: 180px;">Đối tượng
              khen thưởng
            </th>
            <th class="text-align-left multiple-cell" style="width: 180px; max-width: 180px; min-width: 180px;">Cấp khen
              thưởng</th>
            <th class="text-align-left multiple-cell" style="width: 200px; max-width: 200px; min-width: 200px;">Loại phong
              trào</th>
            <th class="text-align-left multiple-cell" style="width: 180px; max-width: 180px; min-width: 180px;">Trạng thái
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in emulationList" :key="item.id" @dblclick="rowOnDbClick(item)">
            <td class="m-td text-align-center multiple-cell">
              <input type="checkbox">
            </td>
            <td class="m-td text-align-left">{{ item.name }}</td>
            <td class="m-td text-align-left">{{ item.code }}</td>
            <td class="m-td text-align-left">{{ item.applyObject }}</td>
            <td class="m-td text-align-left">{{ item.commendationLevel }}</td>
            <td class="m-td text-align-left">{{ item.MovementType }}</td>
            <td class="m-td text-align-left">
              <div class="m-status">
                <div class="icon-status" v-if="item.Inactive == 'Ngừng sử dụng'">
                  <div  class="icon-image icon-not-active"></div>
                </div>
                <div class="icon-status" v-if="item.Inactive == 'Sử dụng'">
                  <div  class="icon-image icon-active"></div>
                </div>
                <div class="text-status">{{ item.Inactive }}</div>
              </div>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
  <div class="m-paging">
    <div class="m-paging-left">
      Tổng số:
      <div class="total">12</div>
      bản ghi
    </div>

    <div class="m-paging-right">
      <span>Số bản ghi/trang</span>
      <div class="m-paging-size">
        <select name="" id="" class="m-page-select">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="m-from-to">
        <span>1 - 12</span>
        bản ghi
      </div>
      <div class="m-paging-button">
        <div class="m-btn-page prev"></div>
        <div class="m-btn-page next disabled"></div>
      </div>
    </div>
  </div>
  <m-loading v-if="isLoading" />
</template>

<script>
import MCheckBox from '@/components/MCheckBox.vue';
import MLoading from '@/components/MLoading.vue';
import router from '@/router/router';
export default {
  name: "EmulationList",
  components: {
    MCheckBox,
    MLoading,
  },
  data() {
    return {
      emulationList: [],
      isLoading: false,
    }
  },
  created() {
    // lấy dữ liệu
    this.isLoading = true;
    this.$ngocaxios.get("http://localhost:3000/emulationTitles")
    .then((res) => {
      this.emulationList = res.data;
      this.isLoading = false;
    })
    .catch((res) => {
      console.log(res);
    });
  },
  methods: {
    /**
     * double click sẽ truyền data dòng đó cho Cha, để truyền vào form Detail
     * @param {*} emulation - data lấy ra được
     */
    rowOnDbClick(emulation) {
        console.log(emulation);
        //c1: this.$emit("onSelectedEmulation", emulation);
        //c2: this.$ngocemitter.emit("onSelectedEmulationEmitter",emulation) //truyền cho Cha
        //c3:
        router.push(`/emulation-title/${emulation.id}`);
    }
  },
}
</script>

<style scoped>
@import url(../../css/components/paging.css);
</style>