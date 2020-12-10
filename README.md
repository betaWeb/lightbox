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

## Configuration
You can pass a configuration object to the instance, as follow :
```javascript
new window.Lightbox({
    selector: '.lightbox--link',
    lightbox_class: 'lightbox',
    lightbox_inner_class: 'lightbox--inner',
    lightbox_legend_class: 'lightbox--legend',
    lightbox_visible_class: 'visible',
    image_loading_class: 'is-loading',
    prevent_scroll: true,
    prevent_scroll_class: 'prevent-scroll',
    prevent_scroll_element: document.body,
    inner_offset: 30, // gap between screen edge and the image (the ratio is dynamically calculated by the library)
    nav: true, // display nvigation arrows
    nav_prev_class: 'lightbox--prev',
    nav_next_class: 'lightbox--next',
    dots: true, // display nvigation dots
    nav_dots_class: 'lightbox--nav-dots',
    created: (groups: LightboxGroup) => {}, // Lightbox created event
    onShow: (item: LightboxItem) => {}, // Lightbox show event
    onHide: (item: LightboxItem) => {}, // Lightbox hide event
    onNav: (item: LightboxItem, direction: number) => {}, // Lightbox nav event (direction : -1 prev, 1 next)
    onAdd: (item: LightboxItem) => {}, // Lightbox add image event
    onRemove: (item: LightboxItem) => {}// Lightbox remove image event
})
```
