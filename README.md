# WebDevWorkshop1
Topics: Basic understanding of HTML, CSS, and JavaScript


## HTML:

What is HTML?


HTML is a markup language used in developing web pages.


The building blocks of HTML web pages are called "elements", which are represented by tags.


### Syntax of a tag:


    < element > ....content.... < /element >


All HTML documents must start with a document type declaration: < !DOCTYPE html >.


The HTML document itself begins with < html  > and ends with < /html >.


Metadata about the page (like the title, attached files, scripts etc.) are stored between < head > and < /head >


The visible part of the HTML document is between < body > and < /body >.


### Common elements:


     <p>: Paragraphs


     <h1> - <h6>: Headings


     <a>: Links


     <img>: Images


     <button>: Button


     <ul>/<ol>: Unordered/Ordered lists
     
     
     <li>: List elements


     <div>: Division in a web page
     
     
     <br>: Break line in content



### HTML Attributes


- All HTML elements can have attributes
- Attributes provide additional information about elements
- Attributes are always specified in the start tag
- Attributes usually come in name/value pairs like: name="value"


**Examples:**

    <a href="https://www.w3schools.com">Visit W3Schools</a>
    
    <img src="img_girl.jpg" width="500" height="600">


### HTML Example:

    
    <!DOCTYPE html>
        <html>
            <head>
            <title>My Page Title</title>
            </head>
            <body>

            <h1>My First Heading</h1>

            <p>My first paragraph.</p>

            </body>
        </html>
        

#### Save this code as a .html file and open in your web browser to view the created page.**



## CSS:


What is CSS?


CSS (Cascading Style Sheets) is used to define styles for a web page and its elements, such as:
- color
- font
- size of text
- spacing between elements
- positioning
- background colors
- background images
- and much more!


### Form of a general form of a CSS style sheet:


     p{
          color: red;
          font-family: Times New Roman;
          font-weight: bold
        }
      


### Color

The CSS *color:* property defines the text color to be used.

Colors can be specified using:
- hex values
    - #FFA500
-  rgb values
    - rgb(225, 165, 0)
-  Color name
    - Orange

There are 140 different color names that are suppored by modern web browsers.

You can view them all here: https://www.w3schools.com/cssref/css_colors.asp


### Font

The CSS *font-family* property defines the font to be used.

The CSS *font-size* property defines the text size to be used.

There are 5 main font-families

1. **Serif fonts** have a small stroke at the edges of each letter. They create a sense of formality and elegance.
2. **Sans-serif fonts** have clean lines (no small strokes attached). They create a modern and minimalistic look.
3. **Monospace fonts** - here all the letters have the same fixed width. They create a mechanical look. 
4. **Cursive fonts** imitate human handwriting.
5. **Fantasy fonts** are decorative/playful fonts.

#### Examples
    <!DOCTYPE html>
    <html>
        <head>
            <style>
                .p1 {
                  font-family: "Times New Roman", Times, serif;
                }

                .p2 {
                  font-family: Arial, Helvetica, sans-serif;
                }

                .p3 {
                  font-family: "Lucida Console", "Courier New", monospace;
                }
            </style>
        </head>
        <body>
            <h1>CSS font-family</h1>
            <p class="p1">This is a paragraph, shown in the Times New Roman font.</p>
            <p class="p2">This is a paragraph, shown in the Arial font.</p>
            <p class="p3">This is a paragraph, shown in the Lucida Console font.</p>
        </body>
    </html>

      
 ![image](https://user-images.githubusercontent.com/56050513/138965761-ba81f409-0a4a-4d16-ab81-debff9c70b22.png)



### Three Ways to include CSS into your web page:


**Inline**

use the style attribute inside HTML elements
    
    <h1 style="color:blue;">A Blue Heading</h1>
    <p style="color:red;">A red paragraph.</p>


![image](https://user-images.githubusercontent.com/56050513/138948582-bc08b96d-0642-4c09-9d58-84099315ac56.png)



**Internal style sheet**

use the <style> element in the <head> section
    
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {background-color: blanchedAlmond;}
            h1   {color: green;}
            p    {color: chocolate;}
        </style>
    </head>
        <body>

            <h1>This is a heading</h1>
            <p>This is a paragraph.</p>

        </body>
    </html>
    

![image](https://user-images.githubusercontent.com/56050513/138949193-d5e9f633-56f3-4220-aeac-906f909f9030.png)


    
**External style sheet**
   
use the <link> element to link to an external CSS file
    
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>

styles.css : 
    
    body {
      background-color: powderblue;
    }
    h1 {
      color: blue;
    }
    p {
      color: red;
    }

![image](https://user-images.githubusercontent.com/56050513/138948786-cd092a4a-4287-4650-a078-cd801892f280.png)

        
## JavaScript:


Where HTML and CSS are more for designing a web page, JavaScript is used for adding functionality to it.


Can be used when certain events take place on your web page or you want some event to occur. 


### Can be placed in three places:


    In the < body > section of an HTML file


    In the < head > section of an HTML file


    An external JavaScript document 
     
         
 Example of JavaScript function:
 
    <script>
        function myFunction() {
            alert('Hello World');
        }
    </script>
    
    

##

For more information on these topics, check out this link:


https://www.w3schools.com/
