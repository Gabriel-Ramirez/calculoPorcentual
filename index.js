var app = new Vue({
    el: '#app',
    data: {
      valorInicial:'',
      valorFinal:''
    }, 

    methods:{

        getPorcentaje(){
            return ((this.valorFinal-this.valorInicial)/this.valorInicial)*100; 
        }
    }

  })
  