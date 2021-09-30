<h1>  Working with a Nucleo Development Board for CubeSat </h1>

<p> 
        <img src="https://live.staticflickr.com/762/22206338264_e79a1a9775.jpg" alt="SparkFun ESP8266 Thing - Dev Board" style="display: block;" width="500" height="500"
             position="relative"/> <sup>SparkFun ESP8266 Thing - Dev Board" by SparkFunElectronics</sup>  
        <br><br><br>
 
    I currently work on the Computing subsystem team for the Western University-Nunavut 
    Artic College CubeSat. Through this project we have designed and are going to build
    a miniture satellite. The satellite will be launched into LEO and take images. An 
    Onboard Computer (OBC) is the control system. The team developed flight softwate 
    that communicates with other subsystems in the satellite and coordinates the tasks
    that the CubeSat needs to complete. 
                                                                                                                      
    One of the tools I have recently used is a Nucleo F429ZI dev board and STM IDE to 
    test the functionality of our flight software. A dev board is good way to test a
    program that you create. It usually includes a microcontroller, an input/output
    port and some interfaces for passing data to/from the board. 
  
    Using the dev board we can test how the flight software interfaces with other 
    subsystems like the EPS on the cubesat as well as its sensors. We use the dev board 
    to send test data and see how flight software responds. To do this I configured 
    some of the interface protocols. Since I only had one board, I used the same board 
    to send and receive data. I connected the pins I setup as input to the pins I set up 
    as outputs and while running the flight software send some fake sensor readings. 

</p> 


