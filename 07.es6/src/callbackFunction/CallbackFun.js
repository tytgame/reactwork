function CallbackFun() {

    let num = [0,1,2,3,4,5]

    let oddNum = num.filter(value => value % 2 == 1)

    console.log(`홀수 배열 : $(oddNum)`);
}

export default CallbackFun;