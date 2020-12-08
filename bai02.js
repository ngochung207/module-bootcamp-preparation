// Viết hàm tryRemoveFromArray() nhận vào một mảng các số nguyên,
// và một số nguyên x. Hàm  trả về mảng ban đầu nếu không có số nguyên x trong mảng.
// Nếu tìm thấy số nguyên x trả về mảng sau khi xóa các số nguyên x đó.
let arr = [4,10,40,2,4]

tryRemoveFromArray(arr)

function tryRemoveFromArray(arr, x){
    let check = arr.includes(x)
    if (check){
        arr.forEach(function(currentValue,index){
            if(currentValue === x){
                arr.splice(index,1);
            }
        })
        return arr;
    } else{
        return arr
    }
}