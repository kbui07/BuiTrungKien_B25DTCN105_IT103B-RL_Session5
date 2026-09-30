// Lỗi 1:
// startsWith("MED-") phân biệt chữ hoa và chữ thường, mã đầu vào là "med-nhi-1024" nên kiểm tra trực tiếp sẽ cho false
// Cần chuyển mã sang chữ hoa trước khi kiểm tra

// Lỗi 2:
// Chuỗi trong JavaScript là bất biến, trim() và toUpperCase() không thay đổi chuỗi gốc mà tạo ra chuỗi mới nên phải gán kết quả vào biến mới

// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

// Dọn dẹp khoảng trắng
const cleanAppointmentCode = rawAppointmentCode.trim();
const normalizedCode = cleanAppointmentCode.toUpperCase();

const isValidPrefix = normalizedCode.startsWith("MED-");

const departmentCode = normalizedCode.slice(4, 7);
const appointmentNumber = normalizedCode.slice(8, 12);

const formattedPatientName = cleanPatientName.trim().toUpperCase();

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isValidPrefix);


// Trường hợp kiểm thử	                Dữ liệu đầu vào	    Kết quả sai thực tế	                                            Kết quả đúng mong đợi
// Mã chữ thường, có khoảng trắng	    " med-nhi-1024 "	false, mã bị báo không hợp lệ	                                true, chuyên khoa NHI, số 1024
// Mã chữ hoa, không có khoảng trắng	"MED-nhi-123"	    Chuyên khoa có thể lấy đúng nhưng chưa chuẩn hóa đồng nhất	    true, chuyên khoa NHI, số 123
// Mã chữ thường, có khoảng trắng	    " med-nhi-456 "	    false do kiểm tra "MED-" với chữ thường	                        true, chuyên khoa THI, số 456