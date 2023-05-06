<template>
    <div id="dlgDialog" class="m-dialog" style="display: block;">
        <div class="m-dialog-content">
            <div class="m-dialog-header">
                <div class="m-dialog-title">Thêm danh hiệu thi đua</div>
                <!-- <button class="m-dialog-close"><i class="fas fa-times"></i></button> -->
                <!-- <a href="#" class="m-dialog-link"><i class="icofont-question-circle"></i></a> -->
                <div class="m-dialog-button buttons">
                    <div class="m-dialog-link"></div>
                    <div class="m-dialog-close" @click="btnCloseOnClick"></div>
                </div>
            </div>

            <div class="m-dialog-body">
                <div class="m-row">
                    <label for="">Tên danh hiệu thi đua
                        <span class="m-required">*</span>
                    </label>
                    <div class="m-input">
                        <!-- <div class="border m-error"> -->
                        <!-- <input type="text" name="input" class="border m-error" placeholder="Nhap gi do"> -->
                        <input type="text" name="input" class="m-input-edit" placeholder="Nhập tên danh hiệu thi đua"
                           ref="nameCompetition" id="nameCompetition" tabindex="1" v-model="emulation.name">
                        <!-- </div> -->
                        <div class="error-text" style="display: none;">
                            Tên danh hiệu thi đua không được để trống.
                        </div>
                    </div>
                </div>
                <div class="m-row d-flex">
                    <div class="row mr-10">
                        <label for="">Mã danh hiệu
                            <span class="m-required">*</span>
                        </label>
                        <div class="m-input">
                            <!-- <div class="border m-error"> -->
                            <!-- <input type="text" name="input" class="border m-error" placeholder="Nhap gi do"> -->
                            <input type="text" name="input" class="m-input-edit " placeholder="Nhập mã danh hiệu"
                                id="codeTitle" tabindex="2" v-model="emulation.code">
                            <!-- </div> -->
                            <div class="error-text code-title-text" style="display: none;">
                                Mã danh hiệu không được để trống.
                            </div>
                        </div>
                    </div>
                    <div class="row-checkbox">
                        <div class="row mr-10">
                            <label for="">Đối tượng khen thưởng
                                <span class="m-required">*</span>
                            </label>
                            <div class="m-checkbox">
                                <m-check-box :tab="3" input-id="checkReward1" textCheckBox="Cá nhân" v-bind:value="emulationItem?.applyObject"/>
                                <m-check-box :tab="4" input-id="checkReward2" textCheckBox="Tập thể"/>
                                <!-- <label for="">
                                    <input id="checkReward" type="checkbox" value="false" tabindex="4">
                                    <span class="checkbox-title">Tập thể</span>
                                </label> -->
                            </div>
                            <div class="error-text check-reward" style="display: none;">
                                Đối tượng khen thưởng không được để trống.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-row d-flex">
                    <div class="row mr-10">
                        <label for="">Đối tượng khen thưởng
                            <span class="m-required">*</span>
                        </label>
                        <select class="dropdown" name="cars" id="cars" tabindex="5">
                            <option value="0">Cấp nhà nước</option>
                            <option value="1">Cấp Tỉnh/tương đương</option>
                            <option value="2">Cấp Huyện/tương đương</option>
                            <option value="3">Cấp Xã/tương đương</option>
                        </select>
                        <!-- <msComboboxVue :tab="5" url="http://localhost:3000/commendationLevel" propText="name" propValue="id"></msComboboxVue> -->
                    </div>
                    <!-- <div id="combobox2" class="mcombobox">
                                        <input type="text" class="mcombobox__input">
                                        <button class="mcombobox__button"></button>
                                        <div class="mcombobox__data mcombobox__data--hide">
                                            <a class="mcombobox-item" value="1">Ha Noi</a>
                                            <a class="mcombobox-item --selected" value="2">Hai Phong</a>
                                            <a class="mcombobox-item" value="3">Quang Linh</a>
                                        </div>
                                    </div> -->
                    <div class="row-checkbox">
                        <div class="row mr-10">
                            <label for="">Loại phong trào áp dụng
                                <span class="m-required">*</span>
                            </label>
                            <div class="m-checkbox">
                                <m-check-box :tab="6" input-id="checkMove1" textCheckBox="Thường xuyên"/>
                                <m-check-box :tab="7" input-id="checkMove2" textCheckBox="Theo đợt"/>

                                <!-- <label for="">
                                    <input id="checkMove" type="checkbox" value="false" tabindex="7">
                                    <span class="checkbox-title">Theo đợt</span>
                                </label> -->
                            </div>
                            <div class="error-text type-movement" style="display: none;">
                                Loại phong trào không được để trống.
                            </div>
                        </div>
                    </div>
                </div>

                <div class="m-row">
                    <label for="" class="m-textarea-title">Ghi chú</label>
                    <div class="m-input m-editor" >
                        <div class="m-textarea border" >
                            <textarea rows="4" maxlength="255" tabindex="8" class="m-textarea-item"  placeholder="Nhập ghi chú"></textarea>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-dialog-footer">
                <button class="button btn-cancel" id="btn-cancel-add" tabindex="11" @click="btnCloseOnClick">
                    <div class="button__text">Hủy</div>
                </button>
                <button class="button btn-save-add" tabindex="10" @click="btnSaveAddOnClick">
                    <div class="button__text">Lưu &amp; Thêm mới</div>
                </button>
                <button class="button" tabindex="9" @click="btnSaveOnClick">
                    <div class="button__text">Lưu</div>
                </button>
            </div>
        </div>
    </div>
</template>
  
<script>
import MCheckBox from '@/components/MCheckBox.vue';
// import msComboboxVue from 'ms-combobox/src/ms-combobox.vue';
export default {
    name: "EmulationDetail",
    emits: ["onClose"],
    props: ["emulationItem", "id"], //props chỉ hứng từ chỗ khác gửi về
    created() {
        //if (this.id) {
        if (!this.isAdd) {
            //lấy dữ liệu chi tiết:
            this.$ngocaxios.get(`http://localhost:3000/emulationTitles/${this.id}`)
            .then(res => {
                this.emulation = res.data;
            })

        } 
        else {
            //lấy mã mới
            // this.$ngocaxios.get(`http://localhost:3000/emulationTitles/${this.id}`)
            // .then(res => {
            //     this.emulation = res.data;
            // })
            this.$nextTick(() => { //set  focus sau khi DOM duoc render ra het
                this.$refs.nameCompetition.focus(); //focus vao truong mong muon
            })

        }
    },
    // watch: {
    //     "emulation.name": function(newValue, oldValue) {
    //         if (newValue.toLowerCase() == "lao động tiên tiến") {
    //             const name = this.emulatiion.name.toUpperCase();
    //             this.emulatiion.name = name;
    //         }
    //         console.log("oldValue: ", oldValue);
    //     },
    // },
    computed: {
        isAdd: function() {
            if (this.id) {
                return false;
            } else {
                return true;
            }
        }
    },
    components: {
        MCheckBox,
    },
    data() {
        return {
            textCheck: "Cá nhân",
            emulation: {},
        }
    },
    methods: {
        /**
         * function đóng form thêm danh hiệu nút close
         * Author: NXNgoc
         */
        btnCloseOnClick() {
            // this.$emit("onClose");  //truyền sự kiện cho CHA
            this.$router.push("/emulation-title") ;
        },
        btnSaveAddOnClick() {
            
        },
        btnSaveOnClick() {
            if(this.isAdd) {
                // Gọi đến api post
                this.$ngocaxios.post("http://localhost:3000/emulationTitles",this.emulation)
                .then(res => {
                    console.log(res);
                    alert("Thanh cong!")
                })
                .catch(res => {
                    console.log("Lỗi");
                    console.log(res);
                })
            }else {
                 //Gọi đến api put
                 this.$ngocaxios.put(`http://localhost:3000/emulationTitles/${this.id}`,this.emulation)
                .then(res => {
                    console.log(res);
                    alert("Sua cong!")
                })
                .catch(res => {
                    console.log("Lỗi");
                    console.log(res);
                })
            }
        }
    },
}
</script>
  
<style scoped>
@import url(../../css/components/dialog.css);
@import url(../../css/components/table.css);
@import url(../../css/components/combobox.css);
@import url(../../css/layouts/content.css);
</style>