import './Detail.css';
import { useParams } from "react-router-dom";
import { productList } from "../data/ProductList";

function Detail () {
    const {id} = useParams();
    const product = productList.find(item => item.id === Number(id));

    if(!product) {
        return <div>존재하지 않는 상품입니다.</div>
    }

    return(
        <>
        
            <div className="detail-page">
                <div className="detail-image">
                    <img src={product.image} alt="상품이미지"></img>
                </div>
                <div className="detail-info">
                    <b><h2>{product.title}</h2></b>
                    <p>{product.content}</p>
                    <p>{product.price}원</p>
                    <button onClick={() => {
                        
                    }}>장바구니에 추가</button>
                </div>
            </div>
        </>
    )
}

export default Detail;