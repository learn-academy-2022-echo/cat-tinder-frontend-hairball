import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'

const CatEdit = ({ cats, updateCat }) => {
    
    const navigate = useNavigate()

    const { id } = useParams()
    let currentCat =  cats?.find(cat => cat.id === +id)

    const [ editCat, setEditCat ] = useState({
        name: "",
        age: "",
        enjoys: "",
        image: ""
    })
    const handleChangeCat = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        console.log(editCat)
        alert("Cat profile has been updated!")
        navigate('/catindex')
    }
   
    return (
         <div className='container'>
            <h1 style={{textAlign:"center"}}>Edit Cat</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Enter cat's name</Label>
                    <Input type="text" name="name" placeholder="Enter text here" onChange={handleChangeCat} value={editCat.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Enter cat's age</Label>
                    <Input type="number" name="age" placeholder="Enter text here" onChange={handleChangeCat} value={editCat.age}/>
                </FormGroup>
                <FormGroup>
                    <Label for="enjoys">Enter quirky interests</Label>
                    <Input type="text" name="enjoys" placeholder="Enter text here" onChange={handleChangeCat} value={editCat.enjoys}/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL for your cat</Label>
                    <Input type="url" name="image" placeholder="Enter URL here" onChange={handleChangeCat} value={editCat.image}/>
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default CatEdit