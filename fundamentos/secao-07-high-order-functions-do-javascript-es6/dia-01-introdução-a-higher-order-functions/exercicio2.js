const resultLottery = (myNumber, number) => myNumber === number;



const lotteryNumber = (myNumber, callback) => {
    const number = Math.floor(Math.random() * (5 - 1) + 1);

    return resultLottery(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente novamente';
};

console.log(lotteryNumber(3, resultLottery));
