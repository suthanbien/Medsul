import Axios from 'axios';
import { FETCH_LOAIDICHVU, FETCH_DICHVU, ADD_LOAIDICHVU, DELETE_LOAIDICHVU, UPDATE_LOAIDICHVU, ADD_DICHVU, DELETE_DICHVU, UPDATE_DICHVU } from './type';
import swal from 'sweetalert';
import { DichVu, LoaiDichVu } from '../../Services/DichVuPageServices';


/**Loại Dịch Vụ */


export const layDanhSachLoaiDichVuAction = () => {
    return dispatch => {
        LoaiDichVu.fetchLoaiDichVu().then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_LOAIDICHVU,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}

export const ThemLoaiDichVuMoi = (value) => {
    return dispatch => {
        LoaiDichVu.addLoaiDichVu(value).then(res => {
            console.log('Xóa Thành công');
            dispatch({
                type: ADD_LOAIDICHVU,
                payload: res.data
            })
            swal({
                title: "Thành Công!",
                text: "Bạn đã thêm một loại dịch vụ mới!",
                icon: "success",
                button: "Ok!",
            });
        }).catch(err => {
            console.log('Lỗi');
        })
    }
}
export const XoaLoaiDichVu = (id) => {
    return dispatch => {
        LoaiDichVu.deleleLoaiDichVu(id).then(res => {
            console.log('Xóa Thành công');
            dispatch({
                type: DELETE_LOAIDICHVU,
                payload: id
            })
        }).catch(err => {
            console.log(err);
        })
    }
}
export const CapNhatLoaiDichVu = (id, value) => {
    return dispatch => {
        LoaiDichVu.updateLoaiDichVu(id, value).then(res => {
            console.log(res.data);
            dispatch({
                type: UPDATE_LOAIDICHVU,
                payload: res.data
            })

        }).catch(err => {
            console.log(err);
        })
    }
}


/**Dịch vụ */

export const layDanhSachDichVuAction = () => {
    return dispatch => {
        DichVu.fetchDichVu().then(res => {
            console.log(res.data);
            dispatch({
                type: FETCH_DICHVU,
                payload: res.data
            });
        }).catch(err => {
            console.log(err);
        })
    }
}

export const ThemDichVuMoi = (value) => {
    return dispatch => {
        DichVu.addDichVu(value).then(res => {
            console.log('value:', value);
            dispatch({
                type: ADD_DICHVU,
                payload: res.data
            })
            swal({
                title: "Thành Công!",
                text: "Bạn đã thêm một dịch vụ mới!",
                icon: "success",
                button: "Ok!",
            });
            console.log('res.data:', res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}

export const XoaDichVu = (id) => {
    return dispatch => {
        DichVu.deleleDichVu(id).then(res => {
            console.log(res.data);
            dispatch({
                type: DELETE_DICHVU,
                payload: id
            });

        }).catch(err => {
            console.log(err);
        })
    }
}

export const CapNhatDichVu = (id, value) => {
    return dispatch => {
        DichVu.updateDichVu(id, value).then(res => {
            console.log(res.data);
            dispatch({
                type: UPDATE_DICHVU,
                payload: res.data
            })
        }).catch(err => {
            console.log(err);
        })
    }
}