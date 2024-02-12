import TopStorySection from '../../components/our-story/section-1'
import SecondStorySection from '../../components/our-story/section-2'
import ThirdStorySection from '../../components/our-story/section-3'
import ContactUsLeads from '../../components/contactUsleads/contactUsLeads';

export default function OurStory() {
  return (
    <div className="our-story">
      <TopStorySection />
      {/* <ContactUsLeads /> */}
      <SecondStorySection />
      <ThirdStorySection />
    </div>
  )
}
