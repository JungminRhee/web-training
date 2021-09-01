function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase();
    answer = answer.replace(/[^\w-._]+/gi,'');
    answer = answer.replace(/\.\.+/g,'.');
    answer = answer.replace(/\.$/g,'');
    answer = answer.replace(/^\./g,'');
    if(answer === '') answer = 'a';
    if(answer.length >= 16){
        var newAnswer = answer.substr(0,15);
        answer = newAnswer.replace(/\.$/g,'');
    }
    if(answer.length <= 2){
        var newAnswer = answer.substr(answer.length-1,1);
        for(var i = answer.length; i < 3; i++){
            answer = answer + newAnswer;
        }
    }
    return answer;
}   


function solution2(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}