#!/usr/bin/python3

import cgi
import subprocess as sp

print("content-type: text/html")
print()

mydata = cgi.FieldStorage()
data= mydata.getvalue("k")

var = data.split()
if var[0] == "1":
    depname = var[2]
    image_name = var[1]
    cmd = "kubectl create deployment " + (depname) + " --image=" + (image_name)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig admin.conf")
    print(output)
elif var[0] == "2":
    pod = var[2]
    image_name = var[1]
    cmd = "kubectl run " + (pod) + " --image=" + (image_name)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig admin.conf")
    print(output)
elif var[0] == "3":
    pod = var[1]
    cmd = "kubectl delete pod " + (pod_name)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig admin.conf")
    print(output)
elif var[0] == "4":
    depname = var[1]
    cmd = "kubectl delete deployment " + (depname)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig admin.conf")
    print(output)
elif var[0] == "5":
    depname = var[1]
    port = var[2]
    Expose =  var[3]
    cmd = "kubectl expose deployment " + (depname) + " --port=" + (port) + " --type=" + (Expose)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig admin.conf")
    print(output)
elif var[0] == "6":
    depname = var[1]
    replica = var[2]
    cmd = "kubectl scale deployment " + (depname) + " --replicas=" + (replica)
    output = sp.getoutput("sudo " + cmd + " --kubeconfig  admin.conf")
    print(output)
elif var[0] == "7":
    cmd = "sudo kubectl get pods --kubeconfig admin.conf"
    output = sp.getoutput(cmd)
    print(output)
elif var[0] == "8":
    cmd = "kubectl get deployments --kubeconfig admin.conf"
    output = sp.getoutput("sudo " + cmd)
    print(output)
elif var[0] == "9":
    cmd = "kubectl get svc --kubeconfig admin.conf"
    output = sp.getoutput(cmd)
    print(output)
elif var[0] == "10":
    cmd = "kubectl delete all --all --kubeconfig admin.conf"
    output = sp.getoutput("sudo " + cmd)
    print(output)
elif var[0] == "11":
    print("Hey . Give it another try")
