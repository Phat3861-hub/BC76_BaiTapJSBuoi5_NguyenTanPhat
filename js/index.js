// Bài 1 : QUẢN LÝ TUYỂN SINH

function diemKhuVuc(khuVuc) {
  switch (khuVuc) {
    case "A": {
      return 2;
    }

    case "B": {
      return 1;
    }

    case "C": {
      return 0.5;
    }

    default: {
      return 0;
    }
  }
}

function diemDoiTuong(doiTuong) {
  switch (doiTuong) {
    case "1": {
      return 2.5;
    }
    case "2": {
      return 1.5;
    }
    case "3": {
      return 1;
    }
    default: {
      return 0;
    }
  }
}

document.getElementById("tuyenSinh").onclick = function () {
  let diemChuan = document.getElementById("diemChuan").value * 1;
  let khuVuc = document.getElementById("khuVuc").value;
  let doiTuong = document.getElementById("doiTuong").value;
  let diemMonA = document.getElementById("monA").value * 1;
  let diemMonB = document.getElementById("monB").value * 1;
  let diemMonC = document.getElementById("monC").value * 1;
  let diemTongKet =
    diemMonA +
    diemMonB +
    diemMonC +
    diemKhuVuc(khuVuc) +
    diemDoiTuong(doiTuong);

  let dauHoacRot = "";
  if (diemTongKet >= diemChuan) {
    dauHoacRot = "đậu";
  } else {
    dauHoacRot = "rớt";
  }

  document.getElementById("ketQua1").innerHTML = `
    <p><span>Bạn đã ${dauHoacRot}</span></p>
    <p><span>Điểm tổng kết của bạn là :</span> ${diemTongKet.toFixed(2)}</p>
    `;
};

// BÀI 2 : TÍNH TIỀN ĐIỆN
const KW50DAU = 500;
const KW50KE = 650;
const KW100KE = 850;
const KW150KE = 1100;
const KWCONLAI = 1300;

function tinhTienDien(dienTieuThu) {
  if (dienTieuThu <= 50) {
    return KW50DAU * dienTieuThu;
  } else if (dienTieuThu > 50 && dienTieuThu <= 100) {
    return KW50DAU * 50 + (dienTieuThu - 50) * KW50KE;
  } else if (dienTieuThu > 100 && dienTieuThu <= 200) {
    return KW50DAU * 50 + KW50KE * 50 + (dienTieuThu - 100) * KW100KE;
  } else if (dienTieuThu > 200 && dienTieuThu <= 350) {
    return (
      KW50DAU * 50 + KW50KE * 50 + KW100KE * 100 + (dienTieuThu - 200) * KW150KE
    );
  } else if (dienTieuThu > 350) {
    return (
      KW50DAU * 50 +
      KW50KE * 50 +
      KW100KE * 100 +
      KW150KE * 150 +
      (dienTieuThu - 350) * KWCONLAI
    );
  }
}
document.getElementById("tinhTienDien").onclick = function () {
  let hoTen = document.getElementById("hoTen").value;
  let dienTieuThu = document.getElementById("dienTieuThu").value * 1;

  document.getElementById("ketQua2").innerHTML = `
        <p><span>Họ tên :</span> ${hoTen}</p>
        <p><span>Tiền điện :</span> ${Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(tinhTienDien(dienTieuThu))} </p>
    `;
};

// BÀI 3: TÍNH THUẾ THU NHẬP CÁ NHÂN
const DEN_60 = 5;
const TREN_60_DEN_120 = 10;
const TREN_120_DEN_210 = 15;
const TREN_210_DEN_384 = 20;
const TREN_384_DEN_624 = 25;
const TREN_624_DEN_960 = 30;
const TREN_960 = 35;

function thueThuThuNhapCaNhan(thuNhapChiuThue) {
  if (thuNhapChiuThue <= 60e6) {
    return thuNhapChiuThue * (DEN_60 / 100);
  } else if (60e6 < thuNhapChiuThue && thuNhapChiuThue <= 120e6) {
    return thuNhapChiuThue * (TREN_60_DEN_120 / 100);
  } else if (120e6 < thuNhapChiuThue && thuNhapChiuThue <= 210e6) {
    return thuNhapChiuThue * (TREN_120_DEN_210 / 100);
  } else if (210e6 < thuNhapChiuThue && thuNhapChiuThue <= 384e6) {
    return thuNhapChiuThue * (TREN_210_DEN_384 / 100);
  } else if (384e6 < thuNhapChiuThue && thuNhapChiuThue <= 624e6) {
    return thuNhapChiuThue * (TREN_384_DEN_624 / 100);
  } else if (624e6 < thuNhapChiuThue && thuNhapChiuThue <= 960e6) {
    return thuNhapChiuThue * (TREN_624_DEN_960 / 100);
  } else if (thuNhapChiuThue > 960e6) {
    return thuNhapChiuThue * (TREN_960 / 100);
  }
}
document.getElementById("tinhThue").onclick = function () {
  let hoTenThue = document.getElementById("hoTenThue").value;
  let thuNhap1Nam = document.getElementById("thuNhap1Nam").value * 1;
  let soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  let thuNhapChiuThue = thuNhap1Nam - 4e6 - soNguoiPhuThuoc * 16e5;
  console.log(thuNhapChiuThue);
  let thue = thueThuThuNhapCaNhan(thuNhapChiuThue);
  console.log(thue);
  document.getElementById("ketQua3").innerHTML = `
  <p><span>Họ tên : </span> ${hoTenThue}</p>
  <p><span>Thuế thu nhập cá nhân : </span> ${Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(thue)}</p>
  `;
};

// BÀI 4 : TÍNH TIỀN CÁP
function soKetNoi() {
  let doanhNghiepKetNoi = document.getElementById("khachHang").value;
  if (doanhNghiepKetNoi == "Doanh nghiệp") {
    document.getElementById("themKetNoi").innerHTML += `
  <div class="mb-3 col-3">
                        <label for="" class="form-label">Số kết nối</label>
                        <input type="text" class="form-control" name="" id="soKetNoi" aria-describedby="helpId"
                            placeholder="Vui lòng nhập số lượng kết nối ..." />
                    </div>
  `;
  } else {
    document.getElementById("themKetNoi").innerHTML = ``;
  }
}

const XU_LY_HOA_DON_NHA_DAN = 4.5;
const DICH_VU_CO_BAN_NHA_DAN = 20.5;
const THUE_KENH_NHA_DAN = 7.5;

const XU_LY_HOA_DON_DOANH_NGHIEP = 15;
const KET_NOI_10DAU_DICH_VU_CO_BAN_DOANH_NGHIEP = 75;
const TREN_10_KET_NOI_DICH_VU_CO_BAN_DOANH_NGHIEP = 5;
const THUE_KENH_DOANH_NGHIEP = 50;

function tienCapNhaDan(soKenhCaoCap) {
  return (
    XU_LY_HOA_DON_NHA_DAN +
    DICH_VU_CO_BAN_NHA_DAN +
    THUE_KENH_NHA_DAN * soKenhCaoCap
  );
}
function tienCapDoanhNghiep(soKenhCaoCap, soKetNoi) {
  if (soKetNoi <= 10) {
    return (
      XU_LY_HOA_DON_DOANH_NGHIEP +
      KET_NOI_10DAU_DICH_VU_CO_BAN_DOANH_NGHIEP +
      THUE_KENH_DOANH_NGHIEP * soKenhCaoCap
    );
  } else {
    return (
      XU_LY_HOA_DON_DOANH_NGHIEP +
      KET_NOI_10DAU_DICH_VU_CO_BAN_DOANH_NGHIEP +
      +(soKetNoi - 10) * TREN_10_KET_NOI_DICH_VU_CO_BAN_DOANH_NGHIEP +
      THUE_KENH_DOANH_NGHIEP * soKenhCaoCap
    );
  }
}

document.getElementById("tinhTienCap").onclick = function () {
  let khachHang = document.getElementById("khachHang").value;
  let maKhachHang = document.getElementById("maKhachHang").value;
  let soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;

  let tienCap = 0;
  if (khachHang == "Nhà dân") {
    tienCap = tienCapNhaDan(soKenhCaoCap);
  } else if (khachHang == "Doanh nghiệp") {
    let soKetNoi = document.getElementById("soKetNoi").value * 1;
    tienCap = tienCapDoanhNghiep(soKenhCaoCap, soKetNoi);
  } else {
    alert("Vui lòng chọn khách hàng");
    return;
  }

  document.getElementById("ketQua4").innerHTML = `
    <h3><span>HÓA ĐƠN TIỀN CÁP</span></h3>
    <p><span>Mã khách hàng :</span> ${maKhachHang}</p>
    <p><span>Tiền cáp :</span> ${Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(tienCap)}</p>
  `;
};
