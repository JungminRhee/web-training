function solution(new_id) {
    document.write(new_id + '<br>');
    var answer = '';
    var id3 = '';
    var reg = /[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi
    var id = String(new_id);
    var id2 = id.toLowerCase().replace(reg,'');
    document.write(id2.match(/\./g).length + '<br>');
    for (var i=0; i<id2.match(/\./g).length; i++){ 
        id2.replace(/\.\./g,'.');
    };
    document.write(id2 + '<br>');
    answer = id2.replace(/^\./,'').replace(/\.$/,'').replace(/\s/g,'a');
    document.write(answer);
    return answer;
}