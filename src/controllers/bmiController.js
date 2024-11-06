// Import các hàm calculateBMI và classifyBMI từ bmi.js
const {calculateBMI, classifyBMI} = require('../models/bmi');

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

const getBMI = (req, res) => {
    const { weight, height } = req.body;

    const bmi= calculateBMI(weight, height);
    console.log(bmi);


    res.json({bmi: `${bmi}`, classification: `${classifyBMI(bmi)}`});
}
// Xuất hàm getBMI

module.exports = {getBMI};

// Lưu ý: Tham khảo mã trong tệp nameController.js
