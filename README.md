# jQuery optimage

jQuery optimage is a plugin to handle responsive images in a smart way.
My approach is that you first load your smallest images you want to show. Then check how big it can grow, and load with javascript a more suitable image if necessary.

## Setup

I've now created 3 different image sizes:

* small (max width 400px)
* medium (max width 800px)
* large (max width whatever you want :)

My folder structure is based on the RoR Paperclip way:

```
images
|
|- 1
   |
   |- small
        |
        |- img.jpg
   |
   |- medium
        |
        |- img.jpg
   |
   |- large
        |
        |- img.jpg
```

## Example use

```javascript
$("img").optimage();
```