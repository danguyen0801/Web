var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});
/* Danh sách các sản phẩm */
router.get('/danh-sach-cac-san-pham', function(req, res, next) {
  res.render('sanpham/danhsach', { title: 'Danh sách các sản phẩm' });
});
/* Xem thông tin chi tiết */
router.get('/xem-thong-tin-chi-tiet', function(req, res, next) {
  res.render('sanpham/thongtinchitiet', { title: 'Xem thông tin chi tiết' });
});
/* Tìm kiếm nâng cao */
router.get('/tim-kiem-nang-cao', function(req, res, next) {
  res.render('sanpham/timkiemnangcao', { title: 'Tìm kiếm nâng cao' });
});
/* Quản lý giỏ hàng */
router.get('/quan-ly-gio-hang', function(req, res, next) {
  res.render('dathang/quanlygiohang', { title: 'Quản lý giỏ hàng' });
});
/* Xem thông tin lich sử và trạng thái */
router.get('/thong-tin-lich-su-trang-thai', function(req, res, next) {
  res.render('dathang/thongtinlichsutrangthai', { title: 'Xem thông tin lịch sử và trạng thái' });
});
/* Điền các thông tin về giao hàng */
router.get('/thong-tin-giao-hang', function(req, res, next) {
  res.render('dathang/giaohang', { title: 'Thông tin giao hàng' });
});
/* Đăng ký tài khoản */
router.get('/dang-ky-tai-khoan', function(req, res, next) {
  res.render('taikhoan/dangky', { title: 'Đăng ký tài khoản' });
});
/* Đăng nhâp hệ thống */
router.get('/dang-nhap-he-thong', function(req, res, next) {
  res.render('taikhoan/dangnhap', { title: 'Đăng nhập hệ thống' });
});
/* Quên mật khẩu */
router.get('/quen-mat-khau', function(req, res, next) {
  res.render('taikhoan/matkhau', { title: 'Quên mật khẩu' });
});
/* Cập nhật thông tin tài khoản */
router.get('/cap-nhat-thong-tin-tai-khoan', function(req, res, next) {
  res.render('taikhoan/capnhat', { title: 'Cập nhật thông tin tài khoản' });
});
module.exports = router;
