import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  mostrar1 = false
  producto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12]
  titulo = [
    "Autos de Carreras Die-Cast Car",
    "Pista de Carrera HotWheels",
    "Crocky Dientes",
    "Guante de Thanos",
    "Set Construccion Lego CITY",
    "Soldaditos de Guerra",
    "Pistola X-Shot",
    "Tiranosaurio Rex",
    "x2 Camiones de Carga",
    "Banco de Herramientas",
    "Set Lego CREATOR",
    "Set de 24 Dinosaurios"
  ]

  precio = [
    "$5.200",
    "$3.500",
    "$4.400",
    "$12.500",
    "$7.500",
    "$1.850",
    "$5.000",
    "$3.250",
    "$2.750",
    "$5.900",
    "$7.500",
    "$3.500"
  ]

  mostrar2 = false
  producto2 = [1, 2, 3, 4, 5, 6, 7, 8]
  titulo2 = [
    "Muñeca Bebe Nenuco",
    "Muñeca Niña Nenuco",
    "Muñeca Mirabel Encanto",
    "Bicicleta Infantil",
    "Caja Registradora",
    "Carrito y Mesita para Bebe",
    "Guitarra Peppa Pig",
    "Barbie The Movie"
  ]

  precio2 = [
    "$6.000",
    "$5.000",
    "$8.250",
    "$23.500",
    "$7.500",
    "$10.000",
    "$3.750",
    "$5.500"
  ]
  mostrar3 = false
  producto3 = [1, 2, 3, 4, 5, 6, 7, 8]
  titulo3 = [
    "Disfraz Batman",
    "Disfraz Capitan América",
    "Disfraz Flash",
    "Disfraz Superman",
    "Disfraz Spiderman",
    "Disfraz Guerrero",
    "Disfraz Mujer Maravilla",
    "Disfraz Princesa"
  ]

  precio3 = [
    "$5.000",
    "$5.000",
    "$5.000",
    "$5.000",
    "$5.000",
    "$3.000",
    "$4.000",
    "$6.000"
  ]
}
