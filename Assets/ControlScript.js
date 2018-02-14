#pragma strict

//using UnityEngine;
//using System.Collections;

var forwardSpeed: float= 3;
var turnSpeed: float= 2;

//Rigidbody rb;
//private Rigidbody myRigidbody;

function Start () 
{
	//rb = GetComponent<Rigid1body>();
	//this.myRigidbody = this.GetComponent<Rigidbody>();
}

function Update () 
{
	var forwardMoveAmount= Input.GetAxis("Vertical") * forwardSpeed;

	var turnAmount= Input.GetAxis("Horizontal") * turnSpeed;

	transform.Rotate(0, turnAmount, 0); //rotate the vehicle

	//this.myRigidbody.AddRelativeForce(-forwardMoveAmount, 0, 0); //push the vehicle forward with a force
}
