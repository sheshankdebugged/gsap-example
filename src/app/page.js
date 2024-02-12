import BannerSection from '../components/home/banner'
import ModrenDays from '../components/home/modren-days'
import Testimonials from '../components/home/testimonials'
import JoinUs from '../components/home/explorer'
import ClientSliderWrapper from '../components/home/clientSliderWrapper'

export default function Home() {
  return (
    <div className='home' >
      <BannerSection />
      <ModrenDays />
      <ClientSliderWrapper />
      <Testimonials />
      <JoinUs />
    </div>
  )
}
