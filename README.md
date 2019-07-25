# D3P2

D3P2 is an editor for VR scenes on browser. It is a tool for inexperienced users. It's also been user tested.
Tester compilted NASA TLX and SUS.


## Installation

It's thought to be used on browser (that means to run in a server) but it has to be edit to run in a server.
To be used in your pc, you just have to install php and configure Apache Tomcat so you can use php.
You also need to add your polygoogle API Key in the file *polymodelsAPI.js* in method *addToScene*.
Then open the index.php file in your browser and you can use

## Usage

### Insert an Object in the Scene

In the right search bar, is been searched "home" by default. You have 2 choice:
1. search another word in the search bar then drag the image of the model you want in the scene;
2. Drag directly one of the models aviable in the scene.
Depending on your internect connection, after a while, the model will appear in the scene.

###Edit an Object in the scene

1. Using the left bar;
2. Usign [A-Frame Intersect and Manipulate](https://github.com/Frac7/intersect-and-manipulate).

If you want to use Intersect and Manipulate without leap motion, you just need to click the object
you want to edit after selecting  the right transform on the top bar. Then just drag the widget in the right direction
to transform the object.

### Edit Lights in the Scene

Four Lights in the scene,one of every type.
To use a Light you've to press the red sphere in the scene LightsOnOff.
Then you will see four spheres in the scene. Those are the 4 lights.
Press one light and turn the wheel until the desired result.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

