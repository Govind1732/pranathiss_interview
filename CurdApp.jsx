import { useState } from 'react'
const CurdApp = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [data, setData] = useState({
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        gender: '',
        dob: '',
        phoneNo: '',
        address: '',
    })
    const [list, setList] = useState([])
    const inputHandler = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if (!data.firstName || !data.lastName || !data.email || !data.password || !data.gender || !data.dob || !data.phoneNo || !data.address) {
            alert(`All fields are required`)
            return;
        }
        if (data.id) {
            const updatedItem = list.map(item => {
                return (item.id === data.id ? data : item)
            })
            setList(updatedItem)
        }
        else {
            let newData = {
                ...data,
                id: new Date().getTime().toString()
            }
            setList([...list, newData])
        }
        setData({
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            gender: '',
            dob: '',
            phoneNo: '',
            address: '',
        })
        setIsEditing(false)
    }
    const editHandler = (id) => {
        setIsEditing(true)
        const selectedItem = list.find(item => {
            return item.id === id
        })
        setData(selectedItem)
    }
    const deleteHandler = (id) => {
        let filteredData = list.filter((item) => {
            return item.id !== id
        })
        setList(filteredData)
    }

    return (
        <>
            <div style={{ textAlign: 'left', marginLeft: '50px', marginTop: '2rem' }}>
                <form onSubmit={submitHandler}>
                    <label>First Name: <input type="text" name="firstName" value={data.firstName} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>Last Name: <input type="text" name="lastName" value={data.lastName} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>EMail: <input type="email" name="email" value={data.email} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>Password: <input type="password" name="password" value={data.password} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>Gender: <select name='gender' value={data.gender} onChange={inputHandler}>
                        <option value="">Select</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='others'>Others</option>
                    </select>
                    </label><br></br>
                    <label>Date of Birth: <input type="date" name="dob" value={data.dob} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>Phone Number: <input type="tel" pattern="[7-9]{1}[0-9]{9}" name="phoneNo" value={data.phoneNo} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    <label>Address: <input type="address" name="address" value={data.address} onChange={(e) => inputHandler(e)}></input></label><br></br>
                    {isEditing ? <input type='submit' value='Edit'></input> : <input type='submit' value='Submit'></input>}
                </form>
            </div>

            <ul>
                {
                    list.map((item) => {
                        return (
                            <li key={item.id}><span>{item.firstName}</span>{' '}<button onClick={() => editHandler(item.id)}>Edit</button>{' '}<button onClick={() => deleteHandler(item.id)}>Delete</button></li>
                        )
                    })

                }
            </ul>

        </>
    )
}
export default CurdApp