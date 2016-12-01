function permAlone(str){

  var count = 0;
  var arr = str.split("");
  var tamano = arr.length;


  permu(tamano, arr);

      function permu(size, arr){
      
        var original = arr;
        if(size === 1){
          
          str = arr.join("");
          if(/(\w)\1+/.test(str) === false){
            count++;
          }

        }else{
          for (var i = 0; i < size; i++) {
             permu(size - 1, arr);
             if(size % 2 === 0){
               var temp = arr[i];
               arr[i] = arr[size - 1];
               arr[size - 1] = temp;
             }else{
                var tmp = arr[0];
               arr[0] = arr[size -1];
               arr[size -1] = tmp;
             }

          }
        }
      }

  return count;
}
