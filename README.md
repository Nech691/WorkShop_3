# WS3 Project - Pointillism Trees 
**Link => https://nech691.github.io/WorkShop_3/**

***

**Project**

>  I wanted to create a code that selects a random image every time you click the mouse, and once the mouse is no longer pressed, random circles fill the image selected in a *pointillism-inspired* manner.

1. *Collect a series of images.*
   - I collected ten images with trees in the centre and the sky as the background and saved them to a folder within the folder of my p5.js file.
   - I then cropped all images to a 600x600 (ish) square, trying to centre the trees as best as I could using the tools at my disposal
   - Finally, I loaded these images into my new p5.js file
2. *Make a p5.js sketch that generates a new collage each time is run*
   - I created an empty array called *"imgs"* and an empty array called *"circles"*
   - I also created variables for each of the images names, and the current image being used.
   - Then, I preloaded my images into the file using the *"function preload"*
   - I changed the pixel density so that it is compatible with different devices, and I changed the framerate to make circles appear faster on the image.
   - I then placed the images into the *"imgs"* array using the *".push"* function
   - Finally, using the mouse Pressed function, I made it so that each time the mouse is pressed, the current image is randomised using the *"imgs"* array, and set that image as the background.
3. *include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions*
   - In the *"function draw"* part, I created a nested loop to make it so that when the current image was being used, and the mouse is no longer pressed, then the code uses local variables to create circles.
      - i.e., *"if (currentImage) {if (!mouseIsPressed)} ...}"*
   - Then, I created a set of local variables that used data from the image itself to later be used in the circle. I also added a variable to get the information from these local variables to fill the circles later on.
   - I then created the circles, using the variables mentioned above, and a radius of 10, to give the impression of a pointillism art piece to the image.
   - Finally, in the *"mousePressed"* function, I cleared the *"circles"* array to reset the circles for the next random image when the mouse is pressed.

***

**Tasks**
- [x] Collect a series of images.
- [x] Make a p5.js sketch that generates a new collage each time is run
- [x] include manipulations of the images so that they change over time, using filters and/or other kinds of computational interventions

**Workshop Notes**

> **Working with Images**
>> ***[x] Load images into a p5.js file***
>> ***[x] How to manipulate images with code***
>> ***[x] How to make computational interventions at pixel levels***

---

**Loading images into a p5.js file**
1. Create a new folder on the explorer side of VSC to hold the images we will use in this project
   - *New folder -> Reference Images*
   - You can add files to this folder by dragging from your explorer directly to VSC or to the image folder inside the directory
2. Create a variable to store the desired image
   - *let img;*
3. Use a pre-load function to pre-load the image you desire with the canvas
   - ```javascript
     function preload() {
        img = loadImage('Reference Images/Apples.jpg');
     }
     ```
4. Inside the *"draw function"*, use the *"image function"*
   - ```javascript
     image(image, x, y, width, height)
     image(img, 0, 0)
     ```

**Resizing the Image**

1. You can resize your images in the *function set up* by adding
   - ```javascript
     img.resize(width, length);
     ```
   - When the values are 0 it will maintain the images proportions
2. The *"image function"* inside the *"draw function"* overrides the function in the *"function set up"*
   - The *image function* inside the *draw function* uses other parameters (where the *"img.resize"* uses width and height, the *"image function"* uses x, y, width and height, overwriting the first function)

**Centring the Image**

1. You can centre the image inside the *"function draw"* using the width and height of the *"image function"*
   - ```javascript
     image(img, width/2, height/2, 100, 100);
     ```
2. However, this will make it so that the top left corner of the image is centred, instead of the middle of the image.
3. To fix this, you need to make it so that the width and height parameters are referring to the centre of the image by adding the *"image mode function"* above the *"image function"*
   - ```javascript
     imageMode(CENTER);
     ```

**Manipulating Images on VSC**

1. **Using Filter functions**
   - You can add filters to your images by using the *"filter function"*
     - ```javascript
       filter();
       ```
   - Options include: THRESHOLD (uses a limit parameter), GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE, and BLUR
   - You can use the second parameter to adjust intensity of filter
2. **Using Tint Functions**
   - You can add the *"tint function"* just bellow the *"background loop"*
     - ```javascript
       tint();
       ```
   - This function takes RGB values and applies them as a tint to the canvas (e.g. 277, 50, 10; you can also add a 4th value for alpha)

**Arrays**

1. Arrays allow you to store multiple values
2. You can use arrays by creating a new variable and using *"[,]"* to hold the values (or other items) you want in the array and then calling a particular index of this array in a future function
3. The order of these items is important
   - Item number 1 will be 0
   - Item number 2 will be 1
   - Item number 3 will be 2, and so on
4. You can store numbers, text (string array), or images
   - To store images in arrays you first need to create an empty array, preload the images before the set up, and push the images into the array in the set up. Finally, you'd then call the index of the array in a future function
   - (?) How do you resize images that are stored in an array?
     - Initially, I tried using *"imgs.resize"* to resize the entire array at once. However, that did not work.
     - ChatGPT helped me out by explaining that I needed to resize each individual image inside the set up function, after pushing the images into the array (e.g. *"Apples.resize"*).

**Pixels & How to Manipulate Images at Pixel Levels**

1. Pixels are stored as an array
   - One pixel contains four values (Red, Green, Blue, Alpha)
   - An array of pixels, thus, has four values for each pixel.
   - Pixel 1's values go from 0-3, Pixel 2's values go from 4-7, and so on
2. On a 8x8 [48] pixels canvas, there are 192 elements in the array
   - 48 (pixels) x 4 (values) = 192
3. There is an equation to find an individual pixel
   - When converting a list into a canvas, such as:

      |0|4|8|12|16|20|24|28|
      |32|36|40|44|48|52|56|60|
      |64|68|72|76|80|84|88|92|
      |96|100|104|108|112|116|120|124|
      |128|137|136|140|144|148|*152*|156|
      |160|164|168|172|176|180|184|188|

     Or

     0|1|2|3|4|5|6|7|
     8|9|10|11|12|13|14|15|
     16|17|18|19|20|21|22|23|
     24|25|26|27|28|29|30|31|
     32|33|34|35|36|37|*38*|39|
     40|41|42|43|44|45|46|47|

4. In the second table, the 38th pixel in this array would be x = 6 and y = 4 (starting from 0) and the width is 8 (staring from 1 [add 8 to move between rows])
   - By using the equation *X + (Y x Width)* we can reach this number
     - 6 + (4 x 8) = 38
5. In the first table, the same pixel begins in the 152nd index of the pixel array
   - Adjusting the previous equation to consider the four values for each pixel, it changes it into *(X + (Y x Width)) x 4*
     - (6 + (4 x 8)) x 4 = 152

6. One consideration you must keep in mind is the different frame rates with which different devices work
   - To counteract this, we must add the following line of code to the set up function
     - ```javascript
       pixelDensity(1);
       ```
7. To access the pixels you must first load them inside the *"draw function"*
   - ```javascript
     loadPixels();
     ```
8. To manipulate the pixels, we will use a loop within a loop (nested loop)
   - Starting with *"Y"* at 0, as long as *"y"* is less than the height of the canvas, increase *"y"* by 1
     - ```javascript
       for (let y = 0; y < height; y ++) {}
       ```
   - We do the same for *x"* inside the *"{}"*
     - ```javascript
       for (let x = 0; x < width; x ++) {}
       ```
   - This makes it so that the *"y loop"* is completed, then the *"x loop"* is completed before the *"y loop"* reinitiates -- Looking at all pixels on the *"x"* level when *"y = 1"* before it moves to *"y = 2"*
9. At this point, we can use the equation we established before to manipulate the pixels
   - ```javascript
     let index = (x + y * width) * 4
     ```
10. Then, we can refer directly to the pixel array by adding *"pixels[index]" =* for the Red value of the pixel, *"pixels[index + 1]"* for the Green value, *"pixels[index + 2]"* for the Blue value, and *"pixels[index + 3]"* for the Alpha value
11. We can also randomise if the values for each colour by adding *"random()"* with the value for that colour after the *"pixels[index] ="* part

*Pixel Manipulation with Images I*

1. With the previous code set up loaded, we can add a **"preload function"** for the desired image
2. Then, add the image to the *"draw function"*
   - ```javascript
     image(img, 0, 0)
     ```
3. To manipulate the pixels on the image instead of on the canvas, you add *"img.loadPixels()"* and *"img.updatePixels"* (using the image variable name) instead of just *"loadPixels"* on the *"drawing function"*
   - We also need to add the *"img."* inside the nested loop we've created, before the *"pixels[index]"*, the *"height"* and the *"width"* parts

*Pixel Manipulation with Images II*

1. Another way you can manipulate the pixels of an image is to use pixel data to draw on the canvas
2. You can do this by:
   a. Setting up your variable
      - *"let bananas"*
   b. Preloading your image
      - *"function preload"*
   c. Setting up local variables inside the *"draw function"*
      - E.g., *"let x = random(bananas.width)"*
   d. Setting up a local variable to use the previous variables and converting them to whole numbers
      - *"let c = bananas.get(int(x), int(y))"*
   e. Creating a rectangle using the above variables
      - ```javascript
        fill(c);
        NoStroke();
        Rect(x, y, 20, 20)
        ```
