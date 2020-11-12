# lightbox

A simple JavaScript class to generate images Lightbox

## Getting started
Just load CSS and JS files :
```html
<link rel="stylesheet" href="/path/to/lightbox.css">
<script src="/path/to/lightbox.js" defer></script>
```

Then, create a new instance of Lightbox class :
```javascript
    new window.Lightbox()
```

And add the class `.lighbox-link` to an HTML element as follow :
```html
<!-- In an image element -->
<img src="/path/to/image" class="lightbox--link" data-legend="Inspiration #1" alt="My image">

<!-- Or in a random HTML element -->
<buttom 
    class="lightbox--link" 
    data-src="/path/to/image" 
    data-legend="Inspiration #1"
>See my image in a lighbox !</buttom>
```
