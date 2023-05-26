angular.module('eventos', []);

angular.module('eventos').controller('GetEventos', async function($scope, $http){
    $http.get('http://proeventosapi.somee.com/api/Evento');
    var consultaApi = await fetch("http://proeventosapi.somee.com/api/Evento");
    var consultaConvertida = await consultaApi.json();
    $scope.retornoEventos = consultaConvertida;
    console.log(consultaConvertida);


    //funcao responsavel por formatar a data do evento
    $scope.formatarDataBr = function(data) {
        console.log(data);
        // var dataFormatada = new Date(data).toLocaleDateString('pt-BR');
        var dataObj = new Date(data);
        var options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        var dataFormatada = new Intl.DateTimeFormat('pt-BR', options).format(dataObj);
        dataFormatada = dataFormatada.replace(',', '');
        return dataFormatada;
    };
});

