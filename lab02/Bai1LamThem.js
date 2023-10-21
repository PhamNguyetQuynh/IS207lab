document.addEventListener("DOMContentLoaded", function () {
    // Tạo các biến để lưu trữ các phần tử và trạng thái
    const calculationBox = document.querySelector('.box-calculation');
    const resultBox = document.querySelector('.box-result');
    const dotButton = document.querySelector('.box-button button.dot');
    const delButton = document.querySelector('.box-button button.del');
    let Reset = true;

    // Thực hiện các hành động bên trong khi click vào các nút số 
    const numberButtons = document.querySelectorAll('.box-button button.number');

    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (Reset) { //Nếu máy tính đang trong trạng thái mới (thực hiện phép tính mới)
                calculationBox.value = '';
                resultBox.value = ''; // Reset kết quả trước đó
                Reset = false; // Cho biết máy tính không còn ở trong trạng thái tính toán mới nữa
            }
            const char = button.textContent;
            calculationBox.value += char; 
        });
    });

    // Thực hiện các hành động bên trong khi click vào các phép toán
    const operationButtons = document.querySelectorAll('.box-button button.operation');
    operationButtons.forEach(opButton => {
        opButton.addEventListener('click', function () {
            if (!Reset) {
                const char = opButton.textContent;
                calculationBox.value += char;
                Reset = false;
                dotButton.disabled = false;
            }
        });
    });

    // Thực hiện các hành động bên trong khi click vào nút dấu chấm
    dotButton.addEventListener('click', function () {
        if (Reset) {
            calculationBox.value = '';
            resultBox.value = ''; 
            Reset = false;
        }
        const char = dotButton.textContent;
        calculationBox.value += char;
        dotButton.disabled = true;
    });

    // Thực hiện các hành động bên trong khi click vào DEL
    delButton.addEventListener('click', function () {
        const currentValue = calculationBox.value;
        calculationBox.value = currentValue.slice(0, -1);
        if (currentValue.length === 1 || currentValue === '') {
            calculationBox.value = '';
            Reset = true;
        }
    });

    // Thực hiện các hành động bên trong khi click vào nút CE
    const refreshButton = document.querySelector('.box-button button.refresh');
    refreshButton.addEventListener('click', function () {
        calculationBox.value = '';
        resultBox.value = '';
        Reset = true;
        dotButton.disabled = false;
    });

    // Thực hiện các hành động bên trong khi click vào nút bằng
    const equalButton = document.querySelector('.box-button button.equal');
    equalButton.addEventListener('click', function () {
        resultBox.value = eval(calculationBox.value);
        Reset = true;
        dotButton.disabled = false;
    });
});