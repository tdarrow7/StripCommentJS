function solution(input, markers) {
console.log(new RegExp('(' + markers.join('|') + ').*', 'g'))
return input.split(new RegExp('\n')).reduce((a, v) => a + '\\n' + v.replace(new RegExp('(' + markers.join('|') + ').*', 'g'), '').trim());
  //return input.replace(new RegExp(markers.join('|') + '.*', 'gi'), '').trim();
};
