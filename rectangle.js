$(function(){
  //console.log('hello');
  var $width=$('#width'),
      $height=$('#height'),
      $btnCal=$('#btn'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btnCal.click(function(){
    /*
    var w=$width.val(),
        l=$length.val();
    var rect=rectangle();
    
    
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));*/


    var rect =rectangle();
    $perimeter.val(rect.perimeter($width.val(),$height.val()));
    $area.val(rect.area($width.val(),$height.val()));
  });
});
