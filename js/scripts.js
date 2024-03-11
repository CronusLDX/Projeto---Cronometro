const display = document.querySelector(".display");
const Start = document.getElementById("Start");
const Stop = document.getElementById("Stop");
const Reset = document.getElementById("Reset");

class Cronometro {
    constructor() {
        this.contador = null;
        this.EstaLigado = false;
        this.segundos = 0;
        this.milisegundos=0
        this.minutos = 0;
        this.horas = 0;
    }
    
    Contador() {
        this.milisegundos++;
        if (this.milisegundos === 60) {
            this.milisegundos= 0;
            this.segundos++;
        }
        if (this.segundos === 60) {
            this.segundos = 0;
            this.minutos++;
        }

        if (this.minutos === 60) {
            this.minutos = 0;
            this.horas++;
        }
        this.atualizarDisplay();
    }

    Start() {
        if (!this.EstaLigado) {
            this.contador = setInterval(() => this.Contador(), 16);
            this.EstaLigado = true;
        }
    }

    Stop() {
        if (this.EstaLigado) {
            clearInterval(this.contador);
            this.EstaLigado = false;
        }
    }

    Reset() {
        this.Stop();
        this.milisegundos = 0;
        this.segundos = 0;
        this.minutos = 0;
        this.horas = 0;
        this.atualizarDisplay();
    }

    atualizarDisplay() {
        display.textContent = `${this.horas < 10 ? '0' + this.horas : this.horas}:${this.minutos < 10 ? '0' + this.minutos : this.minutos}:${this.segundos < 10 ? '0' + this.segundos : this.segundos}:${this.milisegundos < 10 ? '0' + this.milisegundos : this.milisegundos}`
    }
}

const cronometro = new Cronometro();
Start.addEventListener("click", () => cronometro.Start());
Stop.addEventListener("click", () => cronometro.Stop());
Reset.addEventListener("click", () => cronometro.Reset());
