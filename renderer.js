const { SerialPort } = require('serialport')
// const Readline = require('@serialport/parser-readline')

var log = "";
var port1;
function stop1() {
  // console.log(comPort)
  var comPort = "COM" + document.getElementById("ports").value;
  var boundRate = parseInt(document.getElementById("boundRate").value);
  

  var status = document.getElementById("listenBtn1");
  console.log(status.textContent);
  if (status.textContent == "open") {
    status.textContent = "close";
    port1 = new SerialPort({ path: comPort, baudRate: boundRate })


    // const parser = new Readline();
    // port.pipe(parser);
  
    port1.on('data', line => {
      console.log(`> ${line}`);
      console.log(document.getElementById("logs").textContent);
      log += line + "</br>";
      document.getElementById("logs").innerHTML = log;
    });
  
    port1.on('error', function (err) {
      log += err.message + "</br>";
      document.getElementById("logs").innerHTML = log;
    });
  

    //burada portu değiştirmek gerek
  } else {
    status.textContent = "open";
    
    port1.close(function (err) {
      console.log('port closed', err);
      if(err){
        log+=err.message+"</br>"
      }
      else{
        log += comPort+ "port is closed</br>";
      }
      document.getElementById("logs").innerHTML = log;
    });

    //burada portu kapatmak gerek
  }
}
var port2;
function stop2() {
  // console.log(comPort)
  var comPort = "COM" + document.getElementById("ports2").value;
  var boundRate = parseInt(document.getElementById("boundRate2").value);
  

  var status = document.getElementById("listenBtn2");
  console.log(status.textContent);
  if (status.textContent == "open") {
    status.textContent = "close";
    port2 = new SerialPort({ path: comPort, baudRate: boundRate })


    // const parser = new Readline();
    // port.pipe(parser);
  
    port2.on('data', line => {
      console.log(`> ${line}`);
      console.log(document.getElementById("logs").textContent);
      console.log('ddddd')
      log += line + "</br>";
      document.getElementById("logs").innerHTML = log;
    });
  
    port2.on('error', function (err) {
      log += err.message + "</br>";
      console.log('sddfsd')
      document.getElementById("logs").innerHTML = log;
    });
  

    //burada portu değiştirmek gerek
  } else {
    status.textContent = "open";
    console.log('this is close')
    port2.close(function (err) {
      if(err){
        log+=err.message+"</br>"
      }
      else{
        log += comPort+ "port is closed</br>";
      }
      // console.log('port closed', err);
      
      document.getElementById("logs").innerHTML = log;
    });

    //burada portu kapatmak gerek
  }
}

function clearLog() {
  document.getElementById('logs').innerHTML = '';
  log=''
}
