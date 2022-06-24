function Dinh_dang_chuoi(so) {
  var n = Number(so);
  var gia_tri = n.toLocaleString("en"); //Hàm giúp định dạng lại số
  return gia_tri;
}

function Xoa_Dinh_dang_chuoi(so) {
  return Number(so.replace(/,/g, "")); //Trả về một chuỗi mới mà không làm thay đổi chuỗi ban đầu
}

function Lay_gia_tri_cu() {
  return document.getElementById("gia_tri_cu").innerText; 
  //Return có tác dụng kết thúc hàm và trả lại điều khiển cũng như kết quả xử lý hàm cho người gọi.
}

function In_gia_tri_cu(so) {
  document.getElementById("gia_tri_cu").innerText = so; 
  //Trả về phần tử có thuộc tính ID được cung cấp - In ra nội dung text, không in ra nội dung của thẻ ẩn
}

function Lay_ket_qua() {
  return document.getElementById("gia_tri_xuat").innerText;
}
function In_Ket_qua(so) {
  if (so == "") {
    document.getElementById("gia_tri_xuat").innerText = so;
  } else {
    document.getElementById("gia_tri_xuat").innerText = Dinh_dang_chuoi(so);
  }
}

var he_thong = document.getElementsByClassName("he_thong"); //các nút hoạt động khi nhấn vào sẽ hiện thị lên màn hình máy tính
for (var i = 0; i < he_thong.length; i++) {
  he_thong[i].addEventListener("click", function () {
    if (this.id == "xoa_tat_ca") {
      In_Ket_qua("");
      In_gia_tri_cu("");
    } else if (this.id == "xoa_tung_so") {
      let ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua()).toString();
      if (ket_qua) {
        ket_qua = ket_qua.substring(0, ket_qua.length - 1);
        In_Ket_qua(ket_qua);
      }
    } else {
      var ket_qua = Lay_ket_qua();
      var ket_qua_cu = Lay_gia_tri_cu();
      if (ket_qua != "") {
        ket_qua = Xoa_Dinh_dang_chuoi(ket_qua);
        ket_qua_cu = ket_qua_cu + ket_qua;
        if (this.id == "=") {
          var ket_qua_cuoi = eval(ket_qua_cu);
          In_Ket_qua(ket_qua_cuoi);
          In_gia_tri_cu("");
        } else {
          ket_qua_cu = ket_qua_cu + this.id;
          In_gia_tri_cu(ket_qua_cu);
          In_Ket_qua("");
        }
      }
    }
  });
}

var con_so = document.getElementsByClassName("con_so"); //Các nút hoạt động khi nhấn vào sẽ hiện thị lên màn hình máy tính
for (var i = 0; i < con_so.length; i++) {
  con_so[i].addEventListener("click", function () {
    var ket_qua = Xoa_Dinh_dang_chuoi(Lay_ket_qua());
    if (ket_qua != NaN) {
      ket_qua = ket_qua + this.id;
      In_Ket_qua(ket_qua);
    }
  });
}
