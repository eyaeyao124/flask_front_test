import React,{ useState, useEffect } from 'react';
import FilterList from '../../../dummy/filter/filter.json';
import { useDispatch } from 'react-redux';
import { selectProductFilter } from '../../../_actions/product_filter_actions'

const Filter = () => {
    const dispatch = useDispatch();
    const [CheckList, setCheckList] = useState([])

    const checkHandler = (e) => {
        dispatch(selectProductFilter(e.target.value))
    }

    useEffect(() => {
        setCheckList(FilterList)
    }, [])

    return (
        <div>
            <form>
            {
                CheckList.map((item,index)=>{
                    return <label key={index}>{item.name}<input type="radio" name="filter" value={item.value} defaultChecked={item.default === true ? true : false} onChange={(e)=>checkHandler(e)}/></label>
                })
            }
            </form>
        </div>
    )
}

export default Filter