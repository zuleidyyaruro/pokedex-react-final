import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className='container-home '>
          <div className='overlay'>
              <div className='text-center'>
                <h1 className='fw-bold fs-1'>WELCOME TO POKEDEX</h1>
                <Link className='btn btn-danger btn-lg' to='/login'>Go To Login</Link>
              </div>
          </div>
        </div>
    )
}

export default HomePage
