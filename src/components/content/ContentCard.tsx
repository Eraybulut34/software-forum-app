import { Card } from "antd";
import React from "react";


function ContentCard(props: any) {
  const { title, description, image } = props;

  return (
   <Card 
    title={title}
    bordered={false}
    style={{ width: 300 }}
    >

    <p>{description}</p>
    
    </Card>
  );
}

export default ContentCard;