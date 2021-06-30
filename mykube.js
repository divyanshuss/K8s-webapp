function kube() {
	

 
  var i = document.getElementById("input").value
  var stat = "0"
  var final = ""
  if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("create")) || (i.includes("generate")) || (i.includes("build")))) {
    var image = prompt("Enter the name of image: ")
	var deployment_name = prompt("Enter the name of Deployment: ")
	var stat = "1"
	var final = stat + " " + image + " " + deployment_name 
	}

  else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("create")) || (i.includes("generate")) || (i.includes("build")))) {
	var image = prompt("Enter the name of image: ")
	var pod_name = prompt("Enter the name of pod: ")
	var stat = "2"
	var final = stat + " " + image + " " + pod_name
	
	}

  else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("detach")))) {
	var pod_name = prompt("Enter the name of pod: ")
	var stat = "3"
	var final = stat + " " + pod_name
	
	}

  else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("detach")))) {
	var deployment_name = prompt("Enter the name of Deployment: ")
	var stat = "4"
	var final = stat + " " + deployment_name
	}

  else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("expose"))  || (i.includes("display")))) {
	var deployment_name = prompt("Enter the name of Deployment: ")
	var port_no = prompt("Enter the port number where you want to export your deployment: ")
	var expose_type = prompt(" 1. ClusterIP \n 2.ExternalNames \n 3.LoadBalancer 4.NodePort \n Enter the type which you want to export ")
	var stat = "5"
	var final = stat + " " + deployment_name + " " + port_no + " " + expose_type
	}

  else if (((i.includes("deployments")) || (i.includes("deploy")) || (i.includes("deployment"))) && ((i.includes("scale")) || (i.includes("increase")) || (i.includes("decrease")) || (i.includes("scale up")) || (i.includes("scale down")))) {
	var deployment_name = prompt("Enter the name of Deployment: ")
	var replica = prompt("Enter number of replicas: ")
	var stat = "6"
	var final = stat + " " + deployment_name + " " + replica
	}

  else if (((i.includes("pods")) || (i.includes("pod"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
	var stat = "7"
	var final = stat 
	
	}

  else if (((i.includes("deployments"))|| (i.includes("deployment")) || (i.includes("deploy"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
	var stat = "8"
	var final = stat 
	
	}
  else if (((i.includes("service")) || (i.includes("services")) || (i.includes("svc"))) && ((i.includes("show")) || (i.includes("get")) || (i.includes("list")))) {
	var stat = "9"
	var final = stat
	
	}

  else if (((i.includes("all")) || (i.includes("everything"))) && ((i.includes("delete")) || (i.includes("remove")) || (i.includes("destroy")))) {
	var stat = "10"
	var final = stat 
	}

  else {
	var stat = "11"
	var final = stat 
	}

	
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost/cgi-bin/mykube.py?k= " + final, "true")
  xhr.send();
  
  xhr.onload = function ()
	{
	document.getElementById('out3').innerHTML = xhr.responseText; 
        }
	
  
}
