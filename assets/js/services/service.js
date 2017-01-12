app.factory("sudokuService" ,['$http' , function($http){

  function getData(){
      return $http.get("http://fvi-grad.com:4004/sudoku");
  }

  function checkData(arr){
    // console.log(arr);
    return $http.post("http://fvi-grad.com:4004/sudoku" , arr).then(res=>console.log(res));
  }

  return { getData , checkData }


}]);
