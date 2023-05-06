<template>
    <di v class="filter-group">
        <button class="button" id="btnFilter">
            <div class="button__icon icon-filter filter"></div>
            <div class="button__text">Bộ lọc</div>
        </button>
        <div class="filter-box" style="right: 54px; display: none;">
            <span class="custom-arrow"></span>
            <div class="box-header">
                <span class="title">Lọc danh hiệu</span>
                <div class="icon24 deleteX close-icon" id="close-filter"></div>
            </div>
            <div class="box-content">
                <div class="form-group">
                    <label for="">Đối tượng khen thưởng</label>
                    <div class="combo-box">
                        <select class="dropdown" name="" id="">
                            <option value="0" selected="">Tất cả</option>
                            <option value="1">Gia đình</option>
                            <option value="2">Tập thể</option>
                            <option value="3">Cá nhân</option>
                            <option value="4">Cá nhân và tập thể</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Cấp khen thưởng</label>
                    <div class="combo-box">
                        <select class="dropdown" name="" id="">
                            <option value="0" selected="">Tất cả</option>
                            <option value="1">Cấp Nhà nước</option>
                            <option value="2">Cấp Tỉnh/tương đương</option>
                            <option value="3">Cấp Huyện/tương đương</option>
                            <option value="4">Cấp Xã/tương đương</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Loại phong trào</label>
                    <div class="combo-box">
                        <select class="dropdown" name="" id="">
                            <option value="0" selected="">Tất cả</option>
                            <option value="1">Thường xuyên</option>
                            <option value="2">Theo đợt</option>
                            <!-- <option value="3">Cá nhân</option>
                                            <option value="4">Cá nhân và tập thể</option> -->
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Trạng thái</label>
                    <div class="combo-box">
                        <select class="dropdown" name="" id="">
                            <option value="0" selected="">Tất cả</option>
                            <option value="1">Sử dụng</option>
                            <option value="2">Ngừng sử dụng</option>
                            <!-- <option value="3">Cá nhân</option>
                                            <option value="4">Cá nhân và tập thể</option> -->
                        </select>
                    </div>
                </div>
            </div>
            <div class="box-footer">
                <div class="right-content">
                    <button class="button btn-cancel btn-normal">
                        <div class="button__text">Hủy</div>
                    </button>
                    <button class="button btn-filter">
                        <div class="button__text">Áp dụng</div>
                    </button>
                </div>
            </div>
        </div>
    </di>
</template>
  
<script>
export default {
    name: "EmulationFilter",
}
</script>
  
<style scoped>
@import url(../../css/components/filterbox.css);
@import url(../../css/components/icon.css);
</style>