import React from 'react'
import {Card, CardGroup} from 'react-bootstrap'


const PopularCategories = () =>{
  return (
    
    <CardGroup className = 'PopularCategories'>

  <Card className = 'pic'>
    <Card.Img src="images/Popular_Cats_Shorts_4_590x.jpg"  />
    <Card.ImgOverlay>

      <Card.Text>
        SHORTS
      </Card.Text>
    </Card.ImgOverlay>
  </Card>

  <Card>
    <Card.Img src="images/Popular_Cats_Shorts_4_590x.jpg" />
    <Card.ImgOverlay>

      <Card.Text>
        SHOES
      </Card.Text>
    </Card.ImgOverlay>
  </Card>

  <Card>
    <Card.Img  src="images/Popular_Cats_Shorts_4_590x.jpg" />
    <Card.ImgOverlay>

      <Card.Text>
      SHIRTS
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
</CardGroup>
  )
}


export default PopularCategories
