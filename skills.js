function calculateNumbers(var1, var2) {
    return var1 + var2;
}

function multiplyNums(x, y) {
    return x * y;
}

// Test benches for multiplyNums 

function testMultiplyNums(){
    x = 10;
    y = 5;
    expected = 50;
    print(multiplyNums(x, y));
}