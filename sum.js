function add(x,y)
{
  if(((typeof x)==='number') && ((typeof y)==='number')){
    return x+y;
  }else{
    return false;
  }

  //return Number(x)+Number(y);
}
module.exports=add;
