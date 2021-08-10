import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react';
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();

  const [product, setProduct] = useState({});

  useEffect(()=>{
    let productService = new ProductService();
    productService.getByProductName(name).then(result=>setProduct(result.data.data))
  },[])


  return (
    <div>
      <Card.Group inverted>
        <Card  fluid color="red">
          <Card.Content>
            <Card.Header>{product.productName}</Card.Header>
            <Card.Description>
             <strong>{product?.quantityPerUnit}</strong>
            </Card.Description>
            <Card.Meta>{product?.category?.categoryName}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button  color="green">
                Approve
              </Button>
              <Button  color="blue">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
