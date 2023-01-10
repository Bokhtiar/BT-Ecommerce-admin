import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'

const Index:React.FC = ():JSX.Element => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
          <div className='w-[20%]'>
            <Sidebar></Sidebar>
          </div>
          <div className='w-[80%]'>
            content
          </div>
      </div>
    </div>
  )
}

export default Index