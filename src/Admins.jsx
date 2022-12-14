import './App.css'
import React, {useState, useEffect} from 'react'
import AdminService from './services/Admin'
import AdminAdd from './AdminAdd'

import { BsTrash } from "react-icons/bs"

const Admin = ({setIsPositive, setShowMessage, setMessage}) => {
    //State 
    const [users, setUsers] = useState([])
    const [lisäystila, setLisäystila] = useState(false)
    const [reload, reloadNow] = useState(false) //Käyttöliitymän päivitys


    // Haetaan asiakkaat
    useEffect(() => {
        const token = localStorage.getItem('token')
        AdminService
        .setToken(token)

        AdminService.getAll()
        .then(data => {
            setUsers(data)
        })
    }, [reload, lisäystila])


    // Käyttäjän poisto
    const deleteAdmin = (user) => {
        let vastaus = window.confirm(`Poistetaanko käyttäjä ${user.name}?`)
        if(vastaus === true){
            AdminService.remove(user.adminId)
            .then(res => {
                if(res.status === 200){
                    setMessage(`Käyttäjä ${user.name} on nyt poistettu.`)
                    setIsPositive(true)
                    setShowMessage(true)
                    //window.scrollBy(0, -10000) //Scrollataan ylös jotta nähdään alert viesti

                    setTimeout(() =>{
                        setShowMessage(false)
                    }, 5000)
                    reloadNow(!reload)
                }
            })
            .catch(error => {
                setMessage("Error")
                setIsPositive(false)
                setShowMessage(true)
                //window.scrollBy(0, -10000)

                setTimeout(() =>{
                    setShowMessage(false)
                }, 8000)
            })
        }
        // Jos haluat perua poiston
        else{
            setMessage('Käyttäjän poisto on keskeytetty!')
            setIsPositive(true)
            setShowMessage(true)
            //window.scrollBy(0, -10000)

            setTimeout(() =>{
                setShowMessage(false)
            }, 5000)
        }
    }

   
    return(
        <div className='adminTable'>
            <h2><nobr className="asiakVar">KÄYTTÄJÄT</nobr>
            {!lisäystila && <button className='addAdminBtn' onClick={() => setLisäystila(true)} >Lisää uusi</button>}
            {lisäystila && <AdminAdd setLisäystila={setLisäystila} setIsPositive={setIsPositive} setMessage={setMessage}
                setShowMessage={setShowMessage} reload={reload} reloadNow={reloadNow} />}
            </h2>

            {!lisäystila && <div className='adminList'>
            <table>
                <thead>
                    <tr>
                        <th>Käyttäjä ID</th>
                        <th>Käyttäjänimi</th>
                        <th>Sähköposti</th>
                        <th>Käyttäjätunnus</th>
                        <th>Access ID</th>
                    </tr>
                </thead>
                <tbody>
                    { users && users.map(u =>
                    <tr key={u.adminId} className="trAdmin">
                        <td>{u.adminId}</td>
                        <td>{u.name}</td>
                        <td>{u.email}</td>
                        <td>{u.userName}</td>
                        <td>{String(u.accessId)}</td>

                        <button className='adminDelete' onClick={() => deleteAdmin(u)} ><BsTrash/></button> 
                    </tr>
                    )}
                </tbody>
            </table>
            </div>}                     
        </div>
    )
}

export default Admin