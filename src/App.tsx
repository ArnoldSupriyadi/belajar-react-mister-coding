import Button from './components/buttons/Button'
import './App.css'
import Avatar from './components/avatar/Avatar'
import Input from './components/input/Input'
import Profile from './components/features/Profile'

function App() {

  return (
    <>
        {/*<Avatar url="https://picsum.photos/200/300" label='Gambar 1' size='lg'/>
        <Avatar url="https://picsum.photos/200/400" label='Gambar 2' size='sm'/>
        <Button label='button 1'/> <br />
        <Button label='button 2' variant='secondary'/>
        <br />
        <Input placeholder='Masukan User name' onChange={(e)=>
          console.log('username',e.target.value)
        }/>
        <Input placeholder='Password' type='password' onChange={(e)=>
          console.log('password',e.target.value)
        }/>
        <Input placeholder='Masukan Nomor HP' type='number' onChange={(e)=>
          console.log('nomor hp',e.target.value)
        }/>   */}
      <br />
      <Profile></Profile>
    </>
  )
}

export default App
