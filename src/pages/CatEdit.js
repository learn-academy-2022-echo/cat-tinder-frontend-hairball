import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import { useParams, useNavigate } from 'react-router-dom'

const CatEdit = ({ cats, updateCat }) => {
    
    const navigate = useNavigate()

    const { id } = useParams()
    let currentCat =  cats?.find(cat => cat.id === +id)

    const [ editCat, setEditCat ] = useState({
        name: currentCat.name,
        age: currentCat.age,
        enjoys: currentCat.enjoys,
        image: currentCat.image
    })

    const handleChangeCat = (e) => {
        setEditCat({ ...editCat, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = () => {
        updateCat(editCat, currentCat.id)
        console.log(editCat)
            alert("Cat profile has been updated!")
            navigate(`/catshow/${id}`)
    }
   
    return (
         <div className='container'>
            <h1 style={{textAlign:"center"}}>Edit {currentCat.name}</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Edit cat's name</Label>
                    <Input type="text" name="name" placeholder={currentCat.name} onChange={handleChangeCat} value={editCat.name}/>
                </FormGroup>
                <FormGroup>
                    <Label for="age">Edit cat's age</Label>
                    <Input type="number" name="age" placeholder={currentCat.age} onChange={handleChangeCat} value={editCat.age}/>
                </FormGroup>
                <FormGroup>
                    <Label for="enjoys">Edit interests</Label>
                    <Input type="text" name="enjoys" placeholder={currentCat.enjoys} onChange={handleChangeCat} value={editCat.enjoys} defaultValue={currentCat.enjoys}/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Image URL for cat</Label>
                    <Input type="url" name="image" placeholder={currentCat.image} onChange={handleChangeCat} value={editCat.image}/>
                </FormGroup>
                <Button onClick={handleSubmit} name="submit">
                Submit
                </Button>
            </Form>
        </div>
    )
}

export default CatEdit