import Head from 'next/head'
import Header from './common/Header/Header'
import BreakingNewsBar from './common/BreakingNewsBar/BreakingNewsBar'
import Footer from './common/Footer/Footer'
import Scripts from './common/Scripts/Scripts'

//import 'bootstrap/dist/css/bootstrap.css';
import '../static/css/styles.css';
//import '../static/html/css/style.css';

import withData from '../lib/withData'

const Layout = (props) => (
  <div>
    <Head>
      <meta name="format-detection" content="telephone=no"/>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta charSet="utf-8"/>
      <link rel="icon" href="wt_62309/images/favicon.ico" type="image/x-icon"/>
      {/*<!-- Stylesheets-->*/}
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Montserrat:400,700%7CLibre+Baskerville:300,400,400i,700,700i%7CLato:400,400i,700,900"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>
      {/*<link rel="stylesheet" href="/static/css/styles.css"/>*/}
      <link rel="stylesheet" href="/static/html/css/style.css"/>
    </Head>
    <div className="pagebody">
      <div className="page text-center">
        <Header />
        <hr/>
        <BreakingNewsBar />
        {props.children}
        <Footer />
      </div>
      <Scripts />
    </div>
  </div>
)

//export default Layout
export default withData(Layout);
