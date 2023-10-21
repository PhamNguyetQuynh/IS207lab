// Thực hiện các hành động bên trong khi tài liệu html của trang web được load xong và cây DOM được tạo thành
document.addEventListener("DOMContentLoaded", function () {
  // Tạo các biến để lưu trữ các phần tử
  const calculationBox = document.querySelector(".box-calculation");
  const resultBox = document.querySelector(".box-result");
  const dotButton = document.querySelector(".box-button button.dot");
  const delButton = document.querySelector(".box-button button.del");

  // Thực hiện các hành động bên trong khi click vào các nút số
  const numberButtons = document.querySelectorAll(".box-button button.number");
  numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const char = button.textContent;
      calculationBox.value += char;
    });
  });

  // Thực hiện các hành động bên trong khi click vào nút dấu chấm
  dotButton.addEventListener("click", function () {
    const char = dotButton.textContent;
    calculationBox.value += char;
    dotButton.disabled = true;
  });

  // Thực hiện các hành động bên trong khi click vào nút DEL
  delButton.addEventListener("click", function () {
    const currentValue = calculationBox.value;
    calculationBox.value = currentValue.slice(0, -1);
  });

  // Thực hiện các hành động bên trong khi click vào nút CE
  const refreshButton = document.querySelector(".box-button button.refresh");
  refreshButton.addEventListener("click", function () {
    calculationBox.value = "";
    resultBox.value = "";
    dotButton.disabled = false;
  });

  // Thực hiện các hành động bên trong khi click vào các nút phép toán
  const operationButtons = document.querySelectorAll(
    ".box-button button.operation"
  );
  operationButtons.forEach((opButton) => {
    opButton.addEventListener("click", function () {
      const char = opButton.textContent;
      calculationBox.value += char;
      dotButton.disabled = false;
    });
  });

  // Thực hiện các hành động bên trong khi click vào nút bằng
  const equalButton = document.querySelector(".box-button button.equal");
  equalButton.addEventListener("click", function () {
    resultBox.value = eval(calculationBox.value);
  });
});
