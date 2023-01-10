import Header from '../components/layout/header'
import Sidebar from '../components/layout/sidebar'
import Card from '../components/card'

const Index: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <div className='flex gap-4'>
        <div className='w-[20%]'>
          <Sidebar />
        </div>
        <div className='w-[80%]'>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <Card title="product" total={23} color="bg-gray-700" />
            <Card title="product" total={23} color="bg-green-700" />
            <Card title="product" total={23} color="bg-orange-700" />
            <Card title="product" total={23} color="bg-blue-700" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index