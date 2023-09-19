import { Component } from '@angular/core';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent {
  producto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  nombre = [
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

  descripcion = [
    "Pack de 5 autos de carrera miniatura",
    "Pista de carera en espiral de 1 metro",
    "Cocodrilo de 20cm",
    "Guante de Thanos tamaño real",
    "300 piezas - Para mayores de 7 años",
    "Paquete de 100 soldaditos",
    "Pistola con 8 balas de goma espuma",
    "Dinosaurio de 30cm de alto",
    "1 Camion de carga y 1 camion con grua",
    "Banco de trabajo de 1 metro de alto con herramientas",
    "250 piezas para crear una tienda",
    "Dinosaurios de plastico"
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

  categoria = [
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
    "Niño",
  ]

  mostrar2 = false
  producto2 = [1, 2, 3, 4, 5, 6, 7, 8]
  nombre2 = [
    "Muñeca Bebe Nenuco",
    "Muñeca Niña Nenuco",
    "Muñeca Mirabel Encanto",
    "Bicicleta Infantil",
    "Caja Registradora",
    "Carrito y Mesita para Bebe",
    "Guitarra Peppa Pig",
    "Barbie The Movie"
  ]

  descripcion2 = [
    "Bebe tamaño real - Incluye mamadera, pañales, etc",
    "Muñeca de 25cm",
    "Mide 30cm",
    "Rodado 24 - Incluye rueditas",
    "incluye canasto con productos de supermercado",
    "Tamaño: 1m",
    "+200 sonidos",
    "Muñeca 20cm"
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

  categoria2 = [
    "Niña",
    "Niña",
    "Niña",
    "Niña",
    "Niña",
    "Niña",
    "Niña",
    "Niña"
  ]


  mostrar3 = false
  producto3 = [1, 2, 3, 4, 5, 6, 7, 8]
  nombre3 = [
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

  descripcion3 = [
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años",
    "De 6 a 10 años"

  ]



  categoria3 = [
    "Disfraces",
    "Disfraces",
    "Disfraces",
    "Disfraces",
    "Disfraces",
    "Disfraces",
    "Disfraces",
    "Disfraces",
  ]
}
