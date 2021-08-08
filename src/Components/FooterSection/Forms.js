import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import firebase from '../Database/Firebase'
function Forms() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile,setMobile] = useState("")
  const [text, setText] = useState("")
  
  function getFormdata(e)
  {
    
    e.preventDefault()
  }
  function getName(val) {
    setName(val.target.value)
  }
  function getEmail(val) {
    setEmail(val.target.value)
  }
  function getMobile(val) {
    setMobile(val.target.value)
  }
  function getText(val) {
    setText(val.target.value)
  }

  const createTable = () => {
    {const tableRef = firebase.database().ref("Table");
    const table = {
      name,
      email,
      mobile,
      text,
      complete: false,
    }
    tableRef.push(table);}
    msgConfirm();
   
  }
  const msgConfirm = () => {
    alert("Form Submitted")
    
  }

  const resetForm = () => {
    setText("");
    setName("");
    setMobile("");
    setEmail("");

  }

  return(
    <>
    <h2>Enquiry Form</h2>
    <Form onSubmit={getFormdata}>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Full Name" value={name} onChange={getName} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Id</Form.Label>
    <Form.Control type="email" placeholder="Enter Email Id" value={email} onChange={getEmail} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicMobile">
    <Form.Label>Contact No.</Form.Label>
    <Form.Control type="number" placeholder="Enter Contact No." value={mobile} onChange={getMobile}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicQuery">
    <Form.Label>Your Query</Form.Label>
    <Form.Control as="textarea" aria-label="With textarea" placeholder="Type here" value={text} onChange={getText} />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={createTable}>
    Submit
  </Button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Button variant="success" onClick={resetForm}>
    Reset
  </Button>
  
  
</Form>
    </>
  )
   
}

export default Forms;