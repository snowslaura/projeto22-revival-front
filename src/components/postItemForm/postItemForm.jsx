import { useState } from "react"
import { Hearts } from "react-loader-spinner"
import axios from "axios"
import { PostItem, Input, Button, Label, Select } from "./style"

export function PostItemForm(){

    const [isLoading, setIsLoading] = useState(false)
    const [itemData, setItemData] = useState({})

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const {userId,token} = unserializedData

    
    function postItem(event){
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData()
        formData.append('priceRangeId',itemData.priceRangeId)
        formData.append('categoryId',itemData.categoryId)
        formData.append('file', itemData.image)

        const config = {
            headers: {
                "Content-Type":"multipart/form-data",
                Authorization: `Bearer ${token}`
            }
        }
        console.log(itemData);
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/items`, formData, config)
        promise.then(()=>{
            setIsLoading(false)
        })
        promise.catch((e)=>{
            console.error(e)
            setIsLoading(false)
        })
    }

    return(
        <PostItem onSubmit={postItem} id="post_item" encType="multipart/form-data">
            <Label>Selecione uma foto bem legal</Label>
            <Input type="file" accept="image/*" name="file" required disabled={isLoading} onChange={(e)=> setItemData({...itemData, image: e.target.files[0]})} ></Input>
            <Label>Escolha a categoria que seu item melhor se encaixa</Label>
            <Select form="post_item" name="category" id="category" onChange={(e)=> setItemData({...itemData, categoryId: parseInt(e.target.value)})} required disabled={isLoading}>
                <option  value="1" id="1">Eletrônicos</option>
                <option  value="2" id="2">Utensílios Domésticos</option>
                <option  value="3" id="3">Acessórios e Beleza</option>
                <option  value="4" id="4">Vestuários e calçados</option>
                <option  value="5" id="5">Mobiliário</option>
            </Select>
            <Label>Escolha a faixa de valor do seu item</Label>
            <Select form="post_item" name="priceRange" id="priceRange" onChange={(e)=> setItemData({...itemData, priceRangeId: parseInt(e.target.value)})} required disabled={isLoading}>
                <option value="1" id="1">R$0-R$50,00</option>
                <option value="2" id="2">R$51,00-R$100,00</option>
                <option value="3" id="3">R$101,00-R$200,00</option>
                <option value="4" id="4">R$201,00-R$400,00</option>
                <option value="5" id="5">R$401,00-R$800,00</option>
                <option value="6" id="6">R$801,00-R$1000,00</option>
                <option value="7" id="7">R$1001,00-R$2000,00</option>
            </Select>
            <Button disabled={isLoading}>{isLoading?<Hearts color="#FFF" height={50} width={50} />:`Postar item`}</Button>
        </PostItem>
    )
}