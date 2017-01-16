app.factory("sudokuService" ,['$http' , function($http){

  function getData(){
      return $http.get("http://fvi-grad.com:4004/sudoku");
  }



  return { getData }


}]);
