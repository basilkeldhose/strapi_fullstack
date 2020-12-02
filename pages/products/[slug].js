
import Head from 'next/head'
import { fromImageToUrl,API_URL } from '../../utils/urls'
import {twoDecimals} from '../../utils/format'
import BuyButton from '../../Components/BuyButton'

const Product = ({product}) => {
    return (
        <div>
            <Head> 
                {product.meta_title &&
                    <title>{product.meta_title}</title>
                    }
                    {product.meta_description &&
                        <meta name="description" content={product.meta_description} />
                    }
            </Head>
            <h2>
                {product.name}
            </h2>
            <img src={fromImageToUrl(product.image)} />
            <p>RS:{twoDecimals(product.price)} <BuyButton product={product}/></p>
                <h3>{product.name}</h3>
            <p>
                {product.content}
            </p>
        </div>
    )
}

export default Product;

export async function getStaticProps ({params:{slug}}){
    const product_res =await fetch(`${API_URL}/products/?slug=${slug}`)
    const found =await product_res.json()
    return {
        props: {
            product:found[0] // Because the API response for filters is an array
        }
    }
}

export async function getStaticPaths(){
    //retrive all possible paths
    const product_res = await fetch(`${API_URL}/products/`)
    const products =await product_res.json();
    //Return then to NextJs context
    return {
        paths : products.map(product =>({
            params: {slug:String(product.slug)}
        })),
        fallback : false // tells to next js to show 404 if the params 
        
    }
} 