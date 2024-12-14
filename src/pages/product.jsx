import { useEffect, useState } from "react";
import ProdTable from "../components/products/prod.table";
import { fetchALLProductAPI } from "../services/api.service";
import ProdFrom from "../components/products/prod.form";


const ProductPage = () => {
    const [dataProd, setDataProd] = useState([])
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(6);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        loadProd();
    }, [current, pageSize])
    
    const loadProd = async () => {
        const res = await fetchALLProductAPI(current, pageSize);
        if (res.data) {
            setDataProd(res.data.result);
    
            if (current !== res.data.meta.current) {
                setCurrent(res.data.meta.current);
            }
            if (pageSize !== res.data.meta.pageSize) {
                setPageSize(res.data.meta.pageSize);
            }
    
            setTotal(res.data.meta.total);
        }
        console.log("check data :" , res.data);
        
    };
    return (
        <div style={{ padding: "20px" }}>
            <ProdFrom loadProd={loadProd} />
            <ProdTable
            loadProd={loadProd}
            dataProd={dataProd}
            current={current}
            pageSize={pageSize}
            total={total}
            setCurrent={setCurrent}
            setPageSize={setPageSize}
            
            />
        </div>
    )
}
export default ProductPage;