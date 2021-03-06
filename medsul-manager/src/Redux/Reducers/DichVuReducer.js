import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU, SHOW_MODAL_DICHVU, HIRE_MODAL_DICHVU, SHOW_MODAL_LOAIDICHVU, HIRE_MODAL_LOAIDICHVU, DELETE_LOAIDICHVU, UPDATE_LOAIDICHVU, DROPDOWN_TABLE_DICHVU, ADD_DICHVU, DELETE_DICHVU, UPDATE_DICHVU, CHECK_DATA } from "../actions/type";

let initialState = {
    modalLoaiDV: {
        isShow: false,
        value: {
            loaiDichVu_Id: '',
            maLoaiDichVu: '',
            tenLoaiDichVu: ''
        }
    },
    SoLuong: false,
    dropDown_MaLDV: '',
    mangLoaiDichVu: [

    ],
    modalDV: {
        isShow: false,
        maLDV: '',
        value: {
            dichVu_Id: 0,
            khongBaoGom: '',
            loaiDichVuID: 0,
            maDichVu: '',
            moTaDichVu: '',
            tenDichVu: '',
            thoiGianUocTinh: 0,
            yeuCauCongViec: ''
        }
    },
    mangDichVu: [

    ],
}

const DichVuReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_MODAL_DICHVU: {
            state.modalDV.isShow = true;
            state.modalDV.value = payload;
            let index = state.mangLoaiDichVu.findIndex(item => item.loaiDichVu_Id === state.dropDown_MaLDV);
            if (index !== -1) {
                state.modalDV.maLDV = state.mangLoaiDichVu[index].maLoaiDichVu;
            }
            return { ...state };
        } case HIRE_MODAL_DICHVU: {
            state.modalDV.isShow = false;
            return { ...state };
        } case SHOW_MODAL_LOAIDICHVU: {
            console.log(payload);
            state.modalLoaiDV.isShow = true;
            state.modalLoaiDV.value = payload;
            return { ...state };
        } case HIRE_MODAL_LOAIDICHVU: {
            state.modalLoaiDV.isShow = false;
            return { ...state };
        } case FETCH_LOAIDICHVU: {
            state.mangLoaiDichVu = [...payload];
            return { ...state };
        } case FETCH_DICHVU: {
            state.mangDichVu = [...payload];
            return { ...state };
        } case ADD_LOAIDICHVU: {
            state.mangLoaiDichVu = [...state.mangLoaiDichVu, payload];
            return { ...state };
        } case DELETE_LOAIDICHVU: {
            let mangLoaiDichVumoi = [...state.mangLoaiDichVu];
            let index = mangLoaiDichVumoi.findIndex(ldv => ldv.id === payload);
            mangLoaiDichVumoi.splice(index, 1);
            state.mangLoaiDichVu = mangLoaiDichVumoi;
            return { ...state };
        } case UPDATE_LOAIDICHVU: {
            let index = state.mangLoaiDichVu.findIndex(ldv => ldv.loaiDichVu_Id === payload.loaiDichVu_Id);
            let mangLoaiDichVuMoi = [...state.mangLoaiDichVu];
            if (index !== -1) {
                mangLoaiDichVuMoi[index] = payload;
                state.mangLoaiDichVu = mangLoaiDichVuMoi;
            }
            return { ...state };
        } case DROPDOWN_TABLE_DICHVU: {
            state.dropDown_MaLDV = payload;
            return { ...state };
        } case ADD_DICHVU: {
            state.mangDichVu = [...state.mangDichVu, payload];
            return { ...state };
        } case DELETE_DICHVU: {
            let index = state.mangDichVu.findIndex(dv => dv.dichVu_Id === payload);
            if (index !== -1) {
                let mangmoi = [...state.mangDichVu];
                mangmoi.splice(index, 1);
                state.mangDichVu = mangmoi;
            }
            return { ...state };
        } case UPDATE_DICHVU: {
            let index = state.mangDichVu.findIndex(dv => dv.dichVu_Id === payload.dichVu_Id);
            if (index !== -1) {
                let mangmoi = [...state.mangDichVu];
                mangmoi[index] = payload;
                state.mangDichVu = mangmoi;
            }
            return { ...state };
        } case CHECK_DATA: {
            let index = state.mangDichVu.findIndex(dv => dv.loaiDichVuID === payload);
            if (index === -1) {
                state.SoLuong = false;
            } else {
                state.SoLuong = true;
            }
            return { ...state }
        }
        default: {
            return state;
        }
    }
}
export default DichVuReducer;