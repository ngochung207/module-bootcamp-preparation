// Cho danh sách các điểm thi ở trong một mảng.
// Hãy viết hàm findMax() với đầu vào là một mảng điểm và đầu ra là điểm số cao nhất được tìm thấy trong danh sách đó.
let arr = [4,10,40,2];
function findMax(arr) {
    if (arr.length === 0) {
        return alert("array is empty")
    } else {
        let iMax = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (iMax < arr[i]) {
                iMax = arr[i];
            }
        }
        return iMax
    }
}

findMax(arr)