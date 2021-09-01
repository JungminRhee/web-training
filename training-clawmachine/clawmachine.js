function solution(board, moves) {
    var answer = 0;
    let choicesCount = 0;
    let result = [];
    for (let i=0; i < moves.length; i++){
        for (let j=0; j < board.length; j++){
            document.write(board[j][moves[i]-1] + '<tr>');
            if (board[j][moves[i]-1] !== 0 && choicesCount === i){
                choicesCount++;
                if (result[result.length - 1] === board[j][moves[i]-1]){
                    result.pop();
                    answer += 2;
                } else result.push(board[j][moves[i] - 1]);
                board[j][moves[i] - 1] = 0;
            }
        }
    }
    return answer;
}

// must to study : map, reduce, =>, ...
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution2 = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};