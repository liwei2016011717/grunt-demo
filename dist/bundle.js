$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $length=$('#length'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    var w=Number($width.val()),
        l=Number($length.val());

    var p=2*(w+l),
        a=w*l;
    
    $perimeter.val(p);
    $area.val(a);
  })
})
;funtion Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);
  this.area = function() {
    return w * h;
  };
  this.perimeter = function() {
    return 2 * (w + h);
  };
}
