import {Grid, Row, Col, Breadcrumb} from 'react-bootstrap'

export default props => (
  <Grid>
    <Row style={{paddingTop: '30px', paddingBottom: '30px'}}>
      <Col md={11}>
        <Row className="Header">
          <Breadcrumb style={{maxHeight: '40px'}}>
            {props.breadcrumbs.map((item)=>(
              <Breadcrumb.Item active={item.active} link={item.link}>{item.title}</Breadcrumb.Item>
            ))}
          </Breadcrumb>
            {(props.isTelevisionPage) ?
            (
              <div style={{
                marginTop: '30px',
                width: '70%'
              }}>
                <h1 style={{fontSize: '40px',color: '#12806B', textAlign: 'center', fontWeight: '500'}}>KTT Television</h1>
              </div>
            ) : (
              <div style={{
                marginTop: '30px'
              }}>
                <h1 style={{fontSize: '30px',color: '#12806B'}}>{props.title || 'Kabiru Tanimu Turaki - KTT'}</h1>
                <h6 style={{marginTop: '0', color: 'grey'}}>
                  {props.slogan || 'ktt slogan ktt Slogan ktt slogan ktt slogan ktt slogan ktt slogan ktt slogan ktt slogan'}
                </h6>
                <h6 style={{textAlign: 'right'}}>
                  {props.yearQuote || "- KTT '19"}
                </h6>
              </div>
            )}
        </Row>
      </Col>
      <Col md={1} className="you-first-poster-img">

      </Col>
    </Row>
    {props.isTelevisionPage && (
      <Row style={{paddingTop: '30px', paddingBottom: '30px', paddingLeft: '15px', paddingRight: '15px'}}>
        {props.children}
      </Row>
    )}
  </Grid>
)
