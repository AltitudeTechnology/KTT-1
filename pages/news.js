import {Component} from 'react'
import Router from 'next/router'

import withLayout from '../components/withLayout'
import PageTitle from '../components/common/PageTitle/PageTitle'
import HeroSection from '../components/NewsPage/HeroSection/HeroSection'
import Body from '../components/NewsPage/Body'

const breadcrumbs = [
  {title: 'Home', link:'/'},
  {title: 'Ktt Television', active: true},
]
class NewsPage extends Component {
  render(){
    return (
      <div>
        <PageTitle breadcrumbs={breadcrumbs} isTelevisionPage>
          <HeroSection />
        </PageTitle>
        <Body />
      </div>
    )
  }
}

export default withLayout(NewsPage)
