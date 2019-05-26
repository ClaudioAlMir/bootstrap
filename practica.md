# Mi primer sitio web.

Cómo este es un curso práctico comenzaremos desde ya con la construcción de nuestro sitio web utilizando Bootstrap 4.

Utilizando la plantilla base (Starter template), agregaremos lo siguiente dentro de las etiquetas `<body>`:

```html
<div>
  <div>
    <img src="" />
    <div>
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>
```

## Container

Pueden notar que los elementos `<img>`, `<h5>`, `<p>` y `<a>` los encerré en varias etiquetas `<div>`, por lo tanto que pasaría si al primer `<div>` le agregamos la clase `class="container"`.

```html
<div class="container">
  <div>
    <img src="" />
    <div>
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>
```

Podrán notar que se agregan margenes tanto a la derecha como a la izquierda y nuestro contendo del sitio web estará centrado. Esta clase es muy importante al momento de trabajar con el sistema de columnas, pero eso lo veremos más adelante.

## Img-fluid

Ahora agreguemos una url a la imagen: `https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png`

Podrán notar que esta se desborda y se ve horrible en nuestro sitio web, pero tranquilidad... agreguemos la clase `class="img-fluid"`

```html
<div class="container">
  <div>
    <img
      src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png"
      class="img-fluid"
    />
    <div>
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>
```

Podrán notar que nuevamente aparecen los margenes tanto a la derecha como a la izquierda, osea se está respetando nuestro `container`

Esta clase `img-fluid` hace que nuestras imagenes se adapten a diferentes tamaños por lo tanto ahora son responsives.

## Card

Sigamos jugando agregando al segundo div (después del container) la clase `class="card"` y un estilo de línea: `style="width: 18rem;"`

```html
<div class="container">
  <div class="card" style="width: 18rem;">
    <img
      src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png"
      class="img-fluid"
    />
    <div>
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>
```

Wuau esto ya está tomando forma, hemos creado un diseño bastante rápido y con practicamente nada de estilos en css personalizados. La clase `class="card"` hace que se genere una tarjeta con bordes y hemos forzado que su ancho sea de `18rem`.

Podemos seguir mejorando este diseño agregando el resto de las clases para una tarjeta:

```html
<div class="container mt-5">
  <div class="card" style="width: 18rem;">
    <img
      src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png"
      class="img-fluid card-img-top"
    />
    <div class="card-body">
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#">Go somewhere</a>
    </div>
  </div>
</div>
```

En el container agregué un `mt-5`, esto hace que se genere un margen superior, así no estará tan pegado.

En la imagen agregue `card-img-top` lo que proboca que los bordes superiores estén redondeados.

En el tercer `<body>` agregue `card-body`, así ya tenemos nuestro contenido de la tarjeta con un padding adicional.

## Botones
Finalmente terminaremos este diseño agregando al ancla la clase `class="btn btn-primary"`

```html
<div class="container mt-5">
  <div class="card" style="width: 18rem;">
    <img
      src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-social.png"
      class="img-fluid card-img-top"
    />
    <div class="card-body">
      <h5>Card title</h5>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
```

Esto agregará estilos adicionales a nuestros botones que hacen que nuestro sitio web sea aún más profesional.

Quizás se te está pasando por la mente que son demasiadas clases y que jamás te las aprenderás, tranquilo que a medida que desarrollas más prácticas se te incrustarán en el cerebro estos conceptos, además siempre tienes la documentación oficial para hacer un repaso mental.

<img src="/img/card.png" alt="card con bootstrap">

Este fue un pequeño ejemplo de lo podereoso que es Bootstrap, ya que son muchos componentes que podemos utilizar en nuestros sitios web.

Si deseas seguir aprendiendo te invito a mi curso completo de Bootstrap: [Ir al curso aquí](https://goo.gl/PCDzNm)
