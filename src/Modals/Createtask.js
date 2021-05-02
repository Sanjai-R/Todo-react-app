import React,{useState} from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Createtask({modal,toggle,save}) {
    const [taskName,setTaskName] = useState("");
    const [Description,setDescription] = useState("");
   
    const handleChange = (e) =>{
        
        const name  = e.target.name;
        const value = e.target.value;
        if(name === "taskName"){
            setTaskName(value)
        }
        else{
            setDescription(value)
        }
    }
    
    const handleSave = (e) => {
       
        let taskObj =  {}
        taskObj["Name"] = taskName
        taskObj["Description"] = Description
        save(taskObj)

    }
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form>
          <div className = "form-group">
                        <label>Task Name</label>
                        <input type="text"  className = "form-control"  onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control"  onChange = {handleChange} name = "description"></textarea>
                    </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Add Task</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        </div>
    )
}
