![Image of Example](https://i.imgur.com/HYQ3MwL.png)

# Using Instant Photo Frame

## Installation

### Using npm:

```
npm install -s instantphotoframe
```

### In your react component:

```
import { Polaroid } from 'instantphotoframe'
```

## Options

### Images

You can add an image by importing it via JS or using a url.
Example:

```
...
import Image from './images/blahblah.png'
...
<Polaroid imgurl={Image} />
...

```

or

```
...
<Polaroid imgurl="stockimage.com/thestockimage">
...

```

### Frame Size

You can change the size of the frame!
Ranging from a scale of 1 - 10 (1 being the smallest and 10 being the biggest).\
Example:

```
...
<Polaroid size="5" />
...
```

### Image Size

Your image might not fit into the frame! Therefore, you can resize the image inside of the frame.
The scaling works by multiples. For example, having 2 as your input would give you 2x the size.\
Example:

```
...
<Polaroid imgurl={Image} photoScale="1.3"/>
...
```

Alternatively, you can scale via X axis and Y axis also.\
Example:

```
...
<Polaroid imgurl={Image} photoScaleX="1.3" photoScaleX="1.8"/>
...
```

### Image Position

You can reposition the image inside the frame!
The following example would move your image 3px to the left and up.\
Example:

```
...
<Polaroid imgurl={Image} position="3"/>
...
```

Alternatively you can reposition using x and y axis also.\
Example:

```
...
<Polaroid imgurl={Image} positionTop="1.3" positionLeft="1.8"/>
...
```

# Goals for Instant Photo Frame

- [50%] Polaroid Film
- [ ] Fuji Instax Square Film
- [ ] Fuji Instax Wide Film
- [ ] Fuji Instax Mini Film
- [75%] Documentation

## Strech Goals

- [ ] Multiple frames for each film type.
- [ ] Multiple colors for each film type.

# Progress

- [x] Starting with polaroid film.
  - [x] Polaroid frame
  - [x] Ability to add image
  - [x] Polaroid film styling.
- [x] Install React and React-Dom.
- [x] Install Storybook for viewing component while developing.
- [x] Bundle using webpack.
- [x] First npm deployment.
- [ ] Polaroid Back-side
