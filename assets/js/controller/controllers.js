app.controller('MainController' , ['$scope' , 'sudokuService' , function($scope , sudokuService){

  sudokuService.getData().then(res=>{
    var tempArray = res.data;

    var allTd = $('.ownTable').find('td');

    for (var i = 0; i < tempArray.length; i++) {
      for (var j = 0; j < tempArray.length; j++) {
        $(allTd[i*tempArray.length + j]).attr("id" ,i*tempArray.length + j);

        if(tempArray[i][j] != ""){
          $(allTd[i*tempArray.length + j]).text(tempArray[i][j]);
          $(allTd[i*tempArray.length + j]).addClass("backgroundCell");
        }
        else
          $(allTd[i*tempArray.length + j]).attr("contenteditable" , "true");
      }
    }

    $scope.send = function(){

        

    }

    $scope.canBeEditable = function($event){
        var element = $("#"+$event.target.id);

        if(element.text()==""){
          element.attr('contenteditable',true);
        }

        if(element.attr('contenteditable')){
          element.css({'max-width': "2px"});
          element.keydown(function(e){

            if($.inArray(e.keyCode , [8,13,37,38,39,40,49,50,51,52,53,54,55,56,57]) == -1){
                element.attr('contenteditable' , "false");
            }else {
              element.attr('contenteditable' , "true");

              tempArray[Math.floor($event.target.id/9)][$event.target.id % 9] = String.fromCharCode(e.keyCode);



            }
          });

        }



    }


    $scope.sudokuArray = res.data;
  });

}]);
