function getSubject(subject) {
  //获取单个的subject项里面的每一项进行处理
  var id = subject.id;
  var title = subject.title;
  //导演
  var directors = subject.directors;
  var directorStr = "";
  for (var index in directors) {
    directorStr = directorStr + directors[index].name + " / ";
  }
  if (directorStr != "") {
    directorStr = directorStr.substring(0, directorStr.length - 2);
  }
  var casts = subject.casts;
  var castStr = "";
  for (var index in casts) {
    castStr = castStr + casts[index].name + " / ";
  }
  if (castStr != "") {
    castStr = castStr.substring(0, castStr.length - 2);
  }
  var genres = subject.genres;
  var genresStr = "";
  for (var index in genres) {
    genresStr = genresStr + genres[index] + " / ";
  }
  if (genresStr != "") {
    genresStr = genresStr.substring(0, genresStr.length - 2);
  }
  var year = subject.year;
  var text = "名称: " + title + "\n导演: " + directorStr + "\n主演：" + castStr + "\n类型: " + genresStr + "\n 上映年份:" + year + "(中国大陆)";
  subject.text = text;      

};
function getSubjects(subjects) {
  //获取所有的sujects进行处理
  for (var i = 0; i < subjects.length; i++) {
    var subject = subjects[i];
    this.getSubject(subject);
  }
};
module.exports = {
  getSubject: getSubject,
  getSubjects: getSubjects
}