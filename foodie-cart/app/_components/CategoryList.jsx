"use client";
import React, {useEffect, useState} from 'react'
import GlobalApi from '../_utils/GlobalApi'
import Image from 'next/image';

function CategoryList() {
    // const [categoryList, setCategoryList] = useState([]);
    // useEffect(() => {
    //     getCategoryList();
    //   }, [])
    //   const getCategoryList = () => {
    //     GlobalApi.GetCategory().then(resp => {
    //         console.log("category list initially", categoryList);
    //         console.log("data fetched ",resp.categories);
    //         setCategoryList(resp.categories);
    //       console.log("Category list after fetching",categoryList);
    //     })
    //   }
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getCategoryList();
    }, []);

    useEffect(() => {
        console.log('Category list updated: ', categoryList);
    }, [categoryList])

    const getCategoryList = () => {
        GlobalApi.GetCategory()
            .then((resp) => {
                console.log('Data fetched from API:', resp.categories);
                setCategoryList(resp.categories)
            })
            .catch((error) => {
                console.error('Failed to fetch categories')
            })
    }
  return (
    <div>
      <div>
        {categoryList && categoryList.map((category, index) => {
            <div key={index}>
                {/* <Image src={category.icon.url} alt={category.name} width={40} height={40}/>
                 */}
                 <Image src={category.icon.url}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default CategoryList
