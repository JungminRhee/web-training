function solution(board, moves) {
    var answer = 0;
    
    
    for( var i = 0; i <= 4; i++) {
        document.write(board[i] + '<br>');
        //document.write(board[3,4]);
    }
    for( var i = 0; i <= 4 ; i++) {
        document.write(board[i][i-1] + '<br>');

        //document.write(board[3,4]);
    }
    document.write(board.pop([4][3]));
    
    return answer;
}