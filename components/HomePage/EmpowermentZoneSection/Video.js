import Head from 'next/head'
import {Component} from 'react'
import ModalVideo from 'react-modal-video'

class video extends Component{
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div>
        <Head>
          <link rel="stylesheet" href="/static/css/modal-video.css"/>
        </Head>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='L61p2uyiMSo' onClose={() => this.setState({isOpen: false})} />
        <div className="post-body">
          <h4 className="text-bold"><a onClick={this.openModal}>Play video</a></h4>
          <ul className="list-inline list-inline-md">
            <li><span className="icon mdi mdi-calendar text-middle"></span>
              <time datetime="2017-04-30" className="text-middle">Feburary, 14</time>
            </li>
            <li><span className="icon mdi mdi-map-marker text-middle"></span><span className="text-middle">Nigeria</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default video
