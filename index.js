let numbers = [];

document.getElementById("addNumberArr").onclick = () => {
  let inputNumberArr = +document.getElementById("inputNumberArr").value;
  numbers.push(inputNumberArr);
  document.getElementById("txtArray").innerHTML = numbers;
}

// Bài 1: Tổng các số dương trong mảng
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function tính tổng số trong mảng
//     - tạo biến lưu giá trị tổng.
//     - duyệt qua mảng kiểm ra nếu là số dương thì + dồn cho biến 
//     - return biến 
// ouput: - in ra giá trị tổng của dương của mảng. 
function sumNumberArr(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      sum += numbers[i];
    }
  }
  return sum;
}

document.getElementById("sumNumber").onclick = () => {
  document.getElementById("sumNumberArray").innerHTML = sumNumberArr(numbers);
}
// =======================================
// Bài 2: Đếm có bao nhiêu số dương trong mảng.
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function đếm số dương trong mảng
//     - tạo biến lưu giá trị đếm.
//     - duyệt qua mảng kiểm ra nếu là số dương thì biến tăng 1 giá trị
//     - return biến 
// ouput: - in ra giá trị biến đếm của dương của mảng. 
function countNumberArr(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      count++;
    }
  }
  return count;
}

document.getElementById("countNumber").onclick = () => {
  document.getElementById("countNumberArr").innerHTML = countNumberArr(numbers);
}
// ===============================
// Bài 3: Tìm số nhỏ nhất trong mảng.
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function tìm số nhỏ nhất trong mảng
//     - tạo biến lưu giá trị min.
//     - gán min là phần từ đầu của mãng
//     - duyệt qua mảng rồi so sánh min với phần tử kế tiếp nếu min > phần tử kế trong mảng thì đổi min là phần tử kế bé hôn thì giử ngyên
//     - return biến 
// ouput: - in ra giá trị biến min của mảng. 

function findMinNumber(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (min > numbers[i]) {
      min = numbers[i];
    }
  }
  return min;
}

document.getElementById("findMinNumber").onclick = () => {
  document.getElementById("findMinNumberArr").innerHTML = findMinNumber(numbers);
}

// ===============================
// Bài 4: Tìm số dương nhỏ nhất trong mảng.
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function tìm số dương nhỏ nhất trong mảng
//     - tạo biến lưu giá trị min.
//     - duyệt lần 1 kiểm tra phàn tử mảng có >0 true min = phần tử i của mảng
//     - duyệt lần 2 phần tử i < min và > 0 true thì gán min = phần tử i
//     - return biến 
// ouput: - in ra số dương nhỏ nhất của mảng. 

function findMinNumber2(numbers) {
  let min;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      min = numbers[i];
      break;
    }    
  }
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min  && numbers[i] > 0) {
      min = numbers[i];
    }
  }
  return min;
}

document.getElementById("findMinNumber2").onclick = () => {
  document.getElementById("findMinNumberArr2").innerHTML = findMinNumber2(numbers);
}

// ===============================
// Bài 5: Tìm số chẵn cuối cùng trong mảng.
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function tìm chẵn cuối cùng trong mảng
//   - duyệt từ dưới lên gặp gặp số chẳn return
//   - nếu không có return -1
// ouput: - in ra giá trị số chẵn cuối cùng. 

function lastNumberArr(numbers) {
  for (let i = numbers.length; i >= 0 ; i--) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }    
  }
  return -1;
}

document.getElementById("lastNumber").onclick = () => {
  document.getElementById("lastNumberArr").innerHTML = lastNumberArr(numbers);
}

// ===============================
// Bài7: Sắp xếp mảng theo thứ tự tăng dần
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function tìm Sắp xếp mảng theo thứ tự tăng dần
//    - Dùng sort()
// ouput: - in ra Sắp xếp mảng theo thứ tự tăng dần. 

document.getElementById("sortNumber").onclick = () => {
  document.getElementById("sortNumberArr").innerHTML = numbers.sort();
}

// ===============================
// Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function kiểm tra so nguyên tố
//   - duyệt măng nếu phần tử thứ i là kiểm tra số nguyên tố là true return 
//   - nếu không có return -1
// ouput: - in ra giá trị nguyên tố đầu tiên của mảng.  hoặc  1

function checkPrime(numberCheck) {
  if (numberCheck<2)
      return false;
  for (let i = 2; i < numberCheck; i++) {
      if (numberCheck % i === 0)
          return false;
  }
  return true;
}

function findPrimeArr(numbers) {
  for (let i = 0; i < numbers.length ; i++) {
    if (checkPrime(numbers[i])) {
      return numbers[i];
    }    
  }
  return -1;
}

document.getElementById("primeNumber").onclick = () => {
  document.getElementById("primeNumberArr").innerHTML = findPrimeArr(numbers);
}

// ===============================
// Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
// input: số trong mảng người dùng nhập
// handle: 
//   - tạo array rỗng.
//   - tạo biến lấy giá trị người dùng nhập push biến đó vào array
//   - tạo function đếm số dương
//    - Toạ countPositive  đếm
//    - duyệt mãng số dươn thì countPositive tăng 1 
//   - tạo function đếm số âm
//    - Toạ countNegative  đếm
//    - duyệt mãng số âm thì countNegative tăng 1 
//   - So sánh 2 hàm với nhau
// ouput: - in ra số lượng số âm xem số nào nhiều hơn

function countPositive(numbers) {
  countP = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      countP++;
    }
  }
  return countP;
}

function countNegative(numbers) {
  countN = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      countN++;
    }
  }
  return countN;
}

function displayMess(numbers) {
  if (countPositive(numbers) > countNegative(numbers)) {
    return "Số dương nhiều hơn số âm";
  }

  if (countPositive(numbers) < countNegative(numbers)) {
    return "Số dương ít hơn số âm";
  }

  if (countPositive(numbers) === countNegative(numbers)) {
    return "Số dương bằng số âm";
  }
}

document.getElementById("compareNumber").onclick = () => {
  document.getElementById("compareNumberArr").innerHTML = displayMess(numbers);
}