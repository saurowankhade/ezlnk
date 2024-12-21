import Footer from '../Footer/Footer'
import Inputs from '../Inputs/Inputs'
import Generate from '../LinkGenerate/Generate'
import Nav from '../Nav/Nav'
import Information from './Information'

const Home = () => {
  return (
    <div>
      <Nav />
      <Information />
      <Inputs />
      <Generate/>
      <Footer />
    </div>
  )
}

export default Home
