import { useParams } from "react-router-dom";
import { productList } from "../data/ProductList";

function Detail () {
    const {id} = useParams();
    const product = productList.find(item => item.id === Number(id));

    return(
        <>
            <div>{id} 페이지</div><br/>
          <b>
            <span>{product.title}</span><br/>
            <span>{product.content}</span><br/>
            <span>{product.price}원</span><br/><br/>
            </b>
        </>
    )
}

export default Detail;